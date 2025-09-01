import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Shield, CheckCircle, Users, Upload } from 'lucide-react';

const ContactForm = () => {
  const navigate = useNavigate();
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Redirect to thank you page
        navigate('/danke');
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      setFormData(prev => ({ ...prev, photos: null }));
      return;
    }

    // Convert files to base64
    const base64Files = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Check file size (max 5MB per file)
      if (file.size > 5 * 1024 * 1024) {
        alert(`Datei ${file.name} ist zu groß. Maximale Größe ist 5MB.`);
        continue;
      }
      
      try {
        const base64 = await convertToBase64(file);
        base64Files.push({
          name: file.name,
          type: file.type,
          size: file.size,
          data: base64
        });
      } catch (error) {
        console.error('Error converting file to base64:', error);
        alert(`Fehler beim Verarbeiten der Datei ${file.name}`);
      }
    }

    setFormData(prev => ({
      ...prev,
      photos: base64Files.length > 0 ? base64Files : null
    }));
  };

  // Helper function to convert file to base64
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Remove the data:image/jpeg;base64, prefix
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = error => reject(error);
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>100% Diskret & Vertraulich</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Kostenloses Angebot erhalten
          </h2>
          
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
                Füllen Sie die Felder aus
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Wir senden Ihnen Ihr kostenloses Angebot in Kürze zu.
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
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="z.B. 50 m²"
                />
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
                      {Array.isArray(formData.photos) ? formData.photos.length : 0} Datei(en) ausgewählt
                      {Array.isArray(formData.photos) && formData.photos.length > 0 && (
                        <span className="block text-xs text-gray-500 mt-1">
                          {formData.photos.map(file => file.name).join(', ')}
                        </span>
                      )}
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

              {/* Status Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg text-base ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung anfragen'}</span>
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
  );
};

export default ContactForm;