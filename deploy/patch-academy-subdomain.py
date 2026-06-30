#!/usr/bin/env python3
"""Host nginx: academy.bervinov-miron.ru → bervinov_academy upstream."""
from pathlib import Path

GATEWAY = Path("/etc/nginx/sites-available/gateway.conf")

ACADEMY_SERVER = """
server {
    listen 443 ssl;
    listen [::]:443 ssl http2;
    server_name academy.bervinov-miron.ru;

    ssl_certificate /etc/letsencrypt/live/bervinov-miron.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bervinov-miron.ru/privkey.pem;

    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    client_max_body_size 25m;

    location = / {
        return 301 https://$host/academy/;
    }

    location /academy/ {
        proxy_pass http://bervinov_academy;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 86400;
        proxy_buffering off;
    }

    location / {
        return 301 https://$host/academy$request_uri;
    }
}
""".strip()

PORTFOLIO_SUBDOMAINS_SERVER = """
server {
    listen 443 ssl;
    listen [::]:443 ssl http2;
    server_name www.bervinov-miron.ru severny-kofe.bervinov-miron.ru vkus-ogon.bervinov-miron.ru denta-lux.bervinov-miron.ru fitzone.bervinov-miron.ru lingua-pro.bervinov-miron.ru;

    ssl_certificate /etc/letsencrypt/live/bervinov-miron.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bervinov-miron.ru/privkey.pem;

    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    client_max_body_size 25m;

    location / {
        proxy_pass http://bervinov_portfolio;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
""".strip()

MAIN_DOMAIN_ACADEMY_REDIRECT = """    location = /academy {
        return 301 https://academy.bervinov-miron.ru/academy/;
    }

    location /academy/ {
        return 301 https://academy.bervinov-miron.ru$request_uri;
    }

"""

text = GATEWAY.read_text()

# Remove old combined subdomain server block (certbot block with academy in server_name)
import re

text = re.sub(
    r"\nserver \{\n    listen 443 ssl ;\n    listen \[::\]:443 ssl http2 ;\n    server_name denta-lux\.bervinov-miron\.ru.*?^\}",
    "",
    text,
    count=1,
    flags=re.MULTILINE | re.DOTALL,
)

# Remove academy from any remaining combined server_name lines
text = text.replace(
    "server_name denta-lux.bervinov-miron.ru vkus-ogon.bervinov-miron.ru fitzone.bervinov-miron.ru severny-kofe.bervinov-miron.ru academy.bervinov-miron.ru www.bervinov-miron.ru lingua-pro.bervinov-miron.ru",
    "server_name www.bervinov-miron.ru severny-kofe.bervinov-miron.ru vkus-ogon.bervinov-miron.ru denta-lux.bervinov-miron.ru fitzone.bervinov-miron.ru lingua-pro.bervinov-miron.ru",
)

if "server_name academy.bervinov-miron.ru" not in text:
    text = text.rstrip() + "\n\n" + ACADEMY_SERVER + "\n\n" + PORTFOLIO_SUBDOMAINS_SERVER + "\n"

# Main domain: redirect /academy → subdomain (replace proxy blocks)
old_academy_proxy = """    # --- Bervinov Academy (/academy) ---
    location = /academy {
        return 301 /academy/;
    }

    location /academy/ {
        proxy_pass http://bervinov_academy;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 86400;
        proxy_buffering off;
    }

"""

if old_academy_proxy in text:
    text = text.replace(old_academy_proxy, MAIN_DOMAIN_ACADEMY_REDIRECT, 1)

# Second occurrence in bervinov-miron.ru block
if old_academy_proxy in text:
    text = text.replace(old_academy_proxy, MAIN_DOMAIN_ACADEMY_REDIRECT, 1)

GATEWAY.write_text(text)
print("gateway.conf patched")
