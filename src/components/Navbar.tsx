import { motion } from 'motion/react';
import { Github, Menu, X, MessageSquare, Download } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Triquetra } from './Logo';
import { DesktopStatus } from './DesktopStatus';

interface NavbarProps {
  onLogoClick?: () => void;
}

export const Navbar = ({ onLogoClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Contributors', href: '#contributors' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <button onClick={onLogoClick} className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0">
          <Triquetra size={48} className="text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]" />
          <span className="font-bold text-xl tracking-tight text-white">TSM</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-6 bg-white/10" />
          <DesktopStatus />
          <a
            href="https://discord.gg/V38VvAa2PP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 transition-all text-sm font-medium"
          >
            <MessageSquare className="w-4 h-4" />
            Discord
          </a>
          <a
            href="https://github.com/thatskymod/Sky-CotL-Scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 p-4 glass rounded-2xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="py-2 border-t border-white/10">
            <DesktopStatus />
          </div>
          <a
            href="https://discord.gg/V38VvAa2PP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-500/10 text-sky-400 text-sm font-medium"
          >
            <MessageSquare className="w-4 h-4" />
            Discord
          </a>
          <a
            href="https://github.com/thatskymod/Sky-CotL-Scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      )}
    </nav>
  );
};
