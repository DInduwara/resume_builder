'use client';

import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2, Layers } from 'lucide-react';

const ResumePreview = () => {
  const [zoom, setZoom] = useState(85);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
        
        {/* --- Floating Control Bar --- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 bg-black/60 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl shadow-2xl">
            <button onClick={() => setZoom(Math.max(50, zoom - 10))} className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"><ZoomOut size={16} /></button>
            <div className="px-3 text-[10px] font-mono font-bold text-zinc-400">{zoom}%</div>
            <button onClick={() => setZoom(Math.min(150, zoom + 10))} className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"><ZoomIn size={16} /></button>
            <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"><Maximize2 size={16} /></button>
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"><Layers size={16} /></button>
        </div>

        {/* --- The Document Canvas --- */}
        <div className="flex-1 w-full overflow-auto custom-scrollbar flex justify-center py-12 px-8">
            <div 
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
                {/* A4 Paper Mockup */}
                <div className="w-[210mm] min-h-[297mm] bg-white text-black shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] flex flex-col relative rounded-sm overflow-hidden">
                    
                    {/* Header Strip */}
                    <div className="h-4 w-full bg-indigo-600"></div>

                    <div className="p-16 h-full flex flex-col">
                        <header className="mb-10 border-b-2 border-zinc-100 pb-8">
                            <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">Your Name</h1>
                            <p className="text-xl font-bold text-indigo-600 uppercase tracking-widest">Job Title</p>
                        </header>

                        <div className="flex-1 space-y-10">
                            <section>
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">Professional Summary</h3>
                                <div className="space-y-3">
                                    <div className="h-4 bg-zinc-50 w-full rounded-sm"></div>
                                    <div className="h-4 bg-zinc-50 w-full rounded-sm"></div>
                                    <div className="h-4 bg-zinc-50 w-3/4 rounded-sm"></div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">Experience</h3>
                                <div className="h-32 bg-zinc-50 w-full rounded-sm border border-zinc-100 mb-4"></div>
                                <div className="h-32 bg-zinc-50 w-full rounded-sm border border-zinc-100"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ResumePreview;