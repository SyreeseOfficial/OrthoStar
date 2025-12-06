import React from 'react';
import { Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-white">
                <Star size={12} fill="currentColor" />
              </div>
              <span className="font-bold text-white">OrthoStar</span>
            </div>
            <p className="text-sm text-slate-500">
              Block Bad Reviews. Get New Patients.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-accent">Review Gate</a></li>
              <li><a href="#" className="hover:text-brand-accent">Video Capture</a></li>
              <li><a href="#" className="hover:text-brand-accent">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-accent">About</a></li>
              <li><a href="#" className="hover:text-brand-accent">Contact</a></li>
              <li><a href="#" className="hover:text-brand-accent">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-accent">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2025 OrthoStar, LLC. All rights reserved.</p>
          <p>16817 Larch Way, Lynnwood, WA 98037</p>
        </div>
      </div>
    </footer>
  );
};