#!/usr/bin/env python3
"""Patch host nginx gateway to proxy portfolio on bervinov-miron.ru."""
from pathlib import Path

path = Path("/etc/nginx/sites-available/gateway.conf")
text = path.read_text()

if "upstream bervinov_portfolio" not in text:
    needle = "upstream bervinov_academy {\n    server 127.0.0.1:18080;\n    keepalive 16;\n}"
    replacement = needle + """

upstream bervinov_portfolio {
    server 127.0.0.1:18000;
    keepalive 16;
}"""
    if needle in text:
        text = text.replace(needle, replacement, 1)
    else:
        raise SystemExit("Could not find bervinov_academy upstream block")

old_block = """    location = / {
        default_type text/html;
        return 200 '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Server</title></head><body style="font-family:system-ui;max-width:40rem;margin:4rem auto;padding:0 1rem"><h1>Projects</h1><ul><li><a href="/academy/">Bervinov Academy</a></li></ul></body></html>';
    }

    location / {
        return 404;
    }"""

new_block = """    location / {
        proxy_pass http://bervinov_portfolio;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }"""

count = text.count(old_block)
if count:
    text = text.replace(old_block, new_block)
    print(f"Replaced {count} location block(s)")
elif "proxy_pass http://bervinov_portfolio" in text:
    print("Portfolio proxy already configured")
else:
    raise SystemExit("Could not find placeholder location block")

path.write_text(text)
print("gateway.conf updated")
