const fs = require('fs');

function replaceInFile(file) {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf-8');
    code = code.replace(/\/products\//g, '/marketplace/');
    fs.writeFileSync(file, code, 'utf-8');
  }
}

replaceInFile('src/sections/ProductGrid.tsx');
replaceInFile('src/pages/ProductDetail.tsx');
replaceInFile('src/pages/COADetailPage.tsx');
