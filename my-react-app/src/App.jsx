import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Page from '././pages/Page';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-5 mb-16">
          <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
