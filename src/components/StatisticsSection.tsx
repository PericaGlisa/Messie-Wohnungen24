import React from 'react';

interface Stat {
  number: string;
  label: string;
}

interface StatisticsSectionProps {
  stats: Stat[];
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ stats }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
          Unsere Mission
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Bei Messie-Wohnungen24 wissen wir, dass jede Entrümpelung weit mehr bedeutet als nur das Entfernen von Gegenständen. 
          Jeder Raum hat seinen Wert und seine Bedeutung – er verdient Aufmerksamkeit und Respekt in jedem Schritt der Räumung, 
          und unsere Aufgabe ist es, ihm Ordnung und Klarheit zurückzugeben.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Unser Ziel ist es, den Menschen die Möglichkeit zu geben, freier zu atmen und dass ihr Zuhause wieder ein Ort 
          der Sicherheit und Geborgenheit wird. Bei jedem Auftrag arbeiten wir mit Diskretion, Verständnis und tiefem 
          Respekt gegenüber dem, was für jemanden einmal wichtig war.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Wir arbeiten sorgfältig, professionell und mit viel Mitgefühl – denn wir glauben, dass das Reinigen eines 
          Raumes auch bedeutet, die Türen zu einem neuen, besseren Lebensabschnitt zu öffnen.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(StatisticsSection);