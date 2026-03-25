import '../styles/animations.css';

interface WavyTextProps {
  text: string;
  className?: string;
  delay?: number; // initial delay in ms before animation starts
}

export function WavyText({ text, className = '' }: WavyTextProps) {
  // format so i dont forget: <wiggle>word</wiggle> or <wiggle>multiple words here</wiggle>
  const parts = text.split(/(<wiggle>.*?<\/wiggle>)/);
  
  let globalWordCount = 0;

  const renderParts = parts.map((part, partIndex) => {
    if (!part) return null;

    const isWigglePart = part.startsWith('<wiggle>');
    const contentText = isWigglePart 
      ? part.replace(/<\/?wiggle>/g, '') 
      : part;

    const words = contentText.split(/(\s+)/);
    
    return words.map((word, wordIndex) => {
      if (/^\s+$/.test(word)) {
        return (
          <span key={`${partIndex}-space-${wordIndex}`} className="wavy-space">
            {word}
          </span>
        );
      }

      const chars = word.split('');
      const currentWordIndex = globalWordCount;
      globalWordCount++;
      const shouldWiggle = isWigglePart;

      return (
        <span
          key={`${partIndex}-word-${wordIndex}`}
          className={`wavy-word ${shouldWiggle ? 'wavy-word--wiggle' : ''}`}
          data-word-index={currentWordIndex}
          style={{
            '--word-index': currentWordIndex,
          } as React.CSSProperties & { '--word-index': number }}
        >
          {chars.map((char, charIndex) => (
            <span
              key={charIndex}
              className="wavy-char"
              style={{
                '--char-index': charIndex,
              } as React.CSSProperties & { '--char-index': number }}
            >
              {char}
            </span>
          ))}
        </span>
      );
    });
  });

  const nonSpaceWords = text
    .replace(/<\/?wiggle>/g, '')
    .split(/(\s+)/)
    .filter(w => !/^\s+$/.test(w)).length;

  return (
    <span 
      className={`wavy-text-container ${className}`}
      style={{
        '--total-words': nonSpaceWords,
      } as React.CSSProperties & { '--total-words': number }}
    >
      {renderParts}
    </span>
  );
}
