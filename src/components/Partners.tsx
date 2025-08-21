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
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-gray mb-3">
            Our <span className="text-teal">Partners</span>
          </h2>
          <p className="text-sm sm:text-base text-light-gray/70 max-w-2xl mx-auto">
            Meet the collaborators, labels, and industry leaders shaping the sound of tomorrow with us.
          </p>
        </div>

        {/* HORIZONTAL SCROLL / SCROLL SNAP */}
        <div className="relative">
          {/* gradient edges (optional nice touch) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-dark-gray to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-dark-gray to-transparent" />

          <div
            className={[
              // container scroll
              'flex overflow-x-auto snap-x snap-mandatory',
              // spacing & padding so first/last cards align center-ish on mobile
              'gap-4 px-1 sm:px-2',
              // smooth scroll on iOS
              'scroll-px-2',
              // hide scrollbar (works in most modern browsers; add CSS if you want perfect control)
              '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            ].join(' ')}
            aria-label="Partners list"
          >
            {/* invisible gutters to center snap on small screens */}
            <div className="shrink-0 w-4 sm:w-6" aria-hidden />

            {partners.map((partner, index) => {
              const igUrl = toUrl(partner.social.instagram, 'https://instagram.com');
              const twUrl = toUrl(partner.social.twitter, 'https://x.com');

              return (
                <article
                  key={index}
                  className={[
                    'group relative shrink-0 snap-center',
                    // responsive card width
                    'min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[280px]',
                    // visuals
                    'bg-light-gray/10 rounded-2xl overflow-hidden border border-light-gray/20',
                    'transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]'
                  ].join(' ')}
                >
                  {/* Fotoğraf alanı */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
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

                  {/* Metin alanı */}
                  <div className="p-4 flex flex-col">
                    <h3 className="text-lg font-bold text-light-gray mb-0.5">{partner.name}</h3>
                    <p className="text-teal font-medium">{partner.genre}</p>
                    <p className="text-light-gray/70 mt-2 text-sm line-clamp-2">{partner.bio}</p>
                  </div>
                </article>
              );
            })}

            {/* right gutter */}
            <div className="shrink-0 w-4 sm:w-6" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
};
