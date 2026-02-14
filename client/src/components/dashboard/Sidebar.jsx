'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Settings, LogOut, Plus, ChevronRight, Sparkles } from 'lucide-react';
import clsx from 'clsx';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'My Resumes', href: '/dashboard', icon: FileText },
    { name: 'Templates', href: '/dashboard/templates', icon: LayoutDashboard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0A0A0A] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50">
      
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg text-white tracking-tight group">
          <div className="size-7 bg-white text-black rounded-lg flex items-center justify-center font-bold text-xs group-hover:rotate-12 transition-transform">R</div>
          <span>ResumeBuilder</span>
        </Link>
      </div>

      {/* Primary Action */}
      <div className="p-4">
        <Link href="/dashboard/builder/new" className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 px-4 py-3 rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.2)] group">
            <Plus size={18} className="group-hover:scale-110 transition-transform" />
            <span>Create New</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 mt-2">
        <p className="px-2 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">Workspace</p>
        
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                isActive 
                  ? "bg-zinc-900 text-white shadow-inner border border-white/5" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
              )}
            >
              <Icon size={18} className={clsx("transition-colors", isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-zinc-300")} />
              {link.name}
              {isActive && <ChevronRight size={14} className="ml-auto text-zinc-600" />}
            </Link>
          );
        })}
      </nav>

      {/* Pro Banner (Optional Visual flair) */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold mb-1">
                <Sparkles size={12} /> PRO PLAN
            </div>
            <p className="text-[11px] text-zinc-400 leading-tight mb-3">Unlock AI Writer & Premium Templates.</p>
            <button className="text-[11px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 w-full py-1.5 rounded-lg transition-colors">Upgrade</button>
        </div>
      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-white/5">
        <button className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-900/50 transition-colors group text-left">
            <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate group-hover:text-indigo-300 transition-colors">Demo User</p>
                <p className="text-[10px] text-zinc-500 truncate">user@example.com</p>
            </div>
            <LogOut size={16} className="text-zinc-600 hover:text-red-400 transition-colors" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;