#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Building mini-services..."

# Build each mini-service
for svc in services/*/; do
  if [ -f "$svc/package.json" ]; then
    echo "Building $svc..."
    (cd "$svc" && bun run build)
  fi
done

echo "Mini-services build complete."
