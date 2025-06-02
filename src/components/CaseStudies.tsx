import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneOutgoing, UserCheck, PhoneIncoming, PlayCircle, PauseCircle } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const caseStudies = [
  {
    id: 1,
    title: "Outbound Sales Call",
    videoId: "rgyiUxqud1E",
    description: "Listen to our AI voice agent engage in a natural outbound sales conversation, demonstrating human-like interaction and effective communication.",
    icon: <PhoneOutgoing className="w-8 h-8 text-primary" />
  },
  {
    id: 2,
    title: "Lead Qualification",
    videoId: "FkP_m7I4Jw4",
    description: "Hear how our AI voice agent qualifies leads through intelligent questioning and natural conversation flow.",
    icon: <UserCheck className="w-8 h-8 text-primary" />
  },
  {
    id: 3,
    title: "Inbound Support Call",
    videoId: "7tLcLVwJUrc",
    description: "Experience our AI voice agent handling an inbound customer inquiry with professionalism and natural dialogue.",
    icon: <PhoneIncoming className="w-8 h-8 text-primary" />
  }
];

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [videoStates, setVideoStates] = useState<{[key: string]: { isPlaying: boolean; player: any }}>({});
  const playerRefs = useRef<{[key: string]: any}>({});

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      caseStudies.forEach(study => {
        const player = new window.YT.Player(`youtube-player-${study.videoId}`, {
          videoId: study.videoId,
          playerVars: {
            rel: 0,
            modestbranding: 1,
            controls: 0,
            showinfo: 0,
          },
          events: {
            onStateChange: (event: any) => {
              const isPlaying = event.data === window.YT.PlayerState.PLAYING;
              setVideoStates(prev => ({
                ...prev,
                [study.videoId]: { ...prev[study.videoId], isPlaying }
              }));
            },
            onReady: (event: any) => {
              playerRefs.current[study.videoId] = event.target;
              setVideoStates(prev => ({
                ...prev,
                [study.videoId]: { isPlaying: false, player: event.target }
              }));
            }
          }
        });
      });
    };
  }, []);

  const handleVideoToggle = (videoId: string) => {
    const player = playerRefs.current[videoId];
    if (!player) return;

    const currentState = videoStates[videoId]?.isPlaying;
    if (currentState) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <section id="case-studies" ref={ref} className="section bg-dark text-white relative noise-bg section-gradient">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-primary/40 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            AI in Action
          </motion.span>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear Our <span className="text-[#FF6B00]">AI Voice Agents Live</span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Listen to real conversations between our AI voice agents and customers. These are actual recordings that showcase the natural, human-like quality of our technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-white rounded-xl overflow-hidden group hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="aspect-video relative cursor-pointer overflow-hidden" onClick={() => handleVideoToggle(study.videoId)}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div 
                  id={`youtube-player-${study.videoId}`}
                  className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <AnimatePresence>
                  {(!videoStates[study.videoId]?.isPlaying || videoStates[study.videoId]?.player?.getPlayerState() === 2) && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer hover:brightness-110 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {videoStates[study.videoId]?.player?.getPlayerState() === 2 ? (
                          <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                        ) : (
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          >
                            <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
                  <div className="transform group-hover:rotate-12 transition-transform duration-300">
                    {study.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold ml-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {study.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;