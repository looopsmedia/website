import React from 'react';
import { Instagram, Twitter, Music } from 'lucide-react';

const artists = [
  {
    name: "Adéz",
    genre: "Rap Artist",
    image: "https://i.ibb.co/Y7MVs7zz/adezpp.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Every beat is a secret. Until now.",
    social: { instagram: "https://instagram.com/adez.wav", twitter: "http://www.x.com/adezcarleone" }
  },
  {
    name: "Ceku",
    genre: "Rap Artist",
    image: "https://i.ibb.co/5h4BXhgB/bu-sepp.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Soon you'll hear what can't be unheard.",
    social: { instagram: "@busesyldzz", twitter: "" }
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

// helper: handle veya URL'i tam linke çevir
const toUrl = (val?: string, base?: string) => {
  if (!val) return null;
  if (/^https?:\/\//i.test(val)) return val;
  const handle = val.replace(/^@/, '').trim();
  if (!handle) return null;
  return `${base}/${handle}`;
};

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
          {artists.map((artist, index) => {
            const igUrl = toUrl(artist.social.instagram, 'https://instagram.com');
            const twUrl = toUrl(artist.social.twitter, 'https://x.com'); // Twitter = X
            // varsa müzik linki eklemek istersen: const musicUrl = artist.social.music && toUrl(...)

            return (
              <div
                key={index}
                className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-light-gray/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* overlay tıklamayı engellemesin */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* ikonlar en üstte ve tıklanabilir */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 z-10">
                    <div className="flex space-x-3">
                      {igUrl && (
                        <a
                          href={igUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${artist.name} on Instagram`}
                          title="Instagram"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-teal transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {twUrl && (
                        <a
                          href={twUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${artist.name} on X`}
                          title="X (Twitter)"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-teal transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {/* Music linkin yoksa gizli kalsın; varsa benzer şekilde ekle */}
                      {/* {musicUrl && (
                        <a href={musicUrl} ...>
                          <Music className="w-4 h-4" />
                        </a>
                      )} */}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-light-gray mb-1">{artist.name}</h3>
                  <p className="text-teal font-medium mb-3">{artist.genre}</p>
                  <p className="text-light-gray/70 text-sm leading-relaxed">{artist.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
