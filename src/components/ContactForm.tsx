import React, { useState } from 'react';
import { Send, Shield, CheckCircle, Users } from 'lucide-react';

const ContactForm = () => {
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
    <section id="contact-form" className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-green-50 overflow-hidden">
      {/* Background Image - Barely Visible */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-blue-100/95 to-green-50/95"></div>
        <img 
          src="/images/person-sleeping-bed-tiny-house.webp" 
          alt="Kontakt Hintergrund" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>100% Diskret & Vertraulich</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Diskrete Anfrage stellen
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
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Rückmeldung in 60 Minuten</span>
            </div>
          </div>
        </div>

        {/* Contact Form - Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Unverbindliche Anfrage
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Alle Felder sind optional. Wir benötigen nur eine Kontaktmöglichkeit.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name (optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail oder Telefon *
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="Ihre E-Mail oder Telefonnummer"
                />
              </div>

              <div>
                <label htmlFor="callbackTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Bevorzugte Rückrufzeit
                </label>
                <select
                  id="callbackTime"
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                >
                  <option value="">Bitte wählen</option>
                  <option value="morning">Morgens (8-12 Uhr)</option>
                  <option value="afternoon">Nachmittags (12-17 Uhr)</option>
                  <option value="evening">Abends (17-20 Uhr)</option>
                  <option value="flexible">Flexibel</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base resize-y"
                  placeholder="Beschreiben Sie kurz Ihre Situation. Alle Angaben werden streng vertraulich behandelt."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 flex-shrink-0"
                />
                <label htmlFor="anonymous" className="ml-3 block text-sm text-gray-700">
                  Anonyme Anfrage (wir kontaktieren Sie trotzdem diskret)
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105 text-base"
              >
                <Send className="w-5 h-5" />
                <span>Diskrete Anfrage senden</span>
              </button>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>SSL-verschlüsselt</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>DSGVO-konform</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-green-600" />
                    <span>Streng vertraulich</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;