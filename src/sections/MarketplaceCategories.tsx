import { Link } from 'react-router';
import { CATEGORIES } from '../data/products';
import { Beaker, FlaskConical, Droplets, Activity, Brain, ShieldPlus } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Weight Management & Metabolic': <Activity size={32} />,
  'Tissue Regeneration & Recovery': <FlaskConical size={32} />,
  'Cognitive & Neurological': <Brain size={32} />,
  'Immune & Systemic Support': <ShieldPlus size={32} />,
  'Appearance & Skin Health': <Droplets size={32} />,
  'Metabolic & Cellular Health': <Beaker size={32} />,
  'Specialized Blends': <FlaskConical size={32} />,
  'Supportive Products': <Droplets size={32} />,
};

export default function MarketplaceCategories() {
  return (
    <section className="py-20 bg-pearl-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Shop by Category</h2>
          <p className="text-navy-900/60 text-lg">Find the specific compound your research requires.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {CATEGORIES.slice(0, 8).map((category) => (
            <Link
              key={category}
              to={`/marketplace`} // Ideally we'd pass a query param or state for filtering, but linking to marketplace is fine for now
              className="bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 group flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-pearl-shimmer/50 flex items-center justify-center mb-4 text-navy-900 group-hover:text-gold-600 group-hover:bg-gold-500/10 transition-colors`}>
                {CATEGORY_ICONS[category] || <FlaskConical size={32} />}
              </div>
              <h3 className="text-navy-900 font-bold text-sm sm:text-base group-hover:text-gold-600 transition-colors">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
