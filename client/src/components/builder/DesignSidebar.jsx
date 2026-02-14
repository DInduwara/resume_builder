'use client';

import React from 'react';
import { X, Check, Layout, Palette, Type, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignSidebar = ({ isOpen, onClose }) => {
  const templates = [
    { id: 'modern', name: 'Modern Pro', color: 'bg-indigo-500' },
    { id: 'classic', name: 'Executive', color: 'bg-zinc-800' },
    { id: 'creative', name: 'Creative Slate', color: 'bg-emerald-500' },
    { id: 'minimal', name: 'Pure Minimal', color: 'bg-zinc-200' },
  ];

  const colors = [
    { name: 'Indigo', hex: '#6366f1' },
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Amber', hex: '#f59e0b' },
    { name: 'Rose', hex: '#ef4444' },
    { name: 'Sky', hex: '#06b6d4' },
    { name: 'Slate', hex: '#1e293b' },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop for focus */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" 
      />

      {/* Sidebar Panel */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-full max-w-[380px] bg-[#0A0A0A] border-r border-white/10 z-[101] p-8 shadow-2xl flex flex-col"
      >
        <div className="flex items-center justify-between mb-10">
            <div>
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                    <Palette size={24} className="text-indigo-400" /> Appearance
                </h2>
                <p className="text-zinc-500 text-xs mt-1">Customize the visual vibe of your CV.</p>
            </div>
            <button 
                onClick={onClose} 
                className="p-2.5 hover:bg-white/5 rounded-xl text-zinc-500 hover:text-white transition-all border border-transparent hover:border-white/10"
            >
                <X size={20} />
            </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-12 pr-2">
            
            {/* 1. Template Selection */}
            <section>
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                        <Layout size={14} /> Layouts
                    </h3>
                    <span className="text-[10px] text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded">4 Styles</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {templates.map((temp) => (
                        <button 
                            key={temp.id}
                            className="group relative aspect-[3/4.2] bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all shadow-lg"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1.5 ${temp.color}`}></div>
                            <div className="p-4 space-y-3 opacity-20 group-hover:opacity-40 transition-opacity">
                                <div className="h-3 w-1/2 bg-white rounded-full"></div>
                                <div className="h-2 w-full bg-white rounded-full"></div>
                                <div className="h-2 w-full bg-white rounded-full"></div>
                                <div className="space-y-1.5 pt-4">
                                    <div className="h-1.5 w-full bg-white rounded-full"></div>
                                    <div className="h-1.5 w-2/3 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/60 backdrop-blur-[2px]">
                                <span className="px-4 py-2 bg-white text-black text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl">Apply</span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
                                <p className="text-[11px] font-bold text-white truncate">{temp.name}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* 2. Color Palette */}
            <section>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-5 flex items-center gap-2">
                    <Palette size={14} /> Brand Color
                </h3>
                <div className="grid grid-cols-6 gap-3">
                    {colors.map((c) => (
                        <button 
                            key={c.hex}
                            style={{ backgroundColor: c.hex }}
                            className="aspect-square rounded-xl border border-white/10 hover:scale-110 active:scale-95 transition-all shadow-lg flex items-center justify-center group"
                            title={c.name}
                        >
                            {c.hex === '#6366f1' && <Check size={16} className="text-white" />}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. Typography Styles */}
            <section>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-5 flex items-center gap-2">
                    <Type size={14} /> Typography
                </h3>
                <div className="space-y-3">
                    {[
                        { name: 'Outfit', desc: 'Modern & Geometric', current: true },
                        { name: 'Inter', desc: 'Clean & Professional', current: false },
                        { name: 'Lora', desc: 'Elegant Serif', current: false }
                    ].map((font) => (
                        <button 
                            key={font.name}
                            className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${font.current ? 'bg-indigo-500/10 border-indigo-500/30 ring-1 ring-indigo-500/30' : 'bg-zinc-900/50 border-white/5 hover:border-white/10'}`}
                        >
                            <div>
                                <p className={`text-sm font-bold ${font.current ? 'text-white' : 'text-zinc-300'}`}>{font.name}</p>
                                <p className="text-[10px] text-zinc-500 font-medium">{font.desc}</p>
                            </div>
                            {font.current && <Check size={16} className="text-indigo-400" />}
                        </button>
                    ))}
                </div>
            </section>

            {/* AI Suggestion Banner */}
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-5 border border-indigo-500/20">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs mb-2">
                    <Sparkles size={14} /> AI Recommendation
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Based on your "Software Engineer" title, the <span className="text-white font-bold italic">Modern Pro</span> template is recommended for better ATS parsing.
                </p>
            </div>

        </div>

        <div className="pt-8 border-t border-white/5">
            <button className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 active:scale-[0.98]">
                Save Style
            </button>
        </div>
      </motion.div>
    </>
  );
};

export default DesignSidebar;