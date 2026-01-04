import React, { useState, useEffect } from 'react';
import Header from './components/header';
import HabitsTable from './components/habits-table';
import Analytics from './components/analytics';
import Modal from './components/modal';
import Confetti from './components/confetti';
import { calculateStats } from './utils/stats';

function App() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [habits, setHabits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [stats, setStats] = useState({
    totalHabits: 0,
    todayCompletion: 0,
    monthlyCompletion: 0,
    currentStreak: 0
  });

  // Charger les données depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('habits-pro-2026');
    if (saved) {
      setHabits(JSON.parse(saved));
    } else {
      // Habitudes par défaut
      const defaultHabits = [
        { id: 1, name: "Aller à la salle", icon: "🏋️", completedDays: {} },
        { id: 2, name: "Lire la bible", icon: "📚", completedDays: {} },
        { id: 3, name: "8H Sommeil", icon: "😴", completedDays: {} },
        { id: 4, name: "Pas de soirée", icon: "🏠", completedDays: {} },
        { id: 5, name: "Boire 1L d'eau", icon: "💧", completedDays: {} },
        { id: 6, name: "Pas de fastfood", icon: "🍕", completedDays: {} },
        { id: 7, name: "1H de lecture", icon: "📚", completedDays: {} },
        { id: 8, name: "Reviser les cours", icon: "📚", completedDays: {} },
        { id: 9, name: "Avancer Project", icon: "👨‍💻", completedDays: {} },
        { id: 10, name: "Écouter un podcast", icon: "🎧", completedDays: {} },
        { id: 11, name: "10K steps", icon: "👟", completedDays: {} },
        { id: 12, name: "Plaisir, documentation sur United-Real", icon: "⚽️", completedDays: {} }
      ];
      setHabits(defaultHabits);
    }
  }, []);

  // Sauvegarder et calculer les stats
  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem('habits-pro-2026', JSON.stringify(habits));
      const newStats = calculateStats(habits, currentMonth, currentYear);
      setStats(newStats);
      
      // Déclencher confetti si 100% aujourd'hui
      if (newStats.todayCompletion === 100 && habits.length > 0) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
  }, [habits, currentMonth, currentYear]);

  const toggleHabit = (habitId, date) => {
    const dateStr = date.toISOString().split('T')[0];
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const newDays = {...habit.completedDays};
        if (newDays[dateStr]) {
          delete newDays[dateStr];
        } else {
          newDays[dateStr] = true;
        }
        return {...habit, completedDays: newDays};
      }
      return habit;
    }));
  };

  const addHabit = (name, icon) => {
    const newHabit = {
      id: Date.now(),
      name,
      icon,
      completedDays: {}
    };
    setHabits([...habits, newHabit]);
    setShowModal(false);
  };

  const deleteHabit = (habitId) => {
    if (window.confirm('Supprimer cette habitude ?')) {
      setHabits(habits.filter(h => h.id !== habitId));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Confetti celebration */}
      {showConfetti && <Confetti />}

      <div className="max-w-[1800px] mx-auto space-y-6 relative z-10">
        <Header 
          stats={stats}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          onAddHabit={() => setShowModal(true)}
        />

        <HabitsTable 
          habits={habits}
          currentMonth={currentMonth}
          currentYear={currentYear}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />

        <Analytics 
          habits={habits}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />

        {showModal && (
          <Modal 
            onClose={() => setShowModal(false)} 
            onAdd={addHabit} 
          />
        )}
      </div>
    </div>
  );
}

export default App;