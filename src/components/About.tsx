import React from 'react';
import { Target, Heart, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We're fueled by genuine love for music and creative expression."
  },
  {
    icon: Target,
    title: "Excellence Focused",
    description: "Every project receives our complete attention to detail and quality."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We embrace cutting-edge technology and creative approaches."
  },
  {
    icon: Users,
    title: "Artist-Centric",
    description: "Your vision and success are at the center of everything we do."
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-dark-gray to-dark-gray/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-light-gray mb-6">
              About <span className="text-teal">Looops Media</span>
            </h2>
            <div className="space-y-6 text-light-gray/80 leading-relaxed">
              <p className="text-lg">
                Empowering the Next Generation of Music
                LooopsMedia was founded to support young musical talent. Our mission is to remove every barrier standing between artists and quality music.
              </p>
              <p>
                Independent Spirit, Global Vision
                Founded in 2025, LooopsMedia is growing with a strong independent spirit and a global perspective.
              </p>
              <p>
                From our state-of-the-art recording facilities to our global distribution network, 
                we've built an ecosystem designed to nurture talent and bring exceptional music to audiences worldwide.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-light-gray mb-4">Our Values</h3>
            </div>

            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-light-gray/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-light-gray/20">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-pink rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-light-gray mb-2">{value.title}</h4>
                  <p className="text-light-gray/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-light-gray/10 border border-light-gray/20 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Want the world to hear your talent?</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Reach out to Looops Media and let your talent speak for itself.
				Let’s bring your sound to the world — together.
            </p>
            <a
              href="https://wa.me/905342973400"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
