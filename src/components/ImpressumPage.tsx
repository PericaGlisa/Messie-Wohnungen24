import React, { useEffect } from 'react';

const ImpressumPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Impressum - Messie-Wohnungen24.de';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Impressum
          </h1>
          <p className="text-xl text-center text-blue-100">
            Rechtliche Angaben
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Angaben gemäß § 5 TMG</h2>
            
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
    </div>
  );
};

export default ImpressumPage;