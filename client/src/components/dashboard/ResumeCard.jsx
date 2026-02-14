import React from 'react';
import { MoreVertical, Calendar, Download, Edit, Trash2, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const ResumeCard = ({ resume }) => {
  return (
    <div className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.2)] transition-all duration-300 flex flex-col h-[340px]">
        
        {/* --- Visual Thumbnail Area --- */}
        <div className="flex-1 bg-zinc-900/50 relative overflow-hidden p-6 cursor-pointer group-hover:bg-zinc-900/30 transition-colors">
            
            {/* The "Paper" Mockup */}
            <div className="w-full h-full bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.3)] rounded-t-lg transform group-hover:scale-[1.03] group-hover:-translate-y-2 transition-transform duration-500 ease-out opacity-90 relative mx-auto max-w-[200px] overflow-hidden">
                
                {/* Page Fold Effect (Top Right) */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-zinc-100 shadow-sm rounded-bl-xl z-20 pointer-events-none"></div>

                {/* Decorative Header Strip */}
                <div className="h-3 w-full bg-indigo-500/10 border-b border-indigo-500/5"></div>
                
                {/* Mock Content Lines */}
                <div className="p-4 space-y-3 opacity-20">
                    <div className="flex gap-3 items-center">
                        <div className="size-8 bg-black rounded-full"></div>
                        <div className="flex-1 space-y-1.5">
                            <div className="h-2 w-2/3 bg-black rounded-full"></div>
                            <div className="h-1.5 w-full bg-black rounded-full"></div>
                        </div>
                    </div>
                    <div className="space-y-1.5 pt-4">
                        <div className="h-1.5 w-full bg-black rounded-full"></div>
                        <div className="h-1.5 w-full bg-black rounded-full"></div>
                        <div className="h-1.5 w-4/5 bg-black rounded-full"></div>
                    </div>
                     <div className="space-y-1.5 pt-2">
                        <div className="h-1.5 w-full bg-black rounded-full"></div>
                        <div className="h-1.5 w-1/2 bg-black rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Hover Overlay Actions */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 z-30">
                <Link href={`/dashboard/builder/${resume.id}`} className="px-5 py-2.5 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
                    <Edit size={14} /> Edit
                </Link>
                <div className="flex gap-2">
                    <button className="p-2.5 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 hover:text-indigo-400 transition-colors shadow-xl" title="Download PDF">
                        <Download size={16} />
                    </button>
                    <button className="p-2.5 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 hover:text-red-400 transition-colors shadow-xl" title="Delete">
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>

        {/* --- Card Footer --- */}
        <div className="p-4 bg-[#111] border-t border-white/5 relative z-10">
            <div className="flex justify-between items-start mb-3">
                <div className="min-w-0 pr-2">
                    <h3 className="font-bold text-white text-sm truncate group-hover:text-indigo-400 transition-colors">{resume.title}</h3>
                    <p className="text-[11px] text-zinc-500 mt-0.5 flex items-center gap-1.5">
                        <Calendar size={10} /> Edited {resume.updatedAt}
                    </p>
                </div>
                <button className="text-zinc-600 hover:text-white transition-colors p-1 -mr-2">
                    <MoreVertical size={16} />
                </button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5 border-dashed">
                {/* ATS Score Badge */}
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md border ${
                     resume.score >= 80 ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 
                     resume.score >= 50 ? 'bg-amber-500/5 border-amber-500/20 text-amber-400' : 
                     'bg-red-500/5 border-red-500/20 text-red-400'
                }`}>
                    <BarChart3 size={12} />
                    <span className="text-[10px] font-bold">{resume.score}% Score</span>
                </div>

                {/* Theme Name */}
                <span className="text-[10px] font-medium text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded border border-white/5">
                    {resume.theme || 'Modern'}
                </span>
            </div>
        </div>
    </div>
  );
};

export default ResumeCard;