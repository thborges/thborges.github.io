#!/bin/bash

# Check if year is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <year>"
    exit 1
fi

year="$1"
src_base="/Users/thborges/projects/ufj/analytia/curso"

# Find all .csv files under any 'tables' subdirectory
find $src_base -type f -path "*/tables/*.csv" | while read -r src_file; do
    # Extract relative path after 'curso/'
    rel_path="${src_file#*$src_base/}"
    # Remove '/tables' from the path
    rel_path="${rel_path//\/tables/}"

    # Add year as first folder
    dest_path="./$year/$rel_path"
    dest_dir=$(dirname "$dest_path")

    # Create destination directory if it doesn't exist
    mkdir -p "$dest_dir"

    # Copy the file
    cp -v "$src_file" "$dest_path"
done

