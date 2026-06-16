const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf-8');

// The issue in products is the type definition block might be duplicated
// We'll extract only the first Interface Product definition and discard any trailing duplicate properties.

let inProduct = false;
let lines = code.split('\n');
let newLines = [];
let foundPrice = false;
let foundImages = false;

for (let i=0; i<lines.length; i++) {
  let line = lines[i];
  if (line.includes('export interface Product {')) {
    inProduct = true;
    foundPrice = false;
    foundImages = false;
  }

  if (inProduct) {
    if (line.includes('price?: number')) {
      if (foundPrice) continue;
      foundPrice = true;
    }
    if (line.includes('images?: string[]')) {
      if (foundImages) continue;
      foundImages = true;
    }
    if (line.includes('}')) {
      inProduct = false;
    }
  }

  newLines.push(line);
}

fs.writeFileSync('src/data/products.ts', newLines.join('\n'), 'utf-8');
