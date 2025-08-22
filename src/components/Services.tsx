import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Shield, Paintbrush, Truck, Handshake, Phone, Euro, CheckCircle, Star, ArrowRight, Award, Clock, Users } from 'lucide-react';
import { createAnimationObserver, batchDOMUpdates, prefersReducedMotion, getOptimizedImageProps, progressiveLoader } from '../utils/performance';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeTab, setActiveTab] = useState('einzelleistungen');

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

  const services = [
    {
      icon: Home,
      title: 'Vollständige Entrümpelung',
      description: 'Professionelle Räumung aller Räume mit größter Sorgfalt und Diskretion.',
      image: '/images/fragment-photo-children-s-room-with-scattered-things-toys.webp',

      duration: '1-3 Tage',
      process: ['Besichtigung & Kostenvoranschlag', 'Sortierung & Kategorisierung', 'Fachgerechte Entrümpelung', 'Endreinigung'],
      guarantee: 'Festpreisgarantie',
      rating: 4.9,
      reviews: 127,
      beforeAfter: { before: '/images/fragment-photo-children-s-room-with-scattered-things-toys.webp', after: '/images/man-living-tiny-house.webp' },
      testimonial: '"Sehr professionell und diskret. Bin sehr zufrieden!" - Maria K.'
    },
    {
      icon: Sparkles,
      title: 'Tiefenreinigung',
      description: 'Gründliche Reinigung nach der Entrümpelung für einen Neuanfang.',
      image: '/images/messy-interior-full-clothing.webp',

      duration: '4-8 Std',
      process: ['Grobreinigung', 'Spezialreinigung', 'Desinfektion', 'Qualitätskontrolle'],
      guarantee: 'Zufriedenheitsgarantie',
      rating: 4.8,
      reviews: 89,
      beforeAfter: { before: '/images/messy-interior-full-clothing.webp', after: '/images/person-sleeping-bed-tiny-house.webp' },
      testimonial: '"Alles blitzsauber! Perfekte Arbeit." - Thomas M.'
    },
    {
      icon: Shield,
      title: 'Desinfektion',
      description: 'Fachgerechte Desinfektion für ein hygienisch sauberes Zuhause.',
      image: '/images/abandoned-house-cluttered-interior.webp',

      duration: '2-4 Std',
      process: ['Vorreinigung', 'Professionelle Desinfektion', 'Luftreinigung', 'Abschlusskontrolle'],
      guarantee: 'Hygienezertifikat',
      rating: 4.9,
      reviews: 156,
      beforeAfter: { before: '/images/abandoned-house-cluttered-interior.webp', after: '/images/young-man-isolation-home.webp' },
      testimonial: '"Fühle mich wieder sicher in meinem Zuhause." - Anna L.'
    },
    {
      icon: Paintbrush,
      title: 'Renovierungsarbeiten',
      description: 'Kleinere Renovierungen und Instandsetzungen nach Bedarf.',
      image: '/images/messy-room-disorder-concept-living-room-bedroom-scattered-clothes-stuff-floor.webp',

      duration: '1-5 Tage',
      process: ['Schadensbewertung', 'Materialplanung', 'Renovierungsarbeiten', 'Qualitätsprüfung'],
      guarantee: '2 Jahre Gewährleistung',
      rating: 4.7,
      reviews: 73,
      beforeAfter: { before: '/images/messy-room-disorder-concept-living-room-bedroom-scattered-clothes-stuff-floor.webp', after: '/images/man-living-tiny-house.webp' },
      testimonial: '"Wie neu! Sehr zufrieden mit der Qualität." - Peter S.'
    },
    {
      icon: Truck,
      title: 'Fachgerechte Entsorgung',
      description: 'Umweltgerechte Entsorgung und Recycling aller Materialien.',
      image: '/images/miscellaneous-items-being-sold-yard-sale.webp',

      duration: '1-2 Std',
      process: ['Sortierung nach Materialien', 'Recycling-Vorbereitung', 'Fachgerechte Entsorgung', 'Entsorgungsnachweis'],
      guarantee: 'Umweltzertifikat',
      rating: 4.8,
      reviews: 201,
      beforeAfter: { before: '/images/miscellaneous-items-being-sold-yard-sale.webp', after: '/images/young-man-isolation-home.webp' },
      testimonial: '"Umweltbewusst und zuverlässig." - Sandra W.'
    },
    {
      icon: Handshake,
      title: 'Diskrete Abwicklung',
      description: 'Verständnisvolle Betreuung ohne Vorurteile oder Bewertungen.',
      image: '/images/anxiety-induced-by-clutter-house.webp',

      duration: 'Durchgehend',
      process: ['Vertrauliche Beratung', 'Diskrete Terminplanung', 'Sensible Durchführung', 'Nachbetreuung'],
      guarantee: 'Verschwiegenheitserklärung',
      rating: 5.0,
      reviews: 312,
      beforeAfter: { before: '/images/anxiety-induced-by-clutter-house.webp', after: '/images/person-sleeping-bed-tiny-house.webp' },
      testimonial: '"Endlich jemand, der versteht. Danke!" - Michael R.'
    }
  ];

  const servicePackages = [
    {
      name: 'Basis-Paket',
      services: ['Entrümpelung', 'Grobreinigung', 'Entsorgung'],

      popular: false,
      savings: '15%'
    },
    {
      name: 'Komplett-Paket',
      services: ['Entrümpelung', 'Tiefenreinigung', 'Desinfektion', 'Entsorgung'],

      popular: true,
      savings: '25%'
    },
    {
      name: 'Premium-Paket',
      services: ['Entrümpelung', 'Tiefenreinigung', 'Desinfektion', 'Renovierung', 'Entsorgung'],

      popular: false,
      savings: '30%'
    }
  ];

  return (
    <section id="leistungen" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3" />
            <span className="text-blue-600 font-semibold text-base sm:text-lg">Zertifizierte Qualität</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Wir bieten Ihnen ein komplettes Leistungspaket für einen erfolgreichen Neuanfang
          </p>
          
          {/* Trust Signals */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 px-4">
            <div className="flex items-center justify-center text-gray-600">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
              <span className="text-sm sm:text-base">Über 2.500 zufriedene Kunden</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2" />
              <span className="text-sm sm:text-base">TÜV-zertifiziert</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2" />
              <span className="text-sm sm:text-base">24h Notdienst</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2" />
              <span className="text-sm sm:text-base">100% Diskret</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-white rounded-lg p-1 shadow-md w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={() => setActiveTab('einzelleistungen')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeTab === 'einzelleistungen'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Einzelleistungen
              </button>
              <button
                onClick={() => setActiveTab('pakete')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeTab === 'pakete'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Service-Pakete
              </button>
              <button
                onClick={() => setActiveTab('vergleich')}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-200 text-sm sm:text-base ${
                  activeTab === 'vergleich'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Vergleich
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
                  className={`service-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: prefersReducedMotion() ? '0ms' : `${index * 80}ms`,
                    willChange: 'transform, opacity, box-shadow'
                  }}
                >
                  {/* Image with Price Badge */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                      {...getOptimizedImageProps(service.image, 'low')}
                      style={{ willChange: 'transform' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/95 rounded-lg backdrop-blur-sm">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center text-white text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    {/* Title and Rating */}
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex-1">
                        {service.title}
                      </h3>
                      <div className="flex items-center ml-2">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <span className="text-xs sm:text-sm text-gray-600 ml-1">{service.rating}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      {service.description}
                    </p>
                    
                    {/* Guarantee Badge */}
                    <div className="flex items-center mb-3 sm:mb-4">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      <span className="text-xs sm:text-sm text-gray-600">{service.guarantee}</span>
                    </div>
                    
                    {/* Reviews */}
                    <div className="flex items-center mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span>{service.reviews} Bewertungen</span>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button 
                        onClick={() => setSelectedService(index)}
                        className="flex-1 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
                      >
                        Details
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </button>
                      <button className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base">
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Anrufen
                      </button>
                    </div>
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
                
                <button className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base ${
                  pkg.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Paket wählen
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Service Comparison */}
        {activeTab === 'vergleich' && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-800">Leistung</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-800">Basis</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-800">Komplett</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-800">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {['Entrümpelung', 'Tiefenreinigung', 'Desinfektion', 'Renovierung', 'Entsorgung', '24h Service'].map((feature, idx) => (
                    <tr key={idx}>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-800">{feature}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                        {(idx < 1 || idx === 4) ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">-</span>}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                        {idx < 3 || idx === 4 ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" /> : <span className="text-gray-300">-</span>}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Service Detail Modal */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50" onClick={() => setSelectedService(null)}>
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 pr-4">{services[selectedService].title}</h3>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
                
                {/* Before/After Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700">Vorher</h4>
                    <img 
                      src={services[selectedService].beforeAfter.before}
                      alt="Vorher"
                      className="w-full h-40 sm:h-48 object-cover rounded-lg"
                      {...getOptimizedImageProps(services[selectedService].beforeAfter.before, 'high')}
                    />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700">Nachher</h4>
                    <img 
                      src={services[selectedService].beforeAfter.after}
                      alt="Nachher"
                      className="w-full h-40 sm:h-48 object-cover rounded-lg"
                      {...getOptimizedImageProps(services[selectedService].beforeAfter.after, 'high')}
                    />
                  </div>
                </div>
                
                {/* Process Steps */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Unser Prozess</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {services[selectedService].process.map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold mr-2 sm:mr-3 flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-sm sm:text-base text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Customer Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Kundenmeinung</h4>
                  <p className="text-sm sm:text-base text-gray-600 italic">{services[selectedService].testimonial}</p>
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;