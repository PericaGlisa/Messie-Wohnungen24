import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, Clock, Shield, Euro, Award, MapPin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="start" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-green-900/60 z-10"></div>
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/1.webp" 
            srcSet="
              /images/optimized/1-320w.webp 320w,
              /images/optimized/1-480w.webp 480w,
              /images/optimized/1-768w.webp 768w,
              /images/optimized/1-1024w.webp 1024w
            "
            sizes="100vw"
            alt="Professionelle Entrümpelung" 
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            style={{ willChange: 'auto' }}
          />
        </div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Emergency Contact Banner with Vibration Effect */}
          <div className="emergency-hotline bg-blue-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 inline-flex items-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 max-w-full">
            <div className="phone-icon flex-shrink-0">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </div>
            <span className="font-semibold hotline-text text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
              24/7 Diskret Hotline: +49 176 70211430
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="block sm:hidden">
              Messie Wohnung Entrümpelung in Frankfurt – Professionelle Räumung
            </span>
            <span className="hidden sm:block">
              Messie Wohnung Entrümpelung in Frankfurt am Main – Professionelle Wohnungsauflösung
            </span>
          </h1>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-6 px-4">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 min-w-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">500+ zufriedene Kunden</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 min-w-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">Deutschlandweit</span>
            </div>
          </div>
          
          <p className="text-xl lg:text-2xl text-white mb-8 max-w-4xl mx-auto drop-shadow-2xl">
            <span className="text-blue-200 font-semibold">Diskret</span>,
            <span className="text-green-200 font-semibold mx-2">Schnell Termin</span>,
            <span className="text-blue-200 font-semibold">Verständnisvoll</span>
          </p>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto drop-shadow-2xl">
            <span className="block sm:hidden">
              <span className="text-yellow-300 font-semibold">Komplette Entrümpelung</span>, <span className="text-green-300 font-semibold">gründliche Reinigung</span> und <span className="text-yellow-300 font-semibold">Renovierung</span> zu <span className="text-yellow-300 font-semibold">transparenten Preisen</span>!
            </span>
            <span className="hidden sm:block">
              Messie-Wohnungen24 übernimmt die komplette Betreuung – von der <span className="text-yellow-300 font-semibold">Entrümpelung, Abholung von Sperrmüll und Entsorgung des Abfalls</span> <span className="text-green-300 font-semibold">bis hin zur gründlichen Reinigung ganz nach Ihren Wünschen</span>. Zusätzlich <span className="text-yellow-300 font-semibold">streichen wir und führen eine Spezialreinigung von Wänden und Böden durch</span>, sodass sich Ihr Zuhause wieder <span className="text-green-300 font-semibold">wie neu renoviert anfühlt</span>! Und das alles zu fairen, festen und <span className="text-yellow-300 font-semibold">transparenten Preisen</span>! Sie sind hier genau richtig!
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <a
            href="tel:+4917670211430"
            className="bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-800 transition-all duration-200 shadow-lg transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Diskret anrufen</span>
            </div>
            <span className="text-xs mt-1 text-blue-100">Jetzt anrufen</span>
          </a>

            <a
            href="https://wa.me/4917670211430?text=Hallo,%20ich%20benötige%20diskrete%20Hilfe%20bei%20einer%20Wohnungsräumung"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-800 transition-all duration-200 shadow-lg transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>WhatsApp</span>
            </div>
            <span className="text-xs mt-1 text-green-100">Schreiben Sie uns per WhatsApp</span>
          </a>

            <button
            onClick={() => {
              const contactForm = document.querySelector('#contact-form');
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-800 transition-all duration-200 shadow-lg transform hover:scale-105 flex flex-col items-center justify-center"
          >
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Kostenloses angebot</span>
            </div>
            <span className="text-xs mt-1 text-orange-100">In 60 Minute zum Festpreis</span>
          </button>
          </div>

          {/* Trust Elements */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 mb-2 sm:mb-3 lg:mb-4" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-center">Sofortige Rückmeldung</h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 text-center">Schnelle Antwort auf Ihre Anfrage</p>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600 mb-2 sm:mb-3 lg:mb-4" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-center">100% Diskret</h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 text-center">Absolute Vertraulichkeit garantiert</p>
            </div>
            <div className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 md:col-span-1">
              <Euro className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 mb-2 sm:mb-3 lg:mb-4" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-center">Festpreisgarantie</h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 text-center">Transparente Kostenstruktur</p>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-8 flex justify-center items-center opacity-80">
            <div className="flex items-center space-x-2 text-white">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">Vertrauensvoller Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;