import React from 'react';
import { Instagram, Twitter, Music } from 'lucide-react';

const artists = [
  {
    name: "Adéz",
    genre: "Rap Artist",
    image: "https://i.ibb.co/Y46LcwYy/DSC4411.jpg?auto=compress&cs=tinysrgb&w=400",
    bio: "Every beat is a secret. Until now.",
    social: { instagram: "@adez.wav", twitter: "" }
  },
  {
    name: "Buğse",
    genre: "Rap Artist",
    image: "https://i.ibb.co/h5c40jz/DSC4434?auto=compress&cs=tinysrgb&w=400",
    bio: "Soon you'll hear what can't be unheard.",
    social: { instagram: "@busesyldzz", twitter: "@midnightband" }
  },
  {
    name: "DJ Nexus",
    genre: "House / Techno",
    image: "https://i.ibb.co/6JtR1P7V/revealingsoon.jpg?auto=compress&cs=tinysrgb&w=400",
    bio: "Underground house and techno producer with releases on major electronic music labels.",
    social: { instagram: "@djnexusofficial", twitter: "@nexusbeats" }
  },
  {
    name: "Luna Santos",
    genre: "R&B / Soul",
    image: "https://i.ibb.co/6JtR1P7V/revealingsoon.jpg?auto=compress&cs=tinysrgb&w=400",
    bio: "Soulful vocalist and songwriter bringing contemporary R&B with classic influences.",
    social: { instagram: "@lunasantosmusic", twitter: "@lunasantos" }
  }
];

export const Artists: React.FC = () => {
  return (
    <section id="artists" className="py-24 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
            Our <span className="text-teal">Artists</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-2xl mx-auto">
            Discover the incredible talent we're proud to represent and support on their creative journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-light-gray/20">
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-teal transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-teal transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-teal transition-colors">
                      <Music className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-light-gray mb-1">{artist.name}</h3>
                <p className="text-teal font-medium mb-3">{artist.genre}</p>
                <p className="text-light-gray/70 text-sm leading-relaxed">{artist.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
