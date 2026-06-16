import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, SlidersHorizontal, ArrowRight, FlaskConical } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import {
  products,
  CATEGORIES,
  CATEGORY_COLORS,
  type Category,
} from '../data/products';

const WHATSAPP_URL =
  "https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Biogenix%20Labs%20peptides.";

const ALL = 'All' as const;
type Filter = typeof ALL | Category;

const BLEND_HIGHLIGHTS = [
  {
    id: 'wolverine-stack',
    name: 'Wolverine Stack',
    components: 'BPC-157 + TB-500',
    purpose: 'Comprehensive tissue repair & recovery',
  },
  {
    id: 'growth-stack',
    name: 'Growth Stack',
    components: 'CJC-1295 + Ipamorelin',
    purpose: 'GH axis optimisation research',
  },
  {
    id: 'glow-stack',
    name: 'Glow',
    components: 'TB-500 + BPC-157 + GHK-Cu',
    purpose: 'Skin regeneration & systemic repair',
  },
  {
    id: 'klow-stack',
    name: 'Klow',
    components: 'TB-500 + BPC-157 + GHK-Cu + KPV',
    purpose: 'Anti-inflammatory extended repair',
  },
];

export default function Library() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<Filter>(ALL);
  const [sort, setSort] = useState<'name' | 'category'>('name');

  const filtered = useMemo(() => {
    let list = products.filter((p) => !p.featured || activeFilter !== ALL ? true : true);

    if (activeFilter !== ALL) {
      list = list.filter((p) => p.category === activeFilter);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sort === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    }

    return list;
  }, [query, activeFilter, sort]);

  return (
    <div className="min-h-screen bg-clinical-dark text-white font-sans">
      <Navbar />

      {/* ── Page Header ─────────────────────────────── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-900 to-clinical-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #D4AF37 0%, transparent 60%)' }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical size={16} className="text-gold-500" />
            <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">Research Library</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            Peptide <span className="text-gradient-gold">Knowledge Base</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-8">
            Browse our complete library of {products.length}+ research-grade compounds. Each entry
            includes mechanism of action, research findings, and full specifications.
          </p>
          <div className="inline-flex items-center gap-3 bg-navy-900/50 border border-white/10 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-white/60 text-xs font-mono tracking-wider">
              For Research Purposes Only &middot; Not For Human Consumption
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured Blends ──────────────────────────── */}
      <section className="bg-navy-900/50 border-y border-white/5 py-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-white/40 text-xs font-mono tracking-[0.2em] uppercase mb-5">Featured Stacks</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BLEND_HIGHLIGHTS.map((blend) => (
              <Link
                key={blend.id}
                to={`/products/${blend.id}`}
                className="bg-navy-900/60 border border-white/5 hover:border-gold-500/30 rounded-xl p-4 transition-all duration-300 group"
              >
                <p className="text-gold-400 font-semibold text-sm mb-1 group-hover:text-gold-300 transition-colors">
                  {blend.name}
                </p>
                <p className="text-white/30 text-[10px] font-mono mb-2">{blend.components}</p>
                <p className="text-white/50 text-xs leading-relaxed">{blend.purpose}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search & Filter Bar ──────────────────────── */}
      <section className="bg-clinical-dark py-8 sticky top-20 z-30 border-b border-white/5 backdrop-blur-lg bg-clinical-dark/90">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Search peptides..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-navy-900/60 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-white/30" />
              <span className="text-white/40 text-xs font-mono">Sort:</span>
              {(['name', 'category'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all capitalize ${
                    sort === s
                      ? 'bg-gold-500/20 border-gold-500/40 text-gold-400'
                      : 'border-white/10 text-white/40 hover:border-white/30'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-nowrap md:flex-wrap gap-2 mt-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide">
            <button
              onClick={() => setActiveFilter(ALL)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all whitespace-nowrap flex-shrink-0 ${
                activeFilter === ALL
                  ? 'bg-white/10 border-white/30 text-white'
                  : 'border-white/10 text-white/40 hover:border-white/30'
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
                  className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all whitespace-nowrap flex-shrink-0 ${
                    activeFilter === cat
                      ? `${CATEGORY_COLORS[cat]} border-current`
                      : 'border-white/10 text-white/40 hover:border-white/30'
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
      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-white/30 text-xs font-mono mb-6">
            Showing {filtered.length} compound{filtered.length !== 1 ? 's' : ''}
            {query && ` matching "${query}"`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <FlaskConical size={48} className="text-white/10 mx-auto mb-4" />
              <p className="text-white/40 text-base">No compounds match your search.</p>
              <button
                onClick={() => { setQuery(''); setActiveFilter(ALL); }}
                className="mt-4 text-gold-400 text-sm hover:text-gold-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-navy-900/30 border border-white/5 hover:border-gold-500/30 rounded-xl p-5 transition-all duration-300 hover:shadow-gold flex flex-col"
                >
                  {/* Category + Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[product.category]}`}>
                      {product.category.split(' ')[0]}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-mono bg-gold-500/20 text-gold-400 border border-gold-500/30 px-2 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Name + Dosage */}
                  <h3 className="text-white text-base font-semibold group-hover:text-gold-400 transition-colors mb-1 leading-snug">
                    {product.name}
                  </h3>
                  {product.featured && (
                    <span className="text-gold-500 text-xs font-mono mb-3">{product.dosage}</span>
                  )}

                  {/* Tagline */}
                  <p className="text-white/40 text-xs leading-relaxed flex-1 mb-4 line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-gold-500 text-xs font-medium group-hover:gap-2.5 transition-all">
                    View Details
                    <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Inquiry CTA ──────────────────────────────── */}
      <section className="bg-navy-900 py-16 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-3">
            Can't find what you need?
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-xl mx-auto">
            Contact our research team via WhatsApp to discuss availability, custom quantities,
            or compounds not yet listed.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Inquire via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
