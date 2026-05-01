import { ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className={cn("py-24 px-6 max-w-7xl mx-auto outline-none", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16">
    <motion.h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-gradient">
      {title}
    </motion.h2>
    {subtitle && (
      <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);
