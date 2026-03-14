import { useRef, useState, type ReactNode } from 'react';

interface RippleEffectProps {
  children: ReactNode;
}

export function RippleEffect({ children }: RippleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const lastRippleTime = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    
    const now = Date.now();
    if (now - lastRippleTime.current < 50) return;
    lastRippleTime.current = now;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now() + Math.random(), x, y };
    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full" 
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none z-[9999]"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="absolute rounded-full border-1 border-white/80"
            style={{
              width: '15px',
              height: '15px',
              top: '-7.5px',
              left: '-7.5px',
              animation: 'ripple 1s ease-out forwards',
              opacity: 0,
            }}
          />
        </div>
      ))}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ripple {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  );
}
// so i maybe lost like some of my lifespan making this look good bruh TS. PMO.