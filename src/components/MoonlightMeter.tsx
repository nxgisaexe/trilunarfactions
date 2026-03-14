import { cn } from './ui/utils';

interface MoonlightMeterProps {
  scores: {
    Aria: number;
    Sonnet: number;
    Canon: number;
  };
  className?: string;
}

export function MoonlightMeter({ scores, className }: MoonlightMeterProps) {
  const personalities = [
    { name: 'Aria', color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-100', textColor: 'text-yellow-900' },
    { name: 'Sonnet', color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-100', textColor: 'text-pink-900' },
    { name: 'Canon', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-100', textColor: 'text-blue-900' },
  ];

  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-lg sm:text-xl text-white uppercase tracking-wider mb-6"
      style={{ 
                fontFamily: "'Genshin Drip', Merriweather, serif",
                textShadow: '0 0 20px rgba(167, 139, 250, 0.8), 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(124, 58, 237, 0.4)',
                WebkitTextStroke: '2px #5B21B6',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em'
            }}>
        🌙 Moonlight Meter
      </h3>
      
      {personalities.map(({ name, color, bgColor, textColor }) => (
        <div key={name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-white uppercase text-sm sm:text-base">
              {name}
            </span>
            <span className={cn('font-bold text-sm sm:text-base', textColor, bgColor, 'px-3 py-1 rounded-full')}>
              {scores[name as keyof typeof scores]}%
            </span>
          </div>
          
          <div className="h-3 sm:h-4 bg-gray-800 border-2 border-gray-600 rounded-full overflow-hidden shadow-inner">
            <div
              className={cn(`h-full bg-gradient-to-r ${color} transition-all duration-700 ease-out shadow-lg`)}
              style={{ width: `${scores[name as keyof typeof scores]}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}