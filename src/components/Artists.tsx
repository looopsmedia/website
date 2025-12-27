import React, { useEffect, useMemo, useRef, useState } from "react";
import { Instagram, Twitter, Music } from "lucide-react";

const artists = [
  {
    name: "Mevlan Kurtishi",
    genre: "Nasheed Artist",
    image: "https://i.ibb.co/fYJHpdjF/mevlan.png?auto=compress&cs=tinysrgb&w=400",
    social: {
      instagram: "https://www.instagram.com/mevlankurtishi",
      twitter: "https://x.com/mevlan_kurtishi",
      music: "https://open.spotify.com/intl-tr/artist/6wydir4mzVKMaHsxfIqjaD",
    },
  {
    name: "Adéz",
    genre: "Rap Artist",
    image: "https://i.ibb.co/4hycDnb/adez.png?auto=compress&cs=tinysrgb&w=400",
    social: {
      instagram: "https://instagram.com/adez.wav",
      twitter: "http://www.x.com/adezcarleone",
    },
  },
  {
    name: "Q Was",
    genre: "Rap Artist",
    image: "https://i.ibb.co/zhxWCHPZ/qwas.png?auto=compress&cs=tinysrgb&w=400",
    social: {
      instagram: "https://www.instagram.com/que_was/",
      twitter: "",
      music: "https://open.spotify.com/intl-tr/artist/4Sp2E6iu35g8pp9K2hsirx",
    },
  },
  {
    name: "Tarık Musa",
    genre: "Rap Artist",
    image: "https://i.ibb.co/Lzr4K267/tar-k.png?auto=compress&cs=tinysrgb&w=400",
    social: {
      instagram: "https://www.instagram.com/tarik.krgz",
      twitter: "",
      music: "",  
    },
  },
  },
  { 
    name: "Cüneyt Büyükyaka", 
    genre: "Senaryo Yönetmeni", 
    image: "https://i.ibb.co/3YLBDt2y/cuneyt.png?auto=compress&cs=tinysrgb&w=400", 
    social: { 
      instagram: "https://www.instagram.com/cuneyt.buyukyaka", 
      twitter: "https://x.com/cuneytbuyukyaka", 
      music: "https://open.spotify.com/intl-tr/artist/3KM4yx6xgZ3Ty2xdnQaI78?si=eHoTeNbpRHOuWDwZzD0dyQ" 
    },
  },
  {
    name: "Ceku",
    genre: "Rap Artist",
    image: "https://i.ibb.co/ZRRL137m/ceku.png?auto=compress&cs=tinysrgb&w=400",
    social: { instagram: "@busesyldzz", twitter: "" },
  }
];

// helper: handle veya URL'i tam linke çevir
const toUrl = (val?: string, base?: string) => {
  if (!val) return null;
  if (/^https?:\/\//i.test(val)) return val;
  const handle = val.replace(/^@/, "").trim();
  if (!handle) return null;
  return base ? `${base}/${handle}` : null;
};

// breakpoint’e göre kaç kart görünsün?
const useItemsPerView = () => {
  const [items, setItems] = useState(4);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (mqLg.matches) setItems(4);
      else if (mqMd.matches) setItems(2);
      else setItems(1);
    };

    update();
    mqLg.addEventListener("change", update);
    mqMd.addEventListener("change", update);

    return () => {
      mqLg.removeEventListener("change", update);
      mqMd.removeEventListener("change", update);
    };
  }, []);

  return items;
};

export const Artists: React.FC = () => {
  const itemsPerView = useItemsPerView();

  // infinite loop için sona ilk N elemanı ekle
  const looped = useMemo(() => {
    const head = artists.slice(0, itemsPerView);
    return [...artists, ...head];
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
    };
  }, [isPaused]);

  // transition bittiğinde "zıplamadan" reset
  const handleTransitionEnd = () => {
    if (index === artists.length) {
      // sona eklenen kopyalara geldik -> başa dön (transition kapalı)
      setEnableTransition(false);
      setIndex(0);
      // bir sonraki frame transition’ı geri aç
      requestAnimationFrame(() => setEnableTransition(true));
    }
  };

  // kart stilleri
  const card = (artist: (typeof artists)[number], i: number) => {
    const igUrl = toUrl(artist.social.instagram, "https://instagram.com");
    const twUrl = toUrl(artist.social.twitter, "https://x.com");
    const musicUrl = toUrl(artist.social.music);

    return (
      <div
        key={`${artist.name}-${i}`}
        className="px-3"
        style={{ flex: `0 0 ${100 / itemsPerView}%` }}
      >
        <div className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-light-gray/20 h-full">
          <div className="relative overflow-hidden">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-light-gray mb-1">
              {artist.name}
            </h3>
            <p className="text-teal font-medium mb-4">{artist.genre}</p>

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
      </div>
    );
  };

  return (
    <section id="artists" className="py-24 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
            Our <span className="text-teal">Artists</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-2xl mx-auto">
            Discover the incredible talent we're proud to represent and support
            on their creative journey.
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
