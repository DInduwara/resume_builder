import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8 text-sm">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4 text-white font-bold text-lg">
                        <div className="size-6 bg-white rounded text-black flex items-center justify-center text-xs">R</div>
                        ResumeBuilder
                    </div>
                    <p className="text-zinc-500 leading-relaxed max-w-xs">
                        Crafted for professionals who want to stand out. Secure, fast, and AI-powered.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Product</h4>
                    <ul className="space-y-3 text-zinc-500">
                        <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#templates" className="hover:text-white transition-colors">Templates</a></li>
                        <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Resources</h4>
                    <ul className="space-y-3 text-zinc-500">
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Career Guide</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Legal</h4>
                    <ul className="space-y-3 text-zinc-500">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-zinc-600">© 2026 ResumeBuilder Inc.</p>
                <div className="flex gap-6 text-zinc-500">
                    <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;