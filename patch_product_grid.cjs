const fs = require('fs');
const file = 'src/sections/ProductGrid.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/<span className="bg-white\/5 text-white\/50 text-\[10px\] font-mono tracking-wider uppercase px-2 py-1 rounded-full border border-white\/10">\n              Research\n            <\/span>/,
`<span className="bg-white/5 text-gold-400 font-bold text-sm tracking-wider px-2 py-1 rounded-full border border-white/10">
              \${product.price?.toFixed(2) || '199.99'}
            </span>`);

fs.writeFileSync(file, code, 'utf-8');
