#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Building armor-gym..."

# Build the project
bun run build

echo "Build complete."
