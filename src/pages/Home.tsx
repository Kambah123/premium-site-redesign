import Navbar from '../sections/Navbar';
import HeroSection from '../sections/HeroSection';
import MarketplaceCategories from '../sections/MarketplaceCategories';
import LatestArticles from '../sections/LatestArticles';
import ProductGrid from '../sections/ProductGrid';
import AboutSection from '../sections/AboutSection';
import ComplianceSection from '../sections/ComplianceSection';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans">
      <Navbar />
      <HeroSection />
      <MarketplaceCategories />
      <ProductGrid />
      <AboutSection />
      <ComplianceSection />
      <LatestArticles />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
