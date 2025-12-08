import React from 'react';
import { QrCode, Sliders, Share2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <QrCode size={32} />,
      title: "Speed",
      desc: "Start in 30 minutes. We build it for you, send the QR code, and you print it. Done."
    },
    {
      icon: <Sliders size={32} />,
      title: "Lock Down Good Reviews",
      desc: "Guarantee 5-stars. We send happy patients to Google & unhappy patients to a private form, keeping your rating perfect."
    },
    {
      icon: <Share2 size={32} />,
      title: "Rank Higher",
      desc: "Build practice authority. We check video testimonials and post them for you, making you the top-rated practice online."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Easy Setup In Three Steps</h2>
          <p className="text-slate-400">From setup to first review in under 30 minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-900 via-brand-500 to-brand-900 opacity-30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-slate-850 border border-brand-accent/30 shadow-[0_0_15px_rgba(19,196,114,0.1)] flex items-center justify-center text-brand-accent mb-8 relative z-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(19,196,114,0.3)] transition-all duration-300">
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