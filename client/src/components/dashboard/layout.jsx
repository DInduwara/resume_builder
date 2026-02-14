'use client';

import Sidebar from '@/components/dashboard/Sidebar';
import { Bell, Search, User } from 'lucide-react';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex font-sans selection:bg-indigo-500/30">
      <Sidebar />
      
      <main className="flex-1 ml-64 min-h-screen bg-[#0A0A0A] relative">
        
        {/* Header */}
        <header className="h-16 px-8 flex items-center justify-end gap-6 sticky top-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/5 rounded-full">
                <Search size={14} className="text-zinc-500" />
                <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-xs text-white w-48 placeholder:text-zinc-600" />
             </div>
             <button className="text-zinc-400 hover:text-white transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-0 right-0 size-2 bg-indigo-500 rounded-full border border-[#0A0A0A]"></span>
             </button>
             <div className="size-8 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="size-full object-cover" />
             </div>
        </header>

        <div className="p-8 max-w-[1920px] mx-auto">
            {children}
        </div>
      </main>
    </div>
  );
}