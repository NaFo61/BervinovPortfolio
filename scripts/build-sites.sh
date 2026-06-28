#!/usr/bin/env bash
# Собирает dist/sites/ для Docker-образа web.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist/sites"
DOMAIN="${DOMAIN:-bervinov-miron.ru}"

echo "==> Build showcase sites (domain: $DOMAIN)"
rm -rf "$DIST"
mkdir -p "$DIST"

# --- Portfolio ---
PORT="$DIST/portfolio"
mkdir -p "$PORT/assets" "$PORT/tokens"
cp -r "$ROOT/ui_kits/portfolio/"* "$PORT/"
cp "$ROOT/styles.css" "$ROOT/_ds_bundle.js" "$PORT/"
cp -r "$ROOT/tokens/"* "$PORT/tokens/"
mkdir -p "$PORT/js"
cp "$ROOT/shared/js/leads-api.js" "$PORT/js/"
sed "s/{{DOMAIN}}/$DOMAIN/g" "$ROOT/shared/js/showcase-config.template.js" > "$PORT/js/showcase-config.js"

# Fix paths in portfolio index.html
sed -i.bak \
  -e 's|href="../../styles.css"|href="./styles.css"|g' \
  -e 's|src="../../_ds_bundle.js"|src="./_ds_bundle.js"|g' \
  "$PORT/index.html"
rm -f "$PORT/index.html.bak"

inject_scripts() {
  local dir="$1"
  if grep -q 'showcase-config.js' "$dir/index.html" 2>/dev/null; then
    return
  fi
  for html in "$dir"/*.html; do
    [ -f "$html" ] || continue
    if ! grep -q 'leads-api.js' "$html"; then
      sed -i.bak 's|</body>|  <script src="js/showcase-config.js"></script>\n  <script src="js/leads-api.js"></script>\n</body>|' "$html"
      rm -f "${html}.bak"
    fi
  done
}

inject_scripts "$PORT"
# Portfolio index may not have js/ path on all pages - fix portfolio index specifically
if ! grep -q 'showcase-config.js' "$PORT/index.html"; then
  sed -i.bak 's|</body>|  <script src="js/showcase-config.js"></script>\n  <script src="js/leads-api.js"></script>\n</body>|' "$PORT/index.html"
  rm -f "$PORT/index.html.bak"
fi

# --- Demo projects (без bervinov-academy) ---
for slug in severny-kofe vkus-ogon denta-lux fitzone lingua-pro; do
  src="$ROOT/projects/$slug"
  dst="$DIST/$slug"
  cp -r "$src" "$dst"
  mkdir -p "$dst/js"
  cp "$ROOT/shared/js/leads-api.js" "$dst/js/"
  sed "s/{{DOMAIN}}/$DOMAIN/g" "$ROOT/shared/js/showcase-config.template.js" > "$dst/js/showcase-config.js"
  for html in "$dst"/*.html; do
    [ -f "$html" ] || continue
    if ! grep -q 'leads-api.js' "$html"; then
      sed -i.bak 's|</body>|  <script src="js/showcase-config.js"></script>\n  <script src="js/leads-api.js"></script>\n</body>|' "$html"
      rm -f "${html}.bak"
    fi
  done
  echo "    $slug"
done

echo "==> Done: $DIST"
