#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")/.."

echo "Installing mini-services dependencies..."

for svc in services/*/; do
  if [ -f "$svc/package.json" ]; then
    echo "Installing $svc..."
    (cd "$svc" && bun install)
  fi
done

echo "Mini-services installation complete."
