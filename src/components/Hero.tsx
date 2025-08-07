import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { FoundersMessage } from './FoundersMessage';

export const Hero: React.FC = () => {
  const [isFoundersMessageOpen, setIsFoundersMessageOpen] = useState(false);

  const scrollToArtists = () => {
    const section = document.getElementById('artists');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-dark-gray overflow-hidden">

      {/* 🔁 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#08D9D6_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* 👤 Founder's Message Button - Left Side */}
      <button
        onClick={() => setIsFoundersMessageOpen(true)}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 bg-teal hover:bg-teal/90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute left-full ml-4 bg-dark-gray text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Founder's Message
        </span>
      </button>

      {/* 🧠 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-light-gray mb-6 tracking-tight">
            Discover yourself with 
            <span className="text-teal block sm:inline sm:ml-4">your music</span>
          </h1>
          <p className="text-xl sm:text-2xl text-light-gray/80 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            It's time to share your music with the world. Meet LooopsMedia <br/> let your voice be heard.
          </p>
        </div>
        
        <div className="flex justify-center items-center">
          <button 
            onClick={scrollToArtists}
            className="group bg-pink hover:bg-pink/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
          >
            <span>Explore Our Artists</span>
          </button>
        </div>
      </div>

      {/* 🫧 Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal/10 rounded-full animate-float z-0"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink/10 rounded-full animate-float z-0" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-teal/20 rounded-full animate-float z-0" style={{ animationDelay: '4s' }}></div>

      {/* 🧾 Founder's Message Popup */}
      <FoundersMessage 
        isOpen={isFoundersMessageOpen} 
        onClose={() => setIsFoundersMessageOpen(false)} 
      />
    </section>
  );
};
