import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll davranışını dinle
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // 200px scroll sonrası görünsün
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Yukarı kaydır
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-teal hover:bg-pink text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
