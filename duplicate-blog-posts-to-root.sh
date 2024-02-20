#!/bin/bash

# This duplicates all blog posts to the root of the angular app, so they can be accessed via url.com/post-id in addition to the longer path (url.com/blog/post-id)

set -euo pipefail

# src_dir="./dist/blog/posts"
src_dir="./dist/blog"  # assuming the path was simplified in _config.yml to exclude the "posts" segment
dest_dir="./dist"

# Jekyll generated dirs
exclude_list=("about" "archives" "assets" "categories" "norobots" "posts" "tags")

echo "Copying to root:"
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

        echo "- $dir_name"
        cp -r "$dir" "$dest_dir/"
    fi

done

echo "Done."