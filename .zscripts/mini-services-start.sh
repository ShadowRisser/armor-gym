#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Starting mini-services..."

# Kill any existing mini-services
for pidfile in .zscripts/*.pid; do
  if [ -f "$pidfile" ]; then
    kill $(cat "$pidfile") 2>/dev/null || true
    rm "$pidfile"
  fi
done

# Start each mini-service
for svc in services/*/; do
  if [ -f "$svc/package.json" ]; then
    svc_name=$(basename "$svc")
    echo "Starting $svc_name..."
    (cd "$svc" && bun run dev > "../../.zscripts/$svc_name.log" 2>&1) &
    echo $! > ".zscripts/$svc_name.pid"
  fi
done

echo "All mini-services started."
