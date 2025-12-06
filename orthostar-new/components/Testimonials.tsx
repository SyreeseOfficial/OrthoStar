import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Miller",
    clinic: "Miller Orthodontics",
    text: "We captured 12 video testimonials in the first week. The filtration logic saved us from two potential negative reviews that we resolved privately.",
    location: "Austin, TX"
  },
  {
    name: "Dr. James Chen",
    clinic: "Align & Smile",
    text: "OrthoStar is the only tool that actually understands the aesthetic practice workflow. It's completely hands-off for my front desk.",
    location: "Seattle, WA"
  },
  {
    name: "Elena Rodriguez",
    clinic: "Bright Future Ortho",
    text: "Our Google rating moved from 4.6 to 4.9 in three months. The video assets are gold for our Instagram ads.",
    location: "Miami, FL"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Trusted by Top Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4 text-brand-accent">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.clinic} • {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};