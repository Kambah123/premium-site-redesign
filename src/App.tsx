import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Library from './pages/Library';
import ProductDetail from './pages/ProductDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  );
}

export default App;
