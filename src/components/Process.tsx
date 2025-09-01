import React, { useState, useEffect } from 'react';
import { Phone, Eye, FileText, Wrench, Heart, Clock, CheckCircle, Star, Play, Users, Shield, Award, X, Info, TrendingUp, Zap } from 'lucide-react';
import { createAnimationObserver, batchDOMUpdates, prefersReducedMotion, getOptimizedImageProps } from '../utils/performance';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [showVideo, setShowVideo] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [hoveredComparison, setHoveredComparison] = useState(null);
  const [showComparisonDetails, setShowComparisonDetails] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = createAnimationObserver(
      (entries) => {
        const updates: (() => void)[] = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            updates.push(() => {
              setVisibleSteps(prev => new Set([...prev, stepIndex]));
            });
          }
        });
        if (updates.length > 0) {
          batchDOMUpdates(updates);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px', once: true }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Phone,
      title: 'Kontakt',
      description: 'Diskrete Kontaktaufnahme über Telefon, WhatsApp oder unser Kontaktformular.',
      image: '/images/young-man-isolation-home.jpg',
      timeframe: 'Sofort',
      testimonial: '"Die erste Kontaktaufnahme war sehr einfühlsam und diskret."',
      guarantee: '100% Vertraulichkeit',
      faq: {
        question: 'Wie diskret ist der erste Kontakt?',
        answer: 'Wir behandeln alle Anfragen streng vertraulich. Unsere Mitarbeiter sind speziell geschult und verstehen die Sensibilität Ihrer Situation.'
      }
    },
    {
      icon: Eye,
      title: 'Besichtigung',
      description: 'Unverbindliche Besichtigung vor Ort - selbstverständlich diskret und vertraulich.',
      image: '/images/picture-girl-s-children-s-room-with-strong-mess.png',
      timeframe: 'Innerhalb 24h',
      testimonial: '"Kein Urteil, nur professionelle Einschätzung - das hat mir Mut gemacht."',
      guarantee: 'Kostenlose Erstberatung',
      faq: {
        question: 'Was passiert bei der Besichtigung?',
        answer: 'Wir verschaffen uns einen Überblick über die Situation, messen Räume aus und besprechen Ihre Wünsche - alles ohne Verpflichtung.'
      }
    },
    {
      icon: FileText,
      title: 'Angebot',
      description: 'Transparentes Festpreisangebot ohne versteckte Kosten oder Überraschungen.',
      image: '/images/fast-fashion-concept-with-piles-clothes.jpg',
      timeframe: 'Binnen 2 Stunden',
      testimonial: '"Endlich ein faires Angebot ohne versteckte Kosten!"',
      guarantee: 'Festpreisgarantie',
      faq: {
        question: 'Entstehen zusätzliche Kosten?',
        answer: 'Nein, unser Festpreis beinhaltet alle Leistungen. Es gibt keine versteckten Kosten oder Nachforderungen.'
      }
    },
    {
      icon: Wrench,
      title: 'Durchführung',
      description: 'Professionelle Durchführung aller Arbeiten mit größter Sorgfalt und Diskretion.',
      image: '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains.jpg',
      timeframe: '1-3 Tage',
      testimonial: '"Das Team war so respektvoll und professionell - ich fühlte mich verstanden."',
      guarantee: 'Vollversicherung',
      faq: {
        question: 'Wie läuft die Räumung ab?',
        answer: 'Wir arbeiten systematisch und respektvoll. Wertgegenstände werden gesichert, Entsorgung erfolgt umweltgerecht.'
      }
    },
    {
      icon: Heart,
      title: 'Neuanfang',
      description: 'Ihr neues, sauberes Zuhause - bereit für einen hoffnungsvollen Neuanfang.',
      image: '/images/man-living-tiny-house.png',
      timeframe: 'Sofort nutzbar',
      testimonial: '"Ich kann wieder durchatmen - mein Zuhause ist wieder ein Ort der Ruhe."',
      guarantee: 'Nachbetreuung inklusive',
      faq: {
        question: 'Was passiert nach der Räumung?',
        answer: 'Wir stehen Ihnen auch nach der Räumung zur Verfügung und helfen bei der Organisation des Neuanfangs.'
      }
    }
  ];

  const certifications = [
    { icon: Shield, text: 'Zertifizierte Fachkräfte' },
    { icon: Award, text: 'Qualitätsgarantie' },
    { icon: Users, text: 'Über 500 zufriedene Kunden' }
  ];

  const competitorComparison = [
    { 
      feature: 'Diskrete Beratung', 
      us: true, 
      others: false, 
      description: 'Einfühlsame, professionelle Beratung ohne Vorurteile',
      metric: '100% vertraulich'
    },
    { 
      feature: 'Festpreisgarantie', 
      us: true, 
      others: false, 
      description: 'Transparente Kosten ohne versteckte Gebühren',
      metric: 'Keine Nachforderungen'
    },
    { 
      feature: '24h Erreichbarkeit', 
      us: true, 
      others: false, 
      description: 'Rund um die Uhr für Sie da - auch am Wochenende',
      metric: 'Ø 2h Reaktionszeit'
    },
    { 
      feature: 'Psychologische Betreuung', 
      us: true, 
      others: false, 
      description: 'Geschulte Fachkräfte mit psychologischer Ausbildung',
      metric: 'Zertifizierte Berater'
    },
    { 
      feature: 'Nachbetreuung', 
      us: true, 
      others: false, 
      description: 'Langfristige Unterstützung auch nach der Räumung',
      metric: '6 Monate kostenlos'
    },
    { 
      feature: 'Deutschlandweite Verfügbarkeit', 
      us: true, 
      others: false, 
      description: 'Flächendeckender Service in allen Bundesländern',
      metric: '16 Bundesländer'
    },
    { 
      feature: 'Umweltgerechte Entsorgung', 
      us: true, 
      others: true, 
      description: 'Nachhaltige Verwertung und fachgerechte Entsorgung',
      metric: '95% Recyclingquote'
    },
    { 
      feature: 'Vollversicherung', 
      us: true, 
      others: false, 
      description: 'Umfassender Versicherungsschutz für alle Arbeiten',
      metric: 'Bis 2 Mio. €'
    }
  ];

  return (
    <section id="prozess" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            So arbeiten wir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Unser bewährter 5-Schritte-Prozess garantiert Ihnen eine diskrete und professionelle Abwicklung
          </p>
          
          {/* Video Introduction */}
          <div className="mb-8">
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Play className="w-5 h-5" />
              Prozess-Video ansehen
            </button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <cert.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-6 mb-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  data-step={index}
                  className={`flex flex-col items-center relative group cursor-pointer transition-all duration-300 ${
                    visibleSteps.has(index) ? 'animate-fade-in-up' : 'opacity-0'
                  } ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  } animate-delay-${index * 100}`}
                  style={{
                    animationDelay: prefersReducedMotion() ? '0ms' : `${index * 80}ms`,
                    willChange: 'transform, opacity'
                  }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(-1)}
                >
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        {...getOptimizedImageProps(step.image, 'low')}
                        style={{ willChange: 'transform' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
                      activeStep === index ? 'bg-green-600 scale-110' : 'bg-blue-600'
                    } text-white`}>
                      {activeStep === index ? <CheckCircle className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="absolute -top-2 -right-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {step.timeframe}
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    
                    {/* Guarantee Badge */}
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {step.guarantee}
                    </div>
                    
                    {/* Testimonial */}
                    <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-500 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs italic text-gray-600">{step.testimonial}</p>
                      <div className="flex items-center justify-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {index === 0 ? 'Jetzt kontaktieren' : index === steps.length - 1 ? 'Termin vereinbaren' : 'Mehr erfahren'}
                    </button>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`absolute top-16 left-full w-8 h-0.5 transition-all duration-500 ${
                      visibleSteps.has(index) && visibleSteps.has(index + 1) ? 'bg-blue-600' : 'bg-blue-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                data-step={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  visibleSteps.has(index) ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{
                  animationDelay: prefersReducedMotion() ? '0ms' : `${index * 100}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                <div className="relative h-48">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    {...getOptimizedImageProps(step.image, 'low')}
                    style={{ willChange: 'auto' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 bg-white/90 rounded-full">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Schritt {index + 1}
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.timeframe}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Guarantee Badge */}
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                    {step.guarantee}
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500 mb-4">
                    <p className="text-sm italic text-gray-600 mb-2">{step.testimonial}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* FAQ */}
                  <div className="border-t pt-4">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {step.faq.question}
                      <span className={`transform transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}>▼</span>
                    </button>
                    {expandedFAQ === index && (
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {step.faq.answer}
                      </p>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={handleContactClick}
                    className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    {index === 0 ? 'Jetzt kontaktieren' : index === steps.length - 1 ? 'Termin vereinbaren' : 'Mehr erfahren'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Competitor Comparison */}
        <div className="mt-16 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Marktführer im Vergleich
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Warum Messie-Wohnungen24.de?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Sehen Sie selbst, warum über 500 Kunden uns vertrauen und weiterempfehlen.
            </p>
            <button
              onClick={() => setShowComparisonDetails(!showComparisonDetails)}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <Info className="w-4 h-4" />
              {showComparisonDetails ? 'Details ausblenden' : 'Detaillierte Informationen anzeigen'}
            </button>
          </div>
          
          {/* Desktop Comparison */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 text-lg">Leistungsmerkmale</h4>
                </div>
                <div className="text-center bg-blue-600 text-white py-3 px-4 rounded-lg">
                  <h4 className="font-bold text-lg flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Messie-Wohnungen24.de
                  </h4>
                  <p className="text-blue-100 text-sm mt-1">Ihr Spezialist</p>
                </div>
                <div className="text-center bg-gray-100 text-gray-600 py-3 px-4 rounded-lg">
                  <h4 className="font-semibold text-lg">Andere Anbieter</h4>
                  <p className="text-gray-500 text-sm mt-1">Durchschnitt</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {competitorComparison.map((item, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      hoveredComparison === index 
                        ? 'bg-blue-50 shadow-md transform scale-102' 
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setHoveredComparison(index)}
                    onMouseLeave={() => setHoveredComparison(null)}
                  >
                    <div className="flex flex-col justify-center">
                      <h5 className="font-semibold text-gray-800 mb-1">{item.feature}</h5>
                      {showComparisonDetails && (
                        <p className="text-sm text-gray-600">{item.description}</p>
                      )}
                    </div>
                    
                    <div className="text-center flex flex-col items-center justify-center">
                      {item.us ? (
                        <div className="flex flex-col items-center">
                          <CheckCircle className="w-6 h-6 text-green-600 mb-1" />
                          {showComparisonDetails && (
                            <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                              {item.metric}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xl">—</span>
                      )}
                    </div>
                    
                    <div className="text-center flex flex-col items-center justify-center">
                      {item.others ? (
                        <div className="flex flex-col items-center">
                          <CheckCircle className="w-6 h-6 text-green-600 mb-1" />
                          {showComparisonDetails && (
                            <span className="text-xs text-gray-500">Standard</span>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <X className="w-6 h-6 text-red-500 mb-1" />
                          {showComparisonDetails && (
                            <span className="text-xs text-red-600">Nicht verfügbar</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Comparison */}
          <div className="lg:hidden space-y-4">
            {competitorComparison.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <h5 className="font-semibold text-gray-800 mb-2">{item.feature}</h5>
                {showComparisonDetails && (
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-blue-600">Wir:</span>
                    {item.us ? (
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {showComparisonDetails && (
                          <span className="text-xs text-green-700">{item.metric}</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-500">Andere:</span>
                    {item.others ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-8 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-2">Überzeugt von unserem Service?</h4>
            <p className="text-blue-100 mb-4">Werden Sie Teil unserer 500+ zufriedenen Kunden</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Kostenlose Beratung
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Jetzt anrufen
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Discretion Promise */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Unser Diskretionsversprechen
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Wir verstehen, dass Sie sich in einer schwierigen Situation befinden. Deshalb arbeiten wir 
              ausschließlich mit geschulten, verständnisvollen Fachkräften, die Ihre Privatsphäre respektieren 
              und ohne Vorurteile handeln. Ihre Würde steht für uns an erster Stelle.
            </p>
          </div>
          
          {/* Team Photos Placeholder */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             <div className="text-center">
               <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                 <Users className="w-8 h-8 text-blue-600" />
               </div>
               <h4 className="font-semibold text-gray-800">Geschultes Team</h4>
               <p className="text-sm text-gray-600">Psychologisch geschulte Fachkräfte</p>
             </div>
             <div className="text-center">
               <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                 <Shield className="w-8 h-8 text-green-600" />
               </div>
               <h4 className="font-semibold text-gray-800">Vollversichert</h4>
               <p className="text-sm text-gray-600">Umfassender Versicherungsschutz</p>
             </div>
             <div className="text-center">
               <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                 <Award className="w-8 h-8 text-yellow-600" />
               </div>
               <h4 className="font-semibold text-gray-800">Zertifiziert</h4>
               <p className="text-sm text-gray-600">Branchenzertifizierungen</p>
             </div>
           </div>
          
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Jetzt diskret kontaktieren
            </button>
          </div>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800">Unser Arbeitsprozess</h3>
                <button
                  onClick={() => setShowVideo(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Video wird hier angezeigt</p>
                    <p className="text-sm text-gray-500">Placeholder für Prozess-Erklärvideo</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Sehen Sie, wie diskret und professionell wir arbeiten
                  </h4>
                  <p className="text-gray-600 mb-4">
                    In diesem Video zeigen wir Ihnen unseren bewährten 5-Schritte-Prozess und 
                    wie wir dabei Ihre Privatsphäre und Würde respektieren.
                  </p>
                  <button 
                    onClick={() => setShowVideo(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Jetzt Beratung anfragen
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

export default Process;