const fs = require('fs');
const file = 'src/sections/Navbar.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/return \(\n    <nav/g, `return (\n    <>\n      <nav`);
code = code.replace(/<\/nav>\n      <CartDrawer \/>/g, `</nav>\n      <CartDrawer />\n    </>`);

fs.writeFileSync(file, code, 'utf-8');
