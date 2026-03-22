import { useState } from 'react';
import { IntroScreen } from './components/IntroScreen';

import { NameInput } from './components/NameInput';
import { QuizQuestion } from './components/QuizQuestion';
import { ResultCard } from './components/ResultCard';
import { AdminPanel } from './components/AdminPanel';
import { RippleEffect } from './components/RippleEffect';
import { AudioControls } from './components/AudioControls';
import { questions } from './components/questions';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPgWVqre7Bie_m0OAsSX7yst9AVyRsWvbLOVY-JrDAIx1B-097IJ3kgdQwxq8L6Pbd/exec';

type Personality = 'Aria' | 'Sonnet' | 'Canon';
type Stage = 'intro' | 'name' | 'quiz' | 'result' | 'admin';

export default function App() {
  const [stage, setStage] = useState<Stage>('intro');
  const [userName, setUserName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Personality[]>([]);
  const [personality, setPersonality] = useState<Personality>('Aria');

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setStage('name');
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setStage('quiz');
  };

  const calculateResult = (finalAnswers: Personality[]): Personality => {
    const counts: Record<Personality, number> = {
      Aria: 0,
      Sonnet: 0,
      Canon: 0
    };

    finalAnswers.forEach(answer => {
      counts[answer]++;
    });

    const maxCount = Math.max(...Object.values(counts));
    const tied = (Object.keys(counts) as Personality[]).filter(
      key => counts[key] === maxCount
    );
    return tied[Math.floor(Math.random() * tied.length)];
  };

  const storeQuizResult = async (finalAnswers: Personality[], result: Personality) => {
    try {
      const timestamp = new Date().toISOString();

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userName,
          personality: result,
          answers: finalAnswers.join(', '),
          timestamp,
        }),
      });

      console.log('Quiz result sent to Google Sheets');
    } catch (error) {
      console.error('Error storing quiz result:', error);
    }
  };

  const handleAnswer = (personality: Personality) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {

      const result = calculateResult(newAnswers);
      setPersonality(result);
      storeQuizResult(newAnswers, result);
      setStage('result');
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setUserName('');
    setPersonality('Aria');
    setStage('name');
  };

  const handleAdminAccess = () => {
    setStage('admin');
  };

  const handleBackFromAdmin = () => {
    setStage('name');
  };

  if (stage === 'admin') {
    return <AdminPanel onBack={handleBackFromAdmin} />;
  }

  if (stage === 'intro') {
    return (
      <RippleEffect>
        <AudioControls audioSource="/trilunarfactions/audio/background-music.mp3" />
        <IntroScreen onContinue={handleStartQuiz} />
      </RippleEffect>
    );
  }

  if (stage === 'name') {
    return (
      <RippleEffect>
        <AudioControls audioSource="/trilunarfactions/audio/background-music.mp3" />
        <div className="relative">
          <NameInput onSubmit={handleNameSubmit} />
          <button
            onClick={handleAdminAccess}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/50 backdrop-blur rounded-full opacity-20 hover:opacity-100 transition-opacity shadow-lg z-[10000] flex items-center justify-center text-lg sm:text-xl"
            title="Admin Panel"
          >
            <span className="text-white">🔒</span>
          </button>
        </div>
      </RippleEffect>
    );
  }

  if (stage === 'quiz') {
    return (
      <RippleEffect>
        <AudioControls audioSource="/trilunarfactions/audio/background-music.mp3" />
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      </RippleEffect>
    );
  }

  return (
    <RippleEffect>
      <AudioControls audioSource="/trilunarfactions/audio/background-music.mp3" />
      <ResultCard
        name={userName}
        personality={personality}
        answers={answers}
        onRestart={handleRestart}
        onAdminAccess={handleAdminAccess}
      />
    </RippleEffect>
  );
}