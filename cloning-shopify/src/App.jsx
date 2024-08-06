import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
export default function App() {
  return (
    <Router>
      {/* navbar */}
      {/* end navbar */}
      <div className="min-h-screen">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}