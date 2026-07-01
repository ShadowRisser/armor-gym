#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Starting armor-gym production server..."

# Run dev server with minification
bun run dev &
PID=$!
echo $PID > .zscripts/prod.pid

# Wait a bit for the server to be ready
sleep 3

echo "Server started (PID: $PID)"

echo "Server is running. Access it at http://localhost:3000"

# Wait for the process to exit
wait $PID
