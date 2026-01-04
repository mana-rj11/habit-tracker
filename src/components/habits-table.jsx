import React, { useState, useEffect } from 'react';

function HabitsTable({ habits, currentMonth, currentYear, toggleHabit, deleteHabit }) {
  const [clickedCell, setClickedCell] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const today = new Date();
  
  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Vue semaine pour mobile (7 derniers jours)
  const getWeekDays = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        days.push(date.getDate());
      }
    }
    return days.length > 0 ? days : [today.getDate()];
  };

  const days = isMobile ? getWeekDays() : Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleToggle = (habitId, date, dateStr) => {
    setClickedCell(dateStr + habitId);
    setTimeout(() => setClickedCell(null), 300);
    toggleHabit(habitId, date);
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-fade-in-up">
      {isMobile && (
        <div className="bg-blue-500/20 border-b border-blue-500/30 px-4 py-2 text-center">
          <p className="text-xs text-blue-300">📱 Vue semaine • Glissez pour voir plus</p>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className={`sticky left-0 bg-slate-800/95 backdrop-blur-xl px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider border-r border-white/10 z-20 ${
                isMobile ? 'min-w-[120px]' : 'min-w-[200px]'
              }`}>
                Habitude
              </th>
              {days.map(day => {
                const date = new Date(currentYear, currentMonth, day);
                const dayName = ['D', 'L', 'M', 'M', 'J', 'V', 'S'][date.getDay()];
                const isToday = date.toDateString() === today.toDateString();
                
                return (
                  <th 
                    key={day} 
                    className={`px-2 py-2 text-center text-xs border-r border-white/5 transition-all ${
                      isToday ? 'bg-blue-500/20 border-blue-500/30' : ''
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-[9px]">{dayName}</span>
                      <span className={`font-semibold ${isToday ? 'text-blue-400' : 'text-gray-400'}`}>
                        {day}
                      </span>
                    </div>
                  </th>
                );
              })}
              <th className="sticky right-12 bg-slate-800/95 backdrop-blur-xl px-3 py-3 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider border-l border-white/10 z-20">
                %
              </th>
              <th className="sticky right-0 bg-slate-800/95 backdrop-blur-xl px-3 py-3 text-center text-xs font-semibold text-gray-300 uppercase z-20">
                ×
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {habits.map(habit => {
              const completed = days.filter(d => {
                const date = new Date(currentYear, currentMonth, d);
                return habit.completedDays[date.toISOString().split('T')[0]];
              }).length;
              
              const totalDays = isMobile ? days.length : daysInMonth;
              const rate = Math.round((completed / totalDays) * 100);

              return (
                <tr key={habit.id} className="hover:bg-white/5 transition-colors group">
                  <td className="sticky left-0 bg-slate-800/95 backdrop-blur-xl px-4 py-3 border-r border-white/10 group-hover:bg-white/10 z-10 transition-all">
                    <div className="flex items-center gap-2">
                      <span className={`${isMobile ? 'text-lg' : 'text-xl'} group-hover:scale-110 transition-transform`}>
                        {habit.icon}
                      </span>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-200 truncate max-w-[100px] md:max-w-none`}>
                        {habit.name}
                      </span>
                    </div>
                  </td>
                  {days.map(d => {
                    const date = new Date(currentYear, currentMonth, d);
                    const dateStr = date.toISOString().split('T')[0];
                    const isCompleted = habit.completedDays[dateStr];
                    const isToday = date.toDateString() === today.toDateString();
                    const cellKey = dateStr + habit.id;
                    const isClicked = clickedCell === cellKey;

                    return (
                      <td 
                        key={d} 
                        className={`px-2 py-3 border-r border-white/5 transition-all ${
                          isToday ? 'bg-blue-500/10' : ''
                        }`}
                      >
                        <button
                          onClick={() => handleToggle(habit.id, date, dateStr)}
                          className={`${isMobile ? 'w-8 h-8' : 'w-6 h-6'} rounded-md mx-auto flex items-center justify-center transition-all duration-200 ${
                            isCompleted 
                              ? 'bg-gradient-to-br from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 shadow-lg shadow-green-500/50 scale-100' 
                              : 'bg-white/10 hover:bg-white/20 border border-white/20'
                          } ${isClicked ? 'animate-ping-once' : ''} hover:scale-110 active:scale-95`}
                        >
                          {isCompleted && (
                            <svg className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} text-white animate-check-in`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      </td>
                    );
                  })}
                  <td className="sticky right-12 bg-slate-800/95 backdrop-blur-xl px-3 py-3 text-center border-l border-white/10 z-10">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold transition-all ${
                      rate >= 80 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      rate >= 60 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {rate}%
                    </span>
                  </td>
                  <td className="sticky right-0 bg-slate-800/95 backdrop-blur-xl px-3 py-3 text-center z-10">
                    <button 
                      onClick={() => deleteHabit(habit.id)} 
                      className="text-gray-500 hover:text-red-400 transition-colors hover:scale-110 transform active:scale-95"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {isMobile && (
        <div className="bg-white/5 border-t border-white/10 px-4 py-3 text-center">
          <p className="text-xs text-gray-400">
            💡 Tournez votre téléphone pour voir le mois complet
          </p>
        </div>
      )}
    </div>
  );
}

export default HabitsTable;