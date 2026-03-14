import React from 'react';

export interface Answer {
  questionIndex: number;
  selectedPersonality: 'Aria' | 'Sonnet' | 'Canon';
}

export function useAnswerHistory() {
  const [answers, setAnswers] = React.useState<Answer[]>([]);

  const addAnswer = (questionIndex: number, personality: 'Aria' | 'Sonnet' | 'Canon') => {
    setAnswers(prev => {
      const updated = [...prev];
      updated[questionIndex] = { questionIndex, selectedPersonality: personality };
      return updated;
    });
  };

  const getAnswers = () => answers;

  const calculatePersonalityScores = () => {
    const scores = { Aria: 0, Sonnet: 0, Canon: 0 };
    answers.forEach(answer => {
      scores[answer.selectedPersonality]++;
    });
    
    const total = answers.length || 1;
    return {
      Aria: Math.round((scores.Aria / total) * 100),
      Sonnet: Math.round((scores.Sonnet / total) * 100),
      Canon: Math.round((scores.Canon / total) * 100),
    };
  };

  const clearAnswers = () => setAnswers([]);

  return {
    answers,
    addAnswer,
    getAnswers,
    calculatePersonalityScores,
    clearAnswers,
  };
}