import React from 'react';
import { Instagram, Twitter, Music } from 'lucide-react';

const artists = [
  {
    name: "Adéz",
    genre: "Rap Artist",
    image: "https://i.ibb.co/xtNr0HWW/adezz.png?auto=compress&cs=tinysrgb&w=400",
    social: {
      instagram: "https://instagram.com/adez.wav",
      twitter: "http://www.x.com/adezcarleone",
    }
  },
  {
    name: "Ceku",
    genre: "Rap Artist",
    image: "https://i.ibb.co/5h4BXhgB/bu-sepp.png?auto=compress&cs=tinysrgb&w=400",
    social: { instagram: "@busesyldzz", twitter: "" }
  },
  {
    name: "Cüneyt Büyükyaka",
    genre: "Pop-Rock Artist",
    image: "https://i.ibb.co/0RGn1nMs/cuneytiki.png?auto=compress&cs=tinysrgb&w=400",
    social: {
      instagram: "https://www.instagram.com/cuneyt.buyukyaka",
      twitter: "https://x.com/cuneytbuyukyaka",
      music: "https://open.spotify.com/intl-tr/artist/3KM4yx6xgZ3Ty2xdnQaI78?si=eHoTeNbpRHOuWDwZzD0dyQ"
    }
  },
  {
    name: "Coming Soon",
    genre: "Coming Soon",
    image: "https://i.ibb.co/6JtR1P7V/revealingsoon.jpg?auto=compress&cs=tinysrgb&w=400",
    social: { instagram: "", twitter: "" }
  }
];

// helper: handle veya URL'i tam linke çevir
const toUrl = (val?: string, base?: string) => {
  if (!val) return null;
  if (/^https?:\/\//i.test(val)) return val;
  const handle = val.replace(/^@/, '').trim();
  if (!handle) return null;
  return base ? `${base}/${handle}` : null;
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
            const twUrl = toUrl(artist.social.twitter, 'https://x.com');
            const musicUrl = toUrl(artist.social.music);

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
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-light-gray mb-1">{artist.name}</h3>
                  <p className="text-teal font-medium mb-4">{artist.genre}</p>

                  {/* Sosyal ikonlar */}
                  <div className="flex items-center gap-3">
                    {igUrl && (
                      <a
                        href={igUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist.name} on Instagram`}
                        title="Instagram"
                        className="p-2 bg-teal hover:bg-pink rounded-full text-white transition-colors"
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
                        className="p-2 bg-teal hover:bg-pink rounded-full text-white transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {musicUrl && (
                      <a
                        href={musicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist.name} music`}
                        title="Listen"
                        className="p-2 bg-teal hover:bg-pink rounded-full text-white transition-colors"
                      >
                        <Music className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
