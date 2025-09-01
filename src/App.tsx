import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import AGBPage from './components/AGBPage';
import DatenschutzPage from './components/DatenschutzPage';
import ImpressumPage from './components/ImpressumPage';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { initializeImagePreloading } from './utils/performance';

function App() {
  useEffect(() => {
    // Initialize optimized image preloading system
    initializeImagePreloading();
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ueber-uns" element={<AboutUsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/danke" element={<ThankYou />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;