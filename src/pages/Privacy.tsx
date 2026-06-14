import { Link } from 'react-router';
import { ShieldCheck } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';

function LegalShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
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
          <div className="prose prose-invert max-w-none text-white/60 [&>h2]:text-white [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul>li]:leading-relaxed">
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

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" subtitle="Last updated: June 2025">
      <h2>1. Introduction</h2>
      <p>
        Biogenix Labs ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information when you visit our website
        biogenixlabs.health or make a purchase.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, shipping address, phone number provided during ordering.</li>
        <li><strong>Transaction Data:</strong> Details about purchases including products ordered, amounts, and payment confirmation.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
        <li><strong>Communication Data:</strong> Records of communications including WhatsApp inquiries and email correspondence.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Process and fulfil your orders and provide order updates.</li>
        <li>Verify your researcher status and eligibility to purchase research compounds.</li>
        <li>Communicate with you about your orders and inquiries.</li>
        <li>Comply with legal obligations including regulatory reporting requirements.</li>
        <li>Improve our website and services through analytics.</li>
        <li>Prevent fraud and ensure website security.</li>
      </ul>

      <h2>4. Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share information with:
      </p>
      <ul>
        <li><strong>Service Providers:</strong> Shipping carriers, payment processors, and IT service providers who assist in our operations.</li>
        <li><strong>Legal Authorities:</strong> When required by law, court order, or governmental authority.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
      </ul>

      <h2>5. Cookies and Tracking</h2>
      <p>
        Our website uses cookies to enhance your browsing experience, analyse site traffic, and personalise
        content. You can control cookie settings through your browser. Disabling cookies may affect website
        functionality.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect your personal information
        against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission
        is 100% secure and we cannot guarantee absolute security.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal information for as long as necessary to fulfil the purposes outlined in this policy,
        comply with legal obligations, and resolve disputes. Transaction records are typically retained for
        7 years for tax and regulatory compliance.
      </p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Request correction of inaccurate information.</li>
        <li>Request deletion of your information (subject to legal retention requirements).</li>
        <li>Object to processing of your information in certain circumstances.</li>
        <li>Lodge a complaint with a supervisory authority.</li>
      </ul>

      <h2>9. International Transfers</h2>
      <p>
        As we operate across Australia and Bangladesh, your information may be transferred internationally.
        We ensure appropriate safeguards are in place for any such transfers.
      </p>

      <h2>10. Children's Privacy</h2>
      <p>
        Our website and products are not intended for individuals under 18 years of age. We do not knowingly
        collect personal information from minors.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Changes will be posted on this page with an updated
        date. Continued use of our website after changes constitutes acceptance.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For privacy-related enquiries:{' '}
        <a href="mailto:info@biogenixlabs.health" className="text-gold-400 hover:text-gold-300 transition-colors">
          info@biogenixlabs.health
        </a>
      </p>
    </LegalShell>
  );
}
