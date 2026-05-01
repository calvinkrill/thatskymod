import { Github, Heart, ExternalLink, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-1.5 text-slate-500 text-sm italic font-serif">
          Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline mx-0.5" /> by <span className="text-slate-300">Yuji</span>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
          <a
            href="https://discord.gg/V38VvAa2PP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Discord
          </a>
          <a
            href="https://github.com/thatskymod/Sky-CotL-Scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub Repository
          </a>
          <a
            href="https://github.com/thatskymod"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            TSM Organization
          </a>
        </div>

        <div className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">
          © 2026 That Sky Mod. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
