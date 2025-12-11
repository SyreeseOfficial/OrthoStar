import React, { useRef, useState } from 'react';
import { Button } from './ui/Button';
import { Shield, Zap, TrendingUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Common Browser Frame that is part of each slide as per requirements
  const BrowserFrame = ({ children, url = "orthostar.org/your-practice" }: { children: React.ReactNode, url?: string }) => (
    <div className="relative bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl h-full flex flex-col">
      {/* Browser Header */}
      <div className="bg-slate-950 px-4 py-3 border-b border-white/5 flex items-center gap-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-800"></div>
          <div className="w-3 h-3 rounded-full bg-slate-800"></div>
          <div className="w-3 h-3 rounded-full bg-slate-800"></div>
        </div>
        <div className="ml-4 px-3 py-1 bg-slate-900 rounded-md border border-white/5 text-xs text-slate-500 w-64 truncate">
          {url}
        </div>
      </div>
      {/* UI Content */}
      <div className="flex-1 bg-slate-900 flex items-center justify-center p-8 md:p-12">
        {children}
      </div>
    </div>
  );

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            OrthoStar 2.0 Now Available
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Bad Reviews Are Killing Your Ortho Practice. <br />
            <span className="text-brand-accent text-glow">
              Stop It Now.
            </span>
          </h1>

          <h2 className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Built for Orthos. Our system blocks bad reviews & generates video testimonials and 5-star reviews from happy patients.
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button href="https://calendly.com/syreeseofficial/short-chat" target="_blank" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos */}
            <span className="text-sm font-semibold text-slate-300 flex items-center gap-2"><Shield size={16} /> HIPAA Compliant</span>
            <span className="text-sm font-semibold text-slate-300 flex items-center gap-2"><TrendingUp size={16} /> Google Partner</span>
            <span className="text-sm font-semibold text-slate-300 flex items-center gap-2"><Zap size={16} /> Instant Setup</span>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full max-w-5xl mx-auto mt-8 group">

          {/* Swiper Wrapper with Glow */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl blur opacity-40 pointer-events-none"></div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              onSwiper={(swiper) => {
                // @ts-ignore
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="rounded-xl shadow-2xl z-10"
              autoHeight={true}
            >
              {/* SLIDE 1: Existing Content */}
              <SwiperSlide className="h-full">
                <BrowserFrame>
                  <div className="w-full grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Phone Mockup */}
                    <div className="relative mx-auto border-slate-800 bg-slate-900 border-[8px] rounded-[2rem] h-[400px] w-[200px] md:w-[240px] shadow-xl flex flex-col overflow-hidden">
                      <div className="h-[32px] w-[3px] bg-slate-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
                      <div className="h-[46px] w-[3px] bg-slate-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
                      <div className="h-[46px] w-[3px] bg-slate-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>
                      <div className="flex-1 bg-white flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-12 h-12 bg-slate-100 rounded-full mb-4 flex items-center justify-center">
                          <span className="font-bold text-slate-800">Max</span>
                        </div>
                        <h4 className="text-slate-800 font-bold text-sm mb-2">How was your visit?</h4>
                        <div className="flex gap-1 mb-6">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="text-brand-accent fill-brand-accent" />)}
                        </div>
                        <div className="w-full p-2 bg-brand-accent text-white text-xs rounded shadow-lg mb-2">
                          Record Video Review
                        </div>
                        <div className="text-[10px] text-slate-400">Redirecting to Google Reviews...</div>
                      </div>
                    </div>

                    {/* Right: Explainer */}
                    <div className="space-y-6 text-left">
                      <div className="glass-panel p-6 rounded-xl border-l-4 border-brand-accent">
                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="p-1 rounded bg-brand-accent/20 text-brand-accent"><Star size={14} fill="currentColor" /></span>
                          5-Star Reviews
                        </h3>
                        <p className="text-sm text-slate-400">
                          Perfect reviews go straight to Google. Happy patients are asked to record a video for a reward. You win every time.
                        </p>
                      </div>
                      <div className="glass-panel p-6 rounded-xl border-l-4 border-slate-700 opacity-60">
                        <h3 className="text-slate-200 font-semibold mb-2">1-4 Star Reviews</h3>
                        <p className="text-sm text-slate-400">
                          Blocked. Bad reviews are sent to your private form. The public never sees a bad review.
                        </p>
                      </div>
                    </div>
                  </div>
                </BrowserFrame>
              </SwiperSlide>

              {/* SLIDE 2: Placeholder */}
              <SwiperSlide className="h-full">
                <BrowserFrame url="orthostar.org/block-bad-reviews">
                  <div className="flex flex-col items-center justify-center py-20 text-center min-h-[400px]">
                    <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
                      <Shield className="w-10 h-10 text-brand-accent opacity-50" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">SLIDE 2: Blockade</h3>
                    <p className="text-slate-500 font-medium">(Content Coming Soon)</p>
                  </div>
                </BrowserFrame>
              </SwiperSlide>

              {/* SLIDE 3: Placeholder */}
              <SwiperSlide className="h-full">
                <BrowserFrame url="orthostar.org/asset-generation">
                  <div className="flex flex-col items-center justify-center py-20 text-center min-h-[400px]">
                    <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
                      <Zap className="w-10 h-10 text-brand-accent opacity-50" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">SLIDE 3: Asset Generation</h3>
                    <p className="text-slate-500 font-medium">(Content Coming Soon)</p>
                  </div>
                </BrowserFrame>
              </SwiperSlide>

              {/* SLIDE 4: Placeholder */}
              <SwiperSlide className="h-full">
                <BrowserFrame url="orthostar.org/financial-impact">
                  <div className="flex flex-col items-center justify-center py-20 text-center min-h-[400px]">
                    <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
                      <TrendingUp className="w-10 h-10 text-brand-accent opacity-50" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">SLIDE 4: Financial Impact</h3>
                    <p className="text-slate-500 font-medium">(Content Coming Soon)</p>
                  </div>
                </BrowserFrame>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Pagination Controls - Dots Only */}
          <div className="flex items-center justify-center mt-6 gap-6 relative z-20">
            {/* Pagination Dots */}
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => swiperRef.current?.slideToLoop(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? 'w-8 bg-brand-accent' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};