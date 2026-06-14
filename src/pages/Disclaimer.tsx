import { Link } from 'react-router';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-clinical-dark text-white font-sans">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-b from-navy-900 to-clinical-dark border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono mb-6">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Research Use Disclaimer</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={16} className="text-gold-500" />
            <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-3">Research Use Disclaimer</h1>
          <p className="text-white/40 text-sm font-mono">Last updated: June 2025</p>
        </div>
      </section>

      {/* Prominent Warning Banner */}
      <div className="bg-navy-900 border-b border-gold-500/30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-start gap-4">
            <AlertTriangle size={24} className="text-gold-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                FOR RESEARCH PURPOSES ONLY — NOT FOR HUMAN CONSUMPTION
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                All products sold by Biogenix Labs are research compounds intended exclusively for
                in-vitro laboratory research and scientific study by qualified professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="space-y-8 text-white/60">

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">1. Research Use Exclusively</h2>
              <div className="w-12 h-px bg-gold-500/30 mb-5" />
              <p className="leading-relaxed mb-4">
                All peptide compounds, research chemicals, and related products available through Biogenix Labs
                are sold exclusively for research purposes. These products are NOT approved for, and must NOT
                be used for:
              </p>
              <ul className="space-y-2">
                {[
                  'Human consumption or self-administration',
                  'Veterinary or animal therapeutic use',
                  'Dietary supplementation',
                  'Cosmetic or therapeutic application on humans',
                  'Any use outside of a controlled laboratory or research environment',
                  'Resale to the general public without appropriate licensing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">2. Qualified Researchers Only</h2>
              <div className="w-12 h-px bg-gold-500/30 mb-5" />
              <p className="leading-relaxed">
                By purchasing from Biogenix Labs, you represent and warrant that you are a qualified researcher,
                scientist, academic professional, or institutional buyer with legitimate and lawful research
                purposes. You must have the appropriate qualifications, licences, and facilities to handle
                research compounds safely and in compliance with applicable regulations in your jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">3. Regulatory Compliance</h2>
              <div className="w-12 h-px bg-gold-500/30 mb-5" />
              <p className="leading-relaxed mb-4">
                The purchase, possession, and use of research peptides may be subject to regulatory controls
                that vary by jurisdiction. It is your sole responsibility to:
              </p>
              <ul className="space-y-2">
                {[
                  'Determine the legal status of any research compound in your jurisdiction before ordering.',
                  'Obtain all necessary permits, licences, or approvals required by your local, state, or national authorities.',
                  'Comply with all applicable laws, regulations, and institutional policies governing research chemicals.',
                  'Ensure proper storage, handling, and disposal in accordance with relevant safety guidelines.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">4. No Medical Advice</h2>
              <div className="w-12 h-px bg-gold-500/30 mb-5" />
              <p className="leading-relaxed">
                Nothing on this website constitutes medical advice, diagnosis, or treatment recommendations.
                The research information provided is for educational and scientific reference purposes only.
                Journal citations, research summaries, and mechanism descriptions are provided to support
                legitimate research and do not imply endorsement of any therapeutic application.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">5. No Warranty of Results</h2>
              <div className="w-12 h-px bg-gold-500/30 mb-5" />
              <p className="leading-relaxed">
                Biogenix Labs provides no warranty that research compounds will produce any specific result
                in your research. Scientific outcomes depend on numerous experimental variables beyond our
                control. Product purity is verified by HPLC and documented in our COA, but we make no claims
                regarding efficacy for any particular application.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">6. Liability Limitation</h2>
              <div className="w-12 h-px bg-gold-500/30 mb-5" />
              <p className="leading-relaxed">
                Biogenix Labs expressly disclaims all liability for any injury, damage, loss, or consequence
                arising from the misuse, improper handling, or use contrary to the research-only designation
                of any product. Any use of our products for purposes other than legitimate scientific research
                is done entirely at the buyer's own risk and in violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-white text-xl font-semibold mb-4">7. Age Restriction</h2>
              <div className="w-12 h-px bg-gold-500/30 mb-5" />
              <p className="leading-relaxed">
                All purchases must be made by individuals who are 18 years of age or older and who are
                legally capable of entering into binding contracts in their jurisdiction. By purchasing,
                you confirm you meet this age requirement.
              </p>
            </div>

            <div className="bg-navy-900/60 border border-gold-500/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold mb-2">Acknowledgement</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    By purchasing any product from Biogenix Labs, you acknowledge that you have read,
                    understood, and agree to this Research Use Disclaimer. If you do not agree with
                    these terms, do not purchase or use our products. This disclaimer forms part of
                    our Terms of Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-navy-900 border-t border-white/5 py-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-white/30 text-xs font-mono">
            FOR RESEARCH PURPOSES ONLY &middot; NOT FOR HUMAN CONSUMPTION &middot; &copy; {new Date().getFullYear()} Biogenix Labs
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
