import React from 'react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/ui/Button';

interface HomeProps {
    onOpenDemo: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenDemo }) => {
    return (
        <main>
            <Hero onOpenDemo={onOpenDemo} />
            <TrustBar />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing onOpenDemo={onOpenDemo} />
            <FAQ />

            {/* Final CTA */}
            <section className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stop Losing Thousands of Dollars to Bad Reviews</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        Bad ratings send patients straight to your rivals. Our system guarantees 5-star reviews and video testimonials to bring that revenue back to your practice.
                    </p>
                    <Button size="lg" href="https://calendly.com/syreeseofficial/short-chat" target="_blank" className="shadow-2xl shadow-brand-accent/20">
                        Secure Your Demo Time Slot
                    </Button>
                </div>
            </section>
        </main>
    );
};
