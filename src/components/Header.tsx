import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-gray/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - External PNG */}
          <div className="flex items-center">
            <a href="#home">
              <img 
                src="https://i.ibb.co/sdPT1mbh/logo.png" 
                alt="Looops Media Logo" 
                className="h-24 md:h-28 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-light-gray hover:text-teal transition-colors duration-200 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('artists')} className="text-light-gray hover:text-teal transition-colors duration-200 font-medium">
              Artists
            </button>
            <button onClick={() => scrollToSection('media-production')} className="text-light-gray hover:text-teal transition-colors duration-200 font-medium">
              Media & Production
            </button>
            <button onClick={() => scrollToSection('music-distribution')} className="text-light-gray hover:text-teal transition-colors duration-200 font-medium">
              Distribution
            </button>
            <button onClick={() => scrollToSection('equipment')} className="text-light-gray hover:text-teal transition-colors duration-200 font-medium">
              Equipment
            </button>
			<button onClick={() => scrollToSection('partners')} className="text-light-gray hover:text-teal transition-colors duration-200 font-medium">
              Partners
            </button>
            <button onClick={() => scrollToSection('about')} className="text-light-gray hover:text-teal transition-colors duration-200 font-medium">
              About
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-light-gray hover:text-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-dark-gray/95 backdrop-blur-md`}>
        <div className="px-4 py-4 space-y-4">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left text-light-gray hover:text-teal transition-colors duration-200 font-medium">
            Home
          </button>
          <button onClick={() => scrollToSection('artists')} className="block w-full text-left text-light-gray hover:text-teal transition-colors duration-200 font-medium">
            Artists
          </button>
          <button onClick={() => scrollToSection('media-production')} className="block w-full text-left text-light-gray hover:text-teal transition-colors duration-200 font-medium">
            Media & Production
          </button>
          <button onClick={() => scrollToSection('music-distribution')} className="block w-full text-left text-light-gray hover:text-teal transition-colors duration-200 font-medium">
            Distribution
          </button>
          <button onClick={() => scrollToSection('equipment')} className="block w-full text-left text-light-gray hover:text-teal transition-colors duration-200 font-medium">
            Equipment
          </button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left text-light-gray hover:text-teal transition-colors duration-200 font-medium">
            About
          </button>
        </div>
      </div>
    </header>
  );
};
