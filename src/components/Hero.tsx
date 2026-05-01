import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Rocket, Eye, Wind, Download, Github } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const Hero = () => {
  const { isInstallable, install } = usePWAInstall();

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-8"
      >
        <Sparkles className="w-3 h-3" />
        XeTrinityz
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-6xl md:text-8xl font-serif font-medium mb-8 leading-[1.1] tracking-tight text-gradient"
      >
        That Sky Mod
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
      >
        TSM (That Sky Mod) represents the pinnacle of script-based enhancement for Sky. 
        Designed to dissolve boundaries and eliminate the mundane, giving you 
        total control over your journey.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="https://github.com/XeTrinityz/ThatSkyMod/releases/latest/download/ThatSkyApp.exe"
          className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all shadow-xl shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="w-5 h-5 group-hover:bounce transition-transform" />
          Download
        </a>

        <a
          href="https://github.com/thatskymod/Sky-CotL-Scripts"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 font-semibold transition-all"
        >
          View Source
          <Github className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>

        {isInstallable && (
          <button
            onClick={install}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400 text-sm font-medium transition-all"
          >
            PWA
          </button>
        )}
      </motion.div>

      {/* Stats/Badge shelf */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-50 contrast-125"
      >
        <div className="flex flex-col items-center gap-2">
          <Shield className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Safe Execution</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Rocket className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Fast Injects</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Eye className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Visual Aids</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Wind className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Environment</span>
        </div>
      </motion.div>
    </div>
  );
};
