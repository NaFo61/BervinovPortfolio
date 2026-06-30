#!/usr/bin/env python3
"""Update Academy .env for academy.bervinov-miron.ru subdomain."""
from pathlib import Path

env_path = Path("/opt/bervinov_academy/.env")
lines = env_path.read_text().splitlines()
out = []
updates = {
    "ALLOWED_HOSTS": "bervinov-miron.ru,www.bervinov-miron.ru,academy.bervinov-miron.ru,161.104.46.236,localhost,127.0.0.1",
    "CSRF_TRUSTED_ORIGINS": "https://bervinov-miron.ru,https://www.bervinov-miron.ru,https://academy.bervinov-miron.ru,https://161.104.46.236",
    "CORS_ALLOWED_ORIGINS": "https://bervinov-miron.ru,https://www.bervinov-miron.ru,https://academy.bervinov-miron.ru,https://161.104.46.236",
    "FRONTEND_URL": "https://academy.bervinov-miron.ru/academy",
}

seen = set()
for line in lines:
    key = line.split("=", 1)[0] if "=" in line else None
    if key in updates:
        out.append(f"{key}={updates[key]}")
        seen.add(key)
    else:
        out.append(line)

for key, val in updates.items():
    if key not in seen:
        out.append(f"{key}={val}")

env_path.write_text("\n".join(out) + "\n")
print(".env updated")
