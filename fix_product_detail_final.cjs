const fs = require('fs');

const file = 'src/pages/ProductDetail.tsx';
let code = fs.readFileSync(file, 'utf-8');

// I can see the previous replace didn't work because the hero code is probably gone or malformed.
// Since we have a backup of the original `src/pages/ProductDetail.tsx` in my history, I will rewrite the file cleanly from scratch.

const newCode = `import { useParams, Link, Navigate } from 'react-router';
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

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductById(slug) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  if (!product) return <Navigate to="/marketplace" replace />;

  const related = getRelatedProducts(product.relatedIds).slice(0, 4);

  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Navbar />

      {/* ── Breadcrumb ────────────────────────────────── */}
      <div className="pt-28 pb-0 bg-pearl-shimmer/30 border-b border-navy-900/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-navy-900/40 text-xs font-mono py-4">
            <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/marketplace" className="hover:text-gold-500 transition-colors">Marketplace</Link>
            <span>/</span>
            <span className="text-navy-900/80">{product.name}</span>
          </div>
        </div>
      </div>

      {/* ── Hero & Cart Section ─────────────────────── */}
      <section className="bg-pearl-shimmer/30 pb-20 pt-12 relative overflow-hidden border-b border-navy-900/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Image Gallery */}
            <div className="space-y-4 sticky top-32">
              <div className="aspect-square bg-white border border-navy-900/10 rounded-3xl flex items-center justify-center p-8 overflow-hidden relative shadow-sm">
                <img
                  src={product.images?.[activeImage] || product.image || '/images/products/placeholder.webp'}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-300"
                />
                {product.badge && (
                  <div className="absolute top-6 left-6 bg-gold-500/90 text-navy-900 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                    {product.badge}
                  </div>
                )}
              </div>

              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={\`aspect-square bg-white border rounded-xl p-2 flex items-center justify-center transition-all \${activeImage === i ? 'border-gold-500 shadow-sm' : 'border-navy-900/10 hover:border-navy-900/30'}\`}
                    >
                      <img src={img} alt={\`\${product.name} view \${i+1}\`} className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info & Purchase Actions */}
            <div className="flex flex-col h-full lg:py-8">
              <div className="mb-6">
                <span className={\`text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border inline-block mb-6 shadow-sm bg-white \${CATEGORY_COLORS[product.category]}\`}>
                  {product.category.split(' ')[0]}
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 mb-4 leading-tight tracking-tight">
                  {product.name}
                </h1>
                <p className="text-gold-600 font-mono text-lg mb-6">{product.dosage}</p>
                <p className="text-navy-900/60 text-lg leading-relaxed">{product.tagline}</p>
              </div>

              <div className="mb-10 pb-10 border-b border-navy-900/10">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-4xl font-bold text-navy-900">\${product.price?.toFixed(2) || '199.99'}</span>
                  <span className="text-navy-900/40 text-sm font-medium px-3 py-1 bg-navy-900/5 rounded-full">HPLC Verified ≥99%</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-navy-900/20 rounded-xl overflow-hidden bg-white h-14">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-5 h-full hover:bg-navy-900/5 text-navy-900 transition-colors flex items-center justify-center"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-4 font-bold text-navy-900 text-lg min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-5 h-full hover:bg-navy-900/5 text-navy-900 transition-colors flex items-center justify-center"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="flex-1 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 h-14 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-navy-900/10 flex items-center justify-center gap-3"
                  >
                    <ShoppingBag size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                {product.specifications.slice(0, 4).map((spec) => (
                  <div key={spec.label}>
                    <p className="text-navy-900/40 text-[10px] font-mono uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-navy-900 text-sm font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-20">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-20">

              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <BookOpen size={20} className="text-gold-600" />
                  </div>
                  <h2 className="text-navy-900 text-2xl font-bold">Overview</h2>
                </div>
                <p className="text-navy-900/70 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Mechanism of Action */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <FlaskConical size={20} className="text-gold-600" />
                  </div>
                  <h2 className="text-navy-900 text-2xl font-bold">Mechanism of Action</h2>
                </div>
                <div className="space-y-6">
                  {product.mechanism.map((para, i) => (
                    <p key={i} className="text-navy-900/70 text-lg leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Research Findings */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-gold-600" />
                  </div>
                  <h2 className="text-navy-900 text-2xl font-bold">Research Findings</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {product.researchFindings.map((finding, i) => (
                    <div
                      key={i}
                      className="bg-pearl-shimmer/30 border border-navy-900/5 rounded-2xl p-6 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-navy-900 text-base font-bold leading-snug">{finding.title}</h3>
                        <span className="bg-navy-900 text-pearl-white text-[10px] font-mono px-2 py-0.5 rounded-full">{finding.year}</span>
                      </div>
                      <p className="text-gold-600 text-xs font-mono mb-4">{finding.source}</p>
                      <p className="text-navy-900/60 text-sm leading-relaxed">{finding.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Applications */}
              <div className="bg-navy-900 text-pearl-white rounded-3xl p-10 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <h2 className="text-2xl font-bold mb-8 relative z-10">Potential Research Applications</h2>
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-base">
                      <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certificate of Analysis Section */}
              {(() => {
                const coa = getCOAByProductId(product.id);
                return coa ? (
                  <div className="pt-10">
                    <h2 className="text-navy-900 text-2xl font-bold mb-8">Verification & Analysis</h2>
                    <div className="bg-white border border-navy-900/5 rounded-3xl p-8 shadow-sm">
                      <COASection coa={coa} />
                    </div>
                  </div>
                ) : null;
              })()}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Full Specifications */}
              <div className="bg-white border border-navy-900/5 rounded-3xl overflow-hidden shadow-sm sticky top-28">
                <div className="px-6 py-5 border-b border-navy-900/5 bg-pearl-shimmer/20">
                  <h3 className="text-navy-900 text-sm font-bold uppercase tracking-wider">Full Specifications</h3>
                </div>
                <div className="divide-y divide-navy-900/5">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="px-6 py-4 flex flex-col gap-1">
                      <span className="text-navy-900/40 text-[10px] font-mono uppercase tracking-widest">{spec.label}</span>
                      <span className="text-navy-900 text-sm font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-pearl-shimmer/10">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-sm"
                  >
                    Request Full Lab Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Peptides ──────────────────────────── */}
      {related.length > 0 && (
        <section className="py-24 bg-pearl-shimmer/30 border-t border-navy-900/5">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-navy-900 text-3xl font-bold mb-3 tracking-tight">Related Compounds</h2>
                <p className="text-navy-900/40 text-base">Often researched alongside {product.name}</p>
              </div>
              <Link to="/marketplace" className="text-gold-600 font-bold text-sm hover:underline hidden sm:block">
                View All Compounds →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={\`/marketplace/\${rel.id}\`}
                  className="group bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/5"
                >
                  <div className="aspect-square rounded-xl bg-pearl-shimmer/30 mb-6 overflow-hidden flex items-center justify-center p-4">
                    {rel.image ? (
                      <img src={rel.image} alt={rel.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <FlaskConical size={40} className="text-gold-500/20" />
                    )}
                  </div>
                  <span className={\`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border inline-block mb-4 \${CATEGORY_COLORS[rel.category]}\`}>
                    {rel.category.split(' ')[0]}
                  </span>
                  <h3 className="text-navy-900 text-lg font-bold group-hover:text-gold-600 transition-colors mb-2">
                    {rel.name}
                  </h3>
                  <p className="text-navy-900/40 text-xs font-mono">{rel.dosage}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
`;

fs.writeFileSync(file, newCode, 'utf-8');
