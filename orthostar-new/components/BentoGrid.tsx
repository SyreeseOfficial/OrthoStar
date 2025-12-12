import React from 'react';
import { ArrowDown, Shield, Video, Check, Gift, RotateCcw } from 'lucide-react';

interface BentoBoxProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string; // For grid positioning (col-span, row-span)
    variant?: 'tall' | 'standard';
    accentColor?: 'green' | 'neutral';
    delay?: string;
}

const BentoBox: React.FC<BentoBoxProps> = ({
    title,
    description,
    icon,
    className = "",
    variant = 'standard',
    accentColor = 'neutral',
    delay = '0s'
}) => {
    // Determine styles based on variant and accent
    const isGreenAccent = accentColor === 'green';

    return (
        <div
            className={`
                group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 p-6 md:p-8
                backdrop-blur-sm transition-all duration-500 ease-out hover:border-white/10 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-brand-accent/5
                hover:-translate-y-1
                opacity-0 animate-fade-in-up
                flex flex-col
                h-full
                ${className}
            `}
            style={{ animationDelay: delay }}
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

            {/* Icon Wrapper */}
            <div className={`
                mb-6 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-3xl
                transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                ${isGreenAccent ? 'bg-brand-accent/10 text-brand-accent' : 'bg-slate-800 text-slate-400'}
            `}>
                {icon}
            </div>

            {/* Content */}
            <div className={`flex flex-col flex-1 justify-between`}>
                <div>
                    <h3 className="font-bold text-white mb-3 text-xl">
                        {title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const BentoGrid: React.FC = () => {
    return (
        <section className="bg-[#08090A] py-24 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-6">
                        Why OrthoStar?
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Because we get you a better review score, which makes you more money.
                    </p>
                </div>

                {/*
                  Desktop Layout (4 cols, 2 rows implicitly defined by content):
                  We remove the wrapper divs so BentoBox becomes the direct grid item.
                  This ensures 'stretch' applies to the component itself.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Box 1: Financial Drain (Tall) */}
                    <BentoBox
                        title="Losing Thousands Per Patient"
                        description="Bad reviews make patients choose competitors, costing you thousands of dollars per patient."
                        icon={<ArrowDown />}
                        variant="tall"
                        accentColor="neutral"
                        className="lg:col-span-1 lg:row-span-2"
                        delay="0s"
                    />

                    {/* Box 2: Reputation Shield (Std) */}
                    <BentoBox
                        title="Blocks All Bad Reviews"
                        description="We put up a shield that blocks 1–4 star reviews from ever going public on Google."
                        icon={<Shield className="fill-brand-accent/20" />}
                        variant="standard"
                        accentColor="green"
                        className="lg:col-span-1"
                        delay="0.1s"
                    />

                    {/* Box 3: Video Advantage (Std) */}
                    <BentoBox
                        title="Get Real Video Ads"
                        description="We get video testimonials from your happy patients. Video is how people shop today."
                        icon={<Video className="fill-brand-accent/20" />}
                        variant="standard"
                        accentColor="green"
                        className="lg:col-span-1"
                        delay="0.2s"
                    />

                    {/* Box 4: Operational Ease (Tall) */}
                    <BentoBox
                        title="Your Staff Does Zero Work"
                        description="Your staff is too busy to manage reviews. Our system is fully automated. They don't lift a finger."
                        icon={<Check />}
                        variant="tall"
                        accentColor="green"
                        className="lg:col-span-1 lg:row-span-2"
                        delay="0.3s"
                    />

                    {/* Box 5: The Guarantee (Std) */}
                    <BentoBox
                        title="Try For FREE"
                        description="Your first month is free. See the results before you ever pay us."
                        icon={<Gift />}
                        variant="standard"
                        accentColor="neutral"
                        className="lg:col-span-1"
                        delay="0.15s"
                    />

                    {/* Box 6: Risk Reversal (Std) */}
                    <BentoBox
                        title="100% Money Back"
                        description="We will give you a 100% refund, no questions asked if you are not happy. Zero risk."
                        icon={<RotateCcw />}
                        variant="standard"
                        accentColor="neutral"
                        className="lg:col-span-1"
                        delay="0.25s"
                    />
                </div>
            </div>
        </section>
    );
};
