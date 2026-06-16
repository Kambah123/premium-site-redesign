const fs = require('fs');
const file = 'src/sections/Navbar.tsx';
let code = fs.readFileSync(file, 'utf-8');

if (!code.includes('useCart')) {
  code = code.replace(/import { Link, useNavigate } from 'react-router';/, `import { Link, useNavigate } from 'react-router';\nimport { useCart } from '../context/CartContext';\nimport CartDrawer from '../components/CartDrawer';`);

  code = code.replace(/export default function Navbar\(\) {/, `export default function Navbar() {\n  const { totalItems, setIsCartOpen } = useCart();`);

  code = code.replace(
    /<button className={`\$\{scrolled \? 'text-navy-900\/70' : 'text-\[#111111\]\/70'\} hover:text-gold-500 transition-colors p-2 relative`}>\n              <ShoppingCart size=\{20\} \/>\n              <span className="absolute -top-0\.5 -right-0\.5 w-4 h-4 bg-gold-500 text-white text-\[10px\] font-bold rounded-full flex items-center justify-center">\n                0\n              <\/span>\n            <\/button>/,
    `<button
              className={\`\${scrolled ? 'text-navy-900/70' : 'text-[#111111]/70'} hover:text-gold-500 transition-colors p-2 relative\`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>`
  );

  code = code.replace(/<\/nav>/, `</nav>\n      <CartDrawer />`);
  fs.writeFileSync(file, code, 'utf-8');
}
