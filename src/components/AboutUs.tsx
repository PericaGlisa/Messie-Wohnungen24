import React, { useState, useEffect } from 'react';
import { Play, Award, Shield, Clock, Users, TrendingUp, Heart, CheckCircle, Star } from 'lucide-react';
import { useIntersectionObserver } from '../utils/performance';
import CertificationCard from './CertificationCard';
import VirtualizedSuccessStories from './VirtualizedSuccessStories';
import StatisticsSection from './StatisticsSection';

const AboutUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const aboutRef = useIntersectionObserver(
    () => setIsVisible(true),
    { threshold: 0.1 }
  );





  const stats = [
    { number: '500+', label: 'Erfolgreiche Projekte' },
    { number: '98%', label: 'Kundenzufriedenheit' },
    { number: '24/7', label: 'Notfall-Service' }
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



  return (
    <section ref={aboutRef} id="ueber-uns" className="py-16 lg:py-24 bg-white">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>


        {/* Mission Statement with Statistics */}
        <StatisticsSection stats={stats} />



        {/* Customer Success Stories */}
        <VirtualizedSuccessStories stories={successStories} />

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











        {/* Enhanced Why Choose Us */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Warum Messie-Wohnungen24?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Über 500 zufriedene Kunden vertrauen auf unsere Expertise. Entdecken Sie, was uns auszeichnet.
            </p>
            

            
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
          

          

        </div>


      </div>
    </section>
  );
};

export default AboutUs;