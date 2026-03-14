import { Button } from './ui/button';
import { MoonlightMeter } from './MoonlightMeter';
import moonsBackground from '../assets/images/moons-background.png';
import ariaIcon from '../assets/images/triluneAria.png';
import sonnetIcon from '../assets/images/triluneSonnet.png';
import canonIcon from '../assets/images/triluneCanon.png';
import chudbinHappy from '../assets/images/ChudBinaHappy.png';

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
    description: "You now follow Aria, a natural leader among the sisters. Let your empathy and unwavering bravery carve your journey. Change does not frighten you, instead, it beckons you to learn and grow with it. You believe the future is worth protecting, even if it costs some sacrifices of your own. Carry your melody forward, child of the eternal moon.",
    bgColor: "#BDA073",
    strokeColor: "#8B7055",
    accentColor: "#FFB347",
    icon: ariaIcon
  },
  Sonnet: {
    title: "Iridescent Moonchild",
    description: "You now follow Sonnet, whose light flickers softly among the sisters. Your path is forged through preservation and passion in your adventures. Like a ripple across still water, let your journey impact the world and the people you encounter along the way. Go on, child of the iridescent moon, and do not let fear eclipse your light.",
    bgColor: "#BD738A",
    strokeColor: "#9B5A6D",
    accentColor: "#818CF8",
    icon: sonnetIcon
  },
  Canon: {
    title: "Frost Moonchild",
    description: "You now follow Canon, who shone the brightest among the sisters. In your pursuit for clarity, you tend to be inquisitive, and have a great desire to fathom the ways of the world. Consequently, you uncover hidden truths that others may overlook. Like moonlight upon frost, let your wisdom and resolve carry you through your path ahead. Walk forth, child of the frost moon.",
    bgColor: "#7397BD",
    strokeColor: "#5A7A9B",
    accentColor: "#34D399",
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
        
        <div className="mb-4 sm:mb-6  rounded-2xl p-4 sm:p-6 flex flex-row sm:flex-row e987654 items-start gap-4">
        <div className="text-center items-center justify-center ">
         <p 
            className="text-3xl sm:text-4xl text-white animate-floatUpDown"
            style={{ 
                fontFamily: "'Genshin Drip', Merriweather, serif",
                textShadow: '0 0 20px rgba(167, 139, 250, 0.8), 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(124, 58, 237, 0.4)',
                WebkitTextStroke: '2px #569eff',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em'
            }}
            >
            THE MOONLIGHT ANSWERS...
            </p>
        </div>
        </div>
        <div className="mb-4 shadow-[inset_0_0_50px_5px_rgba(255,255,255,0.5)] sm:mb-6 bg-white/10 backdrop-blur-lg border-2 border-purple-400/30 rounded-2xl p-4 sm:p-6 flex flex-row sm:flex-row e987654  items-start gap-4">
        

              <img 
                src={chudbinHappy} 
                alt="chudBinaHappy"
                className="animate-floatUpDown h-12 sm:h-24 w-auto object-contain opacity-95 flex-shrink-0"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))'
                }}
              />
              <div className="flex flex-col gap-3">

                <p className="animate-floatUpDown text-purple-50 leading-relaxed text-xs italic sm:text-sm" style={{ 
                  fontFamily: "'Genshin Impact', Merriweather, serif",
                  textShadow: '0 0 10px rgba(167, 139, 250, 0.5)',
                  WebkitTextStroke: `2px #5B21B6`,
                  paintOrder: 'stroke fill'
                }}>
                  {data.description}
                </p>
              </div>
            </div>


        <div className="bg-white/10 backdrop-blur-lg border-2 border-blue-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl mb-6">

          <div 
            className="p-6 mb-6 rounded-2xl sm:rounded-3xl shadow-[inset_0_0_50px_5px_rgba(255,255,255,0.5)]"
            style={{ backgroundColor: data.bgColor }}
          >
            <div className="flex items-center justify-between ">
              <div>
                <p className="text-xs font-bold mb-1 text-white opacity-80">
                  {data.title}
                </p>
                <h2 className="text-5xl sm:text-5xl text-white" style={{ 
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
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>
          </div>


          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="border-2 border-purple-400/30 p-3 bg-white rounded">
                <p className="text-xs font-bold uppercase tracking-wide mb-1 text-indigo-800/80">NAME</p>
                <p className="font-bold text-indigo-600/60 truncate">{name}</p>
              </div>
              <div className="border-2 border-purple-400/30 p-3 bg-white rounded">
                <p className="text-xs font-bold uppercase tracking-wide mb-1 text-indigo-800/80">DATE</p>
                <p className="font-bold text-indigo-600/60">{currentDate}</p>
              </div>
            </div>

            
          </div>
        </div>


        <div className="mb-6 bg-white/10 backdrop-blur-lg border-2 border-purple-400/30 rounded-2xl p-6 shadow-[inset_0_0_50px_5px_rgba(255,255,255,0.5)]">
          <MoonlightMeter scores={personalityScores} />
        </div>


        <div className="text-center space-y-4">
          <Button 
            onClick={onRestart}
            size="lg"
            className="w-full py-4 sm:py-6 text-base sm:text-lg border-2 border-white bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:from-blue-700 hover:to-indigo-700 font-bold uppercase"
          >
            ← RETURN TO MAIN PAGE
          </Button>
          {onAdminAccess && (
            <Button 
              onClick={onAdminAccess}
              size="lg"
              variant="outline"
              className="w-full px-12 py-6 text-lg border-2 border-indigo-700 text-indigo-700 bg-indigo-300/60 hover:bg-indigo-300 font-bold uppercase"
            >
              🔒 ADMIN ACCESS
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}