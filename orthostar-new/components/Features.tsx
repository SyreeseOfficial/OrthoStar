import React from 'react';
import { Video, ShieldCheck, Gift, TrendingUp } from 'lucide-react';
import { Counter } from './ui/Counter';
import { Reveal } from './ui/Reveal';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Pain Points Bento Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Review System is Broken</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Stop losing money to bad reviews. Stop wasting staff time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors flex flex-col">
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/videos/dentist-poster.jpg"
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <source src="/videos/dentist.webm" type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>

                <div className="relative z-10 mt-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-3">Public Damage</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Bad Reviews Are Costing You Money. One bad 1-star review on Google costs you thousands lost from new patients.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors flex flex-col">
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/videos/camera-poster.jpg"
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <source src="/videos/camera.webm" type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>

                <div className="relative z-10 mt-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-3">Weak Marketing</h3>
                  <p className="text-slate-400 leading-relaxed">
                    No Videos, No Growth. You have zero real video proof from happy patients. Your marketing looks weak and fake.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors flex flex-col">
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/videos/employee-poster.jpg"
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <source src="/videos/employee.webm" type="video/webm" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>

                <div className="relative z-10 mt-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-semibold text-white mb-3">Staff Burnout</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Staff Time is Wasted. Your team wastes time chasing reviews. They should be focused on patient care, not busy work.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Features & Benefits */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop Losing Money From Bad Reviews</h2>
              <p className="text-slate-400 max-w-xl">
                Finally, a simple system that blocks bad reviews and gets you 5-star reviews and video testimonials automatically.
              </p>
            </div>
            {/* Gamified Stat */}
            <div className="mt-8 md:mt-0 glass-panel px-6 py-4 rounded-xl flex items-center gap-4 border-brand-accent/30">
              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Video Reviews Captured</div>
                <div className="text-2xl font-bold text-brand-accent font-mono">
                  <Counter end={426} suffix="+" />
                </div>
              </div>
              <div className="h-10 w-1 bg-white/10 rounded-full"></div>
              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Practices Active</div>
                <div className="text-2xl font-bold text-white font-mono">
                  <Counter end={27} suffix="+" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 shadow-lg shadow-black/20 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1">
                <Video className="text-brand-accent mb-4" size={32} />
                <h4 className="text-lg font-semibold text-white mb-2">Get Videos Automatically</h4>
                <p className="text-sm text-slate-400">Get a never-ending stream of real, high-quality patient videos. We post them to grow your practice.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 shadow-lg shadow-black/20 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1">
                <ShieldCheck className="text-brand-accent mb-4" size={32} />
                <h4 className="text-lg font-semibold text-white mb-2">Block Bad Reviews</h4>
                <p className="text-sm text-slate-400">We capture all negative feedback privately. 1-4 star reviews never go public.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 shadow-lg shadow-black/20 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1">
                <Gift className="text-brand-accent mb-4" size={32} />
                <h4 className="text-lg font-semibold text-white mb-2">Guaranteed Submissions</h4>
                <p className="text-sm text-slate-400">Use our simple plan. It is proven to get you the most videos and 5-star reviews possible.</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 shadow-lg shadow-black/20 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1">
                <TrendingUp className="text-brand-accent mb-4" size={32} />
                <h4 className="text-lg font-semibold text-white mb-2">Hands-Off Growth</h4>
                <p className="text-sm text-slate-400">No staff training needed. The system does the work for you. Just watch your practice grow.</p>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};