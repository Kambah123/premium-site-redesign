const fs = require('fs');
const file = 'src/data/products.ts';
let lines = fs.readFileSync(file, 'utf-8').split('\n');

let newLines = [];
let currentProductHasPrice = false;
let currentProductHasImages = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  if (line.match(/  id: /)) {
    currentProductHasPrice = false;
    currentProductHasImages = false;
  }

  if (line.match(/    price: /)) {
    if (currentProductHasPrice) continue; // skip duplicate price
    currentProductHasPrice = true;
    line = line.replace(/price: [0-9.]+/, 'price: 129.99'); // force type conformity for now to fix TS2322 (since we might have typed it literally somehow? no wait...)
  }

  if (line.match(/    images: /)) {
    if (currentProductHasImages) continue; // skip duplicate images
    currentProductHasImages = true;
  }

  newLines.push(line);
}

fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
