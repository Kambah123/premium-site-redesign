import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router';
import { featuredProducts } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

function ProductCard({
  product,
  index,
}: {
  product: typeof featuredProducts[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -8,
      y: x * 8,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <Link
      ref={cardRef}
      to={`/products/${product.id}`}
      className="preserve-3d relative block bg-white rounded-2xl overflow-hidden border border-navy-900/5 transition-all duration-300 hover:border-gold-500/30 hover:shadow-xl hover:shadow-navy-900/5 group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(0)` : 'translateY(40px)',
        transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-pearl-shimmer/50 to-white p-6">
        <img
          src={product.image || '/images/products/retatrutide_10mg.webp'}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] font-mono font-medium tracking-wider uppercase px-2.5 py-1 rounded-full">
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-navy-900 text-lg font-semibold group-hover:text-gold-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gold-600 text-xs font-mono mt-0.5">{product.dosage}</p>
          </div>
          <span className="bg-navy-900/5 text-navy-900/40 text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded-full border border-navy-900/10">
            Research
          </span>
        </div>
        <p className="text-navy-900/40 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.tagline}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gold-600 text-xs font-medium group-hover:underline">View Details →</span>
          <a
            href="https://wa.me/61489995818?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Biogenix%20Labs%20peptides."
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-900/20 hover:text-gold-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </Link>
  );
}

export default function ProductGrid() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
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
      id="products"
      ref={sectionRef}
      className="bg-pearl-white py-20 lg:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className="mb-12 lg:mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-gold-500 rounded-full" />
            <span className="text-navy-900/40 text-xs font-mono tracking-[0.2em] uppercase">
              {t.marketplaceLabel}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-navy-900 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              {t.marketplaceTitle1}
              <br />
              {t.marketplaceTitle2}
            </h2>
            <Link
              to="/library"
              className="inline-flex items-center gap-2 text-navy-900/60 hover:text-gold-600 text-sm font-medium transition-colors"
            >
              {t.viewAllProducts}
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
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
