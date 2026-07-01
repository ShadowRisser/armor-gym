#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Starting armor-gym dev server..."

# Kill any existing node/bun dev server on port 3000
lsof -ti:3000 2>/dev/null | xargs -r kill -9 2>/dev/null || true

export NODE_ENV=development

bun run dev &
PID=$!
echo $PID > .zscripts/dev.pid
wait $PID
