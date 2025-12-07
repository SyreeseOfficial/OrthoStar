import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in seconds
    width?: "fit-content" | "100%";
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, width = "100%" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const transitionDelay = `${delay}s`;

    return (
        <div
            ref={ref}
            style={{ width }}
            className={`${className} transition-all duration-700 ease-out transform will-change-transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div style={{ transitionDelay }}>
                {children}
            </div>
        </div>
    );
};
