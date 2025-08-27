import React, { useState } from 'react';
import { Send, Shield, CheckCircle, Users, Upload } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    city: '',
    postalCode: '',
    clearingTypes: [],
    area: '',
    floors: [],
    elevator: '',
    timing: '',
    photos: null,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData(prev => {
      const currentArray = prev[name as keyof typeof prev] as string[];
      const isChecked = currentArray.includes(value);
      
      return {
        ...prev,
        [name]: isChecked 
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData(prev => ({
      ...prev,
      photos: files
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
                Kostenlose Beratung anfragen
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Füllen Sie das Formular aus und erhalten Sie ein unverbindliches Angebot für Ihre Entrümpelung.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information Section */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Kontaktinformationen</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname (optional)
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      placeholder="Ihre E-Mail-Adresse"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      Stadt *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      placeholder="Ihre Stadt"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Postleitzahl *
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      placeholder="PLZ"
                    />
                  </div>
                </div>
              </div>

              {/* Question 1: Was soll entrümpelt werden? */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Was soll entrümpelt werden? *
                </label>
                <p className="text-xs text-gray-500 mb-3">Mehrfachauswahl möglich</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Wohnung',
                    'Haus',
                    'Küche',
                    'Keller',
                    'Dachboden/Speicher',
                    'Garage',
                    'Garten / Speicher',
                    'Ladengeschäft',
                    'Halle / Gewerbefläche / Lager'
                  ].map((type) => (
                    <label key={type} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.clearingTypes.includes(type)}
                        onChange={() => handleCheckboxChange('clearingTypes', type)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 2: Welche Fläche soll entrümpelt werden? */}
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                  Welche Fläche soll entrümpelt werden? *
                </label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                >
                  <option value="">Bitte wählen</option>
                  <option value="10">10 m²</option>
                  <option value="20">20 m²</option>
                  <option value="30">30 m²</option>
                  <option value="50">50 m²</option>
                  <option value="80">80 m²</option>
                  <option value="100">100 m²</option>
                  <option value="200">200 m²</option>
                  <option value="mehr">mehr</option>
                </select>
              </div>

              {/* Question 3: Aus welchen Etagen soll entrümpelt werden? */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Aus welchen Etagen soll entrümpelt werden? *
                </label>
                <p className="text-xs text-gray-500 mb-3">Mehrfachauswahl möglich</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Kellergeschoss',
                    'Erdgeschoss',
                    '1. Etage',
                    '2. Etage',
                    '3. Etage',
                    '4. Etage',
                    '5. Etage oder höher',
                    'Dachboden'
                  ].map((floor) => (
                    <label key={floor} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.floors.includes(floor)}
                        onChange={() => handleCheckboxChange('floors', floor)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{floor}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 4: Gibt es im Objekt einen Aufzug? */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Gibt es im Objekt einen Aufzug? *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="elevator"
                      value="ja"
                      checked={formData.elevator === 'ja'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="text-sm text-gray-700">JA</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="elevator"
                      value="nein"
                      checked={formData.elevator === 'nein'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="text-sm text-gray-700">NEIN</span>
                  </label>
                </div>
              </div>

              {/* Question 5: Wann soll die Entrümpelung stattfinden? */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Wann soll die Entrümpelung stattfinden? *
                </label>
                <div className="space-y-2">
                  {[
                    'So schnell wie möglich',
                    '1 - 2 Monate',
                    '2 - 3 Monate',
                    '+ 3 Monate'
                  ].map((time) => (
                    <label key={time} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="timing"
                        value={time}
                        checked={formData.timing === time}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Photo Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Haben Sie Fotos von den Räumlichkeiten?
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Fotos hochladen (optional)</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    Dateien auswählen
                  </label>
                  {formData.photos && (
                    <p className="text-sm text-green-600 mt-2">
                      {formData.photos.length} Datei(en) ausgewählt
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Message Section */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Erläutern Sie hier Ihr Anliegen
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base resize-y"
                  placeholder="Beschreiben Sie hier weitere Details zu Ihrem Anliegen. Alle Angaben werden streng vertraulich behandelt."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105 text-base"
              >
                <Send className="w-5 h-5" />
                <span>Kostenlose Beratung anfragen</span>
              </button>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>SSL-verschlüsselt</span>
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