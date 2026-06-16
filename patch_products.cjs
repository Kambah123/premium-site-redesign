const fs = require('fs');

const file = 'src/data/products.ts';
let code = fs.readFileSync(file, 'utf-8');

// Generate random realistic prices for peptides (between 80 and 350)
// and set the images array to include the main image.

function getRandomPrice() {
  const prices = [89.99, 129.99, 149.99, 179.99, 199.99, 249.99, 299.99, 349.99];
  return prices[Math.floor(Math.random() * prices.length)];
}

const lines = code.split('\n');
const newLines = [];
let insideProduct = false;
let currentImage = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.match(/  id: /)) {
    insideProduct = true;
    currentImage = '';
  }

  newLines.push(line);

  if (line.match(/  image: /)) {
    currentImage = line.split("'")[1];
  }

  if (insideProduct && line.match(/  relatedIds: /)) {
    // We are at the end of the product object, add price and images before the relatedIds or just after it
    // Wait, relatedIds comes last in most products but let's just add it after relatedIds
  }
}

// Actually, better to use regex to replace each block
code = code.replace(/  relatedIds: \['([^']*)'(.*)\],?/g, (match) => {
  const price = getRandomPrice();
  return `${match}\n    price: ${price},\n    images: ['/images/products/placeholder.webp'],`;
});

// Fix any missing prices using a second pass for blocks that don't match the first regex exactly.
code = code.replace(/  relatedIds: \[([^\]]*)\],/g, (match) => {
  if (match.includes("price:")) return match;
  const price = getRandomPrice();
  return `${match}\n    price: ${price},\n    images: [],`;
});

fs.writeFileSync(file, code, 'utf-8');
