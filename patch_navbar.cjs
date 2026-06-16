const fs = require('fs');
const file = 'src/sections/Navbar.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(
  /const navLinks = \[([\s\S]*?)\];/,
  `const navLinks = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'Marketplace', href: '/marketplace', isRoute: true },
  { label: 'Library', href: '/library', isRoute: true },
  { label: 'COA Library', href: '/#about', isRoute: false },
  { label: 'Contact', href: '/#contact', isRoute: false },
];`
);

fs.writeFileSync(file, code, 'utf-8');
