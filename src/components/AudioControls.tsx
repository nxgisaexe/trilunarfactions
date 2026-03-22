import { useAudio } from '../hooks/useAudio';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioControlsProps {
  audioSource: string;
}

export const AudioControls: React.FC<AudioControlsProps> = ({ audioSource }) => {
  const { isMuted, toggleMute } = useAudio(audioSource);

  return (
    <button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-[10001] w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center text-white hover:bg-black/60 shadow-lg group"
      title={isMuted ? 'Unmute' : 'Mute'}
      aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 transition-transform group-hover:scale-110" />
      ) : (
        <Volume2 className="w-5 h-5 transition-transform group-hover:scale-110" />
      )}
    </button>
  );
};
// fahhhhhhhhhhhhhhhhhhhhh