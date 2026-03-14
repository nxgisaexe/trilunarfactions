import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import type { Question } from './questions';
import frostmoonreborn from '../assets/images/frostmoonreborn.png';
import worldquest from '../assets/images/icon_wq.png';

interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (personality: 'Aria' | 'Sonnet' | 'Canon') => void;
}

export function QuizQuestion({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer 
}: QuizQuestionProps) {
  const progress = ((currentQuestion / totalQuestions) * 100)-10;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900"
      style={{
        backgroundImage: `url(${frostmoonreborn})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

      <div className="w-full max-w-2xl">

        <div className="mb-6 border-2 border-indigo-400/30 bg-white/10 backdrop-blur-lg shadow-2xl rounded-lg p-4">
          <div className="flex flex-col sm:flex-row justify-between font-mono text-xs sm:text-sm font-bold mb-3 text-blue-50 gap-2"
          style={{ 
            fontFamily: "'Genshin Impact', Merriweather, serif",
            WebkitTextStroke:'2px #000f85',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
          }}>
            <span>Question {currentQuestion}/{totalQuestions}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <Card className="border-2 border-indigo-400/30 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl">
          <div className="p-4 sm:p-8">
            <h2 className="text-lg sm:text-2xl italic text-white mb-6 sm:mb-8"
                      style={{ 
            fontFamily: "'Genshin Impact', Merriweather, serif",
            WebkitTextStroke:'2px oklch(48.8% 0.243 264.376)',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
          }}>
              {question.question}
            </h2>

      <div className="mt-8 space-y-3 sm:space-y-4">
        {question.options.map((option, index) => (
        <Button
          key={index}
          onClick={() => onAnswer(option.personality)}
          variant="outline"
          className="flex items-center gap-2 sm:gap-4 w-full p-3 sm:p-6 text-left text-xs sm:text-base rounded-lg sm:rounded-2xl shadow-[inset_0_0_10px_5px_rgba(255,255,255,0.3)] bg-white/20 border-indigo-400/30 text-cyan-100 hover:bg-indigo-500 transition-all min-h-[3rem] sm:min-h-[4rem]"
          style={{ 
            fontFamily: "'Genshin Impact', Merriweather, serif",
            WebkitTextStroke:'2px oklch(68.5% 0.169 237.323)',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
          }}
        >
          <img 
            src={worldquest} 
            alt="worldquest"
            className="h-6 sm:h-10 w-6 sm:w-10 flex-none animate-floatUpDown"
            style={{
              filter: 'drop-shadow(0 0 10px oklch(74.6% 0.16 232.661))'
            }}
          />
        <span className="flex-1 min-w-0 break-words leading-snug text-xs sm:text-base">
        {option.text}
         </span>
        </Button>
              ))}
            </div>
            </div>
        </Card>

        
      </div>
    </div>
  );
}