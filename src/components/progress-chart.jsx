import React from 'react';

function ProgressChart({ habits, currentMonth, currentYear }) {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const data = days.map(d => {
    const date = new Date(currentYear, currentMonth, d);
    const dateStr = date.toISOString().split('T')[0];
    const completed = habits.filter(h => h.completedDays[dateStr]).length;
    const rate = habits.length > 0 ? (completed / habits.length) * 100 : 0;
    return { day: d, rate };
  });

  return (
    <div className="space-y-4">
      <div className="h-48 flex items-end gap-0.5">
        {data.map(({ day, rate }, index) => (
          <div 
            key={day} 
            className="flex-1 flex flex-col items-center justify-end group relative"
            style={{ animationDelay: `${index * 20}ms` }}
          >
            <div 
              className={`w-full transition-all duration-500 rounded-t-sm hover:opacity-80 cursor-pointer animate-slide-up ${
                rate >= 80 ? 'bg-gradient-to-t from-green-500 to-emerald-400' :
                rate >= 60 ? 'bg-gradient-to-t from-yellow-500 to-amber-400' :
                rate > 0 ? 'bg-gradient-to-t from-orange-500 to-red-400' : 'bg-white/10'
              }`}
              style={{ 
                height: `${rate}%`,
                boxShadow: rate > 0 ? '0 0 10px rgba(59, 130, 246, 0.3)' : 'none'
              }}
            >
              {/* Tooltip au survol */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20 shadow-xl">
                Jour {day}: {Math.round(rate)}%
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
              </div>
            </div>
            {day % 5 === 0 && (
              <span className="text-[9px] text-gray-500 mt-1">{day}</span>
            )}
          </div>
        ))}
      </div>

      {/* Légende */}
      <div className="flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-green-500 to-emerald-400 shadow-sm shadow-green-500/50"></div>
          <span className="text-gray-400">80-100%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-yellow-500 to-amber-400 shadow-sm shadow-yellow-500/50"></div>
          <span className="text-gray-400">60-79%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-orange-500 to-red-400 shadow-sm shadow-orange-500/50"></div>
          <span className="text-gray-400">1-59%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-white/10"></div>
          <span className="text-gray-400">0%</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressChart;