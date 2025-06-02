import React from 'react';
import { motion } from 'framer-motion';

// Define the BackgroundStars component
const BackgroundStars: React.FC = () => {
  // Define the number of general background stars and the planet-specific stars
  const numGeneralStars = 50; // You can adjust this
  const numPlanetStars = 30; // Number of stars around the 4th planet
  // Approximate position of the 4th planet (index 3, distance 120)
  const planetApproxDistance = 120 * 1.5; // Accounting for desktop scale factor
  const planetInfluenceRadius = 30; // Radius around the planet to place stars

  // Generate general background stars (excluding the central area and planet area)
  const generalStars = Array.from({ length: numGeneralStars }).map((_, i) => ({
    id: `general-${i}`,
    // Generate positions outside a central circular area and the area of the 4th planet
    x: (Math.random() - 0.5) * 800,
    y: (Math.random() - 0.5) * 600,
    size: Math.random() * 2 + 1, // Star size between 1 and 3px
    delay: Math.random() * 5, // Animation delay
    duration: Math.random() * 2 + 1, // Animation duration
    opacity: [0, 1, 0.5], // Gentle pulse opacity
    scale: [1, 1.2, 1], // Gentle pulse scale
  }));

  // Filter general stars to be outside a central radius (e.g., 200px from center) and not near the 4th planet's approximate position
  const filteredGeneralStars = generalStars.filter(star => {
    const distanceFromCenter = Math.sqrt(star.x * star.x + star.y * star.y);
    // Approximate 4th planet position (assuming it's roughly to the right on its orbit)
    // A more precise approach would track actual animated position, but this is simpler
    const planetApproxX = planetApproxDistance; // Assuming it's generally along the x-axis at some point
    const planetApproxY = 0; 
    const distanceFromPlanet = Math.sqrt(Math.pow(star.x - planetApproxX, 2) + Math.pow(star.y - planetApproxY, 2));

    return distanceFromCenter > 200 && distanceFromPlanet > planetInfluenceRadius * 2; // Exclude stars within central 200px and within 60px of approximate planet position
  });

  // Generate stars specifically around the 4th planet
  const planetStars = Array.from({ length: numPlanetStars }).map((_, i) => ({
    id: `planet-${i}`,
    // Position stars randomly within a radius around the 4th planet's approximate position
    // We need to account for the planet's orbital motion. A simple approach is to add stars
    // relative to the planet's approximate position *on its orbit*. Since the orbit is
    // centered, and the planet translates out from the center, its position relative
    // to the center of the container is approximately `(planetApproxDistance * cos(angle), planetApproxDistance * sin(angle))`. However, since the animation
    // is `translateX` on a rotating div, the planet's local position is `(planetApproxDistance, 0)` relative to its rotating parent.
    // The parent is centered. So the planet's world position is complex.
    // Let's simplify and just position stars in a cluster around an *average* or *likely* spot on the orbit, e.g., to the right.
    x: (Math.random() - 0.5) * planetInfluenceRadius + planetApproxDistance, // Random pos around approx planet X
    y: (Math.random() - 0.5) * planetInfluenceRadius, // Random pos around approx planet Y
    size: Math.random() * 1 + 0.5, // Small size between 0.5 and 1.5px
    delay: Math.random() * 0.5, // Shorter animation delay
    duration: Math.random() * 1 + 0.5, // Shorter animation duration
    opacity: [0.9, 1, 0.9], // High opacity pulse
    scale: [1, 1.05, 1], // Very subtle pulse scale
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Render general background stars */}
      {filteredGeneralStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full z-0"
          style={{
            width: star.size,
            height: star.size,
            left: `calc(50% + ${star.x}px)`,
            top: `calc(50% + ${star.y}px)`,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
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
          className="absolute bg-white rounded-full z-0"
          style={{
            width: star.size,
            height: star.size,
            left: `calc(50% + ${star.x}px)`,
            top: `calc(50% + ${star.y}px)`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.9)', // Brighter glow for planet stars
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
      <div className="absolute z-10">
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