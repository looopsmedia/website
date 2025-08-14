import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll davranışını dinle
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200); // 200px sonrası görünsün
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Yukarı kaydır
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed z-50
        right-4 md:right-6
        bottom-24 md:bottom-6                 /* mobilde yukarıda, desktop'ta klasik */
        mb-[env(safe-area-inset-bottom)] md:mb-0  /* iPhone home bar için güvenli alan */
        bg-teal hover:bg-pink text-white
        p-3 rounded-full shadow-xl
        transition-all duration-300
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white/40
        backdrop-blur-sm
      `}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
