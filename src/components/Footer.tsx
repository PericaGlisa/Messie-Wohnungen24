import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Shield, CheckCircle, Star, Clock, Users, Award, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on home page, let the Link component handle navigation normally
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setNewsletterStatus('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);
    setNewsletterStatus('');

    try {
      const response = await fetch('/.netlify/functions/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus('Erfolgreich angemeldet! Prüfen Sie Ihre E-Mail.');
        setEmail('');
      } else {
        setNewsletterStatus(data.error || 'Ein Fehler ist aufgetreten.');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setNewsletterStatus('Verbindungsfehler. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100); // Lower threshold for easier testing
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-12">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Trust & Stats Banner */}
          <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 p-6 rounded-lg mb-8 border border-blue-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Users className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-300">Zufriedene Kunden</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Star className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-xl font-bold text-white">4.9/5</div>
                  <div className="text-xs text-gray-300">Kundenbewertung</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Award className="w-6 h-6 text-green-400" />
                <div>
                  <div className="text-base font-bold text-white">Faire Preise</div>
                  <div className="text-xs text-gray-300 mt-1">Garantiert</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Shield className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-300">Diskret & Respektvoll</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center mb-4 hover:opacity-80 transition-opacity duration-200" onClick={handleHomeClick}>
                <img 
                  src="/MessieLogo.webp" 
                  alt="Messie-Wohnungen24" 
                  className="h-14 w-auto mr-3"
                />
                <span className="text-lg font-bold text-blue-600">Messie-Wohnungen24</span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Professionelle, diskrete Entrümpelung von Messie-Wohnungen. 
                Wir helfen mit Verständnis und ohne Vorurteile.
              </p>

            </div>

          {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className={`transition-colors flex items-center space-x-2 ${location.pathname === '/' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`} onClick={handleHomeClick}><span>→</span><span>Start</span></Link></li>
                <li><a href="#leistungen" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"><span>→</span><span>Unsere Leistungen</span></a></li>
                <li><Link to="/ueber-uns" className={`transition-colors flex items-center space-x-2 ${location.pathname === '/ueber-uns' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`}><span>→</span><span>Über uns</span></Link></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"><span>→</span><span>Kundenstimmen</span></a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"><span>→</span><span>FAQ</span></a></li>
                <li><Link to="/kontakt" className={`transition-colors flex items-center space-x-2 ${location.pathname === '/kontakt' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`}><span>→</span><span>Kontakt</span></Link></li>
                <li><Link to="/agb" className={`transition-colors flex items-center space-x-2 ${location.pathname === '/agb' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`}><span>→</span><span>AGB</span></Link></li>
                <li><Link to="/datenschutz" className={`transition-colors flex items-center space-x-2 ${location.pathname === '/datenschutz' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`}><span>→</span><span>Datenschutz</span></Link></li>
                <li><Link to="/impressum" className={`transition-colors flex items-center space-x-2 ${location.pathname === '/impressum' ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'}`}><span>→</span><span>Impressum</span></Link></li>
              </ul>

            </div>

            {/* Service Highlights */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Unsere Stärken</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Verständnisvoll</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Diskrete Abwicklung</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Umweltgerechte Entsorgung</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Kostenlose Beratung</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Deutschlandweiter Service</span>
                </div>
              </div>

            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Servicegebiete</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>Nordrhein-Westfalen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>Hessen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>Rheinland-Pfalz</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>Baden-Württemberg</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>Niedersachsen</span>
                </li>
                <li className="flex items-center space-x-2 text-blue-400 font-semibold">
                  <MapPin className="w-3 h-3" />
                  <span>+ weitere Bundesländer</span>
                </li>
              </ul>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-2">Newsletter</h4>
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ihre E-Mail"
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-gray-700 text-white text-sm rounded border border-gray-600 focus:border-blue-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-3 py-2 text-sm rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Anmelden'}
                  </button>
                </form>
                {newsletterStatus && (
                  <p className={`text-xs mt-2 ${
                    newsletterStatus.includes('Erfolgreich') 
                      ? 'text-green-400' 
                      : 'text-red-400'
                  }`}>
                    {newsletterStatus}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-1">Tipps & Neuigkeiten</p>
              </div>
            </div>

            {/* Enhanced Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
              
              {/* Operating Hours */}
              <div className="bg-gray-700/50 p-3 rounded-lg mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-white">Öffnungszeiten</span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>Mo-Sa: 8:00 - 20:00 Uhr</div>
                  <div className="text-green-400">Diskret Hotline: 24/7 available</div>
                  <div className="text-blue-400">Schneller Kundenservice</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Phone className="w-6 h-6 text-blue-600 mb-2" />
                  <div>
                    <a href="tel:+4917670211430" className="text-gray-300 hover:text-white transition-colors font-semibold block">
                      +49 176 70211430
                    </a>
                    <div className="text-xs text-gray-400">Diskret anrufen</div>
                  </div>
                </div>
                <div>
                  <MessageCircle className="w-6 h-6 text-green-400 mb-2" />
                  <div>
                    <a 
                      href="https://wa.me/4917670211430"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors font-semibold block"
                    >
                      WhatsApp
                    </a>
                    <div className="text-xs text-gray-400">Schreiben Sie uns per WhatsApp</div>
                  </div>
                </div>
                <div>
                  <Mail className="w-6 h-6 text-blue-400 mb-2" />
                  <div>
                    <a href="mailto:info@messie-wohnungen24.de" className="text-gray-300 hover:text-white transition-colors font-semibold block">
                      info@messie-wohnungen24.de
                    </a>
                    <div className="text-xs text-gray-400">Ihre Anfrage wird innerhalb von 60 Minuten bearbeitet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-6 text-white text-center">Was unsere Kunden sagen</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">"Sehr professionell und diskret. Die Wohnung wurde schnell und gründlich gereinigt."</p>
              <p className="text-xs text-gray-400">- Maria K., Köln</p>
            </div>
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">"Endlich jemand, der versteht und nicht verurteilt. Vielen Dank für die einfühlsame Hilfe."</p>
              <p className="text-xs text-gray-400">- Thomas B., Frankfurt</p>
            </div>
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">"Schnelle Reaktion, faire Preise und umweltgerechte Entsorgung. Absolut empfehlenswert!"</p>
              <p className="text-xs text-gray-400">- Sandra M., Düsseldorf</p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-sm text-gray-300 mb-4 md:mb-0">
              <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-left">
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start space-y-1 md:space-y-0 md:space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>© 2025 Messie-Wohnungen24.de - Alle Rechte vorbehalten</span>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg text-center">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Wenn es schwerfällt, den ersten Schritt zu machen, seien Sie sicher, dass Sie nicht allein sind – wir sind da, um zu helfen, damit diese Geschichte einen neuen, sauberen und friedlichen Anfang bekommt.</strong>
          </p>
        </div>
        
      </div>
    </footer>
    {/* Back to Top Button - Rendered via Portal */}
    {showBackToTop && createPortal(
      <button
        onClick={scrollToTop}
        className="fixed bottom-16 left-4 sm:bottom-20 sm:left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-[10001] group min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        <div className="hidden sm:block absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Nach oben
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
        </div>
      </button>,
      document.body
    )}
  </>);
};

export default Footer;