import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Index from './pages/index/Index';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Index />
      </main>
      <Footer />
    </div>
  );
}

export default App;
