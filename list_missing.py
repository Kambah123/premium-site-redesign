import re

with open('src/data/products.ts', 'r') as f:
    content = f.read()

# Extract product blocks
blocks = re.split(r'id: ', content)[1:]

missing = []
for block in blocks:
    if 'image:' not in block:
        # Extract name
        name_match = re.search(r"name:\s*['\"]([^'\"]+)['\"]", block)
        if name_match:
            missing.append(name_match.group(1))

print("Missing images for:")
for m in missing:
    print("- " + m)
