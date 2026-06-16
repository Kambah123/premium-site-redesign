const fs = require('fs');
const file = 'src/main.tsx';
let code = fs.readFileSync(file, 'utf-8');

if (!code.includes('CartProvider')) {
  code = code.replace(/import App from '\.\/App';/, `import App from './App';\nimport { CartProvider } from './context/CartContext';`);
  code = code.replace(/<BrowserRouter>/, `<BrowserRouter>\n      <CartProvider>`);
  code = code.replace(/<\/BrowserRouter>/, `      </CartProvider>\n    </BrowserRouter>`);
  fs.writeFileSync(file, code, 'utf-8');
}
