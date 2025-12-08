import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Brand, Tagline, Copyright, Address */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-accent">
                <Star size={12} fill="currentColor" />
              </div>
              <span className="font-bold text-white">OrthoStar</span>
            </div>

            <p className="text-slate-400 font-medium">
              Reputation. Secured.
            </p>

            <div className="text-sm text-slate-500 flex flex-col gap-1 mt-auto">
              <p>© 2025 OrthoStar, LLC. All rights reserved.</p>
              <p>16817 Larch Way, Lynnwood, WA 98037</p>
            </div>
          </div>

          {/* Right Column: Legal Links & Contact */}
          <div className="flex flex-col md:items-end justify-center gap-3 text-sm text-slate-500">
            <a href="mailto:OrthoStarHelp@gmail.com" className="hover:text-brand-accent transition-colors">Contact Us</a>
            <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
            <Link to="/hipaa-compliance" className="hover:text-brand-accent transition-colors">HIPAA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};