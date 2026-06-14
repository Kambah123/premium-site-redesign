import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, FlaskConical, ShieldCheck, BookOpen, ExternalLink } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import { getProductById, getRelatedProducts, CATEGORY_COLORS } from '../data/products';
import COASection from '../components/COASection';
import { getCOAByProductId } from '../data/coaData';

const WHATSAPP_URL =
  "https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Biogenix%20Labs%20peptides.";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) return <Navigate to="/library" replace />;

  const related = getRelatedProducts(product.relatedIds).slice(0, 4);
  const categoryColor = CATEGORY_COLORS[product.category];

  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Navbar />

      {/* ── Breadcrumb ────────────────────────────────── */}
      <div className="pt-28 pb-0 bg-pearl-shimmer/50 border-b border-navy-900/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-navy-900/40 text-xs font-mono py-4">
            <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/library" className="hover:text-gold-500 transition-colors">Library</Link>
            <span>/</span>
            <span className="text-navy-900/70">{product.name}</span>
          </div>
        </div>
      </div>

      {/* ── Product Header ────────────────────────────── */}
      <section className="bg-pearl-white pt-10 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link
            to="/library"
            className="inline-flex items-center gap-2 text-navy-900/40 hover:text-gold-500 text-sm transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Library
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border bg-white ${categoryColor}`}>
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-[10px] font-mono bg-gold-500/10 text-gold-600 border border-gold-500/20 px-3 py-1 rounded-full">
                    ✓ {product.badge}
                  </span>
                )}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 leading-[1.1] mb-4 tracking-tight">
                {product.name}
              </h1>
              <p className="text-gold-600 text-2xl font-mono mb-6">{product.dosage}</p>
              <p className="text-navy-900/60 text-lg leading-relaxed mb-10 max-w-xl">{product.tagline}</p>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {product.specifications.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="border-l-2 border-gold-500/30 pl-4">
                    <p className="text-navy-900/40 text-[10px] font-mono uppercase tracking-wider mb-1">{spec.label}</p>
                    <p className="text-navy-900 text-base font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center py-4 text-base"
                >
                  Inquire via WhatsApp
                </a>
                <button className="btn-secondary flex items-center justify-center gap-2 py-4 text-base">
                  Technical Data Sheet <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Right: Premium Product Image */}
            <div className="order-1 lg:order-2 relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-navy-900/5 p-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.dosage} research peptide`}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-pearl-shimmer/30 rounded-2xl">
                    <div className="text-center">
                      <FlaskConical size={80} className="text-gold-500/20 mx-auto mb-4" />
                      <p className="text-navy-900/20 text-sm font-mono">{product.name}</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-6 -left-6 w-48 h-48 bg-navy-900/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance Banner (Prominent) ──────────────── */}
      <section className="bg-navy-900 py-12 border-y border-gold-500/20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <ShieldCheck size={48} className="text-gold-500 mb-6" />
            <h2 className="text-gold-400 font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tighter mb-4 uppercase">
              FOR RESEARCH PURPOSES ONLY — NOT FOR HUMAN CONSUMPTION
            </h2>
            <div className="w-24 h-1 bg-gold-500/30 mb-6 rounded-full" />
            <p className="text-white/60 text-sm sm:text-base leading-relaxed font-medium">
              All Biogenix Labs products are intended strictly for in-vitro and laboratory research use.
              Not for human or veterinary administration. By purchasing, you confirm you are a qualified researcher.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-20">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-20">

              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <BookOpen size={20} className="text-gold-600" />
                  </div>
                  <h2 className="text-navy-900 text-2xl font-bold">Overview</h2>
                </div>
                <p className="text-navy-900/70 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Mechanism of Action */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <FlaskConical size={20} className="text-gold-600" />
                  </div>
                  <h2 className="text-navy-900 text-2xl font-bold">Mechanism of Action</h2>
                </div>
                <div className="space-y-6">
                  {product.mechanism.map((para, i) => (
                    <p key={i} className="text-navy-900/70 text-lg leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Research Findings */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-gold-600" />
                  </div>
                  <h2 className="text-navy-900 text-2xl font-bold">Research Findings</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {product.researchFindings.map((finding, i) => (
                    <div
                      key={i}
                      className="bg-pearl-shimmer/30 border border-navy-900/5 rounded-2xl p-6 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-navy-900 text-base font-bold leading-snug">{finding.title}</h3>
                        <span className="bg-navy-900 text-pearl-white text-[10px] font-mono px-2 py-0.5 rounded-full">{finding.year}</span>
                      </div>
                      <p className="text-gold-600 text-xs font-mono mb-4">{finding.source}</p>
                      <p className="text-navy-900/60 text-sm leading-relaxed">{finding.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Applications */}
              <div className="bg-navy-900 text-pearl-white rounded-3xl p-10 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <h2 className="text-2xl font-bold mb-8 relative z-10">Potential Research Applications</h2>
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-base">
                      <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certificate of Analysis Section */}
              {(() => {
                const coa = getCOAByProductId(product.id);
                return coa ? (
                  <div className="pt-10">
                    <h2 className="text-navy-900 text-2xl font-bold mb-8">Verification & Analysis</h2>
                    <div className="bg-white border border-navy-900/5 rounded-3xl p-8 shadow-sm">
                      <COASection coa={coa} />
                    </div>
                  </div>
                ) : null;
              })()}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Full Specifications */}
              <div className="bg-white border border-navy-900/5 rounded-3xl overflow-hidden shadow-sm sticky top-28">
                <div className="px-6 py-5 border-b border-navy-900/5 bg-pearl-shimmer/20">
                  <h3 className="text-navy-900 text-sm font-bold uppercase tracking-wider">Full Specifications</h3>
                </div>
                <div className="divide-y divide-navy-900/5">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="px-6 py-4 flex flex-col gap-1">
                      <span className="text-navy-900/40 text-[10px] font-mono uppercase tracking-widest">{spec.label}</span>
                      <span className="text-navy-900 text-sm font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-pearl-shimmer/10">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-sm"
                  >
                    Request Full Lab Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Peptides ──────────────────────────── */}
      {related.length > 0 && (
        <section className="py-24 bg-pearl-shimmer/30 border-t border-navy-900/5">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-navy-900 text-3xl font-bold mb-3 tracking-tight">Related Compounds</h2>
                <p className="text-navy-900/40 text-base">Often researched alongside {product.name}</p>
              </div>
              <Link to="/library" className="text-gold-600 font-bold text-sm hover:underline hidden sm:block">
                View All Compounds →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.id}`}
                  className="group bg-white border border-navy-900/5 hover:border-gold-500/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/5"
                >
                  <div className="aspect-square rounded-xl bg-pearl-shimmer/30 mb-6 overflow-hidden flex items-center justify-center p-4">
                    {rel.image ? (
                      <img src={rel.image} alt={rel.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <FlaskConical size={40} className="text-gold-500/20" />
                    )}
                  </div>
                  <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border inline-block mb-4 ${CATEGORY_COLORS[rel.category]}`}>
                    {rel.category.split(' ')[0]}
                  </span>
                  <h3 className="text-navy-900 text-lg font-bold group-hover:text-gold-600 transition-colors mb-2">
                    {rel.name}
                  </h3>
                  <p className="text-navy-900/40 text-xs font-mono">{rel.dosage}</p>
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
