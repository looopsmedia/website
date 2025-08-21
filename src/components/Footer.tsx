import React from 'react';
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M232 97.8a89.3 89.3 0 0 1-51.3-16.5v61.2a80.1 80.1 0 1 1-80-80.1h.4a48.3 48.3 0 0 0-.4 6.1v41.1a40 40 0 1 0 28.3 38.4V24h39.8a49 49 0 0 0 49 49Z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Social */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-4">
                Looops<span className="text-teal">Media</span>
              </div>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                Amplifying creativity through innovative media production, artist development, 
                and music distribution. Your sound, our passion.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/looopsmedia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-teal rounded-xl flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/looopsmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-teal rounded-xl flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@LooopsMediaLtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-teal rounded-xl flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@looopsmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-teal rounded-xl flex items-center justify-center transition-colors"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              {[
                "Artist Development", "Music Production", "Video Production", 
                "Film Production", "Distribution", "Mixing & Mastering", 
                "Equipments", "Producer", "PR Works"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-teal transition-colors duration-200">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal" />
                <span>info@looopsmedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal" />
                <span>+90 534 297 34 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal" />
                <span>Duman Sokak No: 17 4. Levent/İstanbul</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60">© 2025 Looops Media. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white/60 hover:text-teal transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
