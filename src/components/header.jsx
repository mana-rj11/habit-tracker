import React from 'react';
import KPI from './kpi';

const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

function Header({ stats, currentMonth, setCurrentMonth, onAddHabit }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Habit Tracker</h1>
          <p className="text-sm text-gray-400 mt-1">Suivi quotidien de vos habitudes - 2026</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={currentMonth}
            onChange={(e) => setCurrentMonth(Number(e.target.value))}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white backdrop-blur-xl hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
          >
            {monthNames.map((month, i) => (
              <option key={i} value={i} className='bg-slate-800'>{month}</option>
            ))}
          </select>
          <button 
            onClick={onAddHabit}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            + Ajouter
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        <KPI title="Habitudes actives" value={stats.totalHabits} />
        <KPI 
          title="Aujourd'hui" 
          value={`${stats.todayCompletion}%`} 
          color={stats.todayCompletion >= 70 ? 'green' : 'red'} 
        />
        <KPI 
          title="Ce mois" 
          value={`${stats.monthlyCompletion}%`} 
          color={stats.monthlyCompletion >= 70 ? 'green' : 'orange'} 
        />
        <KPI 
          title="Streak" 
          value={`${stats.currentStreak} jours`} 
          icon="🔥"
          animated={stats.currentStreak > 0} 
        />
      </div>
    </div>
  );
}

export default Header;