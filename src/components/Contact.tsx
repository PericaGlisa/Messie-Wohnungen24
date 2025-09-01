import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send, Shield, CheckCircle, Star, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    anonymous: false,
    callbackTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="kontakt" className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-green-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img 
          src="/images/17.webp" 
          srcSet="
            /images/optimized/17-320w.webp 320w,
            /images/optimized/17-480w.webp 480w,
            /images/optimized/17-768w.webp 768w,
            /images/optimized/17-1024w.webp 1024w
          "
          sizes="100vw"
          alt="Kontakt Hintergrund" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>100% Diskret & Vertraulich</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Wir sind für Sie da. Kontaktieren Sie uns diskret und unverbindlich - 
            der erste Schritt ist oft der schwerste, aber Sie sind nicht allein.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Über 500 zufriedene Kunden</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-600" />
              <span>4.9/5 Sterne Bewertung</span>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            {/* Emergency Contact Banner */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 sm:p-6 rounded-lg mb-6 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">🚨 Notfall-Hotline</h3>
                  <p className="text-red-100 text-sm sm:text-base">Bei akuten Situationen sofort erreichbar</p>
                </div>
                <a 
                  href="tel:+4917670211430"
                  className="bg-white text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-red-50 transition-colors text-center text-sm sm:text-base"
                >
                  Jetzt anrufen
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 sm:p-6 lg:p-8 rounded-lg mb-6 sm:mb-8 shadow-lg border border-blue-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                Sofort-Hilfe verfügbar
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Telefon</p>
                    <a 
                      href="tel:+4917670211430"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg break-all"
                    >
                      +49 176 70211430
                    </a>
                    <p className="text-xs sm:text-sm text-gray-600">Diskrete Beratung</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-600 text-white rounded-lg flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">WhatsApp</p>
                    <a 
                      href="https://wa.me/4917670211430?text=Hallo,%20ich%20benötige%20diskrete%20Hilfe%20bei%20einer%20Wohnungsräumung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base break-words"
                    >
                      Nachricht senden
                    </a>
                    <p className="text-xs sm:text-sm text-gray-600">Schreiben Sie uns per WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">E-Mail</p>
                    <a 
                      href="mailto:info@messie-wohnungen24.de"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base break-all"
                    >
                      info@messie-wohnungen24.de
                    </a>
                    <p className="text-xs sm:text-sm text-gray-600">Reaktion innerhalb 24h</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 text-white rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Erreichbarkeit</p>
                    <p className="text-gray-700 text-sm sm:text-base">Mo-Sa: 8:00 - 20:00 Uhr</p>
                    <p className="text-xs sm:text-sm text-gray-600">Notfälle auch außerhalb</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 text-white rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Servicegebiet</p>
                    <p className="text-gray-700 text-sm sm:text-base">Deutschlandweit</p>
                    <p className="text-xs sm:text-sm text-gray-600">Schwerpunkt NRW, Hessen, RLP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-500 mb-4 sm:mb-6">
              <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">
                ⚡ Reaktion innerhalb von 24 Stunden garantiert
              </h4>
              <p className="text-green-700 text-xs sm:text-sm">
                Wir verstehen, dass Sie schnelle Hilfe benötigen. Deshalb melden wir uns 
                spätestens am nächsten Werktag bei Ihnen zurück.
              </p>
            </div>

            {/* Certifications & Trust */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                Zertifiziert & Versichert
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span>Vollversichert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span>DSGVO-konform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span>Fachbetrieb</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span>Umweltschutz</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  Diskrete Anfrage stellen
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Alle Felder sind optional. Wir benötigen nur eine Kontaktmöglichkeit.
                </p>
              </div>
              
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Name (optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  E-Mail oder Telefon *
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Ihre E-Mail oder Telefonnummer"
                />
              </div>

              <div>
                <label htmlFor="callbackTime" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Bevorzugte Rückrufzeit
                </label>
                <select
                  id="callbackTime"
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Bitte wählen</option>
                  <option value="morning">Morgens (8-12 Uhr)</option>
                  <option value="afternoon">Nachmittags (12-17 Uhr)</option>
                  <option value="evening">Abends (17-20 Uhr)</option>
                  <option value="flexible">Flexibel</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none sm:resize-y"
                  placeholder="Beschreiben Sie kurz Ihre Situation. Alle Angaben werden streng vertraulich behandelt."
                />
              </div>

              <div className="flex items-start sm:items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 sm:mt-0 flex-shrink-0"
                />
                <label htmlFor="anonymous" className="ml-2 block text-xs sm:text-sm text-gray-700">
                  Anonyme Anfrage (wir kontaktieren Sie trotzdem diskret)
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105 text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Diskrete Anfrage senden</span>
              </button>

              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>SSL-verschlüsselt</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>DSGVO-konform</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>Streng vertraulich</span>
                  </div>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;