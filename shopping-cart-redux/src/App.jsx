import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/side-bar/SideBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
