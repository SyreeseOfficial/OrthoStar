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
      <div className="flex-1 bg-slate-900 flex items-center justify-center p-8 md:p-12 min-h-[600px]">
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
              autoplay={{ delay: 10000, disableOnInteraction: false }}
              onSwiper={(swiper) => {
                // @ts-ignore
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="rounded-xl shadow-2xl z-10"
              autoHeight={true}
            >
              {/* SLIDE 1: Review Gateway */}
              <SwiperSlide className="h-full">
                <BrowserFrame>
                  <div className="w-full grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Phone Mockup */}
                    <div className="relative mx-auto border-slate-800 bg-slate-900 border-[8px] rounded-[2rem] h-[400px] w-[200px] md:w-[240px] shadow-xl flex flex-col overflow-hidden">
                      <div className="h-[32px] w-[3px] bg-slate-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
                      <div className="h-[46px] w-[3px] bg-slate-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
                      <div className="h-[46px] w-[3px] bg-slate-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>

                      {/* Phone Screen Content */}
                      <div className="flex-1 bg-white flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center">
                          <span className="font-bold text-slate-800 text-lg">Max</span>
                        </div>
                        <h4 className="text-slate-900 font-bold text-base mb-3">How was your visit?</h4>
                        <div className="flex gap-1.5 mb-6">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={24} className="text-brand-accent fill-brand-accent" />)}
                        </div>

                        <div className="w-full space-y-2">
                          <div className="w-full py-2.5 bg-brand-accent text-white font-medium text-xs rounded-lg shadow-sm">
                            Great (5 Stars)
                          </div>
                          <div className="w-full py-2.5 bg-slate-700 text-white font-medium text-xs rounded-lg shadow-sm">
                            Needs Work (1-4 Stars)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Explainer */}
                    <div className="space-y-6 text-left">
                      <div className="glass-panel p-6 rounded-xl border-l-4 border-brand-accent bg-slate-800/50 backdrop-blur-sm">
                        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <span className="p-1 rounded bg-brand-accent/20 text-brand-accent"><Star size={14} fill="currentColor" /></span>
                          5-Star Reviews
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          Perfect reviews go straight to Google. Happy patients are asked to record a video for a reward. You win every time.
                        </p>
                      </div>
                      <div className="glass-panel p-6 rounded-xl border-l-4 border-slate-700 bg-slate-800/30 backdrop-blur-sm">
                        <h3 className="text-slate-200 font-semibold mb-2">1-4 Star Reviews</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          Blocked. Bad reviews are sent to your private form. The public never sees a bad review.
                        </p>
                      </div>
                    </div>
                  </div>
                </BrowserFrame>
              </SwiperSlide>

              {/* SLIDE 2: Private Feedback Form */}
              <SwiperSlide className="h-full">
                <BrowserFrame url="orthostar.org/feedback">
                  <div className="w-full max-w-lg mx-auto py-8">
                    {/* Stars Outline */}
                    <div className="flex justify-center gap-2 mb-8">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={32} className="text-slate-600" strokeWidth={1.5} />)}
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-white font-medium mb-2 text-sm flex items-center gap-2">
                          Your feedback is welcome. Please submit it below. <span className="text-slate-600 text-[10px] border border-slate-700 px-1 rounded-full">●</span>
                        </label>
                        <div className="relative">
                          <textarea
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-slate-300 text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none resize-none h-24 placeholder:text-slate-600"
                            placeholder="The food was tasty. The service was fast..."
                            readOnly
                          ></textarea>
                          <div className="absolute bottom-2 right-2 flex space-x-0.5">
                            <div className="w-1.5 h-1.5 bg-slate-600 rounded-full opacity-50"></div>
                            <div className="w-1.5 h-1.5 bg-slate-600 rounded-full opacity-50"></div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2 text-sm">
                          Leave your email below if you'd like someone to contact you.
                        </label>
                        <input
                          type="text"
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-slate-300 text-sm focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none placeholder:text-slate-600"
                          placeholder="Email"
                          readOnly
                        />
                      </div>

                      <button className="bg-brand-accent hover:bg-brand-accent/90 text-white font-medium py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors">
                        Submit <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </BrowserFrame>
              </SwiperSlide>

              {/* SLIDE 3: Thank You / Action */}
              <SwiperSlide className="h-full">
                <BrowserFrame url="orthostar.org/thank-you">
                  <div className="flex flex-col items-center justify-center py-16 text-center max-w-xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Thank you!</h2>
                    <p className="text-slate-300 text-lg mb-10">
                      We're thrilled you had a 5-star experience.
                    </p>

                    <div className="w-full space-y-4 max-w-md">
                      <button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-brand-accent/20 transition-all transform hover:-translate-y-0.5">
                        Leave a Google Review
                      </button>

                      <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold py-4 px-6 rounded-lg transition-all">
                        Submit a 10 Second Video Testimonial (Get Rewarded)
                      </button>
                    </div>
                  </div>
                </BrowserFrame>
              </SwiperSlide>

              {/* SLIDE 4: ROI Impact */}
              <SwiperSlide className="h-full">
                <BrowserFrame url="orthostar.org/financial-impact">
                  <div className="flex flex-col h-full py-4 max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Is $299 Worth $10,000 in Revenue?
                      </h2>
                      <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        A single 1-star review can cost you thousands in lost patient revenue. Imagine how many customers you are losing due to bad reviews.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 w-full">
                      {/* Good Loop */}
                      <div className="relative p-6 rounded-2xl border border-brand-accent bg-slate-900/50 flex items-center justify-center">
                        <p className="text-white font-semibold text-center text-sm md:text-base leading-relaxed">
                          Good reviews lead to more patients which leads to more money in your pocket.
                        </p>
                      </div>

                      {/* Bad Loop */}
                      <div className="relative p-6 rounded-2xl border border-slate-700 bg-slate-900/50 flex items-center justify-center">
                        <p className="text-white font-semibold text-center text-sm md:text-base leading-relaxed">
                          Bad reviews lead to patients going to your competitors and less money in your pocket.
                        </p>
                      </div>
                    </div>
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