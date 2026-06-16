const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf-8');

// The file has multiple bad imports and duplicate declarations.
// Let's replace the top with exactly what we need.

const splitPoint = code.indexOf('export default function ProductDetail() {');

const topPart = `import { useParams, Link, Navigate } from 'react-router';
import { useState } from 'react';
import { ArrowLeft, FlaskConical, ShieldCheck, BookOpen, ExternalLink, Plus, Minus, ShoppingBag } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import { getProductById, getRelatedProducts, CATEGORY_COLORS } from '../data/products';
import COASection from '../components/COASection';
import { getCOAByProductId } from '../data/coaData';
import { useCart } from '../context/CartContext';

const WHATSAPP_URL =
  "https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Biogenix%20Labs%20peptides.";

`;

code = topPart + code.substring(splitPoint);

// Fix the inside of the function
code = code.replace(/export default function ProductDetail\(\) \{[\s\S]*?if \(!product\) return <Navigate to="\/marketplace" replace \/>;/,
`export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductById(slug) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  if (!product) return <Navigate to="/marketplace" replace />;`);

fs.writeFileSync('src/pages/ProductDetail.tsx', code, 'utf-8');
