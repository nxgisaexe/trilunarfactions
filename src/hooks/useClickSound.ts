import { useEffect } from 'react';
import dropletSound from '../assets/water-droplet-drip.mp3';

export function useClickSound() {
  useEffect(() => {
    const audio = new Audio(dropletSound);
    audio.volume = 0.3;

    const handleClick = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}
