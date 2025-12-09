import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Miller",
    clinic: "Miller Orthodontics",
    text: "We got 5-star reviews the first week. Then we started getting lots of video testimonials.",
    location: "Austin, TX"
  },
  {
    name: "Dr. James Chen",
    clinic: "Align & Smile",
    text: "OrthoStar makes getting reviews easy. It's nice that none of the lower review ever get posted to Google too.",
    location: "Great Falls, MT"
  },
  {
    name: "Elena Rodriguez",
    clinic: "Bright Future Ortho",
    text: "Our Google rating moved from 4.6 to 4.9 in three months. The video reviews are gold for our Instagram ads.",
    location: "Miami, FL"
  },
  {
    name: "Dr. Andrew Nguyen",
    clinic: "Modern Smile Dental",
    text: "The staff used to spend an hour a week manually asking for reviews. Now it’s completely automated. Our team can focus on patients, not marketing tasks.",
    location: "Los Angeles, CA"
  },
  {
    name: "Dr. Emily Carter",
    clinic: "Apex Ortho Group",
    text: "We were getting a lot of negative reviews, but OrthoStar made it easy to handle them. Now we get mostly 5-star reviews.",
    location: "Denver, CO"
  },
  {
    name: "Dr. Omar Hassan",
    clinic: "Golden Coast Ortho",
    text: "We had a technical issue, and their support team responded immediately and fixed it on a Sunday morning. That level of dedication is rare in this industry!",
    location: "San Diego, CA"
  },
  {
    name: "Dr. Maria Santos",
    clinic: "City View Braces",
    text: "We track our ROI closely. The video testimonials alone have generated three new high-value patient leads in the last month. We see a direct return on investment.",
    location: "Chicago, IL"
  },
  {
    name: "David Lee (Practice Mgr)",
    clinic: "Pacific Smiles",
    text: "It handles bad reviews perfectly. Negative feedback goes right to my inbox so I can call the patient personally and turn a bad experience into a 5-star one.",
    location: "San Francisco, CA"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clones for infinite loop
  // We prepend the last 'itemsToShow' items and append the first 'itemsToShow' items
  // Total items = itemsToShow (clones) + N (real) + itemsToShow (clones)
  const extendedTestimonials = [
    ...testimonials.slice(-itemsToShow),
    ...testimonials,
    ...testimonials.slice(0, itemsToShow)
  ];

  // Offset index to start at the first "real" item
  const [visibleIndex, setVisibleIndex] = useState(itemsToShow);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setVisibleIndex(prev => prev + 1);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setVisibleIndex(prev => prev - 1);
  }, [isTransitioning]);

  // Handle Loop Reset
  useEffect(() => {
    if (!isTransitioning) return;

    const transitionDuration = 500; // ms matches CSS duration
    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // Check boundaries
      // Real items are at indices: itemsToShow ... itemsToShow + N - 1
      // Total length = N + 2 * itemsToShow

      const totalReal = testimonials.length;

      // If we scrolled past the last real item (to the first clone)
      if (visibleIndex >= totalReal + itemsToShow) {
        setVisibleIndex(itemsToShow); // Jump back to start of real items
      }
      // If we scrolled before the first real item (to the last clone)
      else if (visibleIndex < itemsToShow) {
        setVisibleIndex(totalReal + itemsToShow - 1); // Jump to end of real items
      }
    }, transitionDuration);

    return () => clearTimeout(timer);
  }, [visibleIndex, isTransitioning, itemsToShow]);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Simply call next
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section className="py-32 bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative group">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Trusted by Top Orthodontists</h2>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900/80 text-emerald-500 hover:bg-slate-800 backdrop-blur-sm border border-slate-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50 mx-2"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900/80 text-emerald-500 hover:bg-slate-800 backdrop-blur-sm border border-slate-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-50 mx-2"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Viewport */}
        <div className="overflow-hidden -mx-4 px-4 py-4"> {/* Negative margin to allow shadow/scale without clipping if needed */}
          <div
            ref={trackRef}
            className="flex gap-8"
            style={{
              transform: `translateX(-${visibleIndex * (100 / itemsToShow)}%) translateX(-${visibleIndex * 32 / itemsToShow}px)`, // 32px is the gap-8
              transition: isTransitioning ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              // We need to account for the gap in the percentage calculation? 
              // Actually flex gap is tricky with percentage translate. 
              // Better to use calc: translateX(calc(-100% / itemsToShow * visibleIndex - gap * ...))
              // Let's simplify: width of item is (100% - (itemsToShow - 1) * gap) / itemsToShow
            }}
          >
            {/* 
              Re-thinking the transform logic for Flex Gap:
              If we simply use width: calc(100% / itemsToShow) and padding for gap?
              Or keep gap-8 (2rem = 32px).
              If container is 100%, and we have gap-8.
              Item width = `calc((100% - ${(itemsToShow - 1) * 2}rem) / ${itemsToShow})`
              
              Let's apply explicit width to the items instead of relying on flex-1 
            */}

            {extendedTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: `calc((100% - ${(itemsToShow - 1) * 2}rem) / ${itemsToShow})` }}
              >
                <div className="h-full glass-panel p-8 rounded-2xl relative transition-all duration-300 hover:bg-white/5 bg-slate-900/50 border border-slate-800">
                  <div className="flex gap-1 mb-4 text-emerald-500">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-300 mb-6 italic min-h-[5rem]">"{t.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.clinic} • {t.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};