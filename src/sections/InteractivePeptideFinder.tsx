import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Brain, Shield, Droplets, Activity, Zap, Dna, type LucideIcon } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Cognitive & Neurological': Brain,
  'Immune & Systemic Support': Shield,
  'Appearance & Skin Health': Droplets,
  'Metabolic & Cellular Health': Activity,
  'Weight Management & Metabolic': Zap,
  'Tissue Regeneration & Recovery': Dna,
};

export default function InteractivePeptideFinder() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      // In a real implementation we'd pass query state via router state or context.
      // For now, redirecting to library is the requested behaviour.
      navigate('/library');
    }
  };

  const handleCategoryClick = () => {
    // Similarly, we'd apply this filter on the library page.
    navigate('/library');
  };

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Discover Your <span className="text-gold-500 italic font-normal">Compound</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Explore our comprehensive knowledge base of HPLC-verified research materials by specific focus area or direct search.
          </p>
        </div>

        {/* Glassmorphic Console */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-gold-500/20 blur-[100px] pointer-events-none" />

            {/* Big Search Bar */}
            <form onSubmit={handleSearch} className="relative mb-12 group">
              <div className="absolute inset-0 bg-gold-500/20 rounded-2xl blur-xl group-focus-within:bg-gold-500/30 transition-all duration-500 opacity-0 group-focus-within:opacity-100" />
              <div className="relative flex items-center bg-navy-900 border border-white/10 rounded-2xl p-2 group-focus-within:border-gold-500/50 transition-colors">
                <Search className="text-white/30 ml-4" size={24} />
                <input
                  type="text"
                  placeholder="Search by peptide name, e.g. Retatrutide..."
                  className="flex-1 bg-transparent text-white text-lg placeholder:text-white/20 px-4 py-3 focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-gold-600 text-navy-900 px-8 py-3 rounded-xl font-medium hover:bg-gold-500 transition-colors hidden sm:block"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Interactive Category Tiles */}
            <div>
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-6 text-center">
                Or explore by category
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CATEGORIES.slice(1, 7).map((category) => {
                  const Icon = CATEGORY_ICONS[category] || Zap;
                  return (
                    <button
                      key={category}
                      onClick={handleCategoryClick}
                      className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold-500/30 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="text-white/40 group-hover:text-gold-400 transition-colors" size={28} />
                      <span className="text-white/70 text-sm font-medium text-center group-hover:text-white transition-colors relative">
                        {category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
