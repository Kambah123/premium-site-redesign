const fs = require('fs');
const file = 'src/data/products.ts';
let code = fs.readFileSync(file, 'utf-8');

// I duplicated fields during my regex patches. Let's clean it up.
// Find the interface Product definition.

code = code.replace(/  price\?: number;\n  images\?: string\[\];\n  image\?: string;\n  price\?: number;\n  images\?: string\[\];\n/, '  image?: string;\n  price?: number;\n  images?: string[];\n');
code = code.replace(/  image\?: string;\n  images\?: string\[\];\n  price\?: number;\n  images\?: string\[\];\n  price\?: number;\n/, '  image?: string;\n  price?: number;\n  images?: string[];\n');

// the actual error is:
// src/data/products.ts(38,5): error TS2300: Duplicate identifier 'price'.
// Let's just fix the interface
let lines = code.split('\n');
let newLines = [];
let inInterface = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes('export interface Product {')) {
    inInterface = true;
  }

  if (inInterface) {
    if (line.includes('price?: number;') && newLines.some(l => l.includes('price?: number;'))) continue;
    if (line.includes('images?: string[];') && newLines.some(l => l.includes('images?: string[];'))) continue;
    if (line.includes('}')) {
      inInterface = false;
    }
  }

  newLines.push(line);
}

fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
