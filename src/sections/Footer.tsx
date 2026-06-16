import { Link } from 'react-router';

const exploreLinks = [
  { label: 'Peptide Library', href: '/library', isRoute: true },
  { label: 'Featured Products', href: '/library', isRoute: true },
  { label: 'FAQ', href: '#faq', isRoute: false },
  { label: 'Contact', href: '#contact', isRoute: false },
];

const legalLinks = [
  { label: 'Terms of Service', href: '/terms', isRoute: true },
  { label: 'Privacy Policy', href: '/privacy', isRoute: true },
  { label: 'Research Use Disclaimer', href: '/disclaimer', isRoute: true },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-navy-900/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M18 2L32 10V26L18 34L4 26V10L18 2Z"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M18 8L26 12.5V21.5L18 26L10 21.5V12.5L18 8Z"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  fill="rgba(212,175,55,0.15)"
                />
                <circle cx="18" cy="17" r="2" fill="#D4AF37" />
              </svg>
              <div className="flex flex-col">
                <span className="text-navy-900 font-semibold text-lg tracking-wide leading-tight">
                  BIOGENIX
                </span>
                <span className="text-gold-500 text-[10px] tracking-[0.3em] uppercase leading-tight font-mono">
                  Labs
                </span>
              </div>
            </div>
            <p className="text-navy-900/40 text-sm leading-relaxed mb-4 max-w-xs">
              Biogenix Labs supplies research-grade peptide compounds to academic
              institutions and qualified researchers in Australia and
              Bangladesh. All products are intended strictly for in-vitro and
              laboratory research.
            </p>
            <div className="flex items-center gap-4">
              {/* Australia Flag */}
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <rect width="20" height="14" fill="#00008B" />
                    <path d="M0 0L8 7M0 7L8 0" stroke="white" strokeWidth="1" />
                    <path d="M0 0L8 7M0 7L8 0" stroke="#C8102E" strokeWidth="0.5" />
                    <path d="M4 0L4 7M0 3.5L8 3.5" stroke="white" strokeWidth="0.8" />
                    <circle cx="15" cy="3" r="0.7" fill="white" />
                    <circle cx="16" cy="5" r="0.6" fill="white" />
                    <circle cx="17" cy="4" r="0.6" fill="white" />
                    <circle cx="18" cy="6" r="0.6" fill="white" />
                    <circle cx="16" cy="10" r="0.5" fill="white" />
                    <circle cx="17" cy="11" r="0.5" fill="white" />
                    <circle cx="18" cy="10" r="0.5" fill="white" />
                  </svg>
                </span>
                <span className="text-navy-900/50 text-xs">Australia</span>
              </div>
              {/* Bangladesh Flag */}
              <div className="flex items-center gap-2">
                <span className="text-lg">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <rect width="20" height="14" fill="#006A4E" />
                    <circle cx="9" cy="7" r="4" fill="#F42A41" />
                  </svg>
                </span>
                <span className="text-navy-900/50 text-xs">Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-navy-900 font-semibold text-sm tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-navy-900/40 hover:text-gold-500 text-sm transition-colors duration-300">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-navy-900/40 hover:text-gold-500 text-sm transition-colors duration-300">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-navy-900 font-semibold text-sm tracking-wider uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-navy-900/40 hover:text-gold-500 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-navy-900 font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
            <a
              href="mailto:info@biogenixlabs.health"
              className="text-gold-600 hover:text-gold-500 text-sm transition-colors font-medium"
            >
              info@biogenixlabs.health
            </a>
            <div className="mt-4">
              <a
                href="https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20Biogenix%20Labs%20peptides."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-900/60 hover:text-gold-500 text-sm transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-900/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-navy-900/30 text-[10px] font-mono tracking-[0.2em] uppercase font-bold">
              FOR RESEARCH PURPOSES ONLY &middot; NOT FOR HUMAN CONSUMPTION
            </span>
            <span className="text-navy-900/30 text-xs font-mono">
              &copy; {new Date().getFullYear()} Biogenix Labs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
