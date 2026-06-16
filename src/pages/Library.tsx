import { Link } from 'react-router';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { libraryArticles, EvidenceTier } from '../data/libraryData';

const TIER_COLORS: Record<EvidenceTier, string> = {
  'Regulator-approved': 'bg-green-500/20 text-green-700 border-green-500/30',
  'Human clinical (off-label)': 'bg-blue-500/20 text-blue-700 border-blue-500/30',
  'Animal & lab only': 'bg-orange-500/20 text-orange-700 border-orange-500/30',
  'Anecdote': 'bg-red-500/20 text-red-700 border-red-500/30',
  'Inherited': 'bg-purple-500/20 text-purple-700 border-purple-500/30',
};

export default function Library() {
  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-gold-500/30 via-transparent to-transparent" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-gold-500" size={32} />
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
              Evidence <span className="text-gold-400">Library</span>
            </h1>
          </div>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-8">
            Rigorous, unbiased peptide education — without the hype. We translate the peptide research literature into clear, evidence-tiered profiles.
          </p>

          {/* Tiers Explanation */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <h2 className="text-white font-bold mb-4">How to read the evidence</h2>
            <p className="text-white/60 text-sm mb-6 max-w-2xl">
              Not all evidence is equal. When you read that a peptide "is shown to" do something, the most useful question you can ask is: shown in what?
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-navy-900/50 p-4 rounded-xl border border-white/5">
                <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase rounded border border-green-500/20 mb-2">Regulator-approved</span>
                <p className="text-white/50 text-xs">FDA / EMA / TGA approved for this specific use.</p>
              </div>
              <div className="bg-navy-900/50 p-4 rounded-xl border border-white/5">
                <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded border border-blue-500/20 mb-2">Human clinical</span>
                <p className="text-white/50 text-xs">Tested in people, but not approved for this use.</p>
              </div>
              <div className="bg-navy-900/50 p-4 rounded-xl border border-white/5">
                <span className="inline-block px-2 py-1 bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase rounded border border-orange-500/20 mb-2">Animal & Lab only</span>
                <p className="text-white/50 text-xs">Promising in cells/animals, unproven in humans.</p>
              </div>
              <div className="bg-navy-900/50 p-4 rounded-xl border border-white/5">
                <span className="inline-block px-2 py-1 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase rounded border border-red-500/20 mb-2">Anecdote</span>
                <p className="text-white/50 text-xs">Testimonials and forums — not clinical evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Featured Profiles</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {libraryArticles.map(article => (
              <Link
                key={article.id}
                to={`/library/${article.id}`}
                className="bg-white border border-navy-900/10 rounded-3xl p-8 hover:border-gold-500/30 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-pearl-shimmer/50 p-3 rounded-2xl group-hover:bg-gold-500/10 transition-colors">
                    <FileText className="text-navy-900 group-hover:text-gold-600" size={24} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${TIER_COLORS[article.tier]}`}>
                    {article.tier}
                  </span>
                </div>

                {article.compound && (
                  <p className="text-navy-900/40 font-mono text-xs mb-2">{article.compound}</p>
                )}
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-navy-900/60 leading-relaxed mb-8 flex-1">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-navy-900/5 mt-auto">
                  <span className="text-navy-900/40 text-sm font-medium">{new Date(article.date).toLocaleDateString()}</span>
                  <div className="flex items-center gap-2 text-gold-600 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Profile <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
