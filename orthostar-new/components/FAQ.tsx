import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is the platform HIPAA compliant?",
    answer: "Yes, security and patient data privacy are architected into the core platform design. We do not store sensitive health records, only minimal contact data required for the review request."
  },
  {
    question: "What is the recommended incentive structure for video?",
    answer: "We recommend small physical rewards like $5-$10 Starbucks or Amazon gift cards. Our data shows this increases video submission rates by over 400% compared to asking without incentive."
  },
  {
    question: "How long does setup take?",
    answer: "Setup is asynchronous and typically completed within one business day. We build your custom landing page and gate logic, you just print the QR code."
  },
  {
    question: "Can I customize the branding?",
    answer: "Absolutely. The landing page your patients see will feature your clinic's logo, colors, and specific tone of voice."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg bg-slate-900 overflow-hidden transition-all duration-200"
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-slate-200">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-brand-accent" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              <div 
                className={`px-6 text-slate-400 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};