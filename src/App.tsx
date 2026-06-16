import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Library from './pages/Library';
import ArticleDetail from './pages/ArticleDetail';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import COADetailPage from './pages/COADetailPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/:slug" element={<ArticleDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/marketplace/:slug" element={<ProductDetail />} />
      <Route path="/coa/:productId" element={<COADetailPage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  );
}

export default App;
