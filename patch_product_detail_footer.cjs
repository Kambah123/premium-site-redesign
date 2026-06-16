const fs = require('fs');
const file = 'src/pages/ProductDetail.tsx';
let code = fs.readFileSync(file, 'utf-8');

// Replace standard links
code = code.replace(/<Link to="\/library" className="text-gold-600 font-bold text-sm hover:underline hidden sm:block">/, `<Link to="/marketplace" className="text-gold-600 font-bold text-sm hover:underline hidden sm:block">`);
code = code.replace(/<Link\n                  key={rel\.id}\n                  to={`\/products\/\$\{rel\.id\}`}/g, `<Link\n                  key={rel.id}\n                  to={\`/marketplace/\${rel.id}\`}`);

fs.writeFileSync(file, code, 'utf-8');
