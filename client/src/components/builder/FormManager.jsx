'use client';

import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, Code, Layout, Palette, ChevronLeft, ChevronRight, FolderGit2, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DesignSidebar from './DesignSidebar';

const FormManager = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [designOpen, setDesignOpen] = useState(false);

  // Updated steps configuration with Projects
  const steps = [
    { key: 'personal', label: 'Personal', icon: User, component: <PersonalForm /> },
    { key: 'experience', label: 'Experience', icon: Briefcase, component: <ExperienceForm /> },
    { key: 'education', label: 'Education', icon: GraduationCap, component: <EducationForm /> },
    { key: 'projects', label: 'Projects', icon: FolderGit2, component: <ProjectsForm /> }, // New Section
    { key: 'skills', label: 'Skills', icon: Code, component: <SkillsForm /> },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const CurrentComponent = steps[activeStep].component;

  return (
    <div className="flex flex-col h-full bg-[#0A0A0A] border-r border-white/5">

        {/* DESIGN SIDEBAR OVERLAY */}
        
        
        {/* 1. Design/Content Switcher */}
        <div className="px-6 pt-6 pb-4 space-y-4">
            <AnimatePresence>
            {designOpen && <DesignSidebar isOpen={designOpen} onClose={() => setDesignOpen(false)} />}
        </AnimatePresence>
            <div className="flex items-center gap-2">
                <button 
                    onClick={() => setDesignOpen(true)} // OPEN SIDEBAR
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-900 border border-white/5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:border-white/10 transition-all"
                >
                    <Layout size={14} /> Template
                </button>
                <button 
                    onClick={() => setDesignOpen(true)} // OPEN SIDEBAR (can share component)
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-900 border border-white/5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:border-white/10 transition-all"
                >
                    <Palette size={14} /> Theme
                </button>
            </div>
            
            {/* Step Navigation Controls */}
            <div className="ml-auto flex items-center gap-2">
                <button 
                    onClick={handlePrev} 
                    disabled={activeStep === 0}
                    className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors bg-zinc-900 border border-white/5 rounded-lg"
                >
                    <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-mono text-zinc-500 min-w-[40px] text-center">{activeStep + 1} / {steps.length}</span>
                <button 
                    onClick={handleNext} 
                    disabled={activeStep === steps.length - 1}
                    className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors bg-zinc-900 border border-white/5 rounded-lg"
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>

        {/* 2. Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="max-w-xl mx-auto animate-fade-in-up">
                {CurrentComponent}
            </div>
        </div>

    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const PersonalForm = () => (
    <div className="space-y-6">
        <div>
            <h2 className="text-xl font-bold text-white">Personal Information</h2>
            <p className="text-zinc-400 text-sm mt-1">Get started with the basics.</p>
        </div>

        {/* Photo Upload */}
        <div className="flex items-center gap-4 mb-6">
            <div className="size-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 hover:border-indigo-500 hover:text-indigo-500 transition-colors cursor-pointer group">
                <User size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <div>
                <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300">Upload Photo</button>
                <p className="text-[10px] text-zinc-600 mt-1">JPG or PNG, Max 2MB</p>
            </div>
        </div>

        <div className="space-y-4">
            <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 ml-1">Job Title</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-zinc-700" placeholder="e.g. Senior Product Designer" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500 ml-1">First Name</label>
                    <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500 ml-1">Last Name</label>
                    <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 ml-1">Email Address</label>
                <input type="email" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
            </div>
            
            <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500 ml-1">Phone</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
            </div>
        </div>
        
        <div className="pt-4">
            <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5">
                Save Changes
            </button>
        </div>
    </div>
);

const ExperienceForm = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-end">
            <div>
                <h2 className="text-xl font-bold text-white">Experience</h2>
                <p className="text-zinc-400 text-sm mt-1">Add your previous jobs.</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-lg border border-white/10 transition-all hover:border-white/20">
                <Plus size={14} /> Add Experience
            </button>
        </div>

        {/* Empty State */}
        <div className="h-48 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30 flex flex-col items-center justify-center text-center hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer group">
            <div className="size-12 bg-zinc-900 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-white/5">
                <Briefcase size={20} className="text-zinc-600 group-hover:text-zinc-400" />
            </div>
            <p className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">No work experience added yet.</p>
            <p className="text-xs text-zinc-600 mt-1">Click the "+ Add" button to get started.</p>
        </div>
    </div>
);

const ProjectsForm = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-end">
            <div>
                <h2 className="text-xl font-bold text-white">Projects</h2>
                <p className="text-zinc-400 text-sm mt-1">Showcase your relevant work.</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-lg border border-white/10 transition-all hover:border-white/20">
                <Plus size={14} /> Add Project
            </button>
        </div>

        {/* Empty State */}
        <div className="h-48 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30 flex flex-col items-center justify-center text-center hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer group">
            <div className="size-12 bg-zinc-900 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-white/5">
                <FolderGit2 size={20} className="text-zinc-600 group-hover:text-zinc-400" />
            </div>
            <p className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">No projects added yet.</p>
            <p className="text-xs text-zinc-600 mt-1">Add personal or academic projects to stand out.</p>
        </div>
    </div>
);

const EducationForm = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-end">
             <div>
                <h2 className="text-xl font-bold text-white">Education</h2>
                <p className="text-zinc-400 text-sm mt-1">Your academic background.</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-lg border border-white/10 transition-all hover:border-white/20">
                <Plus size={14} /> Add Education
            </button>
        </div>
        
        <div className="h-48 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-900/30 flex flex-col items-center justify-center text-center hover:border-zinc-700 hover:bg-zinc-900/50 transition-all cursor-pointer group">
            <div className="size-12 bg-zinc-900 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-white/5">
                <GraduationCap size={20} className="text-zinc-600 group-hover:text-zinc-400" />
            </div>
            <p className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">No education added.</p>
        </div>
    </div>
);

const SkillsForm = () => (
    <div className="space-y-6">
        <div>
            <h2 className="text-xl font-bold text-white">Skills</h2>
            <p className="text-zinc-400 text-sm mt-1">Add your technical and soft skills.</p>
        </div>
        
        <div className="flex gap-2">
            <input type="text" placeholder="e.g. React.js" className="flex-1 bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
            <button className="px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-500/20">Add</button>
        </div>

        {/* Tags Container */}
        <div className="flex flex-wrap gap-2 mt-4 p-4 bg-zinc-900/30 rounded-2xl border border-white/5 min-h-[100px] content-start">
             <span className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-lg border border-white/5 flex items-center gap-2 hover:bg-zinc-700 transition-colors cursor-default">
                JavaScript <button className="hover:text-red-400 transition-colors">×</button>
             </span>
             <span className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-lg border border-white/5 flex items-center gap-2 hover:bg-zinc-700 transition-colors cursor-default">
                Product Management <button className="hover:text-red-400 transition-colors">×</button>
             </span>
        </div>
        
        <div className="pt-4">
            <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5">
                Save Changes
            </button>
        </div>
    </div>
);

export default FormManager;