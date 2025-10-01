"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const mockups = [
  "/mockups/3.png",
  "/mockups/4.png",
  "/mockups/5.png",
  "/mockups/6.png",
];

export default function IphoneCarousel() {
  const containerRef = useRef(null);
  const offsetRef = useRef(0);
  const animationRef = useRef(null);

  // Triple images for seamless infinite scroll
  const displayImages = [...mockups, ...mockups, ...mockups];

  useEffect(() => {
    const speed = 2; // pixels per frame, increase for faster scroll
    const imageWidth = 408; // width + gap of each image
    const resetPoint = mockups.length * imageWidth;

    const animate = () => {
      offsetRef.current += speed;

      if (offsetRef.current >= resetPoint) {
        offsetRef.current = 0;
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-2"
        ref={containerRef}
        style={{ willChange: "transform" }}
      >
        {displayImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-40 md:w-80 lg:w-60 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`iPhone Mockup ${i + 1}`}
              className="rounded-xl"
              width={200}
              height={600}
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}