import Navbar from '../sections/Navbar';
import HeroSection from '../sections/HeroSection';
import StockHighlightsSection from '../sections/StockHighlightsSection';
import MarqueeStrip from '../sections/MarqueeStrip';
import StatsGrid from '../sections/StatsGrid';
import InteractivePeptideFinder from '../sections/InteractivePeptideFinder';
import ProductGrid from '../sections/ProductGrid';
import AboutSection from '../sections/AboutSection';
import ComplianceSection from '../sections/ComplianceSection';
import KnowledgeBaseCTA from '../sections/KnowledgeBaseCTA';
// import FAQSection from '../sections/FAQSection';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Navbar />
      <HeroSection />
      <StockHighlightsSection />
      <MarqueeStrip />
      <StatsGrid />
      <InteractivePeptideFinder />
      <ProductGrid />
      <AboutSection />
      <ComplianceSection />
      <KnowledgeBaseCTA />
      {/* <FAQSection /> */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
