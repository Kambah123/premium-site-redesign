import { Link } from 'react-router';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';

const IN_STOCK_IDS = ['retatrutide', 'wolverine-stack', 'hgh', 'ghk-cu'];

export default function StockHighlightsSection() {
  const stockProducts = IN_STOCK_IDS.map(id => products.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-20 bg-pearl-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pearl-shimmer/30 to-transparent pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-navy-900/10 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-navy-900/60 text-xs font-mono tracking-widest uppercase">
                Available Immediately
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 leading-tight">
              In-Stock <span className="text-gradient-navy font-normal italic">Essentials</span>
            </h2>
          </div>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 font-medium text-sm group shrink-0"
          >
            <ShoppingCart size={16} />
            Go to Marketplace
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stockProducts.map((product) => (
            <Link
              key={product!.id}
              to={`/products/${product!.id}`}
              className="group flex flex-col bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/5 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-gold-500/10 transition-colors duration-500" />
              
              <h3 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-2 relative">
                {product!.name}
              </h3>
              <p className="text-gold-600 font-mono text-sm mb-4 relative">{product!.dosage}</p>
              
              <div className="w-8 h-[1px] bg-gold-500/30 mb-4 relative" />
              
              <p className="text-navy-900/60 leading-relaxed text-sm flex-1 relative">
                {product!.tagline}
              </p>

              <div className="mt-8 flex items-center justify-between text-navy-900/40 group-hover:text-gold-600 transition-colors relative">
                <span className="text-xs font-medium uppercase tracking-wider">Details</span>
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
