import React from 'react';
import { QrCode, Sliders, Share2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <QrCode size={32} />,
      title: "Provisioning",
      desc: "We generate a unique QR code for your clinic. Place it at the front desk or on checkout cards. No tech integration required."
    },
    {
      icon: <Sliders size={32} />,
      title: "Filtration & Capture",
      desc: "Patients scan and rate. 5-stars go to Google/Video. 1-4 stars go to a private form. You get the best, we hide the rest."
    },
    {
      icon: <Share2 size={32} />,
      title: "Distribution",
      desc: "OrthoStar validates video content and assists in distribution to your social channels. Watch your rankings climb."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Integration In Three Steps</h2>
          <p className="text-slate-400">From setup to first review in under 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-900 via-brand-500 to-brand-900 opacity-30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-brand-accent mb-8 relative z-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(19,196,114,0.2)] transition-all duration-300">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};