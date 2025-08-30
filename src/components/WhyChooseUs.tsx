import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Diskretion und Vertrauen an erster Stelle",
      description: "Wir verstehen, dass das Thema Messie-Wohnungen sensibel ist und viele Menschen Unbehagen oder Angst vor Verurteilung empfinden. Deshalb ist unsere wichtigste Grundlage Diskretion. Wir arbeiten leise, sorgfältig und mit vollem Respekt für Ihre Privatsphäre. Wir sprechen niemals mit Nachbarn darüber, wer wir sind oder warum wir da sind – nach außen hin wirken wir wie gewöhnliche Handwerker, die eine Wohnung in Ordnung bringen.",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          <path d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="white"/>
        </svg>
      ),
      testimonial: "Das Team war so diskret und professionell. Niemand in meiner Nachbarschaft hat etwas bemerkt. Ich fühlte mich endlich verstanden und nicht verurteilt.",
      customerName: "Maria K., Berlin",
      rating: 5
    },
    {
      title: "Fachgerechte Entsorgung von Abfällen",
      description: "Alle Abfälle und Sperrmüll entfernen wir auf vollkommen sichere und fachgerechte Weise. Sämtliche Gegenstände werden ausschließlich zu zertifizierten Recycling- und Entsorgungsbetrieben gebracht. So können Sie sicher sein, dass alles vorschriftsgemäß entsorgt wird und Sie das Richtige tun – sowohl für sich selbst als auch für die Umwelt.",
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V9h-3V7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h6.31l.69-2H5V9h8v2h3z"/>
          <path d="M20.5 14.5L16 19l-2.5-2.5L15 15l1 1 3.5-3.5 1.5 1.5z"/>
        </svg>
      ),
      testimonial: "Ich war beeindruckt von der umweltfreundlichen Entsorgung. Alles wurde ordnungsgemäß recycelt und ich hatte ein gutes Gewissen dabei.",
      customerName: "Thomas M., München",
      rating: 5
    },
    {
      title: "Unauffälligkeit und neutraler Auftritt",
      description: "Wir wissen, wie wichtig es ist, dass niemand in Ihrer Umgebung Details über den Zustand Ihrer Wohnung erfährt. Deshalb kommen unsere Teams ausschließlich mit neutralen Fahrzeugen ohne Beschriftung und in unauffälliger Arbeitskleidung. Für Passanten oder Nachbarn sieht es so aus, als wären es normale Handwerker, die Standardarbeiten erledigen.",
      icon: (
        <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
      ),
      testimonial: "Perfekt! Die Nachbarn dachten, es wären normale Renovierungsarbeiten. Meine Privatsphäre blieb vollständig geschützt.",
      customerName: "Sandra L., Hamburg",
      rating: 5
    },
    {
      title: "Mehr als Reinigung – Rückkehr von Würde und Ruhe",
      description: "Unsere Arbeit bedeutet nicht nur Aufräumen. Unsere Aufgabe ist es, Ordnung, Sicherheit und ein Gefühl der Ruhe in Ihr Zuhause zurückzubringen. Wenn wir fertig sind, sieht die Wohnung nicht nur gereinigt aus – sie atmet wieder, vermittelt Würde und gibt Ihnen Raum für einen Neuanfang, befreit von der Last der Vergangenheit.",
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          <path d="M12 7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" fill="white"/>
        </svg>
      ),
      testimonial: "Meine Wohnung ist nicht nur sauber – sie fühlt sich wieder wie ein Zuhause an. Ich habe meine Würde und meinen Frieden zurückgewonnen.",
      customerName: "Michael R., Frankfurt",
      rating: 5
    },
    {
      title: "Unsere Kunden sprechen für uns",
      description: "Was uns auszeichnet, ist der Komplettservice aus einer Hand – von der Entrümpelung und Entsorgung über die hygienische Reinigung bis hin zu Malerarbeiten. Während andere nur Teilbereiche abdecken, bringen wir Wohnungen in einen Zustand, der sofort bezugsfertig oder vermietbar ist. Lassen Sie Ihre Wohnung wieder in vollem Glanz erstrahlen, als wäre nichts gewesen.",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      testimonial: "Komplettservice aus einer Hand – genau das brauchte ich! Von der Entrümpelung bis zur Renovierung, alles perfekt koordiniert und ausgeführt.",
      customerName: "Anna W., Köln",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Warum Messie-Wohnungen24.de wählen?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vertrauen Sie auf unsere Expertise und Diskretion für eine professionelle Lösung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Customer Testimonial */}
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1 mr-3">
                      {renderStars(feature.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {feature.customerName}
                    </span>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{feature.testimonial}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für einen Neuanfang?
            </h3>
            <p className="text-gray-600 mb-6">
              Kontaktieren Sie uns noch heute für eine diskrete und professionelle Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4917670211430"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4917670211430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;