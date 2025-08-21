import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

// ---- Types ----
type Social = { instagram?: string; twitter?: string };
export type Partner = {
  name: string;
  genre: string;
  image: string;
  bio?: string;
  social: Social;
};

// ---- Helpers ----
const toUrl = (val?: string, base?: string) => {
  if (!val) return null;
  if (/^https?:\/\//i.test(val)) return val;
  const handle = val.replace(/^@/, '').trim();
  if (!handle) return null;
  return `${base}/${handle}`;
};

// ---- Component ----
interface PartnersProps {
  partners: Partner[];
  /** İlk etapta kaç partner gösterilsin */
  initialCount?: number; // default: 4
  /** Her tıklamada kaç tane daha yüklensin */
  step?: number; // default: 4
  /** Başlık metinleri (çok dilli kullanım için) */
  i18n?: {
    title?: string;
    subtitle?: string;
    loadMore?: string;
    showLess?: string;
  };
}

export const Partners: React.FC<PartnersProps> = ({
  partners,
  initialCount = 4,
  step = 4,
  i18n = {
    title: 'Our',
    subtitle: 'Partners',
    loadMore: 'Daha fazlası',
    showLess: 'Daha az göster',
  },
}) => {
  const [visible, setVisible] = React.useState(Math.min(initialCount, partners.length));
  const canLoadMore = visible < partners.length;
  const loadMore = () => setVisible((v) => Math.min(v + step, partners.length));
  const showLess = () => setVisible(Math.min(initialCount, partners.length));

  return (
    <section id="partners" className="py-24 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
            {i18n.title} <span className="text-teal">{i18n.subtitle}</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-2xl mx-auto">
            Meet the collaborators, labels, and industry leaders shaping the sound of tomorrow with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.slice(0, visible).map((partner, index) => {
            const igUrl = toUrl(partner.social.instagram, 'https://instagram.com');
            const twUrl = toUrl(partner.social.twitter, 'https://x.com');

            return (
              <div
                key={`${partner.name}-${index}`}
                className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-light-gray/20 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Social icons */}
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

                {/* Text */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-light-gray mb-0.5">{partner.name}</h3>
                  <p className="text-teal font-medium">{partner.genre}</p>
                  {partner.bio && (
                    <p className="text-light-gray/70 mt-2 text-sm line-clamp-2">{partner.bio}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {canLoadMore ? (
            <button
              type="button"
              onClick={loadMore}
              className="px-5 py-2.5 rounded-full border border-teal/40 text-teal hover:bg-teal hover:text-dark-gray transition-colors text-sm font-semibold"
            >
              {i18n.loadMore}
            </button>
          ) : partners.length > initialCount ? (
            <button
              type="button"
              onClick={showLess}
              className="px-5 py-2.5 rounded-full border border-light-gray/30 text-light-gray hover:bg-light-gray/10 transition-colors text-sm"
            >
              {i18n.showLess}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

// ---- Example default export for quick drop-in ----
// Remove this if you import Partners elsewhere and pass your own data.
const defaultPartners: Partner[] = [
  {
    name: 'MAKAM Worldwide',
    genre: 'Production',
    image: 'https://i.ibb.co/DHh0Qmw5/makam.png?auto=compress&cs=tinysrgb&w=400',
    bio: 'Based in Dubai',
    social: { instagram: '', twitter: '' },
  },
  {
    name: 'GALAKTIKA Pictures',
    genre: 'Film Production',
    image: 'https://i.ibb.co/gMBTTGSC/galaktika.png?auto=compress&cs=tinysrgb&w=400',
    bio: 'Based in North Macedonia',
    social: { instagram: '', twitter: '' },
  },
  {
    name: '321 RECORDS',
    genre: 'Music Production Studio',
    image: 'https://i.ibb.co/yFThLBzm/321records.png?auto=compress&cs=tinysrgb&w=400',
    bio: 'Based in Istanbul',
    social: { instagram: 'https://www.instagram.com/321record', twitter: '' },
  },
  {
    name: 'LABEL6',
    genre: 'Streetwear',
    image: 'https://i.ibb.co/LdcvrMCY/label6.png?auto=compress&cs=tinysrgb&w=400',
    bio: 'Based in Istanbul',
    social: { instagram: 'https://www.instagram.com/label.6', twitter: '' },
  },
  // ... ileriye dönük daha fazla partner eklenebilir
];

export default function PartnersSection() {
  return <Partners partners={defaultPartners} initialCount={4} step={4} i18n={{ title: 'Our', subtitle: 'Partners', loadMore: 'Daha fazlası', showLess: 'Daha az göster' }} />;
}
