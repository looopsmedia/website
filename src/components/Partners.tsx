import React from 'react';
import { Instagram, Twitter, Music } from 'lucide-react';

const partners = [
  {
    name: "LABEL6",
    genre: "Streetwear",
    image: "https://i.ibb.co/LdcvrMCY/label6.png?auto=compress&cs=tinysrgb&w=400",
    bio: "",
    social: { instagram: "@looopsmedia", twitter: "@mayarodriguez" }
  },
  {
    name: "321 Records",
    genre: "Future Pop Star",
    image: "https://i.ibb.co/6JtR1P7V/revealingsoon.jpg?auto=compress&cs=tinysrgb&w=400",
    bio: "Soon you'll hear what can't be unheard.",
    social: { instagram: "@midnightcollective", twitter: "@midnightband" }
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

// helper: handle veya URL'i tam linke çevir (Artists’taki ile aynı mantık)
const toUrl = (val?: string, base?: string) => {
  if (!val) return null;
  if (/^https?:\/\//i.test(val)) return val;
  const handle = val.replace(/^@/, '').trim();
  if (!handle) return null;
  return `${base}/${handle}`;
};

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
            Our <span className="text-teal">Partners</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-2xl mx-auto">
            Meet the collaborators, labels, and industry leaders shaping the sound of tomorrow with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => {
            const igUrl = toUrl(partner.social.instagram, 'https://instagram.com');
            const twUrl = toUrl(partner.social.twitter, 'https://x.com'); // X (Twitter)

            return (
              <div
                key={index}
                className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-light-gray/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* overlay tıklamayı engellemesin */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* ikonlar üstte ve tıklanabilir */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 z-10">
                    <div className="flex space-x-3">
                      {igUrl && (
                        <a
                          href={igUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${partner.name} on Instagram`}
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
                          aria-label={`${partner.name} on X`}
                          title="X (Twitter)"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-teal transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {/* Müzik linki yoksa göstermeyelim; eklersen aynı patternle aç */}
                      {/* {musicUrl && (
                        <a href={musicUrl} ...>
                          <Music className="w-4 h-4" />
                        </a>
                      )} */}
                    </div>
                  </div>
                </div>

                {/* bio kaldırıldı; kart yüksekliği kısaldı */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-light-gray mb-0.5">{partner.name}</h3>
                  <p className="text-teal font-medium">{partner.genre}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
