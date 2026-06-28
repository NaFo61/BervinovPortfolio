import json
import sqlite3
from contextlib import contextmanager
from pathlib import Path
from typing import Any

from .config import settings

SCHEMA = """
CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    site TEXT NOT NULL,
    form_type TEXT NOT NULL,
    payload TEXT NOT NULL,
    ip TEXT,
    user_agent TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_leads_site ON leads(site);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
"""


def init_db() -> None:
    path = Path(settings.database_path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with connect() as conn:
        conn.executescript(SCHEMA)
        conn.commit()


@contextmanager
def connect():
    conn = sqlite3.connect(settings.database_path, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()


def insert_lead(
    *,
    site: str,
    form_type: str,
    payload: dict[str, Any],
    ip: str | None,
    user_agent: str | None,
) -> int:
    with connect() as conn:
        cur = conn.execute(
            """
            INSERT INTO leads (site, form_type, payload, ip, user_agent)
            VALUES (?, ?, ?, ?, ?)
            """,
            (site, form_type, json.dumps(payload, ensure_ascii=False), ip, user_agent),
        )
        conn.commit()
        return int(cur.lastrowid)


def list_leads(*, site: str | None = None, limit: int = 100) -> list[dict[str, Any]]:
    query = "SELECT * FROM leads"
    params: list[Any] = []
    if site:
        query += " WHERE site = ?"
        params.append(site)
    query += " ORDER BY id DESC LIMIT ?"
    params.append(limit)

    with connect() as conn:
        rows = conn.execute(query, params).fetchall()

    result: list[dict[str, Any]] = []
    for row in rows:
        item = dict(row)
        item["payload"] = json.loads(item["payload"])
        result.append(item)
    return result
