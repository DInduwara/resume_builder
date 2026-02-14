import React from 'react';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { q: "Is this really free?", a: "Yes, we have a generous free tier that lets you build and download a resume. Premium features like AI-writing are paid." },
    { q: "Will this pass the ATS?", a: "Absolutely. Our templates are engineered specifically to be readable by Applicant Tracking Systems (ATS)." },
    { q: "Can I import my LinkedIn?", a: "Yes! You can export your LinkedIn to PDF and import it here to get a head start." },
    { q: "How secure is my data?", a: "We use bank-level encryption. Your personal data is never sold to recruiters or third parties." }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="group border border-white/5 bg-zinc-900/30 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors cursor-pointer">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg font-medium text-white">{item.q}</h3>
                <Plus className="size-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              </div>
              <p className="mt-4 text-zinc-400 leading-relaxed text-sm hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;