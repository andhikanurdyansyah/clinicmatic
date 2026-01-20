'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInFromTop';
  delay?: string;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({ 
  children, 
  animation = 'fadeInUp', 
  delay = '',
  className = '',
  threshold = 0.1
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            entry.target.classList.add(`animate-${animation}`);
            if (delay) {
              entry.target.classList.add(delay);
            }
            // Tambahkan class untuk smooth transition
            entry.target.classList.add('smooth-transition');
          }
        });
      },
      { 
        threshold: threshold,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [animation, delay, threshold, isVisible]);

  return (
    <div ref={elementRef} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
}
