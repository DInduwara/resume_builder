import React from 'react';
import { Bot, FileSearch, Shield, Download } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "AI Writing Assistant",
            desc: "Stuck? Our AI generates role-specific bullet points that highlight your impact.",
            icon: <Bot className="size-6 text-indigo-400" />,
            className: "md:col-span-2"
        },
        {
            title: "Real-time ATS Score",
            desc: "See your resume's parsability score update live as you type.",
            icon: <FileSearch className="size-6 text-emerald-400" />,
            className: "md:col-span-1"
        },
        {
            title: "Instant PDF Export",
            desc: "Download high-fidelity PDFs that render perfectly on any device.",
            icon: <Download className="size-6 text-blue-400" />,
            className: "md:col-span-1"
        },
        {
            title: "Privacy First",
            desc: "No tracking pixels. No selling data. Your career history is encrypted.",
            icon: <Shield className="size-6 text-zinc-200" />,
            className: "md:col-span-2"
        },
    ];

    return (
        <section id='features' className='py-24 bg-[#0A0A0A] relative border-t border-white/5'>
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-16 text-center md:text-left">
                    <span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase">Features</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
                        Everything you need. <br/> <span className="text-zinc-500">Nothing you don't.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div 
                            key={i} 
                            className={`group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 p-8 hover:border-white/20 transition-all duration-300 ${f.className}`}
                        >
                            {/* Subtle Gradient Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-zinc-800/50 p-3 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;