const fs = require('fs');
const file = 'src/data/products.ts';
let lines = fs.readFileSync(file, 'utf-8').split('\n');

let newLines = [];
let currentImage = null;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  if (line.match(/  id: /)) {
    currentImage = null;
  }

  let matchImage = line.match(/    image: '([^']+)'/);
  if (matchImage) {
    currentImage = matchImage[1];
  }

  if (line.includes('images: [')) {
    if (currentImage) {
      line = `    images: ['${currentImage}', '${currentImage}'],`; // Duplicating for mock gallery purposes
    } else {
      line = `    images: ['/images/products/placeholder.webp', '/images/products/placeholder.webp'],`;
    }
  }

  newLines.push(line);
}

fs.writeFileSync(file, newLines.join('\n'), 'utf-8');
