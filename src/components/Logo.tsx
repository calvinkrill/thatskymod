import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full animate-pulse" />
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9c74866fcfb14f7fbf68c14610585366%2F6e87708706a3432aa7b6eb52851d3a90?format=webp&width=800&height=1200"
          alt="Logo"
          className="w-full h-full rounded-full"
        />
      </motion.div>
    </div>
  );
};

export const Triquetra = ({ size = 100, className = "" }: { size?: number, className?: string }) => (
  <div className={cn("logo-mark-size rounded-full", className)} style={{ width: size, height: size }}>
    <div className="logo-mark-gradient" />
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F9c74866fcfb14f7fbf68c14610585366%2F6e87708706a3432aa7b6eb52851d3a90?format=webp&width=800&height=1200"
      alt="Logo"
      className="logo-mark-image"
    />
  </div>
);
