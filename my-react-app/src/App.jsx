import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Page___ from "./pages/Page___";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-5 mb-16">
        <div className="mt-16 px-6">
          <div className="container mx-auto">
            <Page___ />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
