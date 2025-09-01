import React, { useEffect } from 'react';
import { Building } from 'lucide-react';

const ImpressumPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Impressum - Messie-Wohnungen24.de';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Building className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Impressum
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Rechtliche Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-6">Angaben gemäß § 5 TMG</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Unternehmen</h3>
                <p className="text-gray-600">
                  Milan Kesic MK Dienstleistung<br />
                  Gewerbe<br />
                  Vertreten durch: Milan Kesic
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Adresse</h3>
                <p className="text-gray-600">
                  Sontraer Str. 17<br />
                  60386 Frankfurt am Main<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Kontakt</h3>
                <p className="text-gray-600">
                  Telefon: 0157 52498366<br />
                  E-Mail: milankesic2018@gmail.com<br />
                  Web: www.messie-wohnungen24.de
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz</h3>
                <p className="text-gray-600">
                  Steuernummer: 014 834 77216
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                <p className="text-gray-600">
                  Milan Kesic<br />
                  Sontraer Str. 17<br />
                  60386 Frankfurt am Main
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">EU-Streitschlichtung</h3>
                <p className="text-gray-600 mb-4">
                  Plattform der EU-Kommission zur Online-Streitbeilegung (OS-Plattform):
                </p>
                <p className="text-blue-600 hover:text-blue-800 mb-4">
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-gray-600">
                  Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage;