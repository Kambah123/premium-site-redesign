import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, SlidersHorizontal, ArrowRight, FlaskConical } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import { products, CATEGORIES, Category, CATEGORY_COLORS } from '../data/products';

const ALL = 'All Compounds';

// Mock highlights for marketplace
const BLEND_HIGHLIGHTS = [
  { id: 'glow-stack', name: 'Glow Stack', components: 'TB-500 + BPC-157 + GHK-Cu', purpose: 'Skin & Systemic Repair' },
  { id: 'klow-stack', name: 'Klow Stack', components: 'Glow + KPV', purpose: 'Advanced Anti-Inflammatory' },
  { id: 'growth-stack', name: 'Growth Stack', components: 'CJC-1295 + Ipamorelin', purpose: 'GH Axis Research' },
  { id: 'cagrisema', name: 'CagriSema', components: 'Semaglutide + Cagrilintide', purpose: 'Metabolic Synergy' },
];

export default function Marketplace() {
  const [activeFilter, setActiveFilter] = useState<Category | typeof ALL>(ALL);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'name' | 'category' | 'price'>('name');

  const filtered = useMemo(() => {
    let result = products;
    if (activeFilter !== ALL) {
      result = result.filter((p) => p.category === activeFilter);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    return [...result].sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'category') return a.category.localeCompare(b.category);
      if (sort === 'price') return (a.price || 0) - (b.price || 0);
      return 0;
    });
  }, [activeFilter, query, sort]);

  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Navbar />

      {/* ── Hero Header ────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-500/30 via-transparent to-transparent" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Research <span className="text-gold-400">Marketplace</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Browse our complete catalog of {products.length}+ research-grade compounds. Each entry
            includes mechanism of action, research findings, and HPLC verification.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-white/60 text-xs font-mono tracking-wider uppercase">
              For Research Purposes Only &middot; Not For Human Consumption
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured Blends ──────────────────────────── */}
      <section className="bg-pearl-shimmer/30 border-y border-navy-900/5 py-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-navy-900/40 text-xs font-mono tracking-[0.2em] uppercase mb-5">Featured Stacks</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BLEND_HIGHLIGHTS.map((blend) => (
              <Link
                key={blend.id}
                to={`/marketplace/${blend.id}`}
                className="bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-xl p-4 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <p className="text-navy-900 font-semibold text-sm mb-1 group-hover:text-gold-600 transition-colors">
                  {blend.name}
                </p>
                <p className="text-navy-900/40 text-[10px] font-mono mb-2">{blend.components}</p>
                <p className="text-navy-900/60 text-xs leading-relaxed">{blend.purpose}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search & Filter Bar ──────────────────────── */}
      <section className="bg-white py-6 sticky top-20 z-30 border-b border-navy-900/5 backdrop-blur-lg bg-white/90">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/30" />
              <input
                type="text"
                placeholder="Search compounds..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-pearl-shimmer/30 border border-navy-900/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/40 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
              <SlidersHorizontal size={14} className="text-navy-900/40 shrink-0" />
              <span className="text-navy-900/50 text-xs font-mono shrink-0">Sort:</span>
              {(['name', 'category', 'price'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`text-xs font-mono px-4 py-2 rounded-full border transition-all capitalize shrink-0 ${
                    sort === s
                      ? 'bg-navy-900 text-white border-navy-900'
                      : 'border-navy-900/10 text-navy-900/60 hover:border-navy-900/30 bg-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-nowrap gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setActiveFilter(ALL)}
              className={`text-xs font-mono px-4 py-2 rounded-full border transition-all whitespace-nowrap flex-shrink-0 ${
                activeFilter === ALL
                  ? 'bg-navy-900 text-white border-navy-900'
                  : 'border-navy-900/10 text-navy-900/60 hover:border-navy-900/30 bg-white'
              }`}
            >
              All ({products.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = products.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-mono px-4 py-2 rounded-full border transition-all whitespace-nowrap flex-shrink-0 ${
                    activeFilter === cat
                      ? `${CATEGORY_COLORS[cat]} border-current shadow-sm`
                      : 'border-navy-900/10 text-navy-900/60 hover:border-navy-900/30 bg-white'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-pearl-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-8">
            <p className="text-navy-900/40 text-sm font-medium">
              Showing <span className="text-navy-900 font-bold">{filtered.length}</span> compound{filtered.length !== 1 ? 's' : ''}
              {query && ` matching "${query}"`}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-32 bg-white border border-navy-900/5 rounded-3xl">
              <FlaskConical size={48} className="text-navy-900/10 mx-auto mb-4" />
              <p className="text-navy-900/50 text-lg">No compounds match your search criteria.</p>
              <button
                onClick={() => { setQuery(''); setActiveFilter(ALL); }}
                className="mt-6 text-gold-600 font-bold text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/marketplace/${product.id}`}
                  className="group bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-navy-900/5 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="aspect-square bg-pearl-shimmer/30 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={product.images?.[0] || product.image || '/images/products/placeholder.webp'}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-gold-500/90 text-navy-900 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border inline-block ${CATEGORY_COLORS[product.category]}`}>
                      {product.category.split(' ')[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-navy-900 text-lg font-bold group-hover:text-gold-600 transition-colors mb-1 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-navy-900/40 text-xs font-mono mb-4">{product.dosage}</p>
                    <p className="text-navy-900/60 text-sm leading-relaxed line-clamp-2 mb-6">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Footer / Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-navy-900/5 mt-auto">
                    <span className="text-navy-900 font-bold text-lg">
                      ${product.price?.toFixed(2) || '199.99'}
                    </span>
                    <div className="flex items-center gap-1.5 text-gold-600 text-sm font-medium group-hover:gap-2.5 transition-all">
                      Details
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
