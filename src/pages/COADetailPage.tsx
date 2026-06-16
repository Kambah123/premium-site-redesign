import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import COAResultsCard from '../components/COAResultsCard';
import { getCOAByProductId } from '../data/coaData';
import { getProductById } from '../data/products';

export default function COADetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const coa = productId ? getCOAByProductId(productId) : undefined;
  const product = productId ? getProductById(productId) : undefined;

  if (!coa || !product) return <Navigate to="/library" replace />;

  const handleDownloadPDF = () => {
    window.open(coa.pdfUrl, '_blank');
  };

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
            <Link to={`/marketplace/${productId}`} className="hover:text-gold-400 transition-colors">{product.name}</Link>
            <span>/</span>
            <span className="text-white/70">Certificate of Analysis</span>
          </div>
        </div>
      </div>

      {/* ── Header ────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-navy-900/60 to-clinical-dark pt-10 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link
            to={`/marketplace/${productId}`}
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold-400 text-sm transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Product
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={32} className="text-emerald-400" />
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                  Certificate of Analysis
                </h1>
                <p className="text-gold-500 text-xl font-mono mt-2">{product.name} {product.dosage}</p>
              </div>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              Official laboratory testing results for Lot {coa.lotNumber}. All tests conducted by {coa.laboratory} on {coa.testDate}.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">

              {/* Results Card */}
              <div>
                <h2 className="text-white text-2xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Test Results
                </h2>
                <COAResultsCard coa={coa} onViewPDF={handleDownloadPDF} />
              </div>

              {/* Verification Information */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Verification Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Laboratory</p>
                      <p className="text-white text-sm">{coa.laboratory}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Address</p>
                      <p className="text-white text-sm">{coa.laboratoryAddress}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Phone</p>
                      <a href={`tel:${coa.laboratoryPhone}`} className="text-emerald-400 hover:text-emerald-300 text-sm">
                        {coa.laboratoryPhone}
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${coa.laboratoryEmail}`} className="text-emerald-400 hover:text-emerald-300 text-sm">
                        {coa.laboratoryEmail}
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Website</p>
                      <a href={coa.laboratoryWebsite} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-sm">
                        {coa.laboratoryWebsite}
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Report ID</p>
                      <p className="text-white text-sm font-mono">{coa.id}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laboratory Documentation */}
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Laboratory Documentation
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-2">Testing Purpose</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{coa.testingPurpose}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Sample ID</p>
                      <p className="text-white text-sm font-mono">{coa.sampleId}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Customer</p>
                      <p className="text-white text-sm">{coa.customerName}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Storage</p>
                      <p className="text-white text-sm">{coa.storage}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider mb-1">Visual Description</p>
                      <p className="text-white text-sm">{coa.visualDescription}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF Section */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-xl p-6">
                <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-emerald-400" />
                  Official Certificate PDF
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Download the complete Certificate of Analysis document signed by the laboratory.
                </p>
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/50 rounded-lg transition-all font-medium"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 sticky top-28">
                <h3 className="text-white text-sm font-semibold mb-4">Quick Information</h3>
                <div className="space-y-3 divide-y divide-slate-700/30">
                  <div className="pb-3">
                    <p className="text-slate-400 text-xs font-mono mb-1">Product</p>
                    <p className="text-white text-sm font-semibold">{coa.productName}</p>
                  </div>
                  <div className="pt-3 pb-3">
                    <p className="text-slate-400 text-xs font-mono mb-1">Lot Number</p>
                    <p className="text-emerald-400 text-sm font-mono font-semibold">{coa.lotNumber}</p>
                  </div>
                  <div className="pt-3 pb-3">
                    <p className="text-slate-400 text-xs font-mono mb-1">Purity (HPLC)</p>
                    <p className="text-emerald-400 text-sm font-semibold">{coa.purityHPLC}</p>
                  </div>
                  <div className="pt-3 pb-3">
                    <p className="text-slate-400 text-xs font-mono mb-1">Overall Status</p>
                    <p className="text-emerald-400 text-sm font-semibold">{coa.overallStatus}</p>
                  </div>
                  <div className="pt-3 pb-3">
                    <p className="text-slate-400 text-xs font-mono mb-1">Test Date</p>
                    <p className="text-white text-sm">{coa.testDate}</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-slate-400 text-xs font-mono mb-1">Report Date</p>
                    <p className="text-white text-sm">{coa.reportDate}</p>
                  </div>
                </div>
              </div>

              {/* Verification Badges */}
              <div className="bg-slate-800/40 border border-emerald-500/30 rounded-xl p-5">
                <h3 className="text-white text-sm font-semibold mb-4">Verification</h3>
                <div className="space-y-2">
                  {coa.verificationBadges.thirdPartyVerified && (
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Third-Party Verified
                    </div>
                  )}
                  {coa.verificationBadges.batchSpecificTesting && (
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Batch Specific Testing
                    </div>
                  )}
                  {coa.verificationBadges.certificateAvailable && (
                    <div className="flex items-center gap-2 text-emerald-400 text-xs">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Certificate Available
                    </div>
                  )}
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
            <FileText size={32} className="text-gold-500 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm mb-0.5">
                RESEARCH PURPOSES ONLY &mdash; NOT FOR HUMAN CONSUMPTION
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                All Biogenix Labs products are intended strictly for in-vitro and laboratory research use.
                Not for human or veterinary administration. By purchasing, you confirm you are a qualified researcher.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
