import React, { useEffect, useMemo, useRef, useState } from "react";
import { Instagram, Twitter } from "lucide-react";

type Social = { instagram?: string; twitter?: string };

type Partner = {
  name: string;
  genre: string;
  image: string;
  bio: string;
  social: Social;
};

const partners: Partner[] = [
  {
    name: "MAKAM Worldwide",
    genre: "Production",
    image: "https://i.ibb.co/DHh0Qmw5/makam.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in Dubai",
    social: { instagram: "", twitter: "" },
  },
  {
    name: "GALAKTIKA Pictures",
    genre: "Film Production",
    image: "https://i.ibb.co/gMBTTGSC/galaktika.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in North Macedonia",
    social: { instagram: "", twitter: "" },
  },
  {
    name: "KREAFLY",
    genre: "Marketing & Advertising",
    image: "https://i.ibb.co/1GTHXFDV/kreafly.png",
    bio: "Based in Istanbul",
    social: { instagram: "http://instagram.com/kreafly/", twitter: "" },
  },
  {
    name: "Degirmenci Films",
    genre: "Film Production",
    image: "https://i.ibb.co/DDhXpGGj/degirmencifilms.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in Istanbul",
    social: { instagram: "https://www.instagram.com/degirmencimovies", twitter: "" },
  },
  {
    name: "Podcast DİNLE",
    genre: "Media & Entertainment",
    image: "https://i.ibb.co/3YSXKdJC/podcastdinle.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in Istanbul",
    social: { instagram: "https://www.instagram.com/podcastdinle/", twitter: "" },
  },
  {
    name: "Aerosol Productions",
    genre: "Music",
    image: "https://i.ibb.co/wrS4C4w0/aeroprod.png?auto=compress&cs=tinysrgb&w=400",
    bio: "Based in Istanbul",
    social: { instagram: "https://www.instagram.com/aerokaptan?igsh=bnJzMnEwN3N2aXR1", twitter: "" },
  },
];

// helper: handle veya URL'i tam linke çevir
const toUrl = (val?: string, base?: string) => {
  if (!val) return null;
  const trimmed = val.trim();
  if (!trimmed) return null;

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const handle = trimmed.replace(/^@/, "").trim();
  if (!handle) return null;

  return base ? `${base}/${handle}` : null;
};

// breakpoint’e göre kaç kart görünsün? (desktop: 5)
const useItemsPerView = () => {
  const [items, setItems] = useState(5);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (mqLg.matches) setItems(5);
      else if (mqMd.matches) setItems(3);
      else if (mqSm.matches) setItems(2);
      else setItems(1);
    };

    update();
    mqLg.addEventListener("change", update);
    mqMd.addEventListener("change", update);
    mqSm.addEventListener("change", update);

    return () => {
      mqLg.removeEventListener("change", update);
      mqMd.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  return items;
};

export const Partners: React.FC = () => {
  const itemsPerView = useItemsPerView();

  // infinite loop için sona ilk N elemanı ekle
  const looped = useMemo(() => {
    const head = partners.slice(0, itemsPerView);
    return [...partners, ...head];
  }, [itemsPerView]);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  const intervalRef = useRef<number | null>(null);

  // itemsPerView değişince index’i güvenli hale getir
  useEffect(() => {
    setEnableTransition(false);
    setIndex(0);
    const t = window.setTimeout(() => setEnableTransition(true), 0);
    return () => window.clearTimeout(t);
  }, [itemsPerView]);

  // autoplay
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isPaused]);

  // transition bittiğinde "zıplamadan" reset
  const handleTransitionEnd = () => {
    if (index === partners.length) {
      setEnableTransition(false);
      setIndex(0);
      requestAnimationFrame(() => setEnableTransition(true));
    }
  };

  const card = (partner: Partner, i: number) => {
    const igUrl = toUrl(partner.social?.instagram, "https://instagram.com");
    const twUrl = toUrl(partner.social?.twitter, "https://x.com");

    return (
      <div
        key={`${partner.name}-${i}`}
        className="px-3"
        style={{ flex: `0 0 ${100 / itemsPerView}%` }}
      >
        <div className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-light-gray/20 h-full flex flex-col">
          {/* Fotoğraf alanı */}
          <div className="relative overflow-hidden aspect-square">
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

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
      </div>
    );
  };

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

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * (100 / itemsPerView)}%)`,
              transition: enableTransition ? "transform 700ms ease" : "none",
              willChange: "transform",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {looped.map(card)}
          </div>
        </div>
      </div>
    </section>
  );
};
