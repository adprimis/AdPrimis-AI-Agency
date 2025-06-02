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
  wanderlust: number;
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
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100); // Increased particle count
      
      // Define zones for particle placement
      const zones = [
        { name: 'left', xRange: [0.02, 0.3], yRange: [0.1, 0.9], particleRatio: 0.25 },
        { name: 'right', xRange: [0.7, 0.98], yRange: [0.1, 0.9], particleRatio: 0.25 },
        { name: 'center', xRange: [0.2, 0.8], yRange: [0.15, 0.85], particleRatio: 0.5 }
      ];

      zones.forEach(zone => {
        const zoneParticleCount = Math.floor(particleCount * zone.particleRatio);
        const numClusters = Math.ceil(Math.sqrt(zoneParticleCount));
        const particlesPerCluster = Math.ceil(zoneParticleCount / numClusters);

        for (let cluster = 0; cluster < numClusters; cluster++) {
          const clusterX = (canvas.width * zone.xRange[0]) + 
                          (Math.random() * canvas.width * (zone.xRange[1] - zone.xRange[0]));
          const clusterY = (canvas.height * zone.yRange[0]) + 
                          (Math.random() * canvas.height * (zone.yRange[1] - zone.yRange[0]));
          
          const clusterSpread = Math.random() * 150 + 100; // Increased spread
          
          for (let i = 0; i < particlesPerCluster; i++) {
            const angle = (Math.PI * 2 * i) / particlesPerCluster + (Math.random() * 0.5);
            const distance = (Math.random() * 0.8 + 0.2) * clusterSpread;
            const x = clusterX + Math.cos(angle) * distance;
            const y = clusterY + Math.sin(angle) * distance;

            if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) continue;

            const baseOpacity = Math.random() * 0.3 + 0.7; // Increased opacity
            const connectionRange = Math.random() * 150 + 150; // Increased connection range

            particlesRef.current.push({
              x,
              y,
              size: Math.random() * 2 + 1.5, // Slightly larger particles
              speedX: (Math.random() - 0.5) * 0.5,
              speedY: (Math.random() - 0.5) * 0.5,
              opacity: baseOpacity,
              color: `rgba(255, 102, 0, ${baseOpacity})`,
              targetX: x,
              targetY: y,
              angle: Math.random() * Math.PI * 2,
              connectionRange,
              wanderlust: Math.random() * 0.5 + 0.2,
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
      
      // Draw connecting lines first
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      particlesRef.current.forEach((particle, index) => {
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < particle.connectionRange) {
            const opacity = (1 - distance / particle.connectionRange);
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `rgba(255, 102, 0, ${opacity * particle.opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(255, 102, 0, ${opacity * otherParticle.opacity * 0.5})`);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      ctx.restore();
      
      // Draw particles
      particlesRef.current.forEach(particle => {
        // Update position with smooth movement
        const radius = 20 + (particle.wanderlust * 60);
        const speed = 0.2 + (particle.wanderlust * 0.3);
        
        particle.angle += speed * 0.02;
        
        const baseMovement = {
          x: Math.cos(particle.angle) * radius,
          y: Math.sin(particle.angle * 1.5) * radius
        };
        
        const targetX = particle.baseX + baseMovement.x;
        const targetY = particle.baseY + baseMovement.y + Math.sin(time + particle.x * 0.02) * 15;
        
        particle.x += (targetX - particle.x) * 0.02;
        particle.y += (targetY - particle.y) * 0.02;
        
        // Draw particle with glow effect
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(255, 102, 0, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 102, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

export default ParticleBackground;