import { useState, useEffect, useRef } from 'react';

export const useAudio = (audioSource: string) => {
  const [isMuted, setIsMuted] = useState(() => {
    const savedMuteState = localStorage.getItem('audioMuted');
    return savedMuteState ? JSON.parse(savedMuteState) : false;
  });
  const [isAudioReady, setIsAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isInitializedRef = useRef(false);

  // lazy load audio after initial page load already bc this stupid loading issue pmo
  useEffect(() => {

    const timer = setTimeout(() => {
      if (!isInitializedRef.current) {
        const audio = new Audio(audioSource);
        audio.preload = 'auto';
        audio.loop = true;
        audio.volume = 0.5;
        audioRef.current = audio;
        isInitializedRef.current = true;
        setIsAudioReady(true);

        if (!isMuted) {
          audio.play().catch(() => {
            console.log('autoplay is blocked (user interaction required)');
          });
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAudioReady || !audioRef.current) return;

    const audio = audioRef.current;
    if (isMuted) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        console.log('autoplay is blocked (user interaction required)');
      });
    }
    localStorage.setItem('audioMuted', JSON.stringify(isMuted));
  }, [isMuted, isAudioReady]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return { isMuted, toggleMute, audioRef };
};
// am i even doing ts right i have no clue lol im CRINE 
