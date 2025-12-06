import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Will this get me into HIPAA trouble?",
    answer: "No. We only use contact data. Your patient data is safe and private."
  },
  {
    question: "How do I guarantee I get video testimonials?",
    answer: "Use a small $5 gift card. This formula gets 184% more videos."
  },
  {
    question: "I don't have time. How fast can we start blocking bad reviews?",
    answer: "30 minutes. We build it for you. Just print the code and start."
  },
  {
    question: "Is filtering reviews safe or legal?",
    answer: "100% Yes. You are simply sending happy patients to public sites, and unhappy patients to a private form. It is smart, not risky."
  },
  {
    question: "I don't have staff to manage this. Does it run itself?",
    answer: "Yes. It is set-and-forget. It just works while you treat patients."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQs</h2>

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
                className={`px-6 text-slate-400 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
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