import { useEffect, useRef, useState } from 'react';

export default function ComplianceSection() {
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
      className="bg-[#F4F4F3] py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#111111] font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          <span>FOR RESEARCH PURPOSES ONLY</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold-500/50" />
          <span>NOT FOR HUMAN CONSUMPTION</span>
        </div>

        <div
          className="max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
          }}
        >
          <p className="text-[#4A4A4A]/80 text-sm font-mono">
            All products are intended strictly for in-vitro and laboratory
            research. Not for human or veterinary use.
          </p>
        </div>
      </div>
    </section>
  );
}
