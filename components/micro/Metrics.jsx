"use client"

import { useEffect, useState, useRef } from "react"

export default function MetricCard({ number, desc, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const start = useRef(null)

  useEffect(() => {
    let animationFrame

    const animate = (timestamp) => {
      if (!start.current) start.current = timestamp
      const progress = timestamp - start.current
      const progressRatio = Math.min(progress / duration, 1)
      setCount(Math.floor(progressRatio * number))

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(number)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrame = requestAnimationFrame(animate)
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [number, duration])

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 md:gap-4 text-center py-6 md:py-10 px-4 sm:px-10 md:px-20"
    >
      <div className="text-[30px] sm:text-[50px] md:text-[55px] font-bold">
        +{count}
      </div>
      <div className="text-xs sm:text-base md:text-lg font-light max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
        {desc}
      </div>
    </div>
  )
}