import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Will this get me into HIPAA trouble?",
    answer: "No. We only use contact info, not health details. Your patient data is always private and safe."
  },
  {
    question: "How do I guarantee I get video testimonials?",
    answer: "Use a small gift card, like $5. This simple trick gets us almost twice as many video reviews."
  },
  {
    question: "I don't have time. How fast can we block bad reviews?",
    answer: "30 minutes. We build it for you. You just print the simple code and start right away."
  },
  {
    question: "Is filtering reviews safe or legal?",
    answer: "Yes, 100%. We just send happy patients to Google and unhappy ones to a private form. It is smart, not risky."
  },
  {
    question: "I don't have staff to manage this. Does it run itself?",
    answer: "Yes. It is 'set-and-forget.' It works all the time while your team focuses only on treating patients."
  },
  {
    question: "What is the average profit (ROI) OrthoStar users make?",
    answer: "Our users often get new patients and spend much less on ads. We turn the cost into a clear profit."
  },
  {
    question: "Are there different pricing plans, or is the price always the same?",
    answer: "The service is a clear, flat monthly rate. There are no hidden fees or surprise costs, ever."
  },
  {
    question: "Does OrthoStar work with our patient software (like Dentrix or OpenDental)?",
    answer: "Yes. Our system is designed to work with all popular practice software. We make sure the technical setup is simple."
  },
  {
    question: "What support do I get if we have a technical problem?",
    answer: "Our support team is always ready to help. If you have an issue, we will fix it quickly and without making you wait."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>

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