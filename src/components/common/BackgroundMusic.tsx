"use client";

import { is } from "immutable";
import React, { useRef, useEffect, useState } from "react";

interface BackgroundMusicProps {
  audioSrc?: string;
  volume?: number;
}

// Custom SVG Icons
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="currentColor"/>
  </svg>
);

const VolumeOnIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="#4B5563"/>
  </svg>
);

const VolumeOffIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.62 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.46 14 18.7V20.76C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="#4B5563"/>
  </svg>
);

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  audioSrc = "/assets/audio/HNY_Audio.aac",
  volume = 0.3
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Changed to true for auto-play
  const [userInteracted, setUserInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      // Try to play audio after first user interaction (auto-start enabled)
      if (audioRef.current && !isMuted) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log('Audio autoplay prevented:', error);
            setIsPlaying(false); // Set to false if autoplay fails
          });
      }
    };

    // Listen for any user interaction
    const events = ['click', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [isMuted]);

  // Set initial volume and attempt auto-play
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      // Attempt to auto-play on component mount
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Auto-play failed, will wait for user interaction
          setIsPlaying(false);
        });
    }
  }, [volume]);

  console.log(isPlaying, isMuted); 

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Unmute and play
        audioRef.current.muted = false;
        setIsMuted(false);
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error('Audio play failed:', error));
      } else {
        // Mute and pause
        audioRef.current.muted = true;
        audioRef.current.pause();
        setIsMuted(true);
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.error('Audio error:', e)}
      >
        <source src={audioSrc} type="audio/mp4" />
        <source src="/assets/audio/HNY_Audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Audio Control Buttons */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          [isMobile ? 'left' : 'right']: '20px',
          zIndex: 1000,
          display: 'flex',
          gap: '8px'
        }}
      >
        <button
          onClick={toggleMute}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            cursor: 'pointer',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
          aria-label={isMuted ? 'Unmute and play background music' : 'Mute and pause background music'}
          title={isMuted ? 'Unmute & Play' : 'Mute & Pause'}
        >
          {isMuted ? <VolumeOffIcon  /> : <VolumeOnIcon />}
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
