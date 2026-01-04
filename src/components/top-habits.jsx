import React from 'react';

function TopHabits({ habits, currentMonth, currentYear }) {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const stats = habits.map(h => {
    const completed = days.filter(d => {
      const date = new Date(currentYear, currentMonth, d);
      return h.completedDays[date.toISOString().split('T')[0]];
    }).length;
    return { 
      ...h, 
      completed, 
      rate: Math.round((completed / days.length) * 100) 
    };
  }).sort((a, b) => b.rate - a.rate);

  const getMedalEmoji = (index) => {
    switch(index) {
      case 0: return '🥇';
      case 1: return '🥈';
      case 2: return '🥉';
      default: return '';
    }
  };

  return (
    <div className="space-y-3">
      {stats.slice(0, 5).map((h, i) => (
        <div 
          key={h.id} 
          className="flex items-center gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all cursor-pointer animate-slide-in-right"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full text-xs font-semibold text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
            {getMedalEmoji(i) || i + 1}
          </div>
          <span className="text-xl group-hover:scale-110 transition-transform">{h.icon}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{h.name}</span>
              <span className="text-gray-500">{h.completed}/{days.length}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-2 rounded-full transition-all duration-1000 ${
                  h.rate >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-400 shadow-sm shadow-green-500/50' :
                  h.rate >= 60 ? 'bg-gradient-to-r from-yellow-500 to-amber-400 shadow-sm shadow-yellow-500/50' : 
                  'bg-gradient-to-r from-orange-500 to-red-400 shadow-sm shadow-orange-500/50'
                }`}
                style={{ width: `${h.rate}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopHabits;