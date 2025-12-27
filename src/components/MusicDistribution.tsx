import React from 'react';
import { Globe, TrendingUp, Shield, Zap, Music2, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Distribute to 150+ platforms worldwide including Spotify, Apple Music, and more."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Detailed analytics to track your music's performance across all platforms."
  },
  {
    icon: Shield,
    title: "Rights Protection",
    description: "Comprehensive copyright protection and royalty collection services."
  },
  {
    icon: Zap,
    title: "Fast Distribution",
    description: "Get your music live on all major platforms within 24-48 hours."
  }
];

export const MusicDistribution: React.FC = () => {
  return (
    <section id="music-distribution" className="py-24 bg-dark-gray text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#08D9D6_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Music <span className="text-teal">Distribution</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get your music heard worldwide with our comprehensive distribution network 
            and advanced analytics platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Our Distribution?</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <Music2 className="w-16 h-16 text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Distribution Dashboard</h3>
              <p className="text-white/70">Track your music's performance in real-time</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <span className="text-white/80">Total Streams</span>
                <span className="text-teal font-bold">4.1M+</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <span className="text-white/80">Active Platforms</span>
                <span className="text-teal font-bold">150+</span>
              </div>
              
            </div>
            
            <div className="mt-6 flex items-center space-x-2 text-sm text-white/60">
              <BarChart3 className="w-4 h-4" />
              <span>Updated in real-time</span>
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};
