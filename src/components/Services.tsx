import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Home, Sparkles, Shield, Paintbrush, Truck, Handshake, Euro, ArrowRight, Clock, Phone, CheckCircle, X } from 'lucide-react';
import { createAnimationObserver, batchDOMUpdates, prefersReducedMotion, getOptimizedImageProps, progressiveLoader } from '../utils/performance';
import LazyImage from './LazyImage';

// ServiceModal Component
const ServiceModal = ({ service, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      <div 
        className="relative bg-white rounded-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 pr-4">
              {service.title}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
              aria-label="Modal schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Image Gallery */}
          {service.beforeAfter.single ? (
            <div className="mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700">Projektbild</h4>
              <LazyImage 
                src={service.beforeAfter.single}
                alt={service.title}
                className="w-full h-64 sm:h-80 object-cover rounded-lg mx-auto"
                priority="high"
                sizes="100vw"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700">Vorher</h4>
                <LazyImage 
                  src={service.beforeAfter.before}
                  alt="Vorher"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg"
                  priority="high"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700">Nachher</h4>
                <LazyImage 
                  src={service.beforeAfter.after}
                  alt="Nachher"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg"
                  priority="high"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
          
          {/* Customer Testimonial */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Kundenmeinung</h4>
            <p className="text-sm sm:text-base text-gray-600 italic">{service.testimonial}</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex-1 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
              Kostenvoranschlag anfordern
            </button>
            <button className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Sofort anrufen
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Services = React.memo(() => {
 const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('einzelleistungen');
  const [visibleCards, setVisibleCards] = useState([]);
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  useEffect(() => {
    const observer = createAnimationObserver(
      (entries) => {
        const updates: (() => void)[] = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index || '0');
            updates.push(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            });
          }
        });
        if (updates.length > 0) {
          batchDOMUpdates(updates);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', once: true }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Memoized services array to prevent unnecessary re-renders
  const services = useMemo(() => [
    {
      icon: Home,
      title: 'Vollständige Entrümpelung und Abtransport von Sperrmüll',
      description: 'Professionelle Räumung aller Räume mit größter Sorgfalt und Diskretion.',
      image: '/images/10.webp',
      duration: '1-3 Tage',
      process: ['Besichtigung & Kostenvoranschlag', 'Sortierung & Kategorisierung', 'Fachgerechte Entrümpelung', 'Endreinigung'],
      guarantee: 'Festpreisgarantie',
      rating: 4.9,
      reviews: 127,
      beforeAfter: { before: '/images/9.webp', after: '/images/10.webp' },
      testimonial: '"Sehr professionell und diskret. Bin sehr zufrieden!" - Maria K.'
    },
    {
      icon: Sparkles,
      title: 'Tiefen- und Spezialreinigung aller Oberflächen',
      description: 'Gründliche Reinigung nach der Entrümpelung für einen Neuanfang.',
      image: '/images/2.webp',
      duration: '4-8 Std',
      process: ['Grobreinigung', 'Spezialreinigung', 'Desinfektion', 'Qualitätskontrolle'],
      guarantee: 'Zufriedenheitsgarantie',
      rating: 4.8,
      reviews: 89,
      beforeAfter: { before: '/images/1.webp', after: '/images/2.webp' },
      testimonial: '"Endlich wieder ein sauberes Zuhause!" - Thomas M.'
    },
    {
      icon: Shield,
      title: 'Desinfektion der Räume für absolute Hygiene',
      description: 'Fachgerechte Desinfektion für ein hygienisch sauberes Zuhause.',
      image: '/images/21.webp',
      duration: '2-4 Std',
      process: ['Vorreinigung', 'Professionelle Desinfektion', 'Luftreinigung', 'Abschlusskontrolle'],
      guarantee: 'Hygienezertifikat',
      rating: 4.9,
      reviews: 8,
      beforeAfter: { single: '/images/21.webp' },
      testimonial: '"Fühle mich wieder sicher in meinem Zuhause." - Anna L.'
    },
    {
      icon: Paintbrush,
      title: 'Geruchsneutralisation',
      description: 'Professionelle Beseitigung unangenehmer Gerüche für frische Raumluft.',
      image: '/images/22.webp',
      duration: '2-4 Std',
      process: ['Geruchsanalyse', 'Spezialbehandlung', 'Neutralisation', 'Qualitätsprüfung'],
      guarantee: 'Geruchsfreiheitsgarantie',
      rating: 4.7,
      reviews: 73,
      beforeAfter: { single: '/images/22.webp' },
      testimonial: '"Endlich wieder frische Luft!" - Peter S.'
    },
    {
      icon: Truck,
      title: 'Entfernung alter Böden oder gründliche Reinigung der bestehenden',
      description: 'Fachgerechte Bodenbehandlung für optimale Hygiene und Optik.',
      image: '/images/20.webp',
      duration: '1-3 Tage',
      process: ['Zustandsbewertung', 'Entfernung/Reinigung', 'Grundbehandlung', 'Qualitätskontrolle'],
      guarantee: 'Qualitätsgarantie',
      rating: 4.8,
      reviews: 201,
      beforeAfter: { before: '/images/19.webp', after: '/images/20.webp' },
      testimonial: '"Perfekte Bodenbehandlung!" - Sandra W.'
    },
    {
      icon: Handshake,
      title: 'Malerarbeiten',
      description: 'Professionelle Malerarbeiten für den perfekten Abschluss.',
      image: '/images/12.webp',
      duration: '1-3 Tage',
      process: ['Oberflächenvorbereitung', 'Grundierung', 'Anstricharbeiten', 'Endkontrolle'],
      guarantee: '2 Jahre Gewährleistung',
      rating: 5.0,
      reviews: 312,
      beforeAfter: { before: '/images/11.webp', after: '/images/12.webp' },
      testimonial: '"Wie neu gestrichen! Perfekt!" - Michael R.'
    }
  ], []);

  // Preload modal images on hover - memoized to prevent unnecessary re-renders
  const preloadModalImages = useCallback((serviceIndex: number) => {
    if (preloadedImages.has(serviceIndex)) return;
    
    const service = services[serviceIndex];
    if (service?.beforeAfter) {
      // Create image elements to trigger preloading
      const beforeImg = new Image();
      const afterImg = new Image();
      
      beforeImg.src = service.beforeAfter.before;
      afterImg.src = service.beforeAfter.after;
      
      setPreloadedImages(prev => new Set([...prev, serviceIndex]));
    }
  }, [services, preloadedImages]);

  const servicePackages = [
    {
      name: 'Neuer Anfang',
      services: [
        'Vollständige Entrümpelung und Abtransport von Sperrmüll',
        'Grobreinigung'
      ],
      popular: false,
      savings: '15%'
    },
    {
      name: 'Sauber & Sicher',
      services: [
        'Vollständige Entrümpelung und Abtransport von Sperrmüll',
        'Tiefen- und Spezialreinigung aller Oberflächen',
        'Desinfektion der Räume für absolute Hygiene',
        'Geruchsneutralisation',
        'Entfernung alter Böden oder gründliche Reinigung der bestehenden'
      ],
      popular: true,
      savings: '25%'
    },
    {
      name: 'Komplette Verwandlung',
      services: [
        'Vollständige Entrümpelung und Abtransport von Sperrmüll',
        'Tiefen- und Spezialreinigung aller Oberflächen',
        'Desinfektion der Räume für absolute Hygiene',
        'Geruchsneutralisation',
        'Entfernung alter Böden oder gründliche Reinigung der bestehenden',
        'Malerarbeiten'
      ],
      popular: false,
      savings: '30%'
    }
  ];

  return (
    <section id="leistungen" className="relative py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Professionelle Dienstleistungen für Messie-Wohnungen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Wir bieten Ihnen ein komplettes Leistungspaket für einen erfolgreichen Neuanfang
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('einzelleistungen')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeTab === 'einzelleistungen'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-100'
                }`}
              >
                Einzelleistungen
              </button>
              <button
                onClick={() => setActiveTab('pakete')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeTab === 'pakete'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-100'
                }`}
              >
                Service-Pakete
              </button>
            </div>
          </div>

        </div>



        {/* Individual Services */}
        {activeTab === 'einzelleistungen' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isVisible = visibleCards.includes(index);
              return (
                <div 
                  key={index}
                  data-index={index}
                  className={`service-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform flex flex-col ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: prefersReducedMotion() ? '0ms' : `${index * 80}ms`,
                    willChange: 'transform, opacity, box-shadow'
                  }}
                  onMouseEnter={() => preloadModalImages(index)}
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <LazyImage 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                      priority={index < 3 ? "high" : "low"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ willChange: 'transform' }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    
                    {/* Spacer to push button to bottom */}
                    <div className="flex-1"></div>
                    
                    {/* Details Button */}
                    <button 
                      onClick={() => setSelectedService(index)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base mt-auto"
                    >
                      Details
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </button>
                  </div>
                  

                </div>
              );
            })}
          </div>
        )}

        {/* Service Packages */}
        {activeTab === 'pakete' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {servicePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-blue-500 sm:scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Beliebteste Wahl
                  </div>
                )}
                
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-green-600 font-semibold text-sm sm:text-base">Sparen Sie {pkg.savings}</div>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/4917670211430?text=${encodeURIComponent(`Hallo! Ich interessiere mich für das Paket "${pkg.name}" (Sparen Sie ${pkg.savings}):\n\n${pkg.services.map(service => `• ${service}`).join('\n')}\n\nKönnen Sie mir ein Angebot erstellen?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base inline-block text-center ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Paket wählen
                </a>
              </div>
            ))}
          </div>
        )}




      </div>
      
      {/* Central Modal */}
      {selectedService !== null && (
        <ServiceModal 
          service={activeTab === 'einzelleistungen' ? services[selectedService] : servicePackages[selectedService]}
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
});

export default Services;