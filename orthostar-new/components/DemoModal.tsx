import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg p-8 overflow-hidden bg-slate-900 border border-white/10 rounded-2xl shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Strategy Session</h3>
              <p className="text-slate-400 text-sm">See how OrthoStar can automate your reputation management.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-white placeholder-slate-600 transition-all"
                  placeholder="Dr. Jane Smith"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Clinic Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-white placeholder-slate-600 transition-all"
                  placeholder="Smith Orthodontics"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Work Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-white placeholder-slate-600 transition-all"
                    placeholder="jane@clinic.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Phone</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-white placeholder-slate-600 transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full mt-6">
                Secure Demo Slot
              </Button>

              <p className="text-xs text-center text-slate-500 mt-4">
                By submitting, you agree to our Privacy Policy. Your data is secure.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-brand-accent/10 text-brand-accent">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
            <p className="text-slate-400 mb-8">We'll be in touch shortly to confirm your time slot.</p>
            <Button onClick={onClose} variant="secondary">Close Window</Button>
          </div>
        )}
      </div>
    </div>
  );
};