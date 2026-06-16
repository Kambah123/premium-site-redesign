const fs = require('fs');
const file = 'src/data/products.ts';
let code = fs.readFileSync(file, 'utf-8');

// I made a mess with images array duplicating and having multiple price properties
// Let's completely strip out existing price and images and add them back cleanly

code = code.replace(/\n    price: [0-9.]+,\n    images: \[[^\]]*\],/g, "");
code = code.replace(/\n    price: [0-9.]+,/g, "");
code = code.replace(/\n    images: \[[^\]]*\],/g, "");
code = code.replace(/\n    image: '[^']+',/g, (match) => { return match; });

function getRandomPrice() {
  const prices = [89.99, 129.99, 149.99, 179.99, 199.99, 249.99, 299.99, 349.99];
  return prices[Math.floor(Math.random() * prices.length)];
}

const lines = code.split('\n');
const newLines = [];
let currentImage = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.match(/  id: /)) {
    currentImage = '/images/products/placeholder.webp'; // default
  }

  const matchImage = line.match(/    image: '([^']+)'/);
  if (matchImage) {
    currentImage = matchImage[1];
  }

  newLines.push(line);

  if (line.match(/  relatedIds: /)) {
    const price = getRandomPrice();
    newLines.push(`    price: ${price},`);
    newLines.push(`    images: ['${currentImage}', '${currentImage}'],`);
  }
}

fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
