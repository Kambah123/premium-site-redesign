import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'Products', href: '/library', isRoute: true },
  { label: 'Research', href: '/#about', isRoute: false },
  { label: 'FAQ', href: '/#faq', isRoute: false },
  { label: 'Contact', href: '/#contact', isRoute: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-navy-900/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Hexagonal molecular logo */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="transition-transform duration-300 group-hover:scale-110"
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
              <circle cx="12" cy="13" r="1.5" fill="#D4AF37" opacity="0.6" />
              <circle cx="24" cy="13" r="1.5" fill="#D4AF37" opacity="0.6" />
              <circle cx="12" cy="21" r="1.5" fill="#D4AF37" opacity="0.6" />
              <circle cx="24" cy="21" r="1.5" fill="#D4AF37" opacity="0.6" />
            </svg>
            <div className="flex flex-col">
              <span className={`${scrolled ? 'text-navy-900' : 'text-white'} font-semibold text-lg tracking-wide leading-tight transition-colors duration-300`}>
                BIOGENIX
              </span>
              <span className="text-gold-500 text-[10px] tracking-[0.3em] uppercase leading-tight font-mono">
                Labs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`${scrolled ? 'text-navy-900/70' : 'text-white/70'} hover:text-gold-500 text-sm font-medium transition-colors duration-300 relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); navigate(link.href); }}
                  className={`${scrolled ? 'text-navy-900/70' : 'text-white/70'} hover:text-gold-500 text-sm font-medium transition-colors duration-300 relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className={`${scrolled ? 'text-navy-900/70' : 'text-white/70'} hover:text-gold-500 transition-colors p-2`}>
              <Search size={20} />
            </button>
            <button className={`${scrolled ? 'text-navy-900/70' : 'text-white/70'} hover:text-gold-500 transition-colors p-2 relative`}>
              <ShoppingCart size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20Biogenix%20Labs%20peptides."
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 border ${scrolled ? 'border-navy-900 bg-navy-900 text-white hover:bg-transparent hover:text-navy-900' : 'border-white/20 text-white hover:bg-white hover:text-navy-900'} text-sm font-medium px-5 py-2.5 rounded-pill transition-all duration-300`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Inquiry
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white/70 hover:text-gold-400 text-base font-medium transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/70 hover:text-gold-400 text-base font-medium transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://wa.me/61489995818??text=Hi%2C%20I'm%20interested%20in%20Biogenix%20Labs%20peptides."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-900 font-medium px-6 py-3 rounded-pill mt-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
