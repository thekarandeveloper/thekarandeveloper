"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoWithTranscript({
  videoSrc,
  transcript = [],
  className = "",
  lineHeight = 60, // px per line
  speed = 0.5,     // px per frame
}) {
  const videoRef = useRef(null);
  const transcriptRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Smooth vertical scroll with 2s delay
  useEffect(() => {
    let animationFrame;
    let startScroll = false;

    const timeout = setTimeout(() => {
      startScroll = true;
    }, 2000); // 2s delay before scrolling

    const step = () => {
      if (startScroll && isPlaying) {
        setOffset((prev) => {
          const maxOffset = transcript.length * lineHeight - lineHeight * 3;
          return prev < maxOffset ? prev + speed : 0;
        });
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [isPlaying, transcript.length, lineHeight, speed]);

  const activeIndex = Math.floor(offset / lineHeight);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className={`w-full flex flex-col md:flex-row bg-white text-black  overflow-hidden ${className}`}
      style={{ minHeight: "400px" }}
    >
      {/* Left: Video */}
      <div className="w-full md:w-1/2 relative flex justify-center rounded-3xl overflow-hidden items-center bg-black">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted={isMuted}
          loop
          className="w-full h-full object-cover"
        />

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-700/60 hover:bg-gray-600/70 transition cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Right: Transcript */}
      <div className="w-full md:w-1/2 p-6 relative overflow-hidden h-[400px]">
        {/* Fade effect top and bottom */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

        <div
          className="flex flex-col transition-transform duration-100 linear relative"
          style={{ transform: `translateY(-${offset}px)` }}
          ref={transcriptRef}
        >
          {transcript.map((line, index) => {
            let opacity = 0.2;
            if (index === activeIndex) opacity = 1;
            else if (index === activeIndex - 2 || index === activeIndex - 1 || index === activeIndex + 1) opacity = 0.5;

            return (
              <p
                key={index}
                className="text-xl md:text-2xl font-bold py-2"
                style={{ opacity }}
              >
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}