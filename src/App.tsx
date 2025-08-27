import React, { useEffect, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import { initializeImagePreloading } from './utils/performance';

// Lazy load non-critical components
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Footer = React.lazy(() => import('./components/Footer'));
import WhatsAppFloat from './components/WhatsAppFloat';

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
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
          <Testimonials />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse" />}>
        <Footer />
      </Suspense>
      <WhatsAppFloat />
    </div>
  );
}

export default App;