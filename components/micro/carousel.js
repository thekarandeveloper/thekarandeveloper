"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const video = [
  "/appDemo/1.mp4",
  "/appDemo/2.mp4",
  "/appDemo/3.mp4",
];
const mockups = [
  "/mockups/1.png",
  "/mockups/2.png",
  "/mockups/3.png",
];

export default function IphoneCarousel() {
  const containerRef = useRef(null);
  const offsetRef = useRef(0);
  const animationRef = useRef(null);

  // Triple images for seamless infinite scroll
  const displayVideos = [...video, ...video, ...video];

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
        {displayVideos.map((src, i) => {
 const mockupSrc = mockups[i % mockups.length]; // ensure proper mapping

        return (
          
         <div
  key={i}
  className="flex-shrink-0 w-40 md:w-80 lg:w-60 rounded-xl overflow-hidden shadow-lg"
>
<div className="relative w-full max-w-[400px] md:max-w-[600px] mx-auto" style={{ aspectRatio: '9/19' }}>
  {/* Placeholder Background behind mockup */}

<div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
    <Image
      src={mockupSrc}
      alt="iPhone Mockup"
      width={500}
      height={500}
      className="w-[90%] h-[92%] object-cover rounded-[10px] md:rounded-[30px] "
      loading="eager"
    />
  </div>
  {/* Centered video behind mockup */}
 <div className="absolute inset-0 flex items-start justify-center z-4 rounded-3xl overflow-hidden">
  <video
    src={src}
    muted
    autoPlay
    loop
    playsInline
    className="w-[90%] h-[92%] object-cover rounded-[20px] md:rounded-[30px] translate-y-3 md:translate-y-6"
  />
</div>

  {/* Mockup overlay */}
  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
    <Image
      src="/mockup.png"
      alt="iPhone Mockup"
      fill
      className="w-full h-full object-cover rounded-xl"
      loading="eager"
    />
  </div>
</div>
</div>
        )
        }
        )}
      </div>
    </div>
  );
}