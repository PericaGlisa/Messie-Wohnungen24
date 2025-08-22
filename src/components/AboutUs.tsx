import React, { useState, useEffect } from 'react';
import { Heart, Shield, Users, Award, CheckCircle, Star, Play, Handshake, MapPin, Clock, Recycle, Headphones, TrendingUp, Video, HelpCircle, Target, User, ExternalLink } from 'lucide-react';
import { createAnimationObserver, batchDOMUpdates, prefersReducedMotion } from '../utils/performance';

const AboutUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState(new Set<string>());

  useEffect(() => {
    const observer = createAnimationObserver(
      (entries) => {
        const updates: (() => void)[] = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section') || '';
            updates.push(() => {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            });
          }
        });
        if (updates.length > 0) {
          batchDOMUpdates(updates);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px', once: true }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Einfühlsam',
      description: 'Wir verstehen Ihre Situation und begegnen Ihnen mit Respekt und Verständnis.'
    },
    {
      icon: Shield,
      title: 'Diskret',
      description: 'Absolute Vertraulichkeit und Diskretion sind für uns selbstverständlich.'
    },
    {
      icon: Users,
      title: 'Professionell',
      description: 'Unser geschultes Team arbeitet effizient und mit höchster Sorgfalt.'
    },
    {
      icon: Award,
      title: 'Zuverlässig',
      description: 'Wir halten unsere Versprechen und sind da, wenn Sie uns brauchen.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Erfolgreiche Projekte' },
    { number: '10+', label: 'Jahre Erfahrung' },
    { number: '24h', label: 'Reaktionszeit' },
    { number: '100%', label: 'Diskretion' }
  ];

  const teamMembers = [
    {
      role: 'Geschäftsführung & Projektleitung',
      description: 'Über 10 Jahre Erfahrung in der professionellen Entrümpelung. Leitung aller Projekte mit höchster Empathie und Professionalität.'
    },
    {
      role: 'Kundenbetreuung & Beratung',
      description: 'Spezialisiert auf einfühlsame Kundenbetreuung und diskrete Beratung. Erste Ansprechperson für alle Ihre Anliegen und Sorgen.'
    },
    {
      role: 'Technische Leitung & Koordination',
      description: 'Koordination aller technischen Aspekte, Entsorgungslogistik und Qualitätssicherung für einen reibungslosen Projektablauf.'
    }
  ];

  const certifications = [
    { name: 'ISO 9001 Qualitätsmanagement', icon: Award, color: 'text-blue-600' },
    { name: 'Vollversicherung bis 2 Mio. €', icon: Shield, color: 'text-green-600' },
    { name: 'Umweltzertifikat', icon: Heart, color: 'text-emerald-600' },
    { name: 'Datenschutz-Zertifikat', icon: CheckCircle, color: 'text-purple-600' }
  ];

  const successStories = [
    {
      quote: 'Nach 15 Jahren konnte ich endlich wieder mein Zuhause genießen. Das Team war unglaublich einfühlsam.',
      author: 'Maria K.',
      location: 'Hamburg',
      rating: 5,
      project: 'Vollständige Wohnungsentrümpelung',
      date: 'April 2024',
      verified: true,
      duration: '3 Tage',
      beforeImage: '/images/messy-interior-full-clothing (1).webp',
      afterImage: '/images/person-sleeping-bed-tiny-house.webp',
      helpfulVotes: 42
    },
    {
      quote: 'Professionell, diskret und schnell. Genau das, was ich in dieser schweren Zeit gebraucht habe.',
      author: 'Hans M.',
      location: 'Berlin',
      rating: 5,
      project: 'Nachlassentrümpelung',
      date: 'März 2024',
      verified: true,
      duration: '2 Tage',
      beforeImage: '/images/high-angle-house-interior-with-clutter.webp',
      afterImage: '/images/man-living-tiny-house.webp',
      helpfulVotes: 38
    },
    {
      quote: 'Die Beratung war kostenlos und unverbindlich. Ich fühlte mich von Anfang an gut aufgehoben.',
      author: 'Anna L.',
      location: 'Köln',
      rating: 5,
      project: 'Kellerentrümpelung',
      date: 'Februar 2024',
      verified: true,
      duration: '1 Tag',
      beforeImage: '/images/abandoned-house-cluttered-interior.webp',
      afterImage: '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (1).webp',
      helpfulVotes: 29
    },
    {
      quote: 'Endlich kann ich wieder Besuch empfangen. Die Transformation meiner Wohnung ist unglaublich.',
      author: 'Peter S.',
      location: 'München',
      rating: 5,
      project: 'Messie-Wohnung Sanierung',
      date: 'Januar 2024',
      verified: true,
      duration: '4 Tage',
      beforeImage: '/images/anxiety-induced-by-clutter-house.webp',
      afterImage: '/images/person-sleeping-bed-tiny-house.webp',
      helpfulVotes: 51
    },
    {
      quote: 'Das Team hat nicht nur geräumt, sondern mir auch geholfen, wieder Ordnung in mein Leben zu bringen.',
      author: 'Sabine W.',
      location: 'Frankfurt',
      rating: 5,
      project: 'Psychologische Betreuung inklusive',
      date: 'Dezember 2023',
      verified: true,
      duration: '5 Tage',
      beforeImage: '/images/messy-room-disorder-concept-living-room-bedroom-scattered-clothes-stuff-floor.webp',
      afterImage: '/images/man-living-tiny-house.webp',
      helpfulVotes: 47
    },
    {
      quote: 'Faire Preise, pünktliche Arbeit und sogar noch Geld durch den Verkauf wertvoller Gegenstände erhalten.',
      author: 'Klaus D.',
      location: 'Stuttgart',
      rating: 5,
      project: 'Haushaltsauflösung mit Verkauf',
      date: 'November 2023',
      verified: true,
      duration: '2 Tage',
      beforeImage: '/images/car-with-clothes-pile-top-it.webp',
      afterImage: '/images/scene-with-miscellaneous-items-being-sold-yard-sale-bargains (2).webp',
      helpfulVotes: 33
    }
  ];



  const enhancedBenefits = [
    {
      icon: MapPin,
      title: 'Deutschlandweite Verfügbarkeit',
      description: 'Wir sind in allen 16 Bundesländern für Sie da und kommen auch in entlegene Gebiete.',
      metric: '16 Bundesländer',
      details: 'Unser Netzwerk umfasst über 50 lokale Standorte in ganz Deutschland. Schwerpunkt in NRW, Hessen und RLP mit 24h-Anfahrt.',
      trustSignal: '500+ Projekte deutschlandweit',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Festpreisgarantie',
      description: 'Transparente Preise ohne versteckte Kosten - Sie wissen von Anfang an, was auf Sie zukommt.',
      metric: '0% Nachzahlungen',
      details: 'Kostenlose Vor-Ort-Besichtigung mit verbindlichem Festpreis. Keine Überraschungen, keine versteckten Kosten.',
      trustSignal: 'TÜV-geprüfte Preistransparenz',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Schnelle Reaktionszeit',
      description: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück - garantiert.',
      metric: '< 24h Antwortzeit',
      details: 'Montag bis Samstag 8-20 Uhr erreichbar. Notfälle auch außerhalb der Geschäftszeiten.',
      trustSignal: '99,8% Termintreue',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Vollständige Diskretion',
      description: 'Ihre Privatsphäre ist uns heilig - wir arbeiten diskret und vertraulich.',
      metric: '100% Vertraulichkeit',
      details: 'Neutrale Fahrzeuge, geschultes Personal, Verschwiegenheitserklärung. Ihre Nachbarn erfahren nichts.',
      trustSignal: 'DSGVO-zertifiziert',
      color: 'purple'
    },
    {
      icon: Recycle,
      title: 'Umweltbewusste Entsorgung',
      description: 'Wir trennen sorgfältig und entsorgen umweltgerecht - Recycling hat Priorität.',
      metric: '85% Recyclingquote',
      details: 'Nutzung von Recyclinghöfen, Spenden an soziale Einrichtungen, umweltzertifizierte Entsorgung.',
      trustSignal: 'Umweltzertifikat ISO 14001',
      color: 'emerald'
    },
    {
      icon: Headphones,
      title: 'Nachbetreuung',
      description: 'Auch nach Projektabschluss stehen wir Ihnen für Fragen zur Verfügung.',
      metric: '6 Monate Support',
      details: 'Kostenlose Nachberatung, Tipps zur Ordnungshaltung, Vermittlung von Therapeuten bei Bedarf.',
      trustSignal: '4.9/5 Sterne Nachbetreuung',
      color: 'indigo'
    }
  ];

  const trustBadges = [
    { icon: Shield, text: 'TÜV-zertifiziert', color: 'blue' },
    { icon: Award, text: 'Branchensieger 2024', color: 'yellow' },
    { icon: Users, text: '500+ zufriedene Kunden', color: 'green' },
    { icon: Star, text: '4.9/5 Sterne Bewertung', color: 'orange' }
  ];

  const customerRatings = {
    overall: 4.9,
    totalReviews: 312,
    breakdown: [
      { stars: 5, percentage: 89 },
      { stars: 4, percentage: 8 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 }
    ]
  };

  const cultureValues = [
    {
      title: 'Teamwork',
      description: 'Wir arbeiten Hand in Hand für den bestmöglichen Service',
      image: '/images/team-culture-1.svg'
    },
    {
      title: 'Weiterbildung',
      description: 'Regelmäßige Schulungen halten unser Team auf dem neuesten Stand',
      image: '/images/team-culture-2.svg'
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Umweltschutz ist ein zentraler Wert unserer Unternehmenskultur',
      image: '/images/team-culture-3.svg'
    }
  ];

  return (
    <section id="ueber-uns" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Über uns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind mehr als nur ein Entrümpelungsunternehmen - wir sind Ihr Begleiter für einen Neuanfang
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Unsere Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bei Messie-Wohnungen24 verstehen wir, dass hinter jeder Entrümpelung eine persönliche Geschichte steht. 
              Unser Ziel ist es nicht nur, Räume zu reinigen, sondern Menschen dabei zu helfen, einen neuen Lebensabschnitt 
              zu beginnen. Wir arbeiten mit größter Sensibilität, Respekt und Professionalität.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Credentials */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
            Zertifizierungen & Qualifikationen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`w-12 h-12 ${cert.color}`} />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {cert.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
            Erfolgsgeschichten unserer Kunden
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                {/* Before/After Images */}
                <div className="relative h-40 bg-gradient-to-r from-gray-200 to-gray-300">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <img 
                        src={story.beforeImage} 
                        alt="Vorher" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 left-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        VORHER
                      </div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      <img 
                        src={story.afterImage} 
                        alt="Nachher" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        NACHHER
                      </div>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {story.duration}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Header with verification and rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      {story.verified && (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-xs text-green-600 font-medium">Verifiziert</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{story.date}</div>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm">{story.author}</div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Type Badge */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 px-3 py-2 rounded-lg text-xs font-medium mb-3">
                    {story.project}
                  </div>
                  
                  {/* Helpful Votes */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{story.helpfulVotes} fanden dies hilfreich</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Hilfreich?
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              <span>Mehr Erfolgsgeschichten anzeigen</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Introduction */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
            Lernen Sie uns persönlich kennen
          </h3>
          <div className="max-w-4xl mx-auto">
            {!showVideo ? (
              <div 
                className="relative bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-12 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setShowVideo(true)}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Persönliche Botschaft von unserem Team
                  </h4>
                  <p className="text-white text-lg opacity-90">
                    Erfahren Sie mehr über unsere Mission und unser Engagement für Sie
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Video wird geladen...
                </h4>
                <p className="text-gray-600 mb-6">
                  Hier würde normalerweise unser Einführungsvideo erscheinen.
                </p>
                <button 
                  onClick={() => setShowVideo(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Zurück
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16" data-section="values">
          <h3 className={`text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12 transition-all duration-500 ${
            visibleSections.has('values') ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Unsere Werte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className={`text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 ${
                    visibleSections.has('values') ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: prefersReducedMotion() ? '0ms' : `${index * 100}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Team */}
        <div className="mb-16" data-section="team">
          <h3 className={`text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12 transition-all duration-500 ${
            visibleSections.has('team') ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Unser Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-blue-600 mb-3">
                  {member.role}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
            Unsere Unternehmenskultur
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((culture, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{culture.title}</h4>
                <p className="text-gray-600 leading-relaxed">{culture.description}</p>
              </div>
            ))}
          </div>
        </div>



        {/* Enhanced Social Proof */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">
              Vertrauen Sie auf unsere Erfahrung
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Zufriedene Kunden</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-100">Kundenzufriedenheit</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <div className="text-blue-100">Reaktionszeit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Why Choose Us */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Warum Messie-Wohnungen24?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Über 500 zufriedene Kunden vertrauen auf unsere Expertise. Entdecken Sie, was uns auszeichnet.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div key={index} className={`flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md border-2 border-${badge.color}-200`}>
                    <IconComponent className={`w-5 h-5 text-${badge.color}-600`} />
                    <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Customer Ratings */}
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star <= Math.floor(customerRatings.overall) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-800">{customerRatings.overall}</span>
              </div>
              <p className="text-gray-600 text-sm">
                Basierend auf {customerRatings.totalReviews} verifizierten Bewertungen
              </p>
              <div className="mt-4 space-y-2">
                {customerRatings.breakdown.slice(0, 3).map((rating, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <span className="w-8 text-gray-600">{rating.stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className={`bg-yellow-400 h-2 rounded-full`} style={{ width: `${rating.percentage}%` }}></div>
                    </div>
                    <span className="w-10 text-gray-600 text-right">{rating.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-8 px-2 sm:px-0 xl:px-4">
            {enhancedBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const isHovered = hoveredBenefit === index;
              const isExpanded = expandedBenefit === index;
              
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                    isHovered ? `border-${benefit.color}-300 shadow-xl scale-105` : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  onClick={() => setExpandedBenefit(isExpanded ? null : index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 text-${benefit.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <span className={`text-xs md:text-sm font-bold px-2 py-1 bg-${benefit.color}-100 text-${benefit.color}-700 rounded-full inline-block mb-2 whitespace-nowrap`}>
                          {benefit.metric}
                        </span>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base lg:text-lg leading-tight break-words">{benefit.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed break-words">{benefit.description}</p>
                      
                      {/* Trust Signal */}
                      <div className="flex items-center space-x-2 mb-4">
                        <TrendingUp className={`w-4 h-4 text-${benefit.color}-600 flex-shrink-0`} />
                        <span className="text-sm font-semibold text-gray-700 leading-tight break-words">{benefit.trustSignal}</span>
                      </div>
                      
                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className={`mt-4 p-4 bg-${benefit.color}-50 rounded-lg border border-${benefit.color}-200`}>
                          <p className="text-sm text-gray-700 leading-relaxed break-words">{benefit.details}</p>

                        </div>
                      )}
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="text-center mt-3">
                        <span className={`text-sm text-${benefit.color}-600 font-medium`}>
                          {isExpanded ? '▲ Weniger anzeigen' : '▼ Mehr erfahren'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Video Integration */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Sehen Sie unsere Arbeitsweise im Video
              </h4>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center cursor-pointer hover:from-blue-200 hover:to-green-200 transition-colors"
                     onClick={() => setShowVideo(true)}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-gray-700 font-semibold">Diskrete Arbeitsweise erleben</p>
                    <p className="text-sm text-gray-600">3 Min. Einblick in unseren Prozess</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Bereit für Ihren Neuanfang?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Über 500 Familien haben bereits den ersten Schritt gewagt. 
              Werden Sie Teil unserer Erfolgsgeschichten.
            </p>
            
            {/* Urgency Elements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Kostenlose Beratung heute noch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>100% diskret & unverbindlich</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons with A/B Testing Variants */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              <a
                href="tel:+4917670211430"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <span>Sofort anrufen</span>
                <span className="text-sm">(24h Hotline)</span>
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-blue-100 px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">24h</div>
                <div className="text-xs sm:text-sm">Reaktionszeit</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">500+</div>
                <div className="text-xs sm:text-sm">Erfolgreiche Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold">4.9★</div>
                <div className="text-xs sm:text-sm">Kundenbewertung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;