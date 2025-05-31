import { Variants } from 'framer-motion';

// Blur in animation for elements that fade in with a blur effect
export const blurInAnimation: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Text reveal animation with stagger effect
export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Floating animation for background elements
export const floatingAnimation: Variants = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.1, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Glow effect animation
export const glowAnimation: Variants = {
  animate: {
    boxShadow: [
      'inset 0 0 15px 2px rgba(255, 107, 0, 0.15), inset 0 0 30px 5px rgba(255, 107, 0, 0.1)',
      'inset 0 0 20px 3px rgba(255, 107, 0, 0.2), inset 0 0 40px 7px rgba(255, 107, 0, 0.15)',
      'inset 0 0 15px 2px rgba(255, 107, 0, 0.15), inset 0 0 30px 5px rgba(255, 107, 0, 0.1)'
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Inner glow gradient animation
export const innerGlowGradient: Variants = {
  animate: {
    background: [
      'radial-gradient(circle at center, rgba(255, 107, 0, 0.1) 0%, transparent 70%)',
      'radial-gradient(circle at center, rgba(255, 107, 0, 0.15) 0%, transparent 80%)',
      'radial-gradient(circle at center, rgba(255, 107, 0, 0.1) 0%, transparent 70%)'
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Button hover animation
export const buttonAnimation: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  }
};

// Gradient slide animation
export const gradientSlide: Variants = {
  animate: {
    x: ['-100%', '100%'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Container scroll animation
export const containerScroll = (scrollYProgress: any) => ({
  opacity: scrollYProgress,
  scale: scrollYProgress,
  y: scrollYProgress
});

// Wave animation keyframes (to be used in CSS)
export const waveKeyframes = `
  @keyframes wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.8);
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1);
    }
  }
`;

// Fade up animation for section headings and content
export const fadeUpVariant: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Card animation for service items and FAQ items
export const cardVariant: Variants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Geometric shape animation
export const geometricShapeVariant: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Floating dot animation
export const floatingDotVariant: Variants = {
  animate: {
    y: [-10, 10, -10],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Line animation
export const lineVariant: Variants = {
  hidden: { 
    opacity: 0,
    scaleX: 0
  },
  visible: { 
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Icon container animation
export const iconContainerVariant: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Badge animation
export const badgeVariant: Variants = {
  hidden: { 
    opacity: 0,
    y: -10,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Section background animation
export const sectionBgVariant: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Scroll transition settings
export const scrollTransitionSettings = {
  threshold: 0.1,
  triggerOnce: false,
  margin: "0px 0px -100px 0px"
}; 