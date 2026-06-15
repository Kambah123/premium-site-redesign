import Navbar from '../sections/Navbar';
import HeroSection from '../sections/HeroSection';
import MarqueeStrip from '../sections/MarqueeStrip';
import StatsGrid from '../sections/StatsGrid';
import ProductGrid from '../sections/ProductGrid';
import AboutSection from '../sections/AboutSection';
import ComplianceSection from '../sections/ComplianceSection';
import KnowledgeBaseCTA from '../sections/KnowledgeBaseCTA';
import FAQSection from '../sections/FAQSection';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F3] text-[#111111] font-sans">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <StatsGrid />
      <ProductGrid />
      <AboutSection />
      <ComplianceSection />
      <KnowledgeBaseCTA />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
