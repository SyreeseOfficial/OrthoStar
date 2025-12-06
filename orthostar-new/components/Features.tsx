import React from 'react';
import { AlertTriangle, TrendingUp, Users, Video, ShieldCheck, Gift, Activity } from 'lucide-react';
import { Counter } from './ui/Counter';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Pain Points Bento Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Current Landscape is Broken</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">Manual review collection exposes you to risk and wastes staff hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Reputation Exposure</h3>
              <p className="text-slate-400 leading-relaxed">
                Untracked negative feedback leads to public, brand-damaging 1-star reviews on Google, eroding trust and patient acquisition.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <Users />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Marketing Deficiency</h3>
              <p className="text-slate-400 leading-relaxed">
                A shortage of authentic, patient-generated content (video testimonials) leaves social media and website assets stale.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Activity />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Staff Overload</h3>
              <p className="text-slate-400 leading-relaxed">
                Manual outreach by staff is inconsistent, time-consuming, and takes focus away from critical patient care operations.
              </p>
            </div>
          </div>
        </div>

        {/* Features & Benefits */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineered for Scalability</h2>
              <p className="text-slate-400 max-w-xl">
                Turn your patient base into your most powerful marketing channel.
              </p>
            </div>
            {/* Gamified Stat */}
            <div className="mt-8 md:mt-0 glass-panel px-6 py-4 rounded-xl flex items-center gap-4 border-brand-accent/30">
              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Video Assets Captured</div>
                <div className="text-2xl font-bold text-brand-accent font-mono">
                  <Counter end={5420} suffix="+" />
                </div>
              </div>
              <div className="h-10 w-1 bg-white/10 rounded-full"></div>
              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Practices Active</div>
                <div className="text-2xl font-bold text-white font-mono">
                  <Counter end={120} suffix="+" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-brand-accent/50 transition-all duration-300">
              <Video className="text-brand-accent mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Video Asset Automation</h4>
              <p className="text-sm text-slate-400">Perpetual stream of high-converting, authentic video content, managed and posted by OrthoStar.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-brand-accent/50 transition-all duration-300">
              <ShieldCheck className="text-brand-accent mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Risk Mitigation</h4>
              <p className="text-sm text-slate-400">Immediate, private capture of negative feedback, enabling proactive service recovery.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-brand-accent/50 transition-all duration-300">
              <Gift className="text-brand-accent mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Incentive Strategy</h4>
              <p className="text-sm text-slate-400">Templated, high-ROI incentive structures proven to maximize patient compliance.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-brand-accent/50 transition-all duration-300">
              <TrendingUp className="text-brand-accent mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Hands-Off Growth</h4>
              <p className="text-sm text-slate-400">Minimal training required. The system operates on a set-and-forget basis.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};