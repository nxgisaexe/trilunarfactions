import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import moonsBackground from '../assets/images/moons-background.webp';
import spriteCharacter from '../assets/images/ChudBinaDefault.webp';

interface NameInputProps {
  onSubmit: (name: string) => void;
}

export function NameInput({ onSubmit }: NameInputProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${moonsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      
         <div className="w-full max-w-md relative z-10 ">
        <div 
          className="bg-white/10 backdrop-blur-lg border-2 border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="text-center mb-6 sm:mb-8">

            <h1 
            className="text-3xl sm:text-4xl text-white mb-2 sm:mb-3 animate-floatUpDown"
            style={{ 
                fontFamily: "'Genshin Drip', Merriweather, serif",
                textShadow: '0 0 20px rgba(167, 139, 250, 0.3), 0 0 40px rgba(139, 92, 246, 0.2), 0 0 60px rgba(124, 58, 237, 0.1)',
                WebkitTextStroke: '2px #569eff',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em'
            }}
            >
            TRILUNAR FACTIONS
            </h1>
            

            <p className="text-white text-xs sm:text-sm tracking-wide"
            style={{ 
                fontFamily: "'Genshin Impact', Merriweather, serif",
                textShadow: '0 0 20px rgba(167, 139, 250, 0.3), 0 0 40px rgba(139, 92, 246, 0.2), 0 0 60px rgba(124, 58, 237, 0.1)',
                WebkitTextStroke: '2px #5B21B6',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em',
            }}>
            ⟢ Which lunar faction do you belong in?
            
            </p>
            <p className="text-purple-300 italic text-xs mt-2"
            style={{ 
                fontFamily: "'Genshin Impact', Merriweather, serif",
                WebkitTextStroke: '2px #5B21B6',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em',
            }}>
              A personality quiz by the Silvermoon Cafe Discord Server. Join us at <a href="https://discord.gg/columbina" target="_blank" rel="noopener noreferrer" className="text-blue-100 font-bold animate-pulse hover:underline">discord.gg/columbina</a> for more fun events!
            </p>
          </div>
          

      <div className="w-full max-w-md relative z-10">

        <div className="mb-6 bg-white/5 backdrop-blur-lg border-2 border-purple-400/20 rounded-2xl p-4 sm:p-6 shadow-[inset_0_0_50px_5px_rgba(104,164,255,0.3)] flex items-center gap-4">
          <img 
            src={spriteCharacter} 
            alt="ChudBinaDefault"
            className="h-32 w-auto object-contain opacity-95 flex-shrink-0 animate-floatUpDown"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.4))'
            }}
          />
          
          <p className="text-blue-200 text-xs sm:text-sm leading-relaxed italic flex-1 animate-floatUpDown " style={{ 
            fontFamily: "'Genshin Impact', Merriweather, serif",
            textShadow: '0 0 10px rgba(167, 139, 250, 0.5)',
            WebkitTextStroke:'2px #569eff',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
          }}>
            <span className="font-italic text-white">Speak your name,</span> and the night will decide which sister watches over you...
          </p>
          
       </div> </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="name" className="text-white uppercase tracking-wider text-xs sm:text-sm" style={{ 
                fontFamily: "'Genshin Impact', Merriweather, serif",
                WebkitTextStroke: '2px #5B21B6',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em',
            }}>
                YOUR USERNAME:
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="TYPE HERE..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-indigo-400 placeholder:text-indigo-200 text-xs sm:text-sm leading-relaxed flex-1 " 
                
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-4 sm:py-6 text-base sm:text-lg border-2 border-white bg-gradient-to-r from-blue-400 to-indigo-400 text-white hover:from-blue-700 hover:to-indigo-700 font-bold uppercase"
              disabled={!name.trim()}
            >
              ⟣ START QUEST
            </Button>
            
          </form>
          

          <div className="text-center mt-4 sm:mt-6">
            <p className="text-gray-300 text-tiny px-2 italic" style={{ 
                fontFamily: "'Genshin Impact', Merriweather, serif",                
                WebkitTextStroke: '2px #5B21B6',
                paintOrder: 'stroke fill',
                letterSpacing: '0.05em',
            }} >
              To report any issues with this website and quiz, please message <span className="font-italic text-white">@nxgisa.exe</span> on Discord.
              Please note that this website is not affiliated with HoYoverse in any way, and this is a fan-made project created for entertainment purposes only. ChudBina Sprites and the icons of the 3 moons in the end result card screen are illustrated by <span className="font-italic text-white">@nxgisa.exe</span>, and website cursors were made by <span className="font-italic text-white">fegrifo</span> and published on 23/12/2025 under the 'Release to Public Domain' license, but any other assets are sourced directly from HoYoverse's official media. All rights reserved to their respective owners.
            </p>
          </div>
        </div>
      </div>
      </div>
      );} 

