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
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
          Unsere Mission
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Bei Messie-Wohnungen24 verstehen wir, dass hinter jeder Entrümpelung eine persönliche Geschichte steht. 
          Unser Ziel ist es nicht nur, Räume zu reinigen, sondern Menschen dabei zu helfen, einen neuen Lebensabschnitt 
          zu beginnen. Wir arbeiten mit größter Sensibilität, Respekt und Professionalität.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  );
};

export default React.memo(StatisticsSection);