import { motion } from 'motion/react';
import { Section, SectionTitle } from './Section';
import { 
  Lock, 
  Wind, 
  MapPin, 
  Eye, 
  Music, 
  Code,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const features = [
  {
    title: "Complete Player Freedom",
    description: "Empowers you with extensive control over your gameplay experience, from invincibility to teleportation.",
    icon: Lock,
    accent: "sky"
  },
  {
    title: "Combat & Survival",
    description: "Advanced movement options and invincibility let you explore without limitations or fear of hazards.",
    icon: ShieldCheck,
    accent: "blue"
  },
  {
    title: "Visual & Exploration",
    description: "Dye ESP and other visual aids help you navigate and discover content more efficiently.",
    icon: Eye,
    accent: "indigo"
  },
  {
    title: "Environment Control",
    description: "Adjust wind, rain, sun position, and other environmental elements to create your perfect ambiance.",
    icon: Wind,
    accent: "cyan"
  },
  {
    title: "Automation Features",
    description: "Automated music playing and time-saving functions reduce grinding and let you focus on the fun.",
    icon: Music,
    accent: "purple"
  },
  {
    title: "User-Friendly Interface",
    description: "Designed for easy access and configuration, making all features readily available for everyone.",
    icon: Zap,
    accent: "emerald"
  }
];

export const Features = () => {
  return (
    <Section id="features">
      <SectionTitle 
        title="Comprehensive Toolkit" 
        subtitle="TSM serves as your all-in-one solution, designed to maximize enjoyment while minimizing the frustrating aspects of the game."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            whileHover={{ y: -5 }}
            className="group relative p-8 glass rounded-[2rem] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem] -z-10 group-hover:scale-110 transition-transform" />
            
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-400 transition-all duration-300">
              <feature.icon className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">
              {feature.title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
