#!/bin/bash

# This duplicates all blog posts to the root of the angular app, so they can be accessed via url.com/post-id in addition to the longer path (url.com/blog/post-id)

set -euo pipefail

src_dir="./dist/blog/posts"
dest_dir="./dist"
directories=()

# Check conflicts
for dir in "$src_dir"/*/; do
    dir_name=$(basename "$dir")
    if [ -d "$dest_dir/$dir_name" ]; then
        echo "Error: Dir '$dir_name' already exists in dest. Preventing data unintended overrides"
        exit 1
    fi
    directories+=("$dir")
done

# Copy
for dir in "${directories[@]}"; do
    dir_name=$(basename "$dir")
    cp -r "$dir" "$dest_dir"
done

echo "Done."