# 🎯 Habit Tracker 2026 - Dark Mode Premium

![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Application web moderne de suivi d'habitudes quotidiennes avec interface Dark Mode premium, animations fluides et système de gamification.

---

## 📸 Aperçu

![Habit Tracker Screenshot](Output.png)

---

## ✨ Fonctionnalités

### 🎨 Interface & Design
- **Dark Mode Premium** - Fond dégradé bleu sombre avec orbes animés
- **Glassmorphism** - Cartes semi-transparentes avec effet de verre givré
- **Animations fluides** - Transitions et effets visuels partout
- **Responsive Design** - S'adapte à tous les écrans (mobile, tablette, desktop)
- **Hover Effects** - Interactions visuelles sur tous les éléments

### 📊 Suivi des Habitudes
- **Vue mensuelle complète** - Tous les jours du mois visibles en un coup d'œil
- **Tracking quotidien** - Cases à cocher avec animations
- **10 habitudes par défaut** - Personnalisables et supprimables
- **Ajout illimité** - Créez autant d'habitudes que vous voulez
- **Pourcentage de complétion** - Par habitude et par jour

### 📈 Analytics & Statistiques
- **KPIs en temps réel** :
  - Nombre d'habitudes actives
  - Taux de complétion du jour (%)
  - Taux de complétion mensuelle (%)
  - Streak (jours consécutifs avec ≥70% de complétion)
  
- **Graphique de progression** :
  - Visualisation jour par jour du mois
  - Code couleur selon performance :
    - 🟢 Vert : 80-100%
    - 🟡 Jaune : 60-79%
    - 🟠 Orange : 1-59%
    - ⚪ Gris : 0%
  
- **Top 5 des habitudes** :
  - Classement des meilleures habitudes du mois
  - Médailles pour le podium (🥇🥈🥉)
  - Barres de progression visuelles

### 🎮 Gamification
- **🎊 Confetti** - Célébration automatique quand vous atteignez 100% du jour
- **🔥 Streak animé** - La flamme bounce quand vous avez un streak actif
- **✓ Check animations** - Animation satisfaisante à chaque validation
- **🏆 Système de récompenses visuelles**

### 💾 Sauvegarde
- **LocalStorage** - Toutes vos données sont sauvegardées localement
- **Persistance** - Vos habitudes et progrès restent entre les sessions
- **Aucun serveur requis** - Fonctionne 100% côté client
- **Données privées** - Rien n'est envoyé en ligne

---

## 🚀 Installation

### Prérequis
- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/habit-tracker-2026.git
cd habit-tracker-2026
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir l'application**
```
http://localhost:5173
```

### Build de production
```bash
npm run build
```
Les fichiers optimisés seront dans le dossier `dist/`

### Prévisualiser le build
```bash
npm run preview
```

---

## 📁 Structure du Projet

```
habit-tracker-2026/
├── src/
│   ├── components/              # Composants React
│   │   ├── header.jsx           # En-tête avec KPIs
│   │   ├── kpi.jsx              # Carte de métrique individuelle
│   │   ├── habits-table.jsx     # Table principale des habitudes
│   │   ├── analytics.jsx        # Section analytics
│   │   ├── progress-chart.jsx   # Graphique de progression
│   │   ├── top-habits.jsx       # Top 5 habitudes
│   │   ├── modal.jsx            # Modal d'ajout d'habitude
│   │   └── confetti.jsx         # Animation de célébration
│   │
│   ├── utils/
│   │   └── stats.js             # Fonctions de calcul de statistiques
│   │
│   ├── app.jsx                  # Composant principal
│   ├── main.jsx                 # Point d'entrée
│   └── index.css                # Styles globaux + animations
│
├── public/                      # Assets statiques
├── index.html                   # HTML de base
├── package.json                 # Dépendances
├── vite.config.js               # Configuration Vite
├── tailwind.config.js           # Configuration Tailwind
├── postcss.config.js            # Configuration PostCSS
└── README.md                    # Documentation
```

---

## 🛠️ Technologies Utilisées

| Technologie | Version | Usage |
|------------|---------|-------|
| **React** | 18.2.0 | Framework UI |
| **Vite** | 5.0.8 | Build tool ultra-rapide |
| **Tailwind CSS** | 3.4.0 | Framework CSS utility-first |
| **PostCSS** | 8.4.32 | Traitement CSS |
| **Autoprefixer** | 10.4.16 | Compatibilité navigateurs |

---

## 🎨 Design System

### Palette de Couleurs

**Dark Mode :**
- Fond principal : `slate-900` → `slate-800`
- Orbes animés : `blue-500/20`, `purple-500/20`, `cyan-500/10`
- Glassmorphism : `white/10` avec `backdrop-blur-xl`
- Accents : `blue-400` → `cyan-400` (gradient)

**États :**
- Succès (≥80%) : `green-500` → `emerald-400`
- Attention (≥60%) : `yellow-500` → `amber-400`
- Danger (<60%) : `orange-500` → `red-400`
- Neutre : `white/10`

### Animations

Toutes les animations sont définies dans `src/index.css` :

| Animation | Durée | Usage |
|-----------|-------|-------|
| `fade-in` | 0.5s | Apparition générale |
| `fade-in-up` | 0.6s | Sections qui montent |
| `scale-in` | 0.3s | Modal |
| `slide-up` | 0.8s | Barres de graphique |
| `slide-in-right` | 0.5s | Top habitudes |
| `check-in` | 0.3s | Validation checkbox |
| `ping-once` | 0.3s | Click feedback |
| `bounce` | Continu | Streak actif |
| `fall` | 2-4s | Confetti |

---

## 📖 Guide d'Utilisation

### Ajouter une habitude
1. Cliquez sur le bouton **"+ Ajouter"**
2. Entrez le nom de l'habitude
3. Choisissez un emoji (optionnel)
4. Cliquez sur **"Ajouter"**

### Tracker une habitude
1. Trouvez votre habitude dans la table
2. Cliquez sur la case du jour correspondant
3. Une animation de validation apparaît ✓
4. Le pourcentage se met à jour automatiquement

### Supprimer une habitude
1. Cliquez sur le **×** à droite de l'habitude
2. Confirmez la suppression

### Changer de mois
1. Utilisez le sélecteur en haut à droite
2. Les données se chargent automatiquement

### Célébrer vos succès
- Complétez **100% de vos habitudes** en un jour
- Des confetti 🎊 apparaissent automatiquement !
- Le streak 🔥 commence à bouncer

---

## ⚙️ Configuration

### Modifier les habitudes par défaut

Éditez `src/app.jsx`, lignes 30-40 :

```javascript
const defaultHabits = [
  { id: 1, name: "Votre habitude", icon: "🎯", completedDays: {} },
  // Ajoutez vos habitudes ici
];
```

### Changer les couleurs

Dans les fichiers de composants, remplacez :
```javascript
// Remplacer blue par une autre couleur
from-blue-500 to-cyan-500

// Options : purple, pink, green, orange, red, etc.
from-purple-500 to-pink-500
```

### Désactiver les confetti

Dans `src/app.jsx`, commentez les lignes 54-57 :

```javascript
// if (newStats.todayCompletion === 100 && habits.length > 0) {
//   setShowConfetti(true);
//   setTimeout(() => setShowConfetti(false), 3000);
// }
```

### Modifier le seuil de streak

Dans `src/utils/stats.js`, ligne 38 :

```javascript
// Actuellement 70% minimum
if (completed >= habits.length * 0.7) {
  // Changez 0.7 par 0.5 (50%), 0.8 (80%), etc.
}
```

---

## 🎯 Roadmap / Améliorations Futures

### Fonctionnalités planifiées
- [ ] Export des données en CSV/Excel
- [ ] Import de données
- [ ] Dark/Light mode toggle
- [ ] Notifications navigateur
- [ ] Graphiques de tendance (semaine/mois/année)
- [ ] Catégories d'habitudes
- [ ] Objectifs personnalisés par habitude
- [ ] Système de badges/achievements
- [ ] Notes quotidiennes
- [ ] Partage de progrès
- [ ] Synchronisation cloud (optionnelle)
- [ ] Version mobile (PWA)
- [ ] Mode hors ligne complet

### Améliorations techniques
- [ ] Tests unitaires (Jest + React Testing Library)
- [ ] Tests E2E (Cypress)
- [ ] TypeScript migration
- [ ] Optimisation des performances
- [ ] Accessibilité (WCAG 2.1 AA)
- [ ] Internationalisation (i18n)

---

## 🐛 Problèmes Connus

### Problème de cache du navigateur
**Symptôme :** Les modifications ne s'affichent pas  
**Solution :** Faire un hard refresh avec `Ctrl + Shift + R` (ou `Cmd + Shift + R` sur Mac)

### Animation confetti ne démarre pas
**Symptôme :** Pas de confetti à 100%  
**Solution :** Vérifier que le fichier `confetti.jsx` est bien dans `src/components/`

### Erreur "animated is not defined"
**Symptôme :** Erreur dans la console  
**Solution :** Vérifier que dans `kpi.jsx` ligne 3, vous avez : `animated = false`

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 👨‍💻 Auteur

**Nilton**
- Portfolio : [Votre site]
- GitHub : [@votre-username](https://github.com/votre-username)
- LinkedIn : [Votre profil](https://linkedin.com/in/votre-profil)

---

## 🙏 Remerciements

- [React](https://reactjs.org/) - Framework UI
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide Icons](https://lucide.dev/) - Icons (si utilisés)

---

## 📊 Stats du Projet

![GitHub stars](https://img.shields.io/github/stars/votre-username/habit-tracker-2026?style=social)
![GitHub forks](https://img.shields.io/github/forks/votre-username/habit-tracker-2026?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/votre-username/habit-tracker-2026?style=social)

---

## 💡 Inspiration

Ce projet a été créé pour aider à développer de meilleures habitudes quotidiennes à travers une interface moderne et engageante. L'objectif est de rendre le tracking d'habitudes aussi satisfaisant visuellement que productif.

---

**Made with ❤️ by Nilton** | Janvier 2026

Si vous trouvez ce projet utile, n'hésitez pas à lui donner une ⭐ !
