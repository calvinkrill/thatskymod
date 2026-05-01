import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

export const CautionScreen = ({ onAccept, key }: { onAccept: () => void; key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-[#030712] px-6"
    >
      <div className="absolute inset-0 atmosphere opacity-30" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative max-w-lg w-full glass p-8 md:p-12 rounded-[2.5rem] border-red-500/20 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-8 border border-red-500/20">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>

        <h2 className="text-3xl font-serif font-medium text-white mb-6 uppercase tracking-wider">
          Safety Warning
        </h2>

        <div className="space-y-4 text-slate-400 mb-10 leading-relaxed text-sm md:text-base">
          <p>
            Using third-party scripts or modifications in <span className="text-white font-medium">Sky: Children of the Light</span> carries inherent risks.
          </p>
          <p className="bg-red-500/5 p-4 rounded-xl border border-red-500/10 italic">
            "By proceeding, you acknowledge that using this mod is entirely at your own risk. We are not responsible for any account bans or sanctions resulting from its use."
          </p>
        </div>

        <button
          onClick={onAccept}
          className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all hover:border-red-500/30 hover:text-red-400"
        >
          I Understand & Accept Risk
        </button>
      </motion.div>
    </motion.div>
  );
};
