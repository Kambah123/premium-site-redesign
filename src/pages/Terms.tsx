import { Link } from 'react-router';
import { ShieldCheck } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';

function LegalPageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-clinical-dark text-white font-sans">
      <Navbar />
      <section className="pt-32 pb-12 bg-gradient-to-b from-navy-900 to-clinical-dark border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono mb-6">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">{title}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={16} className="text-gold-500" />
            <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-3">{title}</h1>
          <p className="text-white/40 text-sm font-mono">{subtitle}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-invert max-w-none text-white/60 [&>h2]:text-white [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-white/80 [&>h3]:font-medium [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul>li]:leading-relaxed">
            {children}
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

export default function Terms() {
  return (
    <LegalPageShell title="Terms of Service" subtitle="Last updated: June 2025">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using the Biogenix Labs website (biogenixlabs.health) and purchasing any products,
        you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
        If you do not agree with any part of these terms, you must not use this website or purchase any products.
      </p>

      <h2>2. Research Use Only</h2>
      <p>
        ALL products sold by Biogenix Labs are intended STRICTLY for research purposes only. By purchasing
        any product from Biogenix Labs, you explicitly represent and warrant that:
      </p>
      <ul>
        <li>You are a qualified researcher, scientist, or professional with legitimate research purposes.</li>
        <li>Products will be used exclusively for in-vitro laboratory research and scientific study.</li>
        <li>Products will NOT be used for human consumption, self-administration, or any therapeutic purpose.</li>
        <li>You will comply with all applicable local, state, national, and international laws governing research chemicals.</li>
        <li>You are of legal age in your jurisdiction to purchase research compounds.</li>
      </ul>

      <h2>3. Product Descriptions and Accuracy</h2>
      <p>
        Biogenix Labs makes every effort to ensure product descriptions, specifications, and purity data are
        accurate and current. Certificate of Analysis (COA) documents are provided for all products. However,
        we do not warrant that product descriptions or other site content is error-free, complete, reliable,
        or current.
      </p>

      <h2>4. Ordering and Payment</h2>
      <p>
        All orders are subject to acceptance and availability. We reserve the right to refuse any order at
        our discretion. Payment must be received in full prior to dispatch. Prices are subject to change
        without notice.
      </p>

      <h2>5. Shipping and Delivery</h2>
      <p>
        We ship to Australia and Bangladesh. All shipments are dispatched with tracking. Delivery times are
        estimates only. Biogenix Labs is not responsible for delays caused by customs, postal services, or
        circumstances beyond our control. Risk of loss and title pass to you upon delivery to the carrier.
      </p>

      <h2>6. Returns and Refunds</h2>
      <p>
        Due to the nature of research compounds, returns are only accepted in cases of damaged or incorrect
        products. Claims must be made within 7 days of receipt with photographic evidence. Approved refunds
        will be processed within 14 business days.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, and product descriptions, is the property
        of Biogenix Labs and is protected by applicable intellectual property laws. You may not reproduce,
        distribute, or create derivative works without our express written permission.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Biogenix Labs shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of our products or
        website. Our total liability shall not exceed the amount paid for the specific product in question.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Biogenix Labs, its officers, directors, employees, and agents
        from any claims, damages, losses, or expenses arising from your use of our products, violation of
        these Terms, or infringement of any third-party rights.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of Australia. Any disputes
        shall be subject to the exclusive jurisdiction of the courts of Australia.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Changes will be posted on this page with an
        updated date. Continued use of the website after changes constitutes acceptance of the new Terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        For questions regarding these Terms, contact us at:{' '}
        <a href="mailto:info@biogenixlabs.health" className="text-gold-400 hover:text-gold-300 transition-colors">
          info@biogenixlabs.health
        </a>
      </p>
    </LegalPageShell>
  );
}
