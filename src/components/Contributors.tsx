import { motion } from 'motion/react';
import { Section, SectionTitle } from './Section';
import { User, Shield, Terminal } from 'lucide-react';

const contributors = [
  {
    name: "XeTrinityz",
    role: "Developer",
    icon: Terminal,
    desc: "Lead implementation and script architecture."
  },
  {
    name: "TheSR",
    role: "Project Founder",
    icon: Shield,
    desc: "The visionary behind That Sky Mod."
  },
  {
    name: "Lukas",
    role: "Development Contribution",
    icon: User,
    desc: "Key logic and gameplay enhancement support."
  }
];

export const Contributors = () => {
  return (
    <Section id="contributors">
      <SectionTitle 
        title="The Team" 
        subtitle="Crafted by experts who love the game and believe in player freedom."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contributors.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] transition-colors">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500/20 to-sky-600/20 flex items-center justify-center mb-6 shadow-2xl">
              <member.icon className="w-10 h-10 text-sky-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
            <span className="text-sky-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">{member.role}</span>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
