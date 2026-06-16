import { Link } from 'react-router';
import { libraryArticles } from '../data/libraryData';
import { FileText, ArrowRight } from 'lucide-react';

export default function LatestArticles() {
  const articles = libraryArticles.slice(0, 3);

  return (
    <section className="py-24 bg-pearl-shimmer/30 border-t border-navy-900/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Latest Research & Education</h2>
            <p className="text-navy-900/60 text-lg max-w-2xl">
              Stay informed with our rigorously researched, evidence-tiered compound profiles and scientific updates.
            </p>
          </div>
          <Link to="/library" className="btn-primary shrink-0 whitespace-nowrap hidden sm:inline-flex">
            View Evidence Library
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/library/${article.id}`}
              className="bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-3xl p-8 transition-all duration-300 group hover:shadow-xl hover:shadow-navy-900/5 flex flex-col h-full"
            >
              <div className="mb-6 flex justify-between items-start">
                 <div className="bg-pearl-shimmer/50 p-3 rounded-2xl group-hover:bg-gold-500/10 transition-colors">
                    <FileText className="text-navy-900 group-hover:text-gold-600" size={24} />
                 </div>
                 <span className="text-navy-900/40 text-xs font-medium">
                   {new Date(article.date).toLocaleDateString()}
                 </span>
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight">
                {article.title}
              </h3>

              <p className="text-navy-900/60 mb-8 flex-1 leading-relaxed line-clamp-3">
                {article.summary}
              </p>

              <div className="flex items-center gap-2 text-gold-600 font-bold text-sm mt-auto group-hover:gap-3 transition-all">
                Read Profile <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <Link to="/library" className="btn-primary mt-8 w-full sm:hidden flex justify-center">
          View Evidence Library
        </Link>
      </div>
    </section>
  );
}
