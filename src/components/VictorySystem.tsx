import React from 'react';
import { motion } from 'framer-motion';

const VictorySystem: React.FC = () => {
  // Define planets with their properties - reduced distances
  const planets = [
    { emoji: "⏰", name: "Time", distance: 80, duration: 10, description: "Faster response times", color: "bg-blue-500/20" },
    { emoji: "⚡", name: "Speed", distance: 120, duration: 15, description: "Lightning-fast execution", color: "bg-yellow-500/20" },
    { emoji: "💰", name: "Profit", distance: 160, duration: 20, description: "Increased revenue", color: "bg-green-500/20" },
    { emoji: "📈", name: "Growth", distance: 200, duration: 25, description: "Continuous expansion", color: "bg-purple-500/20" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Sun (Victory Trophy) */}
      <div className="absolute z-10">
        <motion.div
          className="text-5xl victory-sun"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1]
          }}
        >
          <motion.div 
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,107,0,0.3)',
                '0 0 40px rgba(255,107,0,0.5)',
                '0 0 20px rgba(255,107,0,0.3)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🏆
          </motion.div>
        </motion.div>
      </div>

      {/* Orbital Paths */}
      {planets.map((planet, index) => (
        <div
          key={`orbit-${index}`}
          className="absolute border-2 rounded-full orbit-path"
          style={{
            width: `${planet.distance * 2}px`,
            height: `${planet.distance * 2}px`,
            borderColor: 'rgba(255, 107, 0, 0.9)',
            boxShadow: '0 0 25px rgba(255, 107, 0, 0.4)'
          }}
        />
      ))}

      {/* Planets */}
      {planets.map((planet, index) => (
        <motion.div
          key={`planet-${index}`}
          className="absolute"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: planet.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transformOrigin: "50% 50%",
          }}
        >
          <motion.div
            className="relative"
            style={{
              transform: `translateX(${planet.distance}px)`,
            }}
          >
            {/* Planet emoji with circular background and glow effect */}
            <div className={`w-14 h-14 rounded-full ${planet.color} flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm cursor-pointer group relative`}>
              <span className="text-2xl relative z-10">
                {planet.emoji}
              </span>
              
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 transform translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-lg shadow-lg text-sm whitespace-nowrap">
                  <strong>{planet.name}:</strong> {planet.description}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default VictorySystem; 