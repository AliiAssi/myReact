import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Index from './pages/index/Index';
import ContactUs from './pages/contact-us/ContactUs';
import UserFavorites from './pages/user-favorites/UserFavorites';
import RecipeDetails from './pages/recipe-details/RecipeDetails';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/user-favorites" element={<UserFavorites />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
