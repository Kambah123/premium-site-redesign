import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import InquiryCart from './components/InquiryCart';
import ScrollToTop from './components/ScrollToTop';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Library = lazy(() => import('./pages/Library'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const COADetailPage = lazy(() => import('./pages/COADetailPage'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple loading spinner for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen bg-pearl-white flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-navy-900/10 border-t-gold-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/coa/:productId" element={<COADetailPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <InquiryCart />
    </>
  );
}

export default App;
