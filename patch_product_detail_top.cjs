const fs = require('fs');
const file = 'src/pages/ProductDetail.tsx';
let code = fs.readFileSync(file, 'utf-8');

// Replace standard imports to include Cart tools and state
code = code.replace(/import { useParams, Link, Navigate } from 'react-router';/, `import { useParams, Link, Navigate } from 'react-router';\nimport { useState } from 'react';\nimport { useCart } from '../context/CartContext';\nimport { Plus, Minus, ShoppingBag } from 'lucide-react';`);

// Replace route param from id to slug to match new route
code = code.replace(/const { id } = useParams<{ id: string }>();/, `const { slug } = useParams<{ slug: string }>();\n  const [quantity, setQuantity] = useState(1);\n  const [activeImage, setActiveImage] = useState(0);\n  const { addToCart } = useCart();`);
code = code.replace(/const product = id \? getProductById\(id\) : undefined;/, `const product = slug ? getProductById(slug) : undefined;`);
code = code.replace(/if \(!product\) return <Navigate to="\/library" replace \/>;/, `if (!product) return <Navigate to="/marketplace" replace />;`);
code = code.replace(/<Link to="\/library" className="hover:text-gold-500 transition-colors">Library<\/Link>/, `<Link to="/marketplace" className="hover:text-gold-500 transition-colors">Marketplace</Link>`);

fs.writeFileSync(file, code, 'utf-8');
