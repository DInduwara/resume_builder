'use client';

import React, { useState } from 'react';
import { ChevronLeft, Download, Sparkles, Undo, Redo } from 'lucide-react';
import Link from 'next/link';
import FormManager from '@/components/builder/FormManager';
import ResumePreview from '@/components/builder/ResumePreview';

export default function BuilderPage({ params }) {
  return (
    <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col z-50 font-sans text-white overflow-hidden">
        
        {/* --- Ambient Background Lighting --- */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        {/* --- Global Toolbar --- */}
        <header className="h-16 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl px-6 flex items-center justify-between shrink-0 z-30">
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                    <ChevronLeft size={20} />
                </Link>
                <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                <div>
                    <h1 className="font-bold text-sm tracking-tight">Full Stack Developer Resume</h1>
                    <div className="flex items-center gap-2 mt-0.5">
                        <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                        <span className="text-[10px] text-zinc-500 font-medium">Ready to export</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-lg border border-white/5 mr-2">
                    <button className="p-2 text-zinc-500 hover:text-white transition-colors" title="Undo"><Undo size={16} /></button>
                    <button className="p-2 text-zinc-500 hover:text-white transition-colors" title="Redo"><Redo size={16} /></button>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition-all border border-indigo-600/20 group">
                    <Sparkles size={14} className="group-hover:rotate-12 transition-transform" /> 
                    <span>AI Optimize</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-2 bg-white text-black hover:bg-zinc-200 rounded-xl text-xs font-bold transition-all shadow-lg shadow-white/5">
                    <Download size={14} /> <span>Download</span>
                </button>
            </div>
        </header>

        {/* --- Workspace --- */}
        <div className="flex-1 flex overflow-hidden">
            <div className="w-full md:w-[450px] lg:w-[500px] border-r border-white/5 bg-[#0A0A0A] flex flex-col z-20 shadow-2xl">
                <FormManager />
            </div>

            <div className="hidden md:flex flex-1 bg-[#0F0F0F] relative overflow-hidden items-center justify-center p-12">
                 {/* Blueprint Grid Pattern */}
                 <div className="absolute inset-0 bg-[linear-gradient(#ffffff02_1px,transparent_1px),linear-gradient(90deg,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                 
                 <ResumePreview />
            </div>
        </div>
    </div>
  );
}