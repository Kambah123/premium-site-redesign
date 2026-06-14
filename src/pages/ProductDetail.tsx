import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ArrowRight, FlaskConical, ShieldCheck, BookOpen } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import { getProductById, getRelatedProducts, CATEGORY_COLORS } from '../data/products';

const WHATSAPP_URL =
  "https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Biogenix%20Labs%20peptides.";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) return <Navigate to="/library" replace />;

  const related = getRelatedProducts(product.relatedIds).slice(0, 4);
  const categoryColor = CATEGORY_COLORS[product.category];

  return (
    <div className="min-h-screen bg-clinical-dark text-white font-sans">
      <Navbar />

      {/* ── Breadcrumb ────────────────────────────────── */}
      <div className="pt-28 pb-0 bg-navy-900/60 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono py-4">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/library" className="hover:text-gold-400 transition-colors">Library</Link>
            <span>/</span>
            <span className="text-white/70">{product.name}</span>
          </div>
        </div>
      </div>

      {/* ── Product Header ────────────────────────────── */}
      <section className="bg-gradient-to-b from-navy-900/60 to-clinical-dark pt-10 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link
            to="/library"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold-400 text-sm transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Library
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${categoryColor}`}>
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-xs font-mono bg-gold-500/20 text-gold-400 border border-gold-500/30 px-3 py-1 rounded-full">
                    ✓ {product.badge}
                  </span>
                )}
                {product.featured && (
                  <span className="text-xs font-mono bg-white/5 text-white/50 border border-white/10 px-3 py-1 rounded-full">
                    Featured Product
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-gold-500 text-xl font-mono mb-4">{product.dosage}</p>
              <p className="text-white/60 text-base leading-relaxed mb-8">{product.tagline}</p>

              {/* Quick Facts */}
              <div className="bg-navy-900/50 border border-white/5 rounded-xl p-5 grid grid-cols-2 gap-4">
                {product.specifications.slice(0, 4).map((spec) => (
                  <div key={spec.label}>
                    <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-0.5">{spec.label}</p>
                    <p className="text-white text-sm font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image or abstract visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-navy-900/50">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.dosage} research peptide`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <FlaskConical size={64} className="text-gold-500/20 mx-auto mb-4" />
                      <p className="text-white/20 text-sm font-mono">{product.name}</p>
                    </div>
                  </div>
                )}
              </div>
              {/* WhatsApp CTA overlay */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 btn-primary flex items-center justify-center gap-2 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-14">

              {/* Overview */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-gold-500" />
                  <h2 className="text-white text-xl font-semibold">Overview</h2>
                </div>
                <div className="w-12 h-px bg-gold-500/30 mb-5" />
                <p className="text-white/60 text-base leading-relaxed">{product.description}</p>
              </div>

              {/* Mechanism of Action */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FlaskConical size={16} className="text-gold-500" />
                  <h2 className="text-white text-xl font-semibold">Mechanism of Action</h2>
                </div>
                <div className="w-12 h-px bg-gold-500/30 mb-5" />
                <div className="space-y-4">
                  {product.mechanism.map((para, i) => (
                    <p key={i} className="text-white/60 text-base leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Research Findings */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={16} className="text-gold-500" />
                  <h2 className="text-white text-xl font-semibold">Research Findings</h2>
                </div>
                <div className="w-12 h-px bg-gold-500/30 mb-5" />
                <div className="space-y-4">
                  {product.researchFindings.map((finding, i) => (
                    <div
                      key={i}
                      className="bg-navy-900/40 border border-white/5 rounded-xl p-5 hover:border-gold-500/20 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-white text-sm font-semibold leading-snug">{finding.title}</h3>
                        <span className="text-gold-500 text-xs font-mono whitespace-nowrap">{finding.year}</span>
                      </div>
                      <p className="text-gold-400/70 text-xs font-mono mb-3">{finding.source}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{finding.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Applications */}
              <div>
                <h2 className="text-white text-xl font-semibold mb-4">Potential Research Applications</h2>
                <div className="w-12 h-px bg-gold-500/30 mb-5" />
                <ul className="space-y-2">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Full Specifications */}
              <div className="bg-navy-900/40 border border-white/5 rounded-xl overflow-hidden sticky top-28">
                <div className="px-5 py-4 border-b border-white/5">
                  <h3 className="text-white text-sm font-semibold">Full Specifications</h3>
                </div>
                <div className="divide-y divide-white/5">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="px-5 py-3 flex items-start justify-between gap-3">
                      <span className="text-white/40 text-xs font-mono">{spec.label}</span>
                      <span className="text-white text-xs text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Request via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance Section ────────────────────────── */}
      <section className="bg-navy-900 py-10 border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <ShieldCheck size={32} className="text-gold-500 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm mb-0.5">
                FOR RESEARCH PURPOSES ONLY &mdash; NOT FOR HUMAN CONSUMPTION
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                All Biogenix Labs products are intended strictly for in-vitro and laboratory research use.
                Not for human or veterinary administration. By purchasing, you confirm you are a qualified researcher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Peptides ──────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-clinical-dark">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="text-white text-2xl font-semibold mb-2">Related Compounds</h2>
            <p className="text-white/40 text-sm mb-8">Often researched alongside {product.name}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.id}`}
                  className="group bg-navy-900/30 border border-white/5 hover:border-gold-500/30 rounded-xl p-5 transition-all duration-300"
                >
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border inline-block mb-3 ${CATEGORY_COLORS[rel.category]}`}>
                    {rel.category.split(' ')[0]}
                  </span>
                  <h3 className="text-white text-sm font-semibold group-hover:text-gold-400 transition-colors mb-1">{rel.name}</h3>
                  <p className="text-gold-500 text-xs font-mono mb-2">{rel.dosage}</p>
                  <div className="flex items-center gap-1 text-gold-500/60 text-xs group-hover:gap-2 transition-all">
                    View <ArrowRight size={10} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
