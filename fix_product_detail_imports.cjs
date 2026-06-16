const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf-8');
code = code.replace(/import { ArrowLeft, FlaskConical, ShieldCheck, BookOpen, ExternalLink, Plus, Minus, ShoppingBag } from 'lucide-react';/, `import { FlaskConical, ShieldCheck, BookOpen, Plus, Minus, ShoppingBag } from 'lucide-react';`);
fs.writeFileSync('src/pages/ProductDetail.tsx', code, 'utf-8');
