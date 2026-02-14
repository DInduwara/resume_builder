import React from 'react';
import Link from 'next/link'; // Using Next.js Link
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <div id='cta' className='py-24 px-6 bg-[#0A0A0A]'>
        <div className='max-w-5xl mx-auto relative group'>
            {/* Ambient Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-zinc-900 rounded-[2rem] p-12 md:p-20 text-center overflow-hidden border border-white/10">
                {/* Grid Overlay inside CTA */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium mb-6">
                        <Sparkles size={14} className="text-indigo-400" />
                        <span>Ready to launch?</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Build your professional <br/> resume in minutes.
                    </h2>
                    
                    <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                        No credit card required. Try our AI builder for free and download your ATS-ready resume instantly.
                    </p>
                    
                    <Link href="/register" className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-xl">
                        Start Building Free <ArrowRight size={20}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CallToAction;