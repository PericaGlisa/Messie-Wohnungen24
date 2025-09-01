import React from 'react';
import { Link } from 'react-router-dom';

const RegionsSection: React.FC = () => {
  const regions = [
    {
      name: 'Baden-Württemberg',
      cities: [
        'Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg im Breisgau', 'Heidelberg',
        'Heilbronn', 'Ulm', 'Pforzheim', 'Reutlingen', 'Esslingen am Neckar',
        'Ludwigsburg', 'Tübingen', 'Villingen-Schwenningen', 'Konstanz', 'Aalen'
      ]
    },
    {
      name: 'Bayern',
      cities: [
        'München', 'Nürnberg', 'Augsburg', 'Würzburg', 'Regensburg',
        'Ingolstadt', 'Fürth', 'Erlangen', 'Bayreuth', 'Bamberg',
        'Aschaffenburg', 'Landshut', 'Kempten', 'Rosenheim', 'Neu-Ulm'
      ]
    },
    {
      name: 'Brandenburg',
      cities: [
        'Potsdam', 'Cottbus', 'Brandenburg an der Havel', 'Frankfurt (Oder)',
        'Oranienburg', 'Falkensee', 'Königs Wusterhausen', 'Eberswalde',
        'Fürstenwalde/Spree', 'Rathenow'
      ]
    },
    {
      name: 'Hessen',
      cities: [
        'Frankfurt am Main', 'Wiesbaden', 'Kassel', 'Darmstadt', 'Offenbach am Main',
        'Hanau', 'Gießen', 'Marburg', 'Fulda', 'Rüsselsheim am Main',
        'Wetzlar', 'Bad Homburg vor der Höhe', 'Oberursel', 'Rodgau', 'Dreieich'
      ]
    },
    {
      name: 'Mecklenburg-Vorpommern',
      cities: [
        'Rostock', 'Schwerin', 'Neubrandenburg', 'Stralsund', 'Greifswald',
        'Wismar', 'Güstrow', 'Waren (Müritz)', 'Parchim', 'Neustrelitz'
      ]
    },
    {
      name: 'Niedersachsen',
      cities: [
        'Hannover', 'Braunschweig', 'Oldenburg', 'Osnabrück', 'Wolfsburg',
        'Göttingen', 'Salzgitter', 'Hildesheim', 'Delmenhorst', 'Wilhelmshaven',
        'Lüneburg', 'Celle', 'Garbsen', 'Hameln', 'Lingen'
      ]
    },
    {
      name: 'Nordrhein-Westfalen',
      cities: [
        'Köln', 'Düsseldorf', 'Dortmund', 'Essen', 'Duisburg',
        'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster',
        'Mönchengladbach', 'Gelsenkirchen', 'Aachen', 'Krefeld', 'Oberhausen',
        'Hagen', 'Hamm', 'Mülheim an der Ruhr', 'Leverkusen', 'Solingen'
      ]
    },
    {
      name: 'Rheinland-Pfalz',
      cities: [
        'Mainz', 'Ludwigshafen am Rhein', 'Koblenz', 'Trier', 'Kaiserslautern',
        'Worms', 'Neuwied', 'Neustadt an der Weinstraße', 'Speyer', 'Frankenthal',
        'Bad Kreuznach', 'Idar-Oberstein', 'Pirmasens', 'Zweibrücken', 'Bad Neuenahr-Ahrweiler'
      ]
    },
    {
      name: 'Saarland',
      cities: [
        'Saarbrücken', 'Neunkirchen', 'Homburg', 'Völklingen', 'Sankt Ingbert',
        'Merzig', 'Sankt Wendel', 'Blieskastel', 'Dillingen/Saar', 'Lebach'
      ]
    },
    {
      name: 'Sachsen',
      cities: [
        'Dresden', 'Leipzig', 'Chemnitz', 'Zwickau', 'Plauen',
        'Görlitz', 'Freiberg', 'Bautzen', 'Freital', 'Pirna',
        'Radebeul', 'Riesa', 'Delitzsch', 'Meißen', 'Limbach-Oberfrohna'
      ]
    },
    {
      name: 'Sachsen-Anhalt',
      cities: [
        'Magdeburg', 'Halle (Saale)', 'Dessau-Roßlau', 'Wittenberg', 'Stendal',
        'Weißenfels', 'Merseburg', 'Bernburg', 'Naumburg', 'Quedlinburg',
        'Halberstadt', 'Sangerhausen', 'Köthen', 'Aschersleben', 'Eisleben'
      ]
    },
    {
      name: 'Schleswig-Holstein',
      cities: [
        'Kiel', 'Lübeck', 'Flensburg', 'Neumünster', 'Norderstedt',
        'Elmshorn', 'Pinneberg', 'Wedel', 'Ahrensburg', 'Geesthacht',
        'Henstedt-Ulzburg', 'Reinbek', 'Bad Oldesloe', 'Schleswig', 'Husum'
      ]
    },
    {
      name: 'Thüringen',
      cities: [
        'Erfurt', 'Jena', 'Gera', 'Weimar', 'Gotha',
        'Nordhausen', 'Eisenach', 'Suhl', 'Mühlhausen', 'Altenburg',
        'Arnstadt', 'Rudolstadt', 'Saalfeld', 'Ilmenau', 'Apolda'
      ]
    }
  ];

  // Stadtstaaten - regioni sa malo gradova
  const cityStates = [
    {
      name: 'Berlin',
      cities: ['Berlin']
    },
    {
      name: 'Bremen',
      cities: ['Bremen', 'Bremerhaven']
    },
    {
      name: 'Hamburg',
      cities: ['Hamburg']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wir sind in ganz Deutschland für Sie da
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Klicken Sie auf Ihre Region oder Stadt, um direkt ein kostenloses Angebot anzufordern.
            Unsere professionellen Entrümpelungsdienste sind deutschlandweit verfügbar.
          </p>
        </div>

        {/* Bundesländer */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Bundesländer
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {regions.map((region) => (
              <div key={region.name} className="">
                <h4 className="text-lg font-semibold text-blue-600 mb-4 border-b border-gray-200 pb-2">
                  {region.name}
                </h4>
                <div className="space-y-2">
                  {region.cities.map((city) => (
                    <Link
                      key={city}
                      to={`/kontakt?region=${encodeURIComponent(region.name)}&city=${encodeURIComponent(city)}`}
                      className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition-colors text-sm"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stadtstaaten */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Stadtstaaten
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {cityStates.map((state) => (
              <div key={state.name} className="text-center">
                <h4 className="text-lg font-semibold text-blue-600 mb-4 border-b border-gray-200 pb-2">
                  {state.name}
                </h4>
                <div className="space-y-2">
                  {state.cities.map((city) => (
                    <Link
                      key={city}
                      to={`/kontakt?region=${encodeURIComponent(state.name)}&city=${encodeURIComponent(city)}`}
                      className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition-colors text-sm"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ihr Ort ist nicht dabei? Kein Problem!
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Jetzt kostenlos anfragen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;