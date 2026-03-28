#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
VAULT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)/vault"
QUARTZ_CONTENT="$(cd "$SCRIPT_DIR/.." && pwd)/content"

if [ ! -d "$VAULT_DIR" ]; then
  echo "ERROR: Vault directory not found at $VAULT_DIR"
  exit 1
fi

echo "Syncing vault -> quartz content..."
echo "  Source: $VAULT_DIR"
echo "  Target: $QUARTZ_CONTENT"

find "$QUARTZ_CONTENT" -mindepth 1 -delete

find "$VAULT_DIR" -mindepth 1 \
  \( \
    -name ".obsidian" -o \
    -name ".git" -o \
    -name ".trash" -o \
    -name "90_Templates" -o \
    -name "private" -o \
    -name "copilot" \
  \) -prune -o -print | while read -r src; do
    rel="${src#$VAULT_DIR/}"
    dst="$QUARTZ_CONTENT/$rel"
    if [ -d "$src" ]; then
      mkdir -p "$dst"
    else
      cp "$src" "$dst"
    fi
  done

echo "Sync complete."
