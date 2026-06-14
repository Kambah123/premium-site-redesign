import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

export default function KnowledgeBaseCTA() {
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
      id="library"
      ref={sectionRef}
      className="bg-clinical-dark py-20 lg:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div
          className="relative bg-navy-900/50 border border-white/5 rounded-3xl overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative py-16 px-8 sm:px-12 lg:px-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
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
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">
                Knowledge Base
              </span>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Explore{' '}
              <span className="text-gradient-gold">36+</span> Research-Grade
              Compounds
            </h2>

            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Browse our complete library of peptides organized by therapeutic
              pathway, with mechanism-of-action references and citation-backed
              research summaries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/library"
                className="btn-primary flex items-center gap-2"
              >
                Browse Peptide Library
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
              </Link>
              <a
                href="https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Biogenix%20Labs%20peptides."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
