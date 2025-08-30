import React, { useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import LazyImage from './LazyImage';

const AboutUsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Über uns - Messie-Wohnungen24.de';
  }, []);
  const whyUsFeatures = [
    {
      title: "Deutschlandweit im Einsatz",
      description: "Ob Frankfurt, Berlin, München oder Hamburg, unsere Teams sind schnell vor Ort.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      title: "Komplettservice aus einer Hand",
      description: "Von Entrümpelung, Abtransport von Sperrmüll und Grundreinigung bis hin zu Desinfektion und Neutralisierung unangenehmer Gerüche.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Absolute Diskretion",
      description: "Wir kommen mit neutralen Fahrzeugen und neutraler Arbeitskleidung, sodass Nachbarn nicht erkennen, womit wir uns befassen.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
      )
    },
    {
      title: "Langjährige Erfahrung",
      description: "Hunderte erfolgreich abgeschlossener Aufträge und zufriedene Kunden sprechen für sich.",
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Faire Preise",
      description: "Klare Angebote ohne versteckte Kosten.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  const messieServices = [
    "Abtransport von Müll, Sperrgut und Unrat",
    "Fachgerechte Entsorgung bei zertifizierten Entsorgungszentren",
    "Desinfektion sowie bei Bedarf auch Schädlingsbekämpfung und Rattenbekämpfung",
    "Übergabe der Räume in einwandfrei sauberem und sicheren Zustand"
  ];



  return (
    <div id="ueber-uns" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Über uns – Messie-Wohnungen24
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                Diskret. Gründlich. Sicher.<br/>
                "Wir geben Ihrer Wohnung den Wert zurück."
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4917670211430"
                onClick={(e) => {
                  // For desktop users, show the phone number
                  if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
                    e.preventDefault();
                    alert('Telefonnummer: +49 176 70211430\n\nKopieren Sie diese Nummer und rufen Sie uns an!');
                  }
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4917670211430"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Erfahrung und Vertrauen seit Jahren
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Wir sind ein spezialisiertes Unternehmen mit Sitz in Frankfurt am Main, das sich auf die Räumung und vollständige Wiederherstellung von Messie-Wohnungen und -Häusern spezialisiert hat.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Unser Team arbeitet diskret, zuverlässig und schnell, mit vollem Verständnis für die Situation, in der sich unsere Kunden befinden.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Wir wissen, dass eine Messie-Wohnung nicht nur ein Raum voller Dinge ist, sondern auch eine sensible Lebensgeschichte. Deshalb behandeln wir jeden Auftrag mit Respekt und Sorgfalt, damit die Wohnung wieder zu einem sicheren und sauberen Ort für einen neuen Anfang wird.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Von uns können Sie eine gründliche Reinigung der Räume erwarten sowie zusätzliche Leistungen – Desinfektion, Beseitigung unangenehmer Gerüche, Entfernung und Entsorgung alter Böden, Malerarbeiten und Auffrischung der Wände.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unser Ziel ist es, Ihre Wohnung in einen geordneten, sicheren und schönen Zustand zurückzuführen, bereit für ein neues Leben und eine sorgenfreie Zukunft.
              </p>
            </div>
            <div className="relative">
              <div className="bg-blue-100 rounded-2xl p-8">
                <LazyImage
                  src="/images/24.webp"
                  alt="Unser professionelles Team"
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">Nachher: Ordentliches Zuhause</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Warum wir?
            </h2>
            <p className="text-xl text-gray-600">
              Fünf gute Gründe, warum Sie uns vertrauen können
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messie Specialty */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unsere Spezialität – Messie-Wohnungen
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Die Entrümpelung einer Messie-Wohnung bedeutet weit mehr als nur das Entfernen von Gegenständen. Solche Wohnungen sind oft mit Unrat überfüllt und stellen ein erhebliches hygienisches Risiko dar.
              </p>
              
              <div className="space-y-4">
                {messieServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <LazyImage
                  src="/images/23.webp"
                  alt="Messie-Wohnung vor der Reinigung"
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">Vorher: Messie-Wohnung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Promise Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Unser Versprechen
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Egal in welchem Zustand sich die Räume befinden – bei uns sind Sie in sicheren Händen. Wir bieten schnelle Hilfe, Diskretion und eine vollständige Lösung, damit Ihre Räume wieder ordentlich, sicher und bereit für einen neuen Anfang sind.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Schnelle Hilfe</h3>
                <p className="text-gray-600">Sofortige Unterstützung in Notfällen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Absolute Diskretion</h3>
                <p className="text-gray-600">Ihre Privatsphäre ist garantiert</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vollständige Lösung</h3>
                <p className="text-gray-600">Alles aus einer Hand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Kontaktieren Sie uns
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schicken Sie uns noch heute Ihre Anfrage – wir melden uns schnell und zuverlässig zurück. Nutzen Sie die Gelegenheit und sichern Sie sich unsere Unterstützung!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4917670211430"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Jetzt anrufen
            </a>
            
            <a
              href="https://wa.me/4917670211430"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-500 text-lg font-medium rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              👉 Jetzt anfragen per WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;