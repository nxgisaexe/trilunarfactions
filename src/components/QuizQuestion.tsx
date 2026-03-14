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
        {/* Progress Bar */}
        <div className="mb-6 border-2 border-indigo-400/30 bg-white/10 backdrop-blur-lg shadow-2xl rounded-lg p-4">
          <div className="flex flex-col sm:flex-row justify-between font-mono text-xs sm:text-sm font-bold mb-3 text-blue-50 gap-2"
          style={{ 
            fontFamily: "'Genshin Impact', Merriweather, serif",
            textShadow: '0 0 10px rgba(167, 139, 250, 0.5)',
            WebkitTextStroke:'2px #000f85',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
          }}>
            <span>Question {currentQuestion}/{totalQuestions}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Question Card */}
        <Card className="border-2 border-indigo-400/30 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl">
          <div className="p-8">
            <h2 className="text-2xl italic text-white mb-8"
                      style={{ 
            fontFamily: "'Genshin Impact', Merriweather, serif",
            textShadow: '0 0 10px rgba(167, 139, 250, 0.5)',
            WebkitTextStroke:'4px oklch(48.8% 0.243 264.376)',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
          }}>
              {question.question}
            </h2>

            <div className="mt-8 space-y-4">
              {question.options.map((option, index) => (
<Button
  key={index}
  onClick={() => onAnswer(option.personality)}
  variant="outline"
  className="flex items-center gap-4 w-full p-6 text-left text-base rounded-2xl shadow-[inset_0_0_10px_5px_rgba(255,255,255,0.3)] bg-white/20 border-indigo-400/30 text-cyan-100 hover:bg-indigo-500 transition-all min-h-[4rem]"
  style={{ 
    fontFamily: "'Genshin Impact', Merriweather, serif",
    textShadow: '0 0 10px rgba(167, 139, 250, 0.5)',
    WebkitTextStroke:'3px oklch(68.5% 0.169 237.323)',
    paintOrder: 'stroke fill',
    letterSpacing: '0.05em',
  }}
>
  <img 
    src={worldquest} 
    alt="worldquest"
    className="h-10 w-10 flex-none animate-floatUpDown"
    style={{
      filter: 'drop-shadow(0 0 10px oklch(74.6% 0.16 232.661))'
    }}
  />

  <span className="flex-1 min-w-0 break-words leading-snug">
    {option.text}
  </span>
</Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Level Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(totalQuestions)].map((_, i) => (
            <div 
              key={i} 
              className={`w-4 h-4 rounded-full border-2 border-white ${
                i < currentQuestion ? 'bg-yellow-400' : 'bg-transparent'
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}