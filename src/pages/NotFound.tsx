import { Link } from 'react-router';
import { FileQuestion, ArrowRight } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-pearl-white flex flex-col font-sans">
      <Helmet>
        <title>Page Not Found | Biogenix Labs</title>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold-50 text-gold-500 mb-8 border border-gold-100">
            <FileQuestion size={40} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6">
            Page Not Found
          </h1>
          
          <p className="text-navy-900/60 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary flex items-center gap-2">
              Return Home
            </Link>
            <Link to="/library" className="btn-secondary flex items-center gap-2">
              Browse Library <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
