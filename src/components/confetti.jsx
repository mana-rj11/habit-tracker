import React, { useEffect, useState } from "react";

function Confetti() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i, 
            left: Math.random() * 100,
            delay: Math.random() * 0.05,
            duration: 2 + Math.random() * 2,
            color: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']
[Math.floor(Math.random() * 5)]
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute w-2 h-2 rounded-full animate-fall"
                    style={{
                        left: `${particle.left}%`,
                        top: '-10px',
                        backgroundColor: particle.color,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                    }}
                />    
            ))}
        </div>
    );
}

export default Confetti;