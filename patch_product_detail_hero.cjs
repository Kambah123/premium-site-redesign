const fs = require('fs');
const file = 'src/pages/ProductDetail.tsx';
let code = fs.readFileSync(file, 'utf-8');

// Replace the Hero section entirely. Look for `<section className="bg-pearl-shimmer/50 pb-20 pt-12 relative overflow-hidden">`
// and end at `{/* ── Compliance Banner (Prominent) ──────────────── */}`

const heroStart = code.indexOf('<section className="bg-pearl-shimmer/50 pb-20 pt-12 relative overflow-hidden">');
const heroEnd = code.indexOf('{/* ── Compliance Banner (Prominent) ──────────────── */}');

if (heroStart !== -1 && heroEnd !== -1) {
  const newHero = `<section className="bg-pearl-shimmer/30 pb-20 pt-12 relative overflow-hidden border-b border-navy-900/5">
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

      `;

  code = code.substring(0, heroStart) + newHero + code.substring(heroEnd);
  fs.writeFileSync(file, code, 'utf-8');
}
