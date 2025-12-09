import React from 'react';

export const TrustBar: React.FC = () => {
    const tools = [
        'Chrome',
        'Google Drive',
        'HTML5',
        'Netlify',
        'Tally.so',
        'HIPAA Compliant',
        'Dentrix',
        'Instagram',
        'Stripe'
    ];

    // Duplicate the list enough times to ensure smooth infinite scrolling even on wider screens
    const marqueeItems = [...tools, ...tools, ...tools, ...tools];

    return (
        <section className="py-12 bg-slate-950 border-t border-white/5 relative z-10">
            {/* 50% Width Container */}
            <div className="w-full md:w-1/2 mx-auto px-4 overflow-hidden">
                {/* Subtitle */}
                <div className="text-center mb-8">
                    <p className="text-[#FFFFFF] text-xs font-semibold tracking-widest uppercase">
                        Built with Tools Your Practice Relies On
                    </p>
                </div>

                {/* Marquee Wrapper with CSS Mask Fade */}
                <div
                    className="relative group"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                    }}
                >
                    {/* Single Track Marquee Container */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {/* First Set */}
                        <div className="flex">
                            {marqueeItems.map((tool, index) => (
                                <div
                                    key={`set1-${tool}-${index}`}
                                    className="w-[180px] md:w-[220px] flex-shrink-0 flex justify-center items-center"
                                >
                                    <span className="text-[#94A3B8] font-bold text-lg md:text-xl select-none hover:text-slate-400 transition-colors duration-300">
                                        {tool}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate Set for Loop */}
                        <div className="flex">
                            {marqueeItems.map((tool, index) => (
                                <div
                                    key={`set2-${tool}-${index}`}
                                    className="w-[180px] md:w-[220px] flex-shrink-0 flex justify-center items-center"
                                >
                                    <span className="text-[#94A3B8] font-bold text-lg md:text-xl select-none hover:text-slate-400 transition-colors duration-300">
                                        {tool}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 200s linear infinite;
        }
      `}</style>
        </section>
    );
};
