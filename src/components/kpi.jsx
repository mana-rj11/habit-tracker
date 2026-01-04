import React from 'react';

function KPI({ title, value, color, icon, animated = false }) {
  const getColorClass = () => {
    switch(color) {
      case 'green': return 'text-green-400';
      case 'red': return 'text-red-400';
      case 'orange': return 'text-orange-400';
      default: return 'text-white';
    }
  };

  const getBgGlow = () => {
    switch(color) {
      case 'green': return 'shadow-green-500/20';
      case 'red': return 'shadow-red-500/20';
      case 'orange': return 'shadow-orange-500/20';
      default: return 'shadow-blue-500/20';
    }
  };

  return (
    <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl ${getBgGlow()} group`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{title}</p>
        {icon && (
          <span className={`text-2xl ${animated ? 'animate-bounce' : ''}`}>
            {icon}
          </span>
        )}
      </div>
      <p className={`text-3xl font-bold ${getColorClass()} transition-all duration-300 group-hover:scale-110`}>
        {value}
      </p>
    </div>
  );
}

export default KPI;