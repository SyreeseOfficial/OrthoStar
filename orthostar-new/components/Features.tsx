import React from 'react';
import { AlertTriangle, TrendingUp, Users, Video, ShieldCheck, Gift, Activity } from 'lucide-react';
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
              <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Public Damage</h3>
                <p className="text-slate-400 leading-relaxed">
                  Bad Reviews Are Costing You Money. One bad 1-star review on Google costs you thousands in lost new patients.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Users />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Weak Marketing</h3>
                <p className="text-slate-400 leading-relaxed">
                  No Videos, No Growth. You have zero real video proof from happy patients. Your marketing looks weak and fake.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Activity />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Staff Burnout</h3>
                <p className="text-slate-400 leading-relaxed">
                  Staff Time is Wasted. Your team wastes time chasing reviews. They should be focused on patient care, not busy work.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Features & Benefits */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop Worrying. Get The Cure Today.</h2>
              <p className="text-slate-400 max-w-xl">
                Finally, a simple system that blocks bad reviews and gets you video testimonials automatically.
              </p>
            </div>
            {/* Gamified Stat */}
            <div className="mt-8 md:mt-0 glass-panel px-6 py-4 rounded-xl flex items-center gap-4 border-brand-accent/30">
              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Video Assets Captured</div>
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
                <p className="text-sm text-slate-400">Get a never-ending stream of real, high-quality patient videos. We post them to grow your clinic.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 shadow-lg shadow-black/20 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1">
                <ShieldCheck className="text-brand-accent mb-4" size={32} />
                <h4 className="text-lg font-semibold text-white mb-2">Block All Bad Reviews Guaranteed</h4>
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
                <p className="text-sm text-slate-400">No staff training needed. The system does the work for you. Just watch your clinic grow.</p>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};