import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Staggered entrance animation
    const children = content.children;
    Array.from(children).forEach((child, i) => {
      const el = child as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 150);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pearl-white"
    >
      {/* Subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 40%, #D4AF37 0%, transparent 60%)' }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-navy-900/10 rounded-full px-4 py-1.5 mb-8 bg-white/60 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
          <span className="text-navy-900/60 text-xs font-mono tracking-[0.2em] uppercase">
            Biogenix Labs &middot; Research Peptides
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-semibold text-navy-900 leading-[0.95] tracking-tight mb-6">
          {t.heroTitle1}
          <br />
          <span className="text-gradient-gold">{t.heroTitle2}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-navy-900/50 text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
          {t.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#products"
            className="btn-primary flex items-center gap-2 text-sm sm:text-base shadow-sm"
          >
            Shop Compounds
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#about"
            className="border border-navy-900/20 text-navy-900 font-medium px-8 py-3 rounded-pill transition-all duration-300 bg-transparent hover:bg-navy-900/5 hover:border-navy-900/30 text-sm sm:text-base"
          >
            View Analysis
          </a>
        </div>

        {/* Hero Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-gold-500 text-2xl sm:text-3xl font-semibold">
              99%
            </div>
            <div className="text-navy-900/40 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1">
              Purity
            </div>
          </div>
          <div className="w-px h-10 bg-navy-900/10" />
          <div className="text-center">
            <div className="text-gold-500 text-2xl sm:text-3xl font-semibold">
              36+
            </div>
            <div className="text-navy-900/40 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1">
              Compounds
            </div>
          </div>
          <div className="w-px h-10 bg-navy-900/10" />
          <div className="text-center">
            <div className="text-gold-500 text-2xl sm:text-3xl font-semibold">
              HPLC
            </div>
            <div className="text-navy-900/40 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1">
              Tested
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pearl-white to-transparent z-[3]" />
    </section>
  );
}
