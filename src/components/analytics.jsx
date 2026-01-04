import React from 'react';
import ProgressChart from './progress-chart';
import TopHabits from './top-habits';

function Analytics({ habits, currentMonth, currentYear }) {
  return (
    <div className="grid grid-cols-3 gap-6 animate-fade-in-up delay-200">
      <div className="col-span-2 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-6">
        <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4 tracking-wider">
          📊 Progression mensuelle
        </h3>
        <ProgressChart 
          habits={habits} 
          currentMonth={currentMonth} 
          currentYear={currentYear} 
        />
      </div>
      
      <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-6">
        <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4 tracking-wider">
          🏆 Top habitudes
        </h3>
        <TopHabits 
          habits={habits} 
          currentMonth={currentMonth} 
          currentYear={currentYear} 
        />
      </div>
    </div>
  );
}

export default Analytics;