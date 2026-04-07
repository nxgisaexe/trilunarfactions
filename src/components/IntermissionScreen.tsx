import { useState } from 'react';
import moonsBackground from '../assets/images/moons-background.webp';
import sisterAria from '../assets/images/SisterAria.webp';
import sisterSonnet from '../assets/images/SisterSonnet.webp';
import sisterCanon from '../assets/images/SisterCanon.webp';
import { WavyText } from './WavyText';

interface IntermissionScreenProps {
  personality: 'Aria' | 'Sonnet' | 'Canon';
  onContinue: () => void;
  showResult?: React.ReactNode;
}

const sisterImages = {
  Aria: sisterAria,
  Sonnet: sisterSonnet,
  Canon: sisterCanon,
};

export function IntermissionScreen({ personality, onContinue, showResult }: IntermissionScreenProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sisterImage = sisterImages[personality];

  const handleClick = () => {
    setIsTransitioning(true);
    onContinue();
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      {showResult && (
        <div className="fixed inset-0 w-full h-full z-0">
          {showResult}
        </div>
      )}

      <div
        className="fixed inset-0 w-full h-full flex items-center justify-center p-4 overflow-hidden transition-opacity duration-500 z-10"
        onClick={handleClick}
        style={{
          backgroundImage: `url(${moonsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isTransitioning ? 0 : 1,
          pointerEvents: isTransitioning ? 'none' : 'auto',
        }}
      >
        <div
          className="absolute inset-0 backdrop-blur-xl transition-opacity duration-500"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            opacity: isTransitioning ? 0 : 1,
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center justify-center gap-8 transition-opacity duration-500"
          style={{
            opacity: isTransitioning ? 0 : 1,
          }}
        >
          <div className="flex justify-center">
            <img
              src={sisterImage}
              alt={`Sister ${personality}...`}
              className="h-100 sm:h-100 w-auto object-contain drop-shadow-2xl animate-floatUpDown"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(200, 200, 200, 0.4))',
              }}
            />
          </div>

          <p
            className="text-center text-lg sm:text-xl text-white animate-floatUpDown"
            style={{
              fontFamily: "'Genshin Impact', Merriweather, serif",
              WebkitTextStroke: '2px #5B21B6',
              paintOrder: 'stroke fill',
              letterSpacing: '0.05em',
              animationDelay: '0.2s',
            }}
          >
            <WavyText text="Click to claim to see your results." />
          </p>
        </div>
      </div>
    </div>
  );
}
