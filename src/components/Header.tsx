import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Shield, Clock, Star, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on home page, navigate to home page first
        e.preventDefault();
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on home page, let the Link component handle navigation normally
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Start', href: '/', isRoute: true },
    { name: 'Unsere Leistungen', href: '#leistungen', hasDropdown: true },
    { name: 'Über uns', href: '/ueber-uns', isRoute: true },
    { name: 'Kundenstimmen', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '/kontakt', isRoute: true },
  ];

  const services = [
    { name: 'Vollständige Entrümpelung und Abtransport von Sperrmüll', href: '#leistungen' },
    { name: 'Tiefen- und Spezialreinigung aller Oberflächen', href: '#leistungen' },
    { name: 'Desinfektion der Räume für absolute Hygiene', href: '#leistungen' },
    { name: 'Geruchsneutralisation', href: '#leistungen' },
    { name: 'Entfernung alter Böden oder gründliche Reinigung der bestehenden', href: '#leistungen' },
    { name: 'Malerarbeiten', href: '#leistungen' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-blue-50 via-white to-green-50 shadow-sm'
    }`}>
      {/* Promotional Banner */}
      <div className="bg-white text-blue-600 py-2 overflow-hidden border-b border-gray-200">
        <div className="animate-pulse">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-xs sm:text-sm font-bold px-4">
              +++ AKTUELLE INFORMATION +++ Einführungsrabatt – 30% auf den ersten Auftrag bundesweit. Nur bis 15.09. buchen und 30% sparen – Einsatzdatum frei wählbar.
            </span>
          </div>
        </div>
      </div>
      
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span className="font-medium hidden xs:inline">100% Diskret & Zufriedenheit garantiert</span>
              <span className="font-medium xs:hidden">100% Diskret</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span className="font-medium hidden xs:inline">24/7 Immer für Sie da</span>
              <span className="font-medium xs:hidden">24/7 Service</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-300" />
              <span className="font-medium hidden sm:inline">4.9/5 Sterne • 500+ Kunden</span>
              <span className="font-medium sm:hidden">4.9★ 500+</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200" onClick={handleHomeClick}>
            <img 
              src="/MessieLogo.webp" 
              alt="Logo" 
              className="h-12 w-auto"
            />
            <h1 className="text-lg font-bold text-blue-600">
               Messie-Wohnungen24
             </h1>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg hover:bg-blue-50"
                      onMouseEnter={() => setShowServices(true)}
                      onMouseLeave={() => setShowServices(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {showServices && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 pointer-events-auto"
                        onMouseEnter={() => setShowServices(true)}
                        onMouseLeave={() => setShowServices(false)}
                      >
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={(e) => handleHashClick(e, service.href)}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.isRoute ? (
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg ${
                        location.pathname === item.href 
                          ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={item.name === 'Start' ? handleHomeClick : () => {}}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap px-3 py-2 rounded-lg hover:bg-blue-50"
                      onClick={(e) => handleHashClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            ))}
          </nav>

          {/* Contact Section */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+4917670211430"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+49 176 70211430</span>
            </a>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isMenuOpen) {
                setShowMobileServices(false);
              }
            }}
            className="lg:hidden p-2 rounded-lg text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            {/* Mobile Trust Banner */}
            <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <div className="flex items-center justify-center space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>100% Diskret</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>24/7 Service</span>
                </div>
              </div>
            </div>
            
            <div className="px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <button
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-3 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200 w-full text-left"
                        onClick={() => setShowMobileServices(!showMobileServices)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMobileServices ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      item.isRoute ? (
                        <Link
                          to={item.href}
                          className={`flex items-center justify-between font-medium py-3 px-3 rounded-lg transition-all duration-200 ${
                            location.pathname === item.href 
                              ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          onClick={(e) => {
                            if (item.name === 'Start') {
                              handleHomeClick(e);
                            }
                            setIsMenuOpen(false);
                            setShowMobileServices(false);
                          }}
                        >
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-medium py-3 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                          onClick={(e) => {
                            handleHashClick(e, item.href);
                            setIsMenuOpen(false);
                            setShowMobileServices(false);
                          }}
                        >
                          <span>{item.name}</span>
                        </a>
                      )
                    )}
                    {item.hasDropdown && showMobileServices && (
                      <div className="ml-4 mt-2 space-y-2 overflow-hidden">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-3 rounded hover:bg-blue-50 transition-colors duration-200"
                            onClick={(e) => {
                              handleHashClick(e, service.href);
                              setIsMenuOpen(false);
                              setShowMobileServices(false);
                            }}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Button */}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href="tel:+4917670211430"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">+49 176 70211430</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;