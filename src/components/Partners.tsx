import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const partners = [
  {
    name: "MAKAM Worldwide",
    genre: "Production",
    image: "https://i.ibb.co/DHh0Qmw5/makam.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in Dubai",
    social: { instagram: "", twitter: "" }
  },
  {
    name: "GALAKTIKA Pictures",
    genre: "Film Production",
    image: "https://i.ibb.co/gMBTTGSC/galaktika.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in North Macedonia",
    social: { instagram: "", twitter: "" }
  },
  {
    name: "321 RECORDS",
    genre: "Music Production Studio",
    image: "https://i.ibb.co/yFThLBzm/321records.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in Istanbul",
    social: { instagram: "https://www.instagram.com/321record", twitter: "" }
  },
  {
    name: "LABEL6",
    genre: "Streetwear",
    image: "https://i.ibb.co/LdcvrMCY/label6.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in Istanbul",
    social: { instagram: "https://www.instagram.com/label.6", twitter: "" }
  },
  {
    name: "KREAFLY",
    genre: "Marketing & Advertising",
    image: "https://i.ibb.co/1GTHXFDV/kreafly.png",
    bio: "Based in Istanbul",
    social: { instagram: "http://instagram.com/kreafly/", twitter: "" }
  }
];

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

        {/* 5 kolonlu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => {
            const igUrl = toUrl(partner.social.instagram, 'https://instagram.com');
            const twUrl = toUrl(partner.social.twitter, 'https://x.com');

            return (
              <div
                key={index}
                className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-light-gray/20 flex flex-col"
              >
                {/* Fotoğraf alanı */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Sosyal ikonlar */}
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
                    </div>
                  </div>
                </div>

                {/* Metin alanı (yükseklik sabitleme ile hizalı) */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-light-gray mb-0.5 min-h-[28px]">
                    {partner.name}
                  </h3>
                  <p className="text-teal font-medium min-h-[24px]">{partner.genre}</p>
                  <p className="text-light-gray/70 mt-2 text-sm line-clamp-2 min-h-[40px]">
                    {partner.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
