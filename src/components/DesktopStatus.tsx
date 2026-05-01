import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export const DesktopStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Check if the desktop app is available by trying to fetch from GitHub releases
    const checkAppAvailability = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/XeTrinityz/ThatSkyMod/releases/latest',
          { method: 'HEAD', redirect: 'follow' }
        );
        setIsOnline(response.ok);
      } catch (error) {
        setIsOnline(false);
      }
    };

    checkAppAvailability();
    // Check every 30 seconds
    const interval = setInterval(checkAppAvailability, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-xs font-medium"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <motion.div
          animate={{
            scale: isOnline ? [1, 1.2, 1] : 1,
            opacity: isOnline ? 1 : 0.5,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-2 h-2 rounded-full ${
            isOnline
              ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]'
              : 'bg-red-500/60'
          }`}
        />
        <span className={isOnline ? 'text-emerald-400' : 'text-red-400'}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-300 whitespace-nowrap z-50"
        >
          Desktop App {isOnline ? 'Available' : 'Unavailable'}
        </motion.div>
      )}
    </div>
  );
};
