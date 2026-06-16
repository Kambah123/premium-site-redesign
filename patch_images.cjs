const fs = require('fs');
const file = 'src/data/products.ts';
let code = fs.readFileSync(file, 'utf-8');

// The previous script added `images: [],` or `images: ['/images/products/placeholder.webp'],`
// We should update it so that if a product has an `image:` field, we set `images: [image]`

code = code.replace(/image: '([^']+)',\n    relatedIds: \[([^\]]*)\],\n    price: ([0-9.]+),\n    images: \[([^\]]*)\],/g, (match, image, related, price, images) => {
    return `image: '${image}',\n    relatedIds: [${related}],\n    price: ${price},\n    images: ['${image}'],`;
});

// For products without an image explicitly set (or where regex didn't match), let's ensure it has at least a placeholder or the same as image if present
code = code.replace(/    images: \[\],/g, "    images: ['/images/products/placeholder.webp'],");

fs.writeFileSync(file, code, 'utf-8');
