/**
 * Calcule les statistiques des habitudes
 */
export function calculateStats(habits, currentMonth, currentYear) {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  
  // Aujourd'hui
  const completedToday = habits.filter(h => h.completedDays[todayStr]).length;
  const todayCompletion = habits.length > 0 ? Math.round((completedToday / habits.length) * 100) : 0;

  // Mensuel
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let monthlyTotal = 0;
  let monthlyCompleted = 0;
  
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(currentYear, currentMonth, d);
    const dateStr = date.toISOString().split('T')[0];
    habits.forEach(h => {
      monthlyTotal++;
      if (h.completedDays[dateStr]) monthlyCompleted++;
    });
  }
  
  const monthlyCompletion = monthlyTotal > 0 ? Math.round((monthlyCompleted / monthlyTotal) * 100) : 0;

  // Streak
  let streak = 0;
  let checkDate = new Date(today);
  
  while (true) {
    const dateStr = checkDate.toISOString().split('T')[0];
    const completed = habits.filter(h => h.completedDays[dateStr]).length;
    
    // Considère un jour comme "complété" si au moins 70% des habitudes sont faites
    if (completed >= habits.length * 0.7) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    totalHabits: habits.length,
    todayCompletion,
    monthlyCompletion,
    currentStreak: streak
  };
}

/**
 * Obtient la couleur en fonction du taux de complétion
 */
export function getCompletionColor(rate) {
  if (rate >= 80) return 'green';
  if (rate >= 60) return 'yellow';
  if (rate > 0) return 'orange';
  return 'gray';
}

/**
 * Formate une date en string lisible
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}