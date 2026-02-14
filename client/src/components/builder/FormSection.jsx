import React from 'react';
import { User, Briefcase, GraduationCap, Code, FolderGit2 } from 'lucide-react';

const FormSection = () => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
        
        {/* Intro */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Let's build your resume</h2>
            <p className="text-zinc-400 text-sm mt-1">Fill in the details below. The preview updates automatically.</p>
        </div>

        {/* 1. Personal Info */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center">
                        <User size={16} />
                    </div>
                    <span className="font-semibold text-white text-sm">Personal Information</span>
                </div>
            </div>
            {/* Form Fields will go here later */}
            <div className="p-4 space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-xs text-zinc-500">First Name</label>
                        <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" placeholder="Jane" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs text-zinc-500">Last Name</label>
                        <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" placeholder="Doe" />
                    </div>
                 </div>
                 <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500">Professional Title</label>
                    <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none" placeholder="Senior Product Designer" />
                </div>
            </div>
        </div>

        {/* 2. Experience */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
            <div className="p-4 flex items-center gap-3">
                 <div className="size-8 bg-zinc-800 text-zinc-400 rounded-lg flex items-center justify-center">
                    <Briefcase size={16} />
                </div>
                <span className="font-semibold text-white text-sm">Experience</span>
            </div>
        </div>

        {/* 3. Education */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
            <div className="p-4 flex items-center gap-3">
                 <div className="size-8 bg-zinc-800 text-zinc-400 rounded-lg flex items-center justify-center">
                    <GraduationCap size={16} />
                </div>
                <span className="font-semibold text-white text-sm">Education</span>
            </div>
        </div>

    </div>
  );
};

export default FormSection;