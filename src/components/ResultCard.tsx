import { Button } from './ui/button';
import { WavyText } from './WavyText';
import { MoonlightMeter } from './MoonlightMeter';
import moonsBackground from '../assets/images/moons-background.webp';
import ariaIcon from '../assets/images/TriLuneAria.webp';
import sonnetIcon from '../assets/images/TriLuneSonnet.webp';
import canonIcon from '../assets/images/TriLuneCanon.webp';
import chudbinHappy from '../assets/images/ChudBinaHappy.webp';

interface ResultCardProps {
  name: string;
  personality: 'Aria' | 'Sonnet' | 'Canon';
  onRestart: () => void;
  onAdminAccess?: () => void;
  answers?: ('Aria' | 'Sonnet' | 'Canon')[];
}

const personalityData = {
  Aria: {
    title: "Eternal Moonchild",
    description: "You now follow <wiggle>Aria</wiggle>, a natural leader among the sisters. Let your empathy and unwavering bravery carve your journey. Change does not frighten you, instead, it beckons you to learn and grow with it. You believe the future is worth protecting, even if it costs some sacrifices of your own. <wiggle>Carry your melody forward, child of the eternal moon.</wiggle>",
    bgColor: "#BDA073",
    strokeColor: "#8B7055",
    accentColor: "#FFB347",
    gradientColor: "#FFE5B4",
    icon: ariaIcon
  },
  Sonnet: {
    title: "Iridescent Moonchild",
    description: "You now follow <wiggle>Sonnet</wiggle>, whose light flickers softly among the sisters. Your path is forged through preservation and passion in your adventures. Like a ripple across still water, let your journey impact the world and the people you encounter along the way. <wiggle>Go on, child of the iridescent moon, and do not let fear eclipse your light.</wiggle>",
    bgColor: "#BD738A",
    strokeColor: "#9B5A6D",
    accentColor: "#818CF8",
    gradientColor: "#F5C2D0",
    icon: sonnetIcon
  },
  Canon: {
    title: "Frost Moonchild",
    description: "You now follow <wiggle>Canon</wiggle>, who shone the brightest among the sisters. In your pursuit for clarity, you tend to be inquisitive, and have a great desire to fathom the ways of the world. Consequently, you uncover hidden truths that others may overlook. Like moonlight upon frost, let your wisdom and resolve carry you through your path ahead. <wiggle>Walk forth, child of the frost moon.</wiggle>",
    bgColor: "#7397BD",
    strokeColor: "#5A7A9B",
    accentColor: "#34D399",
    gradientColor: "#B4D9FF",
    icon: canonIcon
  }
};

export function ResultCard({ name, personality, onRestart, onAdminAccess, answers = [] }: ResultCardProps) {
  const data = personalityData[personality];
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  });

  const calculateScores = () => {
    const scores = { Aria: 0, Sonnet: 0, Canon: 0 };
    answers.forEach(answer => {
      scores[answer]++;
    });
    
    const total = answers.length || 1;
    return {
      Aria: Math.round((scores.Aria / total) * 100),
      Sonnet: Math.round((scores.Sonnet / total) * 100),
      Canon: Math.round((scores.Canon / total) * 100),
    };
  };

  const personalityScores = calculateScores();

  return (
    
    <div className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${moonsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      
      <div className="w-full max-w-3xl relative z-10">
        
                <div className="mb-4 sm:mb-6 rounded-2xl p-4 sm:p-6 flex items-center justify-center">
          <div className="text-center">
            <p 
              className="text-xl text-center sm:text-4xl text-white"
              style={{ 
                fontFamily: "'Genshin Drip', Merriweather, serif",
                WebkitTextStroke: '1px #569eff',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em',
                animation: 'floatUpDown 3s ease-in-out infinite, shimmer 3s ease-in-out infinite'
              }}
            >
              THE MOONLIGHT ANSWERS...
            </p>
          </div>
        </div>


        <div className="bg-white/10 backdrop-blur-lg border-2 border-blue-400/30 rounded-4xl sm:rounded-4xl p-4 sm:p-8 shadow-2xl mb-6">
          <div
            className="p-4 sm:p-6 mb-6 rounded-4xl sm:rounded-4xl shadow-[inset_0_0_50px_5px_rgba(255,255,255,0.5)] flex flex-col items-center justify-center text-center"
            style={{ 
              backgroundColor: data.bgColor,
              background: `linear-gradient(135deg, ${data.bgColor}, ${data.gradientColor}40, ${data.bgColor})`
            }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <img 
                src={data.icon} 
                alt={personality}
                className="h-16 sm:h-24 w-auto object-contain flex-shrink-0"
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-xs sm:text-xs mb-1 text-white opacity-80">
                  {data.title}
                </p>
                <h2 className="text-3xl sm:text-5xl text-white" style={{ 
                  fontFamily: "'Genshin Drip', 'Merriweather', serif",
                  WebkitTextStroke: `3px ${data.strokeColor}`,
                  paintOrder: 'stroke fill'
                }}>
                  {personality}
                </h2>
              </div>
              <img 
                src={data.icon} 
                alt={personality}
                className="h-16 sm:h-24 w-auto object-contain flex-shrink-0"
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="border-2 border-purple-400/30 p-2 sm:p-3 bg-white rounded-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-wide mb-1 text-indigo-800/80">NAME</p>
                <p className="font-bold text-indigo-600/60 truncate text-xs sm:text-base">{name}</p>
              </div>
              <div className="border-2 border-purple-400/30 p-2 sm:p-3 bg-white rounded-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-wide mb-1 text-indigo-800/80">DATE</p>
                <p className="font-bold text-indigo-600/60 text-xs sm:text-base">{currentDate}</p>
              </div>
            </div>
          </div>

        <div className="mb-4 shadow-[inset_0_0_50px_5px_rgba(255,255,255,0.5)] sm:mb-6 border-2 border-purple-400/30 rounded-2xl p-3 sm:p-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.1), ${data.gradientColor}70, rgba(255,255,255,0.1))`
          }}>
          <img 
            src={chudbinHappy} 
            alt="chudBinaHappy"
            className="animate-floatUpDown h-20 sm:h-24 w-auto object-contain opacity-95 flex-shrink-0"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))'
            }}
          />
          <div className="flex flex-col gap-3">
            <p className="text-purple-50 leading-snug text-xs sm:text-sm italic" style={{ 
              fontFamily: "'Genshin Impact', Merriweather, serif",
              WebkitTextStroke: `2px #5B21B6`,
              paintOrder: 'stroke fill'
            }}>
              <WavyText text={data.description} delay={100} />
            </p>
          </div>
        </div>
        </div>

        <div className="mb-6 bg-white/10 backdrop-blur-lg border-2 border-purple-400/30 rounded-2xl p-4 sm:p-6 shadow-[inset_0_0_50px_5px_rgba(255,255,255,0.5)]">
          <MoonlightMeter scores={personalityScores} />
        </div>

        <div className="text-center space-y-4">
          <Button 
            onClick={onRestart}
            size="lg"
            className="w-full py-3 sm:py-6 text-xs sm:text-lg border-2 border-white bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:from-blue-700 hover:to-indigo-700 font-bold uppercase"
          >
            ← RETURN TO MAIN PAGE
          </Button>
          {onAdminAccess && (
            <Button 
              onClick={onAdminAccess}
              size="lg"
              className="w-full px-6 sm:px-12 py-3 sm:py-6 text-xs sm:text-lg border-2 border-indigo-700 text-indigo-700 bg-indigo-300/60 hover:bg-indigo-300 font-bold uppercase"
            >
              🔒 ADMIN ACCESS
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}