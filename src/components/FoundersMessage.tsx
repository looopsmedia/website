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
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-dark-gray border border-light-gray/20 rounded-2xl shadow-2xl max-w-2xl mx-4 p-8 transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-light-gray/60 hover:text-light-gray transition-colors rounded-full hover:bg-light-gray/10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-teal to-pink rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="https://i.ibb.co/sdPT1mbh/logo.png" 
              alt="Looops Media Logo"
              className="w-18 h-18 object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-light-gray text-center mb-2">Founder's Message</h3>
          <p className="text-teal text-center font-medium">From the Heart of Looops Media</p>
        </div>
        
        <div className="space-y-4 text-light-gray/80 leading-relaxed">
          <p>
            “Music deserves freedom — and artists deserve support.”
          </p>
          <p>
            When we started LooopsMedia in 2025, we had a simple yet powerful idea:
			To give independent artists the platform, tools, and voice they need to thrive in the digital age.
          </p>
          <p>
            I’ve seen how difficult it can be for talented musicians to be heard, especially when they’re just starting out. That’s why we built LooopsMedia — not just as a distributor, but as a partner.
			A partner that listens, supports, and grows with the artist.
          </p>
		  <p>
            Our vision is clear:
			To break down the walls between good music and global reach.
			To empower creativity with transparency, and to build a music ecosystem where every artist — no matter how big or small — has a chance to shine.
          </p>
          <p className="font-medium text-light-gray">
            If you have a story to tell through music, we want to hear it.
			Let’s grow together.
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-light-gray/20">
          <p className="text-center text-light-gray font-semibold">AYDIN VAROL - BEDİRHAN VAROL <br/> Founder, LooopsMedia</p>
        </div>
      </div>
    </div>
  );
};
