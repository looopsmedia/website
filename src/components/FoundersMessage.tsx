import React from 'react';
import { X } from 'lucide-react';

interface FoundersMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FoundersMessage: React.FC<FoundersMessageProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal */}
      <div
        className="
          relative bg-dark-gray border border-light-gray/20 rounded-2xl shadow-2xl
          w-[94%] max-w-2xl p-5 md:p-8
          max-h-[82vh] md:max-h-[88vh] overflow-y-auto
          transform transition-all duration-300 scale-100
        "
        role="dialog"
        aria-modal="true"
        aria-label="Founder's Message"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-light-gray/60 hover:text-light-gray transition-colors rounded-full hover:bg-light-gray/10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-5 md:mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal to-pink rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center overflow-hidden">
            <img
              src="https://i.ibb.co/sdPT1mbh/logo.png"
              alt="Looops Media Logo"
              className="w-14 h-14 md:w-18 md:h-18 object-contain"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-light-gray text-center mb-1.5 md:mb-2">
            Founder&apos;s Message
          </h3>
          <p className="text-teal text-center font-medium text-sm md:text-base">
            From the Heart of Looops Media
          </p>
        </div>

        {/* Body */}
        <div className="space-y-3 md:space-y-4 text-light-gray/80 leading-relaxed">
          <p className="text-sm md:text-base">
            “Music deserves freedom — and artists deserve support.”
          </p>
          <p className="text-sm md:text-base">
            When we started LooopsMedia in 2025, we had a simple yet powerful idea:
            To give independent artists the platform, tools, and voice they need to thrive in the digital age.
          </p>
          <p className="text-sm md:text-base">
            We’ve seen how difficult it can be for talented musicians to be heard, especially when they’re just starting out.
            That’s why we built LooopsMedia — not just as a distributor, but as a partner. A partner that listens, supports,
            and grows with the artist.
          </p>
          <p className="text-sm md:text-base">
            Our vision is clear: To break down the walls between good music and global reach. To empower creativity with
            transparency, and to build a music ecosystem where every artist — no matter how big or small — has a chance to shine.
          </p>
          <p className="font-medium text-light-gray text-sm md:text-base">
            If you have a story to tell through music, we want to hear it. Let’s grow together.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-5 md:mt-6 pt-5 border-t border-light-gray/20">
          <p className="text-center text-light-gray font-semibold text-sm md:text-base">
            AYDIN VAROL - BEDİRHAN VAROL <br /> Founder, LooopsMedia
          </p>
        </div>
      </div>
    </div>
  );
};
