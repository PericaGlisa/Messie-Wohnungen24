import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

const DatenschutzPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Datenschutzerklärung - Messie-Wohnungen24.de';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Datenschutzerklärung
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Informationen zum Umgang mit Ihren persönlichen Daten
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">1. Verantwortlicher</h2>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-2"><strong>Milan Kesic MK Dienstleistung</strong></p>
                <p className="mb-2">Vertreten durch: Milan Kesic</p>
                <p className="mb-2">Sontraer Str. 17</p>
                <p className="mb-2">60386 Frankfurt am Main</p>
                <p className="mb-2">Deutschland</p>
                <p className="mb-2">Telefon: 0157 52498366</p>
                <p className="mb-2">E-Mail: milankesic2018@gmail.com</p>
                <p className="mb-2">Web: www.messie-wohnungen24.de</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">2. Hosting</h2>
              <p className="text-gray-600 leading-relaxed">
                Unsere Website wird bei Netlify, Inc., 2325 3rd Street, Suite 215, San Francisco, CA 94107, USA gehostet. Beim Aufruf der Website werden automatisch Daten wie IP-Adresse, Datum/Uhrzeit, abgerufene Seiten, Browsertyp, Betriebssystem erfasst. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler und sicherer Website).
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">3. Google Analytics 4 & Google Tag Manager</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wir verwenden Google Analytics 4 und Google Tag Manager, Dienste der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dabei werden Cookies eingesetzt, um das Nutzerverhalten auszuwerten. IP-Anonymisierung ist aktiv. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit über unser Cookie-Banner oder Browser-Einstellungen widerrufen.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">4. Google Ads Conversion Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                Wir nutzen Google Ads Conversion Tracking zur Messung von Kampagnen-Erfolgen. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">5. Kontaktformular</h2>
              <p className="text-gray-600 leading-relaxed">
                Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">6. Newsletter (Mailchimp)</h2>
              <p className="text-gray-600 leading-relaxed">
                Für den Newsletter-Versand nutzen wir Mailchimp (Intuit Inc., 675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA). Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Das Double-Opt-In-Verfahren wird eingesetzt. Daten können in die USA übertragen werden.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">7. Offline-Zahlung</h2>
              <p className="text-gray-600 leading-relaxed">
                Unsere Leistungen werden ausschließlich offline abgerechnet (z. B. nach Abschluss der Entrümpelung/Umzug). Eine Online-Zahlungsverarbeitung über die Website findet nicht statt.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">8. Speicherdauer</h2>
              <p className="text-gray-600 leading-relaxed">
                Wir speichern personenbezogene Daten nur solange es für die Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">9. Ihre Rechte</h2>
              <p className="text-gray-600 leading-relaxed">
                Sie haben nach DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf von Einwilligungen und Beschwerde bei der zuständigen Aufsichtsbehörde.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">10. Aktualisierung</h2>
              <p className="text-gray-600 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Stand: {new Date().toLocaleDateString('de-DE')}
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-50 p-6 rounded-lg mt-12">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Fragen zum Datenschutz?</h3>
              <p className="text-gray-600 mb-4">
                Bei Fragen zu dieser Datenschutzerklärung oder zum Umgang mit Ihren persönlichen Daten können Sie sich jederzeit an uns wenden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+4917670211430" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  📞 Jetzt anrufen
                </a>
                <a 
                  href="mailto:info@messie-wohnungen24.de" 
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
                >
                  ✉️ E-Mail senden
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default DatenschutzPage;