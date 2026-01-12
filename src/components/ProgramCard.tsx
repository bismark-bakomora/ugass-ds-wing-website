import React from 'react';
import { ChevronRight } from 'lucide-react';
import { COLORS } from '../data/constants';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const Icon = program.icon;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
        style={{ backgroundColor: `${COLORS.primary}20` }}
      >
        <Icon size={24} style={{ color: COLORS.primary }} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
        {program.title}
      </h3>
      <p className="text-gray-600 mb-4">{program.description}</p>
      <ul className="space-y-2">
        {program.items.map((item, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-700">
            <ChevronRight 
              size={16} 
              className="mt-0.5 mr-2 flex-shrink-0" 
              style={{ color: COLORS.gold }} 
            />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramCard;