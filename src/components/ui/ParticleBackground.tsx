import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  targetX: number;
  targetY: number;
  angle: number;
  connectionRange: number;
  wanderlust: number; // How much the particle likes to move around
  baseX: number;
  baseY: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };
    
    const createParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 22), 80);
      
      // Define zones for particle placement
      const zones = [
        { name: 'left', xRange: [0.02, 0.15], yRange: [0.1, 0.9], particleRatio: 0.15 },
        { name: 'right', xRange: [0.85, 0.98], yRange: [0.1, 0.9], particleRatio: 0.15 },
        { name: 'center', xRange: [0.25, 0.75], yRange: [0.15, 0.85], particleRatio: 0.7 }
      ];

      zones.forEach(zone => {
        const zoneParticleCount = Math.floor(particleCount * zone.particleRatio);
        const numClusters = Math.ceil(Math.sqrt(zoneParticleCount * (zone.name === 'center' ? 0.7 : 0.4)));
        const particlesPerCluster = Math.ceil(zoneParticleCount / numClusters);

        for (let cluster = 0; cluster < numClusters; cluster++) {
          // Create cluster center within the zone
          const clusterX = (canvas.width * zone.xRange[0]) + 
                          (Math.random() * canvas.width * (zone.xRange[1] - zone.xRange[0]));
          const clusterY = (canvas.height * zone.yRange[0]) + 
                          (Math.random() * canvas.height * (zone.yRange[1] - zone.yRange[0]));
          
          // Adjust spread based on zone
          const baseSpread = zone.name === 'center' ? 100 : 80;
          const clusterSpread = Math.random() * baseSpread + (zone.name === 'center' ? 50 : 40);
          
          for (let i = 0; i < particlesPerCluster; i++) {
            const angle = (Math.PI * 2 * i) / particlesPerCluster + (Math.random() * (zone.name === 'center' ? 0.8 : 0.4));
            const distance = (Math.random() * 0.8 + 0.2) * clusterSpread;
            const x = clusterX + Math.cos(angle) * distance;
            const y = clusterY + Math.sin(angle) * distance;

            // Skip if outside canvas
            if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) continue;

            const baseOpacity = Math.random() * 0.5 + (zone.name === 'center' ? 0.3 : 0.4);
            
            // Adjust connection range and wanderlust based on zone
            const connectionRange = zone.name === 'center' ?
              (Math.random() * 60 + 120) : // Center: 120-180px
              (Math.random() * 140 + 160);  // Sides: 160-300px

            // More movement for side particles, less for center
            const wanderlust = zone.name === 'center' ?
              (Math.random() * 0.3) : // Center: more stable
              (Math.random() * 0.8 + 0.2); // Sides: very dynamic

            particlesRef.current.push({
              x,
              y,
              size: Math.random() * (zone.name === 'center' ? 2 : 2.5) + 1,
              speedX: (Math.random() - 0.5) * (zone.name === 'center' ? 0.3 : 0.4),
              speedY: (Math.random() - 0.5) * (zone.name === 'center' ? 0.3 : 0.4),
              opacity: baseOpacity,
              color: `rgba(255, 102, 0, ${baseOpacity})`,
              targetX: x,
              targetY: y,
              angle: Math.random() * Math.PI * 2,
              connectionRange,
              wanderlust,
              baseX: x,
              baseY: y
            });
          }
        }
      });
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      // Draw particles first
      particlesRef.current.forEach((particle, index) => {
        // Geometric movement pattern
        const radius = 30 + (particle.wanderlust * 100); // More wanderlust = bigger movement radius
        const speed = 0.25 + (particle.wanderlust * 0.2); // Reduced base speed and wanderlust impact
        
        // Update particle position with smooth geometric patterns
        particle.angle += speed * 0.015; // Reduced angle increment
        
        // Calculate base movement
        const baseMovement = {
          x: Math.cos(particle.angle) * radius,
          y: Math.sin(particle.angle * 1.5) * radius
        };
        
        // Add wider roaming for particles with high wanderlust
        const roamX = Math.cos(time * 0.15 + particle.angle) * (canvas.width * 0.15) * particle.wanderlust;
        const roamY = Math.sin(time * 0.1 + particle.angle * 0.7) * (canvas.height * 0.15) * particle.wanderlust;
        
        const targetX = particle.baseX + baseMovement.x + roamX;
        const targetY = particle.baseY + baseMovement.y + roamY;
        
        // Slower interpolation to target position
        particle.x += (targetX - particle.x) * (0.05 + particle.wanderlust * 0.01);
        particle.y += (targetY - particle.y) * (0.05 + particle.wanderlust * 0.01);
        
        // Reduced wave motion
        particle.y += Math.sin(time * 0.8 + particle.x * 0.02) * 0.15;
        
        // Wrap around screen edges smoothly with larger buffer for wandering particles
        const buffer = 50 + (particle.wanderlust * 100);
        if (particle.x < -buffer) particle.x = canvas.width + buffer;
        if (particle.x > canvas.width + buffer) particle.x = -buffer;
        if (particle.y < -buffer) particle.y = canvas.height + buffer;
        if (particle.y > canvas.height + buffer) particle.y = -buffer;
        
        // Draw particle with original glow effect
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2.2
        );
        gradient.addColorStop(0, `rgba(255, 102, 0, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 102, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines with matching opacity
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      particlesRef.current.forEach((particle, index) => {
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const maxDistance = Math.min(particle.connectionRange, otherParticle.connectionRange);
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.8; // Increased from 0.5 to 0.8
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `rgba(255, 102, 0, ${opacity * particle.opacity})`);
            gradient.addColorStop(1, `rgba(255, 102, 0, ${opacity * otherParticle.opacity})`);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      ctx.restore();
    };
    
    const animate = () => {
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
};

export default ParticleBackground;