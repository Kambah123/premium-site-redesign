import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, Calendar, ShieldCheck, FileText } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { getArticleById } from '../data/libraryData';

const TIER_COLORS: Record<string, string> = {
  'Regulator-approved': 'bg-green-500/10 text-green-700 border-green-500/20',
  'Human clinical (off-label)': 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  'Animal & lab only': 'bg-orange-500/10 text-orange-700 border-orange-500/20',
  'Anecdote': 'bg-red-500/10 text-red-700 border-red-500/20',
  'Inherited': 'bg-purple-500/10 text-purple-700 border-purple-500/20',
};

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleById(slug) : undefined;

  if (!article) return <Navigate to="/library" replace />;

  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <Link to="/library" className="inline-flex items-center gap-2 text-navy-900/50 hover:text-gold-600 transition-colors mb-10 font-medium">
            <ArrowLeft size={16} />
            Back to Library
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${TIER_COLORS[article.tier]}`}>
                {article.tier}
              </span>
              {article.compound && (
                <span className="bg-navy-900/5 text-navy-900/60 text-xs font-mono px-3 py-1.5 rounded-full">
                  {article.compound}
                </span>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-navy-900/60 leading-relaxed mb-8">
              {article.summary}
            </p>

            <div className="flex items-center gap-6 pt-6 border-t border-navy-900/10 text-navy-900/50 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Biogenix Research Team
              </div>
            </div>
          </header>

          <article className="prose prose-lg prose-navy max-w-none prose-headings:text-navy-900 prose-headings:font-bold prose-p:text-navy-900/70 prose-strong:text-navy-900">
            {article.content.split('\n\n').map((paragraph, idx) => {
              // Simple markdown parser for bold
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={idx} className="text-2xl mt-8 mb-4">{paragraph.replace(/\*\*/g, '')}</h3>;
              }
              const formattedText = paragraph.split('**').map((text, i) => i % 2 === 1 ? <strong key={i}>{text}</strong> : text);
              return <p key={idx} className="mb-6 leading-relaxed">{formattedText}</p>;
            })}
          </article>

          <div className="mt-16 p-8 bg-pearl-shimmer/50 rounded-3xl border border-navy-900/5 text-center">
            <FileText className="mx-auto text-navy-900/20 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Further Reading</h3>
            <p className="text-navy-900/60 mb-8 max-w-md mx-auto">
              This information is for educational purposes only. To explore compound specifications and analytical data, visit our marketplace.
            </p>
            <Link to="/marketplace" className="btn-primary inline-flex">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
