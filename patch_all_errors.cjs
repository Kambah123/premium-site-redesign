const fs = require('fs');

// 1. Fix Product Detail Unused/Undefined variables
let pdCode = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf-8');
pdCode = pdCode.replace(/import { useState } from 'react';\nimport { useCart } from '\.\.\/context\/CartContext';\nimport { Plus, Minus, ShoppingBag } from 'lucide-react';\n/g, '');

pdCode = pdCode.replace(/import { useParams, Link, Navigate } from 'react-router';/, `import { useParams, Link, Navigate } from 'react-router';\nimport { useState } from 'react';\nimport { useCart } from '../context/CartContext';\nimport { Plus, Minus, ShoppingBag } from 'lucide-react';`);

pdCode = pdCode.replace(/const { id } = useParams<{ id: string }>();\n  const { slug } = useParams<{ slug: string }>();\n  const \[quantity, setQuantity\] = useState\(1\);\n  const \[activeImage, setActiveImage\] = useState\(0\);\n  const { addToCart } = useCart\(\);\n  const product = slug \? getProductById\(slug\) : undefined;/,
`  const { slug } = useParams<{ slug: string }>();\n  const [quantity, setQuantity] = useState(1);\n  const [activeImage, setActiveImage] = useState(0);\n  const { addToCart } = useCart();\n  const product = slug ? getProductById(slug) : undefined;`);

// ensure only one instance of const { slug } ... exists in the function scope
pdCode = pdCode.replace(/const { id } = useParams<{ id: string }>\(\);/, '');
pdCode = pdCode.replace(/const product = id \? getProductById\(id\) : undefined;/, '');

fs.writeFileSync('src/pages/ProductDetail.tsx', pdCode, 'utf-8');


// 2. Fix Home.tsx imports
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
if (!homeCode.includes('import MarketplaceCategories')) {
  homeCode = homeCode.replace(/import HeroSection from '\.\.\/sections\/HeroSection';/, `import HeroSection from '../sections/HeroSection';\nimport MarketplaceCategories from '../sections/MarketplaceCategories';\nimport LatestArticles from '../sections/LatestArticles';`);
}
fs.writeFileSync('src/pages/Home.tsx', homeCode, 'utf-8');


// 3. Fix main.tsx imports
let mainCode = fs.readFileSync('src/main.tsx', 'utf-8');
if (!mainCode.includes('import { CartProvider }')) {
  mainCode = mainCode.replace(/import App from '\.\/App';/, `import App from './App';\nimport { CartProvider } from './context/CartContext';`);
}
fs.writeFileSync('src/main.tsx', mainCode, 'utf-8');
