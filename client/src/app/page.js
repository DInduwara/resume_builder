'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, Play, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// --- IMPORT COMPONENTS ---
import LogoCloud from '@/components/home/LogoCloud';
import Features from '@/components/home/Features';
import Steps from '@/components/home/Steps';
import TemplateGallery from '@/components/home/TemplateGallery';
import FAQ from '@/components/home/FAQ';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/home/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* Background Grid & Glow */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="h-8 w-8 bg-white text-black rounded-lg flex items-center justify-center font-bold">R</div>
          <span>ResumeBuilder</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#templates" className="hover:text-white transition-colors">Templates</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="px-5 py-2.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Get Started
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0A0A0A] border-b border-white/10 p-6 z-40 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5">
          <Link href="#features" className="text-lg font-medium text-zinc-400">Features</Link>
          <Link href="#pricing" className="text-lg font-medium text-zinc-400">Pricing</Link>
          <Link href="/register" className="px-5 py-3 bg-white text-black text-center font-bold rounded-lg">Get Started</Link>
        </div>
      )}

      {/* --- HERO --- */}
      <main className="relative z-20 max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8">
            <Sparkles size={12} className="text-indigo-400" />
            <span>AI Analysis V2.0 is live</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            The resume builder <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">
              professionals trust.
            </span>
          </h1>

          <p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">
            Create an ATS-proof resume in minutes. Our AI engine optimizes your content to help you land interviews at top tech companies.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link 
              href="/register"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.6)]"
            >
              Build My Resume <ArrowRight size={18} />
            </Link>
            
            <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
              <Play size={18} className="fill-current" /> Watch Demo
            </button>
          </div>
          
          {/* Hero Footer: Trusted Users */}
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="h-9 w-9 rounded-full border-2 border-[#0A0A0A] bg-zinc-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-500 gap-0.5">
                <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" />
              </div>
              <span className="text-xs font-medium text-zinc-400">Trusted by 10k+ engineers</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full flex items-center justify-center perspective-1000"
        >
          <div className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out p-2 group">
             {/* Mock Dashboard UI */}
             <div className="aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden relative border border-white/5">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                 <div className="absolute left-0 top-0 bottom-0 w-16 bg-zinc-800/50 border-r border-white/5 p-4 flex flex-col gap-4">
                    <div className="h-8 w-8 bg-zinc-700 rounded-md"></div>
                    <div className="h-8 w-8 bg-zinc-700/50 rounded-md"></div>
                    <div className="h-8 w-8 bg-zinc-700/50 rounded-md"></div>
                 </div>
                 <div className="absolute top-0 left-16 right-0 h-16 border-b border-white/5 flex items-center px-6 gap-4">
                    <div className="h-4 w-24 bg-zinc-700 rounded"></div>
                    <div className="ml-auto h-8 w-8 bg-indigo-600 rounded-full"></div>
                 </div>
                 <div className="absolute top-20 left-20 right-4 space-y-3">
                    <div className="h-32 w-full bg-zinc-800/50 rounded-lg border border-white/5"></div>
                    <div className="flex gap-3">
                        <div className="h-32 w-1/2 bg-zinc-800/50 rounded-lg border border-white/5"></div>
                        <div className="h-32 w-1/2 bg-zinc-800/50 rounded-lg border border-white/5"></div>
                    </div>
                 </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -left-6 top-10 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce">
                <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-400 h-6 w-6" />
                </div>
                <div>
                    <p className="text-xs text-zinc-400 uppercase font-bold">ATS Score</p>
                    <p className="text-xl font-bold text-white">98/100</p>
                </div>
             </div>
          </div>
        </motion.div>
      </main>

      {/* --- SECTIONS STACK --- */}
      <LogoCloud />
      <Steps />
      <Features />
      <TemplateGallery />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}