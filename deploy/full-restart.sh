#!/usr/bin/env bash
# Полный сброс showcase: удаление volume с заявками (SQLite).
# Запуск: /opt/bervinov_showcase/full-restart.sh
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_success() { echo -e "${GREEN}✓ $1${NC}"; }
print_error() { echo -e "${RED}✗ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠ $1${NC}"; }

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$APP_DIR"

if ! command -v docker >/dev/null 2>&1; then
  print_error "Docker не найден."
  exit 1
fi

print_warning "Будут удалены все сохранённые заявки (volume leads_data)!"
read -r -p "Продолжить? [y/N] " ans
if [[ "${ans:-}" != "y" && "${ans:-}" != "Y" ]]; then
  echo "Отменено."
  exit 0
fi

echo "Останавливаем стек..."
docker compose down -v --remove-orphans

echo "Загружаем образы..."
docker compose pull

echo "Запускаем..."
docker compose up -d --remove-orphans

for i in 1 2 3 4 5 6 7 8 9 10; do
  if curl -fsS "http://127.0.0.1:18000/health" >/dev/null; then
    print_success "Showcase поднят с чистой БД"
    docker compose ps
    exit 0
  fi
  sleep 5
done

print_error "Health check не прошёл"
docker compose logs --tail=50
exit 1
