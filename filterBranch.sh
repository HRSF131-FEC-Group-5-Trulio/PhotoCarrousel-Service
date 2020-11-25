git filter-branch --force --index-filter \
  "git rm -r --cached --ignore-unmatch ./data" \
  --prune-empty --tag-name-filter cat -- --all
