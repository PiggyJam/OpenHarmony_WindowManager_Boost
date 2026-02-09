#!/bin/bash

# Build MkDocs documentation site
# Usage: ./scripts/build-docs.sh [serve]

set -e

echo "🔨 Building MkDocs site..."

# Check if required files exist
if [ ! -f "mkdocs.yml" ]; then
    echo "❌ Error: mkdocs.yml not found in current directory"
    exit 1
fi

# Install dependencies if needed
if ! command -v mkdocs &> /dev/null; then
    echo "📦 Installing MkDocs and dependencies..."
    pip install -r requirements.txt
fi

# Build the site
if [ "$1" = "serve" ]; then
    echo "🚀 Starting development server..."
    echo "📖 Site will be available at http://127.0.0.1:8000"
    mkdocs serve --dev-addr=127.0.0.1:8000
else
    mkdocs build
    echo "✅ Site built successfully in ./site/"
    echo "📖 To serve locally, run: mkdocs serve"
fi
