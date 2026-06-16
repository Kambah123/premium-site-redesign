const fs = require('fs');
const file = 'src/pages/Home.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/import HeroSection from '\.\/sections\/HeroSection';/, `import HeroSection from '../sections/HeroSection';\nimport MarketplaceCategories from '../sections/MarketplaceCategories';\nimport LatestArticles from '../sections/LatestArticles';`);

// Reconstruct Home.tsx layout
code = code.replace(
  /return \([\s\S]*?\);/,
  `return (
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
  );`
);

fs.writeFileSync(file, code, 'utf-8');
