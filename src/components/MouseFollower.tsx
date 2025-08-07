import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

export const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 transition-all duration-75 ease-linear"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="animate-spin-slow w-6 h-6 text-teal">
        <Play className="w-full h-full" />
      </div>
    </div>
  );
};
