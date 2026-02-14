import React from 'react';
import { Frame, Hexagon, Circle, Triangle, Box } from 'lucide-react';

const LogoCloud = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-zinc-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
          Trusted by engineers from
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          
          {/* Mock Logos using Lucide Icons for "Tech" feel */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Hexagon className="size-6 text-white group-hover:text-indigo-500 transition-colors" />
            <span className="font-bold text-xl text-zinc-300 group-hover:text-white transition-colors">Acme Corp</span>
          </div>
          
          <div className="flex items-center gap-2 group cursor-pointer">
            <Triangle className="size-6 text-white group-hover:text-indigo-500 transition-colors" />
            <span className="font-bold text-xl text-zinc-300 group-hover:text-white transition-colors">Vercel</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <Frame className="size-6 text-white group-hover:text-indigo-500 transition-colors" />
            <span className="font-bold text-xl text-zinc-300 group-hover:text-white transition-colors">Linear</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <Circle className="size-6 text-white group-hover:text-indigo-500 transition-colors" />
            <span className="font-bold text-xl text-zinc-300 group-hover:text-white transition-colors">Circle</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <Box className="size-6 text-white group-hover:text-indigo-500 transition-colors" />
            <span className="font-bold text-xl text-zinc-300 group-hover:text-white transition-colors">Dropbox</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoCloud;