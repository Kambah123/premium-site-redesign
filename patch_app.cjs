const fs = require('fs');
const file = 'src/App.tsx';
let code = fs.readFileSync(file, 'utf-8');

// Imports
code = code.replace(/import Library from '\.\/pages\/Library';/, `import Marketplace from './pages/Marketplace';\nimport Library from './pages/Library';\nimport ArticleDetail from './pages/ArticleDetail';\nimport CartPage from './pages/CartPage';`);

// Routes
code = code.replace(/<Route path="\/library" element={<Library \/>} \/>/, `<Route path="/marketplace" element={<Marketplace />} />\n      <Route path="/library" element={<Library />} />\n      <Route path="/library/:slug" element={<ArticleDetail />} />\n      <Route path="/cart" element={<CartPage />} />`);
code = code.replace(/<Route path="\/products\/:id" element={<ProductDetail \/>} \/>/, `<Route path="/marketplace/:slug" element={<ProductDetail />} />`);

fs.writeFileSync(file, code, 'utf-8');
