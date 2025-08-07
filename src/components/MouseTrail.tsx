import React, { useEffect, useRef } from 'react';

export const MouseTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trailContainer = trailRef.current;
    if (!trailContainer) return;

    const createDot = (x: number, y: number) => {
      const dot = document.createElement('div');
      dot.className = 'mouse-dot';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      trailContainer.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 800); // Dot ömrü
    };

    const handleMouseMove = (e: MouseEvent) => {
      createDot(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={trailRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};
