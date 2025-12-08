import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '/index.html#how-it-works' },
    { label: 'Features', href: '/index.html#features' },
    { label: 'Pricing', href: '/index.html#pricing' },
    { label: 'FAQ', href: '/index.html#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${isScrolled
        ? 'bg-slate-950/80 backdrop-blur-xl border-white/10 py-3'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/index.html" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-accent shadow-lg group-hover:shadow-brand-accent/20 transition-all">
            <Star size={16} fill="currentColor" className="text-brand-accent" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            OrthoStar
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button href="https://calendly.com/syreeseofficial/short-chat" target="_blank" size="sm">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white py-2 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="https://calendly.com/syreeseofficial/short-chat"
            target="_blank"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full"
          >
            Book a Demo
          </Button>
        </div>
      )}
    </header>
  );
};