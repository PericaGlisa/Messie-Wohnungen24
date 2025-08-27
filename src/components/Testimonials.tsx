import React, { useState } from 'react';
import { Star, Quote, User, MapPin, Calendar, CheckCircle, Filter, ExternalLink, Shield } from 'lucide-react';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('alle');

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      text: "Ich dachte, meine Situation wäre unlösbar. Das Team hat mir nicht nur praktisch geholfen, sondern auch Mut gemacht. Endlich kann ich wieder durchatmen.",
      author: "Thomas M.",
      location: "Frankfurt",
      rating: 5,
      date: "März 2024",
      projectType: "Wohnungsentrümpelung",
      verified: true,

      reviewPlatform: "Google Reviews",
      helpfulVotes: 23
    },
    {
      text: "Die Diskretion war perfekt. Niemand hat etwas mitbekommen. Das Team war so verständnisvoll und professionell. Ich bin unendlich dankbar.",
      author: "Sandra K.",
      location: "München",
      rating: 5,
      date: "Februar 2024",
      projectType: "Nachlassentrümpelung",
      verified: true,

      reviewPlatform: "Trustpilot",
      helpfulVotes: 18
    },
    {
      text: "Nach Jahren der Scham habe ich endlich den Mut gefasst. Die Mitarbeiter haben mich nie verurteilt. Mein Zuhause ist jetzt wieder ein Ort der Ruhe.",
      author: "Michael R.",
      location: "Stuttgart",
      rating: 5,
      date: "Januar 2024",
      projectType: "Messie-Wohnung",
      verified: true,
      reviewPlatform: "Google Reviews",
      helpfulVotes: 31
    },
    {
      text: "Schnelle Reaktion, faire Preise und absolut professionelle Arbeit. Das Team hat meine Erwartungen übertroffen.",
      author: "Julia B.",
      location: "Hamburg",
      rating: 5,
      date: "April 2024",
      projectType: "Kellerentrümpelung",
      verified: true,
      reviewPlatform: "Trustpilot",
      helpfulVotes: 15
    },
    {
      text: "Einfühlsame Beratung und diskrete Abwicklung. Ich kann das Team jedem empfehlen, der sich in einer ähnlichen Situation befindet.",
      author: "Robert H.",
      location: "Dortmund",
      rating: 5,
      date: "März 2024",
      projectType: "Dachbodenentrümpelung",
      verified: true,
      reviewPlatform: "Google Reviews",
      helpfulVotes: 27
    },
    {
      text: "Von der ersten Beratung bis zur finalen Reinigung - alles perfekt organisiert. Danke für den neuen Lebensabschnitt!",
      author: "Christine L.",
      location: "Leipzig",
      rating: 5,
      date: "Februar 2024",
      projectType: "Komplette Haushaltsauflösung",
      verified: true,
      reviewPlatform: "Trustpilot",
      helpfulVotes: 19
    }
  ];

  const filters = [
    { id: 'alle', label: 'Alle Bewertungen', count: testimonials.length },
    { id: 'Wohnungsentrümpelung', label: 'Wohnungsentrümpelung', count: testimonials.filter(t => t.projectType === 'Wohnungsentrümpelung').length },
    { id: 'Nachlassentrümpelung', label: 'Nachlassentrümpelung', count: testimonials.filter(t => t.projectType === 'Nachlassentrümpelung').length },
    { id: 'Messie-Wohnung', label: 'Messie-Wohnung', count: testimonials.filter(t => t.projectType === 'Messie-Wohnung').length }
  ];

  const filteredTestimonials = activeFilter === 'alle' 
    ? testimonials 
    : testimonials.filter(t => t.projectType === activeFilter);

  const aggregateStats = {
    totalReviews: 500,
    averageRating: 4.9,
    platforms: ['Google Reviews', 'Trustpilot', 'ProvenExpert'],
    recentReviews: 8
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Was unsere Kunden sagen
          </h2>

          
          {/* Social Proof Metrics */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{aggregateStats.totalReviews}+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Verifizierte Bewertungen</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1 sm:mb-2">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-600">{aggregateStats.averageRating}</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">Durchschnittsbewertung</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-1 sm:mb-2">{aggregateStats.recentReviews}</div>
                <div className="text-gray-600 text-xs sm:text-sm">Bewertungen (30 Tage)</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">{aggregateStats.platforms.length}</div>
                <div className="text-gray-600 text-xs sm:text-sm">Bewertungsplattformen</div>
              </div>
            </div>
            
            {/* Platform Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
              {aggregateStats.platforms.map((platform, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{platform}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
          

        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >

              
              {/* Content */}
              <div className="p-6">
                {/* Header with verification */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-600 font-medium">Verifiziert</span>
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.reviewPlatform}</div>
                </div>
                
                {/* Quote */}
                <Quote className="w-6 h-6 text-blue-200 mb-3" />
                <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{testimonial.author}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                      <Calendar className="w-3 h-3 ml-2" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Type Badge */}
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                  {testimonial.projectType}
                </div>
                
                {/* Helpful Votes */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{testimonial.helpfulVotes} fanden diese Bewertung hilfreich</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Hilfreich?
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Werden Sie unser nächster zufriedener Kunde
            </h3>
            <p className="text-gray-600 mb-6">
              Über 500 Menschen haben bereits den Mut gefasst. Lassen Sie sich kostenlos und unverbindlich beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4917670211430"
                className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <span>Sofort anrufen</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 italic text-sm">
            Alle Bewertungen sind echt und wurden mit ausdrücklicher Erlaubnis veröffentlicht.
            Namen wurden zum Schutz der Privatsphäre geändert. Bilder zeigen Beispielprojekte.
          </p>
        </div>
        

      </div>
    </section>
  );
};

export default Testimonials;