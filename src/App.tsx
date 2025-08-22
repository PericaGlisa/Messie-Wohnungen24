import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { initializeImagePreloading } from './utils/performance';

function App() {
  useEffect(() => {
    // Initialize optimized image preloading system
    initializeImagePreloading();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Testimonials />
      </main>
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;