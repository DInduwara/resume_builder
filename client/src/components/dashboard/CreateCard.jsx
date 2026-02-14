import React from 'react';
import { Plus, FileUp, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CreateCard = () => {
  return (
    <div className="h-[340px] flex flex-col gap-4">
        
        {/* Create Button */}
        <Link 
            href="/dashboard/builder/new" 
            className="flex-1 group relative flex flex-col items-center justify-center gap-4 bg-zinc-900/20 rounded-2xl border border-dashed border-zinc-700 hover:border-indigo-500/50 hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Hover Gradient Bloom */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 size-14 bg-zinc-800/80 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300 border border-white/5">
                <Plus size={28} strokeWidth={2} />
            </div>
            
            <div className="relative z-10 text-center space-y-1.5">
                <p className="font-semibold text-zinc-300 group-hover:text-white transition-colors">Create Resume</p>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-indigo-400/80 font-medium bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                    <Sparkles size={10} />
                    <span>AI Assistant Ready</span>
                </div>
            </div>
        </Link>

        {/* Secondary Action */}
        <button className="h-14 bg-zinc-900/30 border border-zinc-800 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/80 hover:border-zinc-700 transition-all group">
            <FileUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /> 
            <span>Import existing PDF</span>
        </button>
    </div>
  );
};

export default CreateCard;