import { useEffect, useRef, useState } from 'react';

export default function ComplianceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0.5);
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      setMouseX(x);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const text = 'FOR RESEARCH PURPOSES ONLY \u2014 NOT FOR HUMAN CONSUMPTION \u2014';
  const words = text.split(' ');

  return (
    <section
      ref={sectionRef}
      className="bg-navy-900 py-20 lg:py-28 overflow-hidden cursor-crosshair"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div
          ref={textRef}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease-out',
          }}
        >
          {words.map((word, i) => {
            // Calculate distance from mouse for each word
            const wordPosition = i / words.length;
            const distFromMouse = Math.abs(wordPosition - mouseX);
            const closeness = Math.max(0, 1 - distFromMouse * 2);

            return (
              <span
                key={i}
                className="text-gold-400 font-semibold select-none transition-all duration-100"
                style={{
                  fontSize: `${2 + closeness * 1.5}rem`,
                  textShadow: `0 0 ${closeness * 30}px rgba(212, 175, 55, ${0.3 + closeness * 0.5})`,
                  transform: `translateZ(${closeness * 40}px) scale(${1 + closeness * 0.15})`,
                  opacity: 0.5 + closeness * 0.5,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        <div
          className="text-center mt-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
          }}
        >
          <p className="text-white/30 text-sm font-mono">
            All products are intended strictly for in-vitro and laboratory
            research. Not for human or veterinary use.
          </p>
        </div>
      </div>
    </section>
  );
}
