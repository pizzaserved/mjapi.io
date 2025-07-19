#!/bin/bash

# This script:
# 1. Copies blog assets to the Angular build output
# 2. Duplicates blog posts to the root for shorter URLs (url.com/post-id)

set -euo pipefail

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m'
log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }

# Blog posts duplication to root for shorter URLs
# (Angular handles blog assets via assets config)
# src_dir="./dist/blog/posts"
src_dir="./dist/blog"  # assuming the path was simplified in _config.yml to exclude the "posts" segment
dest_dir="./dist"

# Jekyll generated dirs
exclude_list=("about" "archives" "assets" "categories" "norobots" "posts" "tags")

log_info "Copying blog posts to root for shorter URLs:"
for dir in "$src_dir"/*/; do
    dir_name=$(basename "$dir")
    should_exclude=0

    for item in "${exclude_list[@]}"; do
        if [[ "$item" == "$dir_name" ]]; then
            should_exclude=1
            break
        fi
    done

    if [[ $should_exclude != 1 ]]; then
        if [ -d "$dest_dir/$dir_name" ]; then
            echo "Error: Dir '$dir_name' already exists in dest. Preventing data unintended overrides"
            exit 1
        fi

        # Create directory and copy contents, but preserve root index.html
        mkdir -p "$dest_dir/$dir_name"
        cp -r "$dir"/* "$dest_dir/$dir_name/"
        log_info "- Copied $dir_name to root"
    fi

done

log_info "Blog setup completed successfully!"