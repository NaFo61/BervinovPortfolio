#!/usr/bin/env python3
"""Simplify gateway: academy subdomain = plain proxy, no redirects."""
from pathlib import Path

GATEWAY = Path("/etc/nginx/sites-available/gateway.conf")

ACADEMY_PROXY = """    location / {
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
    }"""

PORTFOLIO_PROXY = """    location / {
        proxy_pass http://bervinov_portfolio;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }"""

text = GATEWAY.read_text()

# Strip all academy redirect blocks from main/default servers
redirect_blocks = [
    """    location = /academy {
        return 301 https://academy.bervinov-miron.ru/academy/;
    }

    location /academy/ {
        return 301 https://academy.bervinov-miron.ru$request_uri;
    }

""",
]

for block in redirect_blocks:
    text = text.replace(block, "")

# Replace academy subdomain server block entirely
import re

academy_server = f"""
server {{
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

{ACADEMY_PROXY}
}}
""".strip()

text = re.sub(
    r"server \{\n    listen 443 ssl;\n    listen \[::\]:443 ssl http2;\n    server_name academy\.bervinov-miron\.ru;.*?\n\}",
    academy_server,
    text,
    count=1,
    flags=re.DOTALL,
)

GATEWAY.write_text(text)
print("gateway.conf simplified (no redirects)")
