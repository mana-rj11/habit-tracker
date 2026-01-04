import React, { useState } from 'react';

function HabitsTable({ habits, currentMonth, currentYear, toggleHabit, deleteHabit }) {
  const [clickedCell, setClickedCell] = useState(null);
  const today = new Date();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleToggle = (habitId, date, dateStr) => {
    setClickedCell(dateStr + habitId);
    setTimeout(() => setClickedCell(null), 300);
    toggleHabit(habitId, date);
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-fade-in-up">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="sticky left-0 bg-slate-800/95 backdrop-blur-xl px-4 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider border-r border-white/10 min-w-[200px] z-20">
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
              const rate = Math.round((completed / daysInMonth) * 100);

              return (
                <tr key={habit.id} className="hover:bg-white/5 transition-colors group">
                  <td className="sticky left-0 bg-slate-800/95 backdrop-blur-xl px-4 py-2 border-r border-white/10 group-hover:bg-white/10 z-10 transition-all">
                    <div className="flex items-center gap-2">
                      <span className="text-xl group-hover:scale-110 transition-transform">{habit.icon}</span>
                      <span className="text-sm font-medium text-gray-200">{habit.name}</span>
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
                        className={`px-2 py-2 border-r border-white/5 transition-all ${
                          isToday ? 'bg-blue-500/10' : ''
                        }`}
                      >
                        <button
                          onClick={() => handleToggle(habit.id, date, dateStr)}
                          className={`w-6 h-6 rounded-md mx-auto flex items-center justify-center transition-all duration-200 ${
                            isCompleted 
                              ? 'bg-gradient-to-br from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 shadow-lg shadow-green-500/50 scale-100' 
                              : 'bg-white/10 hover:bg-white/20 border border-white/20'
                          } ${isClicked ? 'animate-ping-once' : ''} hover:scale-110`}
                        >
                          {isCompleted && (
                            <svg className="w-4 h-4 text-white animate-check-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      </td>
                    );
                  })}
                  <td className="sticky right-12 bg-slate-800/95 backdrop-blur-xl px-3 py-2 text-center border-l border-white/10 z-10">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      rate >= 80 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      rate >= 60 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {rate}%
                    </span>
                  </td>
                  <td className="sticky right-0 bg-slate-800/95 backdrop-blur-xl px-3 py-2 text-center z-10">
                    <button 
                      onClick={() => deleteHabit(habit.id)} 
                      className="text-gray-500 hover:text-red-400 transition-colors hover:scale-110 transform"
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
    </div>
  );
}

export default HabitsTable;