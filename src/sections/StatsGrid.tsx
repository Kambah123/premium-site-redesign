import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 99, suffix: '%+', label: 'HPLC Purity Verified' },
  { value: 36, suffix: '+', label: 'Research Compounds' },
  { value: 2, suffix: '', label: 'Regions Served (AU & BD)' },
  { value: 100, suffix: '%', label: 'Research Use Compliant' },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.round(eased * target);
      setCount(countRef.current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-pearl-shimmer py-20 lg:py-28 border-y border-navy-900/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center lg:text-left"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              <div className="text-navy-900 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-none mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <div className="text-navy-800/60 text-sm font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
