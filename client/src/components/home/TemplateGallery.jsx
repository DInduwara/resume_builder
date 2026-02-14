import React from 'react';

const TemplateGallery = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase">Visuals</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                Designed to get <span className="text-zinc-600">noticed.</span>
            </h2>
        </div>

        {/* Skewed Scroll Container */}
        <div className="relative w-full -rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="flex gap-6 justify-center min-w-max px-6">
                
                {/* Mock Templates - Repetitive divs representing A4 papers */}
                {[1,2,3,4].map((i) => (
                    <div key={i} className="w-[300px] h-[400px] bg-zinc-900 border border-white/5 rounded-lg p-4 relative group hover:-translate-y-4 transition-transform duration-300 shadow-2xl">
                        {/* Skeleton of a resume */}
                        <div className="w-12 h-12 bg-zinc-800 rounded-full mb-4"></div>
                        <div className="w-3/4 h-4 bg-zinc-800 rounded mb-2"></div>
                        <div className="w-1/2 h-3 bg-zinc-800/50 rounded mb-8"></div>
                        
                        <div className="space-y-3">
                            <div className="w-full h-2 bg-zinc-800/30 rounded"></div>
                            <div className="w-full h-2 bg-zinc-800/30 rounded"></div>
                            <div className="w-5/6 h-2 bg-zinc-800/30 rounded"></div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-indigo-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                            <span className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm">Use Template</span>
                        </div>
                    </div>
                ))}

            </div>
            
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none"></div>
        </div>
    </section>
  );
};

export default TemplateGallery;