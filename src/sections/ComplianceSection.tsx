import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ComplianceSection() {
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
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-pearl-shimmer py-20 lg:py-28 overflow-hidden border-y border-navy-900/5"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-navy-900 font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          <span>{t.complianceBanner.split('—')[0]?.trim()}</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold-500/50" />
          <span>{t.complianceBanner.split('—')[1]?.trim()}</span>
        </div>

        <div
          className="max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
          }}
        >
          <p className="text-navy-900/50 text-sm font-mono">
            {t.complianceBody}
          </p>
        </div>
      </div>
    </section>
  );
}
