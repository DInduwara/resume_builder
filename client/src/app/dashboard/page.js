'use client';

import ResumeCard from '@/components/dashboard/ResumeCard';
import CreateCard from '@/components/dashboard/CreateCard';
import { FileText, Activity, Search, Filter, Plus } from 'lucide-react';

export default function Dashboard() {
  const resumes = [
    { id: '1', title: 'Full Stack Developer', updatedAt: '2 hours ago', score: 85, theme: 'Modern' },
    { id: '2', title: 'Product Manager Role', updatedAt: '2 days ago', score: 92, theme: 'Classic' },
    { id: '3', title: 'Startup Founder CV', updatedAt: '1 week ago', score: 45, theme: 'Minimal' },
  ];

  return (
    <div className="relative animate-fade-in-up pb-20 space-y-8">
        
        {/* Ambient Background Light */}
        <div className="fixed top-0 left-0 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
        <div className="fixed bottom-0 right-0 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

        {/* --- NEW COMMAND CENTER HEADER --- */}
        <div className="bg-[#111] border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
            
            {/* Subtle Gradient overlay inside header */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 items-start md:items-end">
                
                {/* Left: Title & Search */}
                <div className="w-full md:w-auto space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Documents</h1>
                        <p className="text-zinc-400 text-sm">Manage your career history and track performance.</p>
                    </div>
                    
                    {/* Integrated Search Bar */}
                    <div className="flex gap-2 w-full md:w-[400px]">
                        <div className="relative group flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search resumes..." 
                                className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600"
                            />
                        </div>
                        <button className="px-3 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Right: Stats Strip */}
                <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    
                    {/* Stat 1 */}
                    <div className="flex-1 md:flex-none min-w-[140px] px-5 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col gap-1 hover:border-white/10 transition-colors group/stat cursor-default">
                        <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">
                            <FileText size={14} className="text-indigo-400" /> Total
                        </div>
                        <div className="text-3xl font-bold text-white group-hover/stat:text-indigo-100 transition-colors">{resumes.length}</div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex-1 md:flex-none min-w-[140px] px-5 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col gap-1 hover:border-white/10 transition-colors group/stat cursor-default">
                         <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">
                            <Activity size={14} className="text-emerald-400" /> Avg Score
                        </div>
                        <div className="flex items-end gap-2">
                             <div className="text-3xl font-bold text-white group-hover/stat:text-emerald-50 transition-colors">74%</div>
                             <div className="text-xs font-medium text-emerald-400 mb-1.5">+2%</div>
                        </div>
                    </div>

                    {/* Quick Create (Mobile Only mostly) */}
                    <button className="md:hidden size-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        <Plus size={24} />
                    </button>
                </div>
            </div>
        </div>

        {/* --- The Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-1">
            
            {/* Create Actions */}
            <CreateCard />

            {/* Resume Cards */}
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
            ))}

        </div>
    </div>
  );
}