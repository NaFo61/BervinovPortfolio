# Деплой Bervinov Showcase на сервер

Showcase — **портфолио + 5 демо-сайтов + API заявок (SQLite)**.  
Bervinov Academy деплоится **отдельно** из своего репозитория.

---

## Что лежит на сервере

Только папка `/opt/bervinov_showcase/`:

```
/opt/bervinov_showcase/
├── docker-compose.yml    ← из deploy/docker-compose.yml
├── .env                  ← из deploy/.env.example (заполнить!)
├── restart.sh
├── full-restart.sh
└── nginx-snippet.conf    ← справка для host nginx (не обязательно хранить)
```

**Исходников и Git на сервере нет** — только compose, env и скрипты.

---

## Первичная установка

### 1. DNS

| Запись | Тип | Значение |
|--------|-----|----------|
| `@` | A | IP сервера |
| `*` | A | IP сервера |

### 2. SSL (certbot)

```bash
certbot --nginx \
  -d bervinov-miron.ru \
  -d www.bervinov-miron.ru \
  -d severny-kofe.bervinov-miron.ru \
  -d vkus-ogon.bervinov-miron.ru \
  -d denta-lux.bervinov-miron.ru \
  -d fitzone.bervinov-miron.ru \
  -d lingua-pro.bervinov-miron.ru \
  -d academy.bervinov-miron.ru
```

### 3. Скопировать файлы на сервер

```bash
ssh root@YOUR_SERVER 'mkdir -p /opt/bervinov_showcase'

scp deploy/docker-compose.yml root@YOUR_SERVER:/opt/bervinov_showcase/
scp deploy/.env.example root@YOUR_SERVER:/opt/bervinov_showcase/.env
scp deploy/restart.sh deploy/full-restart.sh root@YOUR_SERVER:/opt/bervinov_showcase/
ssh root@YOUR_SERVER 'chmod +x /opt/bervinov_showcase/*.sh'
```

### 4. Заполнить `.env`

```bash
ssh root@YOUR_SERVER 'nano /opt/bervinov_showcase/.env'
```

Обязательно смените `ADMIN_API_KEY` на длинную случайную строку.

### 5. Host nginx

Добавьте в gateway (см. `nginx-snippet.conf`):

- Showcase-поддомены → `proxy_pass http://127.0.0.1:18000`
- `academy.bervinov-miron.ru` → `127.0.0.1:18080` (Academy, отдельный compose)

```bash
nginx -t && systemctl reload nginx
```

### 6. Запуск

```bash
ssh root@YOUR_SERVER '/opt/bervinov_showcase/restart.sh'
```

---

## Обновление после CI

GitHub Actions пушит образы в Docker Hub. На сервере:

```bash
/opt/bervinov_showcase/restart.sh
```

---

## Просмотр заявок (SQLite)

Заявки с форм портфолио, брони ресторана, записи к врачу и т.д.:

```bash
curl -s -H "X-Api-Key: YOUR_ADMIN_API_KEY" \
  "http://127.0.0.1:18000/api/leads" | jq
```

Фильтр по сайту:

```bash
curl -s -H "X-Api-Key: YOUR_ADMIN_API_KEY" \
  "http://127.0.0.1:18000/api/leads?site=portfolio" | jq
```

---

## Порты

| Сервис | Порт на localhost | Назначение |
|--------|-------------------|------------|
| Showcase web | `18000` | nginx + статика + прокси `/api/` |
| Showcase api | только внутри docker | FastAPI + SQLite |
| Academy | `18080` | отдельный проект |

---

## GitHub Secrets (CI)

| Secret | Описание |
|--------|----------|
| `DOCKERHUB_USERNAME` | логин Docker Hub |
| `DOCKERHUB_TOKEN` | access token |
| `SSH_HOST` | IP сервера (опционально, для auto-deploy) |
| `SSH_PRIVATE_KEY` | ключ для root@server (опционально) |

---

## Локальная разработка

```powershell
# Windows
.\scripts\build-sites.ps1
docker compose up --build
```

Открыть: http://127.0.0.1:18000 (портфолио через Host: bervinov-miron.ru — см. hosts файл для поддоменов).
