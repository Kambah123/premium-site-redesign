import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Search, SlidersHorizontal, ArrowRight, ShoppingCart } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import { useLanguage } from '../context/LanguageContext';
import {
  products,
  CATEGORY_COLORS,
} from '../data/products';

const WHATSAPP_URL =
  "https://wa.me/61489995818?text=Hi%2C%20I'm%20interested%20in%20purchasing%20from%20the%20Marketplace.";

const IN_STOCK_IDS = ['retatrutide', 'wolverine-stack', 'hgh', 'ghk-cu'];

export default function Marketplace() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'name' | 'category'>('name');

  const filtered = useMemo(() => {
    let list = products.filter(p => IN_STOCK_IDS.includes(p.id));

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
  }, [query, sort]);

  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Helmet>
        <title>Marketplace | Biogenix Labs</title>
        <meta name="description" content="Browse our available stock of HPLC-verified research peptides." />
      </Helmet>
      <Navbar />

      {/* ── Page Header ─────────────────────────────── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-pearl-shimmer to-pearl-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #D4AF37 0%, transparent 60%)' }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingCart size={16} className="text-gold-500" />
            <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">{t.marketplaceLabel}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-900 leading-tight mb-4">
            {t.marketplaceTitle1} <span className="text-gradient-navy">{t.marketplaceTitle2}</span>
          </h1>
          <p className="text-navy-900/50 text-lg max-w-2xl leading-relaxed mb-8">
            These flagship compounds are currently in stock and available for immediate dispatch to qualified researchers.
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-navy-900/10 rounded-full px-4 py-2 shadow-xs">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-navy-900/40 text-xs font-mono tracking-wider">
              Available Stock
            </span>
          </div>
        </div>
      </section>

      {/* ── Search & Filter Bar ──────────────────────── */}
      <section className="bg-pearl-white py-8 sticky top-20 z-30 border-b border-navy-900/5 backdrop-blur-lg bg-pearl-white/90">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/30" />
              <input
                type="text"
                placeholder="Search available stock..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white border border-navy-900/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500/50 transition-colors shadow-xs"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-navy-900/30" />
              <span className="text-navy-900/40 text-xs font-mono">Sort:</span>
              {(['name', 'category'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all capitalize ${
                    sort === s
                      ? 'bg-gold-500/10 border-gold-500/30 text-gold-600'
                      : 'border-navy-900/10 text-navy-900/40 hover:border-navy-900/30'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-navy-900/30 text-xs font-mono mb-6">
            Showing {filtered.length} in-stock compound{filtered.length !== 1 ? 's' : ''}
            {query && ` matching "${query}"`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <ShoppingCart size={48} className="text-navy-900/10 mx-auto mb-4" />
              <p className="text-navy-900/40 text-base">No in-stock compounds match your search.</p>
              <button
                onClick={() => setQuery('')}
                className="mt-4 text-gold-600 text-sm hover:text-gold-500 transition-colors"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/10 -rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Category + Badge */}
                  <div className="flex items-center justify-between mb-3 relative">
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[product.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                      {product.category.split(' ')[0]}
                    </span>
                    <span className="text-[10px] font-mono bg-green-500/10 text-green-600 border border-green-500/20 px-2 py-0.5 rounded-full">
                      IN STOCK
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-navy-900 text-base font-semibold group-hover:text-gold-600 transition-colors mb-1 leading-snug relative">
                    {product.name}
                  </h3>

                  {/* Dosage */}
                  <p className="text-gold-600 text-xs font-mono mb-2 relative">{product.dosage}</p>

                  {/* Tagline */}
                  <p className="text-navy-900/40 text-xs leading-relaxed flex-1 mb-4 line-clamp-2 relative">
                    {product.tagline}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-gold-600 text-xs font-medium group-hover:gap-2.5 transition-all relative">
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
      <section className="bg-navy-900 py-16 border-t border-navy-900/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-3">
            {t.cantFind}
          </h2>
          <p className="text-white/50 text-base mb-8 max-w-xl mx-auto">
            {t.cantFindDesc}
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
            {t.inquireVia}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
