import React from "react";
import { motion } from "motion/react";

interface GreenAbstractPatternProps {
  className?: string;
  intensity?: "normal" | "subtle";
  animated?: boolean;
}

export default function GreenAbstractPattern({ 
  className = "", 
  intensity = "normal",
  animated = true 
}: GreenAbstractPatternProps) {
  const opacityMultiplier = intensity === "subtle" ? 0.15 : 0.6;

  return (
    <div className={`relative overflow-hidden w-full h-full select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMidSlice"
      >
        <defs>
          {/* Main Wavy Gradients matching the new editorial colors (#2F5D50 & #B7C8C1) */}
          <linearGradient id="waveGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B7C8C1" stopOpacity={0.5 * opacityMultiplier} />
            <stop offset="50%" stopColor="#2F5D50" stopOpacity={0.3 * opacityMultiplier} />
            <stop offset="100%" stopColor="#EFECE5" stopOpacity={0.2 * opacityMultiplier} />
          </linearGradient>

          <linearGradient id="waveGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B7C8C1" stopOpacity={0.6 * opacityMultiplier} />
            <stop offset="40%" stopColor="#2F5D50" stopOpacity={0.4 * opacityMultiplier} />
            <stop offset="80%" stopColor="#EFECE5" stopOpacity={0.3 * opacityMultiplier} />
            <stop offset="100%" stopColor="#F7F5F0" stopOpacity={0.1 * opacityMultiplier} />
          </linearGradient>

          <linearGradient id="waveGradThin" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#B7C8C1" stopOpacity={0.3 * opacityMultiplier} />
            <stop offset="50%" stopColor="#2F5D50" stopOpacity={0.4 * opacityMultiplier} />
            <stop offset="100%" stopColor="#B7C8C1" stopOpacity={0.2 * opacityMultiplier} />
          </linearGradient>

          <linearGradient id="softAccent" x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#EFECE5" stopOpacity={0.4 * opacityMultiplier} />
            <stop offset="60%" stopColor="#B7C8C1" stopOpacity={0.5 * opacityMultiplier} />
            <stop offset="100%" stopColor="#2F5D50" stopOpacity={0.2 * opacityMultiplier} />
          </linearGradient>

          {/* Glow filter */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient background glows */}
        <circle cx="200" cy="150" r="180" fill="url(#softAccent)" opacity={0.2 * opacityMultiplier} filter="url(#softGlow)" />
        <circle cx="650" cy="350" r="220" fill="url(#waveGradLeft)" opacity={0.15 * opacityMultiplier} filter="url(#softGlow)" />

        {/* Layer 1 */}
        <motion.path
          d="M -100 280 C 150 120, 320 400, 500 240 C 650 110, 750 300, 950 180 L 1000 600 L -100 600 Z"
          fill="url(#waveGradLeft)"
          opacity={0.3 * opacityMultiplier}
          animate={animated ? {
            d: [
              "M -100 280 C 150 120, 320 400, 500 240 C 650 110, 750 300, 950 180 L 1000 600 L -100 600 Z",
              "M -100 295 C 130 140, 350 370, 480 260 C 630 130, 770 280, 950 195 L 1000 600 L -100 600 Z",
              "M -100 280 C 150 120, 320 400, 500 240 C 650 110, 750 300, 950 180 L 1000 600 L -100 600 Z"
            ]
          } : {}}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Layer 2 */}
        <motion.path
          d="M -50 200 C 180 320, 300 120, 520 280 C 700 410, 800 210, 900 320 L 1000 600 L -50 600 Z"
          fill="url(#waveGradRight)"
          opacity={0.2 * opacityMultiplier}
          animate={animated ? {
            d: [
              "M -50 200 C 180 320, 300 120, 520 280 C 700 410, 800 210, 900 320 L 1000 600 L -50 600 Z",
              "M -50 190 C 200 300, 280 140, 540 260 C 680 430, 820 190, 900 300 L 1000 600 L -50 600 Z",
              "M -50 200 C 180 320, 300 120, 520 280 C 700 410, 800 210, 900 320 L 1000 600 L -50 600 Z"
            ]
          } : {}}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Contour lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M -100 ${150 + i * 22} C ${100 + i * 15} ${100 + i * 8}, ${300 + i * 20} ${320 - i * 10}, ${500} ${230 + i * 5} C ${650 - i * 10} ${110 + i * 5}, ${760 + i * 5} ${270 - i * 8}, 1000 ${170 + i * 15}`}
            stroke={`url(#waveGradThin)`}
            strokeWidth={1.0 + i * 0.15}
            fill="none"
            opacity={(0.25 - i * 0.03) * opacityMultiplier}
            animate={animated ? {
              d: [
                `M -100 ${150 + i * 22} C ${100 + i * 15} ${100 + i * 8}, ${300 + i * 20} ${320 - i * 10}, ${500} ${230 + i * 5} C ${650 - i * 10} ${110 + i * 5}, ${760 + i * 5} ${270 - i * 8}, 1000 ${170 + i * 15}`,
                `M -100 ${160 + i * 18} C ${80 + i * 20} ${120 + i * 5}, ${320 + i * 15} ${300 - i * 8}, ${500} ${245 + i * 2} C ${630 - i * 12} ${130 + i * 3}, ${780 + i * 8} ${250 - i * 10}, 1000 ${150 + i * 20}`,
                `M -100 ${150 + i * 22} C ${100 + i * 15} ${100 + i * 8}, ${300 + i * 20} ${320 - i * 10}, ${500} ${230 + i * 5} C ${650 - i * 10} ${110 + i * 5}, ${760 + i * 5} ${270 - i * 8}, 1000 ${170 + i * 15}`
              ]
            } : {}}
            transition={{
              duration: i + 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Sharp fine precision accent lines */}
        <motion.path
          d="M -120 220 C 180 370, 260 200, 540 310 C 720 400, 830 180, 1020 250"
          stroke="#2F5D50"
          strokeWidth="1.2"
          fill="none"
          opacity={0.4 * opacityMultiplier}
          animate={animated ? {
            d: [
              "M -120 220 C 180 370, 260 200, 540 310 C 720 400, 830 180, 1020 250",
              "M -120 200 C 195 385, 240 215, 560 290 C 700 415, 850 170, 1020 230",
              "M -120 220 C 180 370, 260 200, 540 310 C 720 400, 830 180, 1020 250"
            ]
          } : {}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
