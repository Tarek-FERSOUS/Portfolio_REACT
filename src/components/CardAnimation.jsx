import { useEffect } from 'react';

export const useCardAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
};