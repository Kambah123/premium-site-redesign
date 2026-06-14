import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are research peptides?',
    answer:
      'Research peptides are short chains of amino acids used in laboratory and clinical research settings. They are synthetically produced compounds that mimic natural biological molecules and are used to study cellular processes, receptor interactions, and therapeutic pathways. They are strictly for research purposes only and not intended for human consumption.',
  },
  {
    question: 'How do you verify peptide purity?',
    answer:
      'All Biogenix Labs compounds undergo High-Performance Liquid Chromatography (HPLC) testing to verify purity levels of 99% or higher. We also provide Certificates of Analysis (COA) with each batch, documenting the exact purity, molecular weight, and identity verification through mass spectrometry.',
  },
  {
    question: 'Do you ship to Australia and Bangladesh?',
    answer:
      'Yes, we ship to both Australia and Bangladesh. We offer tracked express dispatch with discreet packaging. All orders are handled in compliance with local regulations regarding research materials.',
  },
  {
    question: 'How should peptides be stored?',
    answer:
      'Lyophilized (freeze-dried) peptides should be stored at -20\u00b0C (frozen) for long-term stability. Once reconstituted with bacteriostatic water, peptides should be stored at 2-8\u00b0C (refrigerated) and used within the timeframe specified in the product documentation.',
  },
  {
    question: 'What is your shipping policy?',
    answer:
      'We offer express tracked shipping on all orders. Orders are typically dispatched within 24-48 hours of payment confirmation. All shipments include tracking numbers and are packaged discreetly for privacy.',
  },
  {
    question: 'Are your peptides for human use?',
    answer:
      'No. All products sold by Biogenix Labs are strictly for research purposes only and not for human consumption. They are intended for in-vitro testing, laboratory research, and scientific study only. By purchasing, you confirm you are a qualified researcher.',
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className="border-b border-white/5 last:border-b-0"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className={`text-base font-medium transition-colors duration-300 pr-4 ${
            isOpen ? 'text-gold-400' : 'text-white/80 group-hover:text-white'
          }`}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`text-gold-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '300px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-white/50 text-sm leading-relaxed pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-clinical-dark py-20 lg:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div
            className="text-center mb-12"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-gold-500 rounded-full" />
              <span className="text-gold-500 text-xs font-mono tracking-[0.2em] uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Common Questions
            </h2>
          </div>

          {/* FAQ List */}
          <div
            className="bg-navy-900/30 border border-white/5 rounded-xl px-6 sm:px-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
            }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
