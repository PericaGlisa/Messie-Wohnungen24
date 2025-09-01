import React, { useEffect } from 'react';
import { FileText, Building, Phone, Mail } from 'lucide-react';

const AGBPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'AGB - Allgemeine Geschäftsbedingungen | Messie-Wohnungen24.de';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Rechtliche Grundlagen für unsere Dienstleistungen im Bereich Entrümpelung und Umzug
            </p>
          </div>
        </div>
      </section>

      {/* AGB Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-8">AGB – Allgemeine Geschäftsbedingungen</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">1. Geltungsbereich</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Diese AGB gelten für alle Verträge zwischen Milan Kesic MK Dienstleistung, Sontraer Str. 17, 60386 Frankfurt am Main („Anbieter") und privaten Kunden („Kunde") über Dienstleistungen im Bereich Entrümpelung und Umzug.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">2. Vertragspartner</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vertragspartner ist Milan Kesic MK Dienstleistung, vertreten durch Inhaber Milan Kesic.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">3. Vertragsschluss</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Angebote auf unserer Website sind unverbindlich. Ein Vertrag kommt durch schriftliche oder mündliche Bestätigung zustande.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">4. Leistungen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir bieten Entrümpelungen, Haushaltsauflösungen, Umzüge und damit verbundene Dienstleistungen an. Der genaue Leistungsumfang wird individuell mit dem Kunden vereinbart.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">5. Preise und Zahlung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Preise werden individuell vereinbart. Die Zahlung erfolgt nach erbrachter Leistung, direkt vor Ort per Barzahlung oder Überweisung, sofern nicht anders vereinbart.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">6. Rücktritt / Stornierung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stornierungen sind bis 24 Stunden vor dem vereinbarten Termin kostenlos möglich. Erfolgt die Stornierung später, behalten wir uns vor, einen Teil der vereinbarten Summe als Ausfallkosten zu berechnen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">7. Haftung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir haften nach den gesetzlichen Vorschriften nur bei Vorsatz oder grober Fahrlässigkeit. Für normale Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten. Für verdeckte Mängel oder Schäden an bereits vorhandenen Einrichtungen übernehmen wir keine Haftung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">8. Eigentumsvorbehalt</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bei Umzügen bleibt das Eigentum des Kunden gewahrt. Wir übernehmen die Sachen nur zur Beförderung bzw. Zwischenlagerung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">9. Datenschutz</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">10. Schlussbestimmungen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Es gilt deutsches Recht. Gerichtsstand, soweit gesetzlich zulässig, ist Frankfurt am Main. Vertragssprache ist Deutsch.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <p className="text-sm text-gray-600 font-medium">
                    Stand: 28. August 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Fragen zu unseren AGB?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Bei Fragen zu unseren Allgemeinen Geschäftsbedingungen stehen wir Ihnen gerne zur Verfügung.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                <a 
                  href="tel:+4917670211430"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  +49 176 70211430
                </a>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
                <a 
                  href="mailto:info@messie-wohnungen24.de"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  info@messie-wohnungen24.de
                </a>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-800 p-6 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Anschrift</h3>
              <p className="text-gray-300">
                Milan Kesic MK Dienstleistung<br />
                Sontraer Str. 17<br />
                60386 Frankfurt am Main
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AGBPage;