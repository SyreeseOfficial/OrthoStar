import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { Button } from './components/ui/Button';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-accent/30">
      <Header onOpenDemo={openDemo} />
      
      <main>
        <Hero onOpenDemo={openDemo} />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing onOpenDemo={openDemo} />
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Elevate Your Practice Today</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Join the top 1% of practices using automated reputation management.
            </p>
            <Button size="lg" onClick={openDemo} className="shadow-2xl shadow-brand-accent/20">
              Secure Your Demo Time Slot
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

export default App;