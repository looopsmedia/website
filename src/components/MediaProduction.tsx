import React from 'react';
import { Video, Camera, Mic, Edit3, Headphones, Monitor } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "Professional music videos, documentaries, and promotional content with cinematic quality."
  },
  {
    icon: Mic,
    title: "Audio Recording",
    description: "State-of-the-art recording studios with premium equipment for pristine sound capture."
  },
  {
    icon: Edit3,
    title: "Post-Production",
    description: "Expert editing, color grading, and sound design to bring your vision to life."
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photo shoots for album covers, promotional materials, and artist portraits."
  },
  {
    icon: Headphones,
    title: "Mixing & Mastering",
    description: "Professional mixing and mastering services to ensure your tracks sound perfect."
  },
  {
    icon: Monitor,
    title: "Live Streaming",
    description: "Multi-camera live streaming setups for concerts, interviews, and virtual events."
  }
];

export const MediaProduction: React.FC = () => {
  return (
    <section id="media-production" className="py-24 bg-gradient-to-br from-dark-gray to-dark-gray/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-light-gray mb-4">
            Media & <span className="text-pink">Production</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive media production services 
            that elevate your artistic vision to professional standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-light-gray/10 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-light-gray/20">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal to-pink rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-light-gray mb-3">{service.title}</h3>
                <p className="text-light-gray/70 leading-relaxed">{service.description}</p>
              </div>
              
              
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};