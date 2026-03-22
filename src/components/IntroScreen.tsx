import { Button } from './ui/button';
import ChudBinaSprite from '../assets/images/ChudBinaDefault.webp';
import moonsBackground from '../assets/images/moons-background.webp';

interface IntroScreenProps {
  onContinue: () => void;
}

export function IntroScreen({ onContinue }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${moonsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      
      <div className="w-full max-w-2xl relative z-10">

               <div className="shadow-[inset_0_0_50px_5px_rgba(255,255,255,0.5)] mb-8 bg-white/10 backdrop-blur-lg border-2 border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <img 
            src={ChudBinaSprite} 
            alt="ChudBinaDefault"
            className="h-32 sm:h-48 w-auto object-contain opacity-95 flex-shrink-0 animate-floatUpDown"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))'
            }}
          />
          

          <div className="flex flex-col gap-3">
            <p className="animate-floatUpDown text-2xl sm:text-1xl leading-relaxed italic" 
                  style={{ 
                  fontFamily: "'Genshin Impact', Merriweather, serif",
                  WebkitTextStroke: '2px #5B21B6',
                  paintOrder: 'stroke fill',
                  letterSpacing: '0.05em',
                  color: '#E9D5FF',
              }}>
              Oh? Another soul drawn to the moon, how interesting...
            </p>
            <p className="animate-floatUpDown text-tiny sm:text-tiny leading-relaxed italic" 
                  style={{ 
                  fontFamily: "'Genshin Impact', Merriweather, serif",
                  WebkitTextStroke: '2px #5B21B6',
                  paintOrder: 'stroke fill',
                  letterSpacing: '0.05em',
                  color: '#E9D5FF',
              }}>
              By the way, there's some background music. If you would like to hear it, you can toggle the mute & unmute button onscreen a few times and it should work!
            </p>
            
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={onContinue}
            size="lg"
            className="px-12 py-6 text-lg border-2 border-white bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:from-blue-700 hover:to-indigo-700 font-bold uppercase"
            >
            ▶ NEXT
          </Button>
        </div>
      </div>
    </div>
  );
}