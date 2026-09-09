import { useRef, useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (element) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
              element.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
            }
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`} style={{ opacity: 0, transform: 'translateY(24px)' }}>
      {children}
    </div>
  );
}

export default ScrollReveal;
