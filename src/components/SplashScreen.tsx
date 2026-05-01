import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Triquetra } from './Logo';

export const SplashScreen = ({ onComplete, key }: { onComplete: () => void; key?: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out animation to finish
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 atmosphere opacity-50" />
          
          <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
            {/* Logo Mark */}
            <div className="relative w-32 h-32 mb-8">
              <motion.div 
                animate={{ 
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-[30px] border border-sky-500/20 shadow-[0_0_80px_rgba(48,169,230,0.15)] bg-sky-500/5 flex items-center justify-center"
              >
                <Triquetra size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </motion.div>
            </div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-serif font-medium text-white tracking-[0.3em] uppercase mb-4"
            >
              That Sky Mod
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              className="w-32 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
            />
          </motion.div>

          {/* Loading bar at bottom */}
          <div className="absolute bottom-12 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "linear" }}
              className="h-full bg-sky-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
