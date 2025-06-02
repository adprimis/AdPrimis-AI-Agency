import React from 'react';
import { motion } from 'framer-motion';

// Define the BackgroundStars component
const BackgroundStars: React.FC = () => {
  // Define the number of general background stars and the planet-specific stars
  const numGeneralStars = 50;
  const numPlanetStars = 45;
  const planetApproxDistance = 120 * 1.5;
  const planetInfluenceRadius = 40;

  // Generate general background stars
  const generalStars = Array.from({ length: numGeneralStars }).map((_, i) => ({
    id: `general-${i}`,
    x: (Math.random() - 0.5) * 800,
    y: (Math.random() - 0.5) * 600,
    size: Math.random() * 3 + 2, // Increased size range from 1-3 to 2-5
    delay: Math.random() * 5,
    duration: Math.random() * 2 + 1,
    opacity: [0.3, 0.8, 0.3], // Increased base opacity
    scale: [1, 1.2, 1],
  }));

  // Filter general stars
  const filteredGeneralStars = generalStars.filter(star => {
    const distanceFromCenter = Math.sqrt(star.x * star.x + star.y * star.y);
    const planetApproxX = planetApproxDistance;
    const planetApproxY = 0; 
    const distanceFromPlanet = Math.sqrt(Math.pow(star.x - planetApproxX, 2) + Math.pow(star.y - planetApproxY, 2));

    return distanceFromCenter > 200 && distanceFromPlanet > planetInfluenceRadius * 2;
  });

  // Generate stars specifically around the 4th planet
  const planetStars = Array.from({ length: numPlanetStars }).map((_, i) => ({
    id: `planet-${i}`,
    x: (Math.random() - 0.5) * planetInfluenceRadius + planetApproxDistance,
    y: (Math.random() - 0.5) * planetInfluenceRadius,
    size: Math.random() * 2 + 1.5, // Increased size range from 0.5-2 to 1.5-3.5
    delay: Math.random() * 0.3,
    duration: Math.random() * 0.8 + 0.3,
    opacity: [0.7, 1, 0.7], // Increased base opacity
    scale: [1, 1.2, 1], // Increased scale effect
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Render general background stars */}
      {filteredGeneralStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `calc(50% + ${star.x}px)`,
            top: `calc(50% + ${star.y}px)`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
            zIndex: 10
          }}
          animate={{
            opacity: star.opacity,
            scale: star.scale,
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}

      {/* Render stars around the 4th planet */}
      {planetStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `calc(50% + ${star.x}px)`,
            top: `calc(50% + ${star.y}px)`,
            boxShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.6)',
            zIndex: 10
          }}
          animate={{
            opacity: star.opacity,
            scale: star.scale,
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

const VictorySystem: React.FC = () => {
  // Define planets with their properties - reduced distances
  const planets = [
    { emoji: "⏰", name: "Time", distance: 45, duration: 10, description: "Faster response times", color: "bg-blue-500/20" },
    { emoji: "⚡", name: "Speed", distance: 70, duration: 15, description: "Lightning-fast execution", color: "bg-yellow-500/20" },
    { emoji: "💰", name: "Profit", distance: 95, duration: 20, description: "Increased revenue", color: "bg-green-500/20" },
    { emoji: "📈", name: "Growth", distance: 120, duration: 25, description: "Continuous expansion", color: "bg-purple-500/20" },
  ];

  // Get the current screen size and adjust distances accordingly
  const getPlanetDistance = (baseDistance: number) => {
    if (window.innerWidth >= 1024) { // Desktop
      return baseDistance * 1.5; // Restore original desktop sizes
    }
    return baseDistance; // Keep mobile/tablet sizes
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Stars */}
      <BackgroundStars />

      {/* Sun (Victory Trophy) */}
      <div className="absolute z-20">
        <motion.div
          className="text-4xl sm:text-5xl victory-sun"
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
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-primary/20 flex items-center justify-center"
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
            width: `${getPlanetDistance(planet.distance) * 2}px`,
            height: `${getPlanetDistance(planet.distance) * 2}px`,
            borderColor: 'rgb(255, 107, 0)',
            borderWidth: '2px',
            boxShadow: '0 0 20px rgba(255, 107, 0, 0.5)'
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
              transform: `translateX(${getPlanetDistance(planet.distance)}px)`,
            }}
          >
            {/* Planet emoji with circular background and glow effect */}
            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full ${planet.color} flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm cursor-pointer group relative`}>
              <span className="text-lg sm:text-xl lg:text-2xl relative z-10">
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