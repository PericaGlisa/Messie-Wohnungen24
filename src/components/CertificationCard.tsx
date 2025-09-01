import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ name, icon: IconComponent, color }) => {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <IconComponent className={`w-12 h-12 ${color}`} />
      </div>
      <h4 className="font-semibold text-gray-800 text-sm">
        {name}
      </h4>
    </div>
  );
};

export default React.memo(CertificationCard);