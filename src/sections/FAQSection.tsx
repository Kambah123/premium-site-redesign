import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const faqs = [
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, Biogenix Labs maintains a robust global logistics network. We currently provide secure, tracked, and discreet shipping to research institutions, laboratories, and qualified researchers across the United States, Australia, Pakistan, and Bangladesh. All international shipments are carefully packaged to ensure the integrity and stability of the compounds during transit, fully complying with relevant local regulations regarding research materials.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'We prioritize the rapid dispatch of all research materials to ensure compound viability. Orders are typically processed and shipped within 24 hours of payment clearance. For clients located in the United States and Australia, our expedited delivery network generally ensures arrival within 3 to 5 business days. Transit times for Pakistan and Bangladesh may vary slightly based on customs processing, but all shipments include comprehensive tracking so you can monitor your parcel\'s progress in real-time.',
  },
  {
    question: 'What forms of payment do you take?',
    answer: 'To accommodate the diverse needs of our international clientele and ensure maximum security and privacy, we accept a variety of payment methods. Currently, we process transactions via secure Bank Transfer, Western Union, and major Cryptocurrencies (including Bitcoin and USDT). To facilitate a seamless and confidential checkout process, please contact our support team directly via our verified WhatsApp channel to finalize your invoice and receive detailed payment instructions.',
  },
  {
    question: 'Can I get lab reports?',
    answer: 'Transparency and scientific rigor are the cornerstones of Biogenix Labs. We guarantee a minimum purity of 99% for all our research compounds. Every single batch is subjected to stringent independent third-party High-Performance Liquid Chromatography (HPLC) testing. Comprehensive Certificates of Analysis (COA) and mass spectrometry reports are available and provided to our clients, ensuring you have the precise, verified molecular data required for reproducible laboratory research.',
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
      className="border-b border-navy-900/5 last:border-b-0"
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
            isOpen ? 'text-gold-600' : 'text-navy-900/70 group-hover:text-navy-900'
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
        <p className="text-navy-900/50 text-sm leading-relaxed pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { t } = useLanguage();
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
      className="bg-pearl-white py-20 lg:py-28"
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
                {t.faqLabel}
              </span>
            </div>
            <h2 className="text-navy-900 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              {t.faqTitle}
            </h2>
          </div>

          {/* FAQ List */}
          <div
            className="bg-white border border-navy-900/5 rounded-xl px-6 sm:px-8 shadow-xs"
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
