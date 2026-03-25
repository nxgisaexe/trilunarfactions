import '../styles/animations.css';

interface WavyTextProps {
  text: string;
  className?: string;
  delay?: number; // initial delay in ms before animation starts
}

export function WavyText({ text, className = '', delay = 0 }: WavyTextProps) {
  const chars = text.split('');

  return (
    <span className={`wavy-text-container ${className}`}>
      {chars.map((char, index) => (
        <span
          key={index}
          className="wavy-char"
          style={{
            animationDelay: `${index * 60 + delay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
