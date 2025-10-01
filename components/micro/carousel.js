"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Ensure these images exist in public/mockups folder
const mockups = [
  "/mockups/3.png",
  "/mockups/4.png",
  "/mockups/5.png",
  "/mockups/6.png",
];
export default function IphoneCarousel() {
  const [offset, setOffset] = useState(0);
  const animationRef = useRef(null);

  // Triple the images for seamless infinite scroll
  const displayImages = [...mockups, ...mockups, ...mockups];

  useEffect(() => {
    const speed = 0.3; // pixels per frame
    
    const animate = () => {
      setOffset((prev) => {
        // Each image is approximately 384px + 24px gap = 408px
        const imageWidth = 408;
        const resetPoint = mockups.length * imageWidth;
        
        // Reset to start when we've scrolled past the first set
        if (prev >= resetPoint) {
          return 0;
        }
        
        return prev + speed;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(-${offset}px)`,
            willChange: 'transform',
          }}
        >
          {displayImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 md:w-80 lg:w-96 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`iPhone Mockup ${i + 1}`}
                className="w-full h-auto rounded-xl"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}