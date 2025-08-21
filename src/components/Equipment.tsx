import React from 'react';
import { Mic, Headphones, Monitor, Settings, Volume2, Radio } from 'lucide-react';

const equipment = [
  {
    icon: Mic,
    name: "Neumann U87 Ai",
    category: "Studio Microphone",
    description: "Industry-standard large-diaphragm condenser microphone for vocals and instruments.",
    specs: ["Frequency Response: 20Hz-20kHz", "Max SPL: 127dB", "Phantom Power: 48V"],
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: Settings,
    name: "Soundcraft Signature 12 MTK",
    category: "Live/Studio Mixer",
    description: "12-channel professional analog mixer with built-in Lexicon effects and multitrack USB audio interface, ideal for recording, mixing, and live performance applications.",
    specs: ["Channels: 12 (8 mono mic/line, 2 stereo)", "USB Interface: 14-in / 12-out multitrack", "EQ: 3-band EQ with swept mids on mono channels"],
    image: "https://i.ibb.co/N2Y4Wd96/studio.jpg"
  },
  {
    icon: Monitor,
    name: "Genelec 8351B SAM™",
    category: "Studio Monitors",
    description: "Three-way Smart Active Monitor with precise imaging, wide sweet spot, and advanced room calibration, designed for professional mixing and mastering environments.",
    specs: ["Frequency Response: 32Hz – 43kHz (±1.5 dB)", "Amplification: 150W LF, 120W MF, 90W HF (Class D)", "Max SPL: 118dB"],
    image: "https://iili.io/K9kwl6u.md.jpg"
  },
  {
    icon: Headphones,
    name: "Beyerdynamic DT 770 Pro (80 Ohm)",
    category: "Studio Headphones",
    description: "Closed-back studio headphones delivering accurate sound reproduction, strong bass response, and excellent comfort for long recording and mixing sessions. A trusted industry standard for musicians, producers, and audio engineers.",
    specs: ["Type: Closed-back, over-ear", "Impedance: 80 Ω", "Frequency Response: 5 Hz – 35 kHz"],
    image: "https://iili.io/K9keG8G.md.jpg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: Volume2,
    name: "Avalon VT-737sp",
    category: "Channel Strip",
    description: "Vacuum tube channel strip with preamp, EQ, compressor, and de-esser.",
    specs: ["Tube: 12AX7", "Gain: 70dB", "EQ: 4-band parametric"],
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    icon: Radio,
    name: "Antelope Orion Studio",
    category: "Audio Interface",
    description: "High-end audio interface with pristine AD/DA conversion and low latency.",
    specs: ["I/O: 32x32", "Sample Rate: up to 192kHz", "Latency: <1ms"],
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const Equipment: React.FC = () => {
  return (
    <section id="equipment" className="py-24 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
            Professional <span className="text-pink">Equipment</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-3xl mx-auto">
            Our studios are equipped with industry-leading gear to ensure your recordings 
            meet the highest professional standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div key={index} className="group bg-light-gray/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-light-gray/20">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-teal text-sm font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold text-light-gray mb-2">{item.name}</h3>
                  <p className="text-light-gray/70 text-sm leading-relaxed mb-4">{item.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-light-gray">Specifications:</h4>
                  {item.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-xs text-light-gray/60 flex items-center">
                      <div className="w-1 h-1 bg-teal rounded-full mr-2"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                
                
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-pink hover:bg-pink/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            View Full Equipment List
          </button>
        </div>
      </div>
    </section>
  );
};
