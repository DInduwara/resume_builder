import React from 'react';
import { UploadCloud, Sparkles, Download } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      num: "01",
      title: "Import or Start Fresh",
      desc: "Upload your existing PDF to extract data instantly, or start with a blank slate.",
      icon: <UploadCloud className="size-6 text-indigo-400" />
    },
    {
      num: "02",
      title: "AI Optimization",
      desc: "Our engine rewrites your bullet points to match job descriptions and beat the ATS.",
      icon: <Sparkles className="size-6 text-purple-400" />
    },
    {
      num: "03",
      title: "Export & Apply",
      desc: "Download a polished PDF or share a live link directly with recruiters.",
      icon: <Download className="size-6 text-emerald-400" />
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 relative">
            
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="mb-8 relative">
                <div className="size-14 bg-[#0A0A0A] border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300 shadow-xl">
                  {step.icon}
                </div>
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 size-8 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-500 group-hover:text-white group-hover:border-indigo-500 transition-colors">
                  {step.num}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;