import React, { useState } from 'react';

function Modal({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('✅');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name, icon);
      setName('');
      setIcon('✅');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="backdrop-blur-xl bg-slate-800/90 border border-white/20 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          ✨ Nouvelle habitude
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nom de l'habitude
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Méditation 10min"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-xl"
              autoFocus
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Emoji (optionnel)
            </label>
            <input 
              type="text" 
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              placeholder="🧘"
              maxLength={2}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-xl"
            />
          </div>

          <div className="flex gap-3 mt-6">
            <button 
              type="button"
              onClick={onClose} 
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/20 transition-all backdrop-blur-xl"
            >
              Annuler
            </button>
            <button 
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;