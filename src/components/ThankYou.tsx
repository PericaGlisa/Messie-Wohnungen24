import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Phone } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Vielen Dank!
          </h1>
          <p className="text-gray-600 text-lg">
            Ihre Nachricht wurde erfolgreich gesendet.
          </p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <p className="text-green-800 text-sm">
            Wir werden uns innerhalb von 60 Minuten bei Ihnen melden und Ihnen ein kostenloses Angebot für die Entrümpelung unterbreiten.
          </p>
        </div>
        
        <div className="space-y-3">
          <Link 
            to="/" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Zurück zur Startseite
          </Link>
          
          <a 
            href="tel:+4917670211430" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Sofort anrufen
          </a>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Haben Sie Fragen? Rufen Sie uns an:
          </p>
          <p className="text-blue-600 font-semibold">
            +49 1551 0333 444
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;