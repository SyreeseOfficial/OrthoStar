import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

interface PricingProps {
  onOpenDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transparent Pricing. <br />Easy Refund Policy</h2>
            <p className="text-slate-400 text-lg mb-8">
              No long-term contracts. We earn your business every single month.
            </p>

            <div className="bg-emerald-900/10 border border-brand-accent/20 rounded-xl p-6 mb-8">
              <h3 className="flex items-center gap-2 text-brand-accent font-bold mb-2">
                <ShieldCheck /> Worried About Wasting Money? Forget It.
              </h3>
              <p className="text-sm text-slate-300">
                No contracts. No fear. Your money is safe. Get a full refund for the month if you're ever not happy. No questions asked.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
              <div className="bg-slate-950 rounded-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>

                <h3 className="text-xl font-medium text-slate-400 mb-2">Orthodontist Clinic</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold text-white">$299</span>
                  <span className="text-slate-500">/month</span>
                </div>

                <div className="space-y-4 mb-10">
                  {['Unlimited Review Requests', 'Video Testimonial Hosting', 'Private Feedback Dashboard', 'Social Media Asset Generation', 'Concierge Onboarding', 'Priority Support'].map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-300 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <Button href="https://calendly.com/syreeseofficial/short-chat" target="_blank" size="lg" className="w-full text-center justify-center">
                  Start Your 30-Day Free Trial
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">No credit card required.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};