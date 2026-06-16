import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const highlights = [
  { value: '99%', label: 'HPLC Purity' },
  { value: '36+', label: 'Compounds' },
  { value: '2', label: 'Regions' },
  { value: '100%', label: 'Compliant' },
];

const testimonials = [
  {
    quote:
      "Biogenix Labs delivers consistent purity and professional service. Their COA documentation is thorough and their compounds have supported reproducible results in our tissue repair studies.",
    name: 'Sadman Sakib',
    role: 'Research Coordinator',
    initials: 'SS',
  },
];

export default function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── About Section ──────────────────────────── */}
      <section
        id="about"
        ref={sectionRef}
        className="bg-pearl-white py-20 lg:py-28 relative overflow-hidden"
      >
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 75% 30%, #D4AF37 0%, transparent 60%)' }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">
                  {t.aboutLabel}
                </span>
              </div>

              <h2 className="text-navy-900 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                {t.aboutTitle1}
                <br />
                <span className="text-gradient-gold">{t.aboutTitle2}</span>
              </h2>

              <p className="text-navy-900/50 text-base leading-relaxed mb-6">
                {t.aboutP1}
              </p>

              <p className="text-navy-900/50 text-base leading-relaxed mb-8">
                {t.aboutP2}
              </p>

              <div className="inline-flex items-center gap-3 bg-white border border-navy-900/10 rounded-full px-4 py-2 shadow-xs">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
                <span className="text-navy-900/40 text-xs font-mono tracking-wider">
                  {t.researchOnly}
                </span>
              </div>
            </div>

            {/* Right: Stats + Image */}
            <div
              className="grid grid-cols-2 gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(40px)',
                transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
              }}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-navy-900/5 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300 group shadow-xs"
                >
                  <div className="text-gold-500 text-3xl sm:text-4xl font-semibold mb-2 group-hover:text-gold-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-navy-900/40 text-xs font-mono tracking-wider uppercase">
                    {item.label}
                  </div>
                </div>
              ))}

              {/* Hero banner image card */}
              <div className="col-span-2 bg-white border border-navy-900/5 rounded-xl overflow-hidden mt-2 shadow-xs">
                <img
                  src="/images/banner.jpeg"
                  alt="Biogenix Labs banner"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial Section ──────────────────────── */}
      <section className="bg-pearl-shimmer py-16 lg:py-20 border-y border-navy-900/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">
              {t.testimonialLabel}
            </span>
          </div>

          <div className="max-w-3xl">
            {testimonials.map((test, i) => (
              <div key={i} className="relative">
                {/* Quote mark */}
                <div className="absolute -top-2 -left-2 text-gold-500/20 text-6xl font-serif leading-none select-none">"</div>
                <blockquote className="pl-8">
                  <p className="text-navy-900/70 text-lg sm:text-xl leading-relaxed italic mb-6">
                    {test.quote}
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-gold-400 text-sm font-mono font-semibold">
                      {test.initials}
                    </div>
                    <div>
                      <p className="text-navy-900 text-sm font-semibold">{test.name}</p>
                      <p className="text-navy-900/40 text-xs font-mono">{test.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
