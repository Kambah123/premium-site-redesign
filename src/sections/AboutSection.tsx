import { useEffect, useRef, useState } from 'react';

const highlights = [
  { value: '99%', label: 'HPLC Purity' },
  { value: '36+', label: 'Compounds' },
  { value: '2', label: 'Regions' },
  { value: '100%', label: 'Compliant' },
];

export default function AboutSection() {
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
    <section
      id="about"
      ref={sectionRef}
      className="bg-clinical-dark py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-800/20 to-transparent pointer-events-none" />

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
                About Biogenix Labs
              </span>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Built for
              <br />
              <span className="text-gradient-gold">Scientific Rigor</span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-6">
              Biogenix Labs is a research-grade peptide supplier serving academic
              institutions, laboratories, and qualified investigators across
              Australia and Bangladesh. Every compound we distribute is verified
              by HPLC and accompanied by transparent specifications.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-8">
              Our focus is the science — providing consistent, high-purity
              research material that supports reproducible experimentation. We
              maintain strict compliance with research-use-only distribution and
              never market products for human or veterinary administration.
            </p>

            <div className="inline-flex items-center gap-3 bg-navy-900/50 border border-white/10 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-mono tracking-wider">
                For Research Purposes Only &middot; Not For Human Consumption
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
                className="bg-navy-900/30 border border-white/5 rounded-xl p-6 hover:border-gold-500/20 transition-all duration-300 group"
              >
                <div className="text-gold-400 text-3xl sm:text-4xl font-semibold mb-2 group-hover:text-gold-300 transition-colors">
                  {item.value}
                </div>
                <div className="text-white/40 text-xs font-mono tracking-wider uppercase">
                  {item.label}
                </div>
              </div>
            ))}

            {/* Hero banner image card */}
            <div className="col-span-2 bg-navy-900/30 border border-white/5 rounded-xl overflow-hidden mt-2">
              <img
                src="/images/banner.jpeg"
                alt="Biogenix Labs banner"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
