import React, { useState } from "react";
import { motion } from "motion/react";

interface GazeVisualizerProps {
  interactive?: boolean;
}

export default function GazeVisualizer({ interactive = true }: GazeVisualizerProps) {
  const [activeSignal, setActiveSignal] = useState<number | null>(null);

  // Simulated B2B signals flowing from a company (internal) to the market (external lens)
  const signals = [
    { id: 1, label: "Værdibudskab (Tekst & Copy)", x: 15, y: 30, color: "var(--color-signal-green)" },
    { id: 2, label: "Social Proof & Kundeliste", x: 15, y: 50, color: "var(--color-soft-aqua)" },
    { id: 3, label: "Digital Relevans & Synlighed", x: 15, y: 70, color: "var(--color-warm-yellow)" },
    { id: 4, label: "Navigation & Kontaktflow", x: 25, y: 40, color: "var(--color-signal-green)" },
    { id: 5, label: "Faglige Beviser & Cases", x: 25, y: 60, color: "var(--color-soft-aqua)" },
  ];

  return (
    <div id="gaze-visualizer-container" className="relative w-full h-[320px] md:h-[450px] bg-deep-dark rounded-xl overflow-hidden shadow-2xl border border-graphite p-6 flex flex-col justify-between">
      {/* Abstract Grid Map Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0F5C43_1px,transparent_1px),linear-gradient(to_bottom,#0F5C43_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Top badge */}
      <div className="relative z-10 flex justify-between items-center">
        <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-soft-aqua flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
          Live Observation Core
        </span>
        <span className="text-[10px] font-mono text-warm-white/50">
          Udefra-og-ind Model
        </span>
      </div>

      {/* Main Interactive Diagram */}
      <div className="relative flex-1 flex items-center justify-between my-4">
        
        {/* Left Column: The Internal Signals (What company sends) */}
        <div className="flex flex-col gap-3 z-10 w-1/3">
          <div className="text-[11px] font-mono uppercase text-warm-white/60 mb-1">
            Mødte signaler
          </div>
          {signals.map((sig) => (
            <button
              id={`signal-btn-${sig.id}`}
              key={sig.id}
              onClick={() => interactive && setActiveSignal(sig.id)}
              className={`p-2.5 rounded text-left text-[11px] font-sans transition-all duration-200 border ${
                activeSignal === sig.id
                  ? "bg-deep-green border-signal-green text-white font-semibold"
                  : "bg-graphite/40 border-warm-white/10 text-warm-white/75 hover:bg-graphite/80"
              }`}
            >
              • {sig.label}
            </button>
          ))}
        </div>

        {/* Center: The Gaze Lens (PeopleLab X analytical translation) */}
        <div className="relative flex-1 h-full flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Draw active signal rays to the lens */}
            {signals.map((sig) => {
              const isActive = activeSignal === sig.id;
              return (
                <g key={sig.id}>
                  {/* Base path */}
                  <line
                    x1="15%"
                    y1={`${sig.y}%`}
                    x2="50%"
                    y2="50%"
                    stroke={isActive ? sig.color : "rgba(245, 242, 230, 0.08)"}
                    strokeWidth={isActive ? 2 : 1}
                    className="transition-all duration-500"
                  />
                  {/* Flow dot animation */}
                  {isActive && (
                    <circle r="4" fill={sig.color}>
                      <animateMotion
                        dur="1.5s"
                        repeatCount="indefinite"
                        path={`M ${window.innerWidth * 0.05} ${sig.y * 3} Q 150 150 250 150`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Glowing refraction rings in center */}
            <circle
              cx="50%"
              cy="50%"
              r="40"
              fill="none"
              stroke="var(--color-deep-green)"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-spin"
              style={{ animationDuration: "12s" }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="60"
              fill="none"
              stroke="var(--color-soft-aqua)"
              strokeWidth="0.8"
              opacity="0.3"
            />
          </svg>

          {/* Central Lens Node */}
          <div className="relative group w-24 h-24 rounded-full bg-deep-green/30 border border-soft-aqua/50 flex flex-col justify-center items-center backdrop-blur text-center p-2">
            <div className="absolute inset-0 w-full h-full rounded-full bg-soft-aqua/5 animate-ping" />
            <span className="text-[9px] font-mono uppercase text-soft-aqua tracking-widest">
              PeopleLab X
            </span>
            <span className="text-[12px] font-sans font-bold text-warm-white">
              Analyse
            </span>
            <span className="text-[8px] font-mono text-signal-green mt-1">
              {activeSignal !== null ? "Reflekterer..." : "Klar"}
            </span>
          </div>
        </div>

        {/* Right Column: The External Interpretation (What market perceives) */}
        <div className="w-1/3 flex flex-col items-end gap-3 z-10 text-right">
          <div className="text-[11px] font-mono uppercase text-warm-white/60 mb-1">
            Markedets opfattelse
          </div>
          
          <div className="min-h-[140px] flex flex-col justify-center items-end">
            {activeSignal === null ? (
              <div className="text-right text-warm-white/40 text-[12px] font-sans italic max-w-[180px]">
                Vælg et signal for at se, hvordan markedet dechifrerer det udefra og ind.
              </div>
            ) : (
              <div className="transition-all duration-300">
                {activeSignal === 1 && (
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20 uppercase">
                      Tvivlspotentiale
                    </span>
                    <p className="text-[12px] text-warm-white leading-relaxed font-sans mt-1">
                      Generiske udtryk som "totalleverandør" nedsætter troværdigheden og slører jeres specialiserede fordele.
                    </p>
                  </div>
                )}
                {activeSignal === 2 && (
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-signal-green/10 text-signal-green border border-signal-green/20 uppercase">
                      Social Validation
                    </span>
                    <p className="text-[12px] text-warm-white leading-relaxed font-sans mt-1">
                      Hvis jeres stærkeste kunderelationer er gemt væk, antager markedet automatisk, at jeres erfaring er begrænset.
                    </p>
                  </div>
                )}
                {activeSignal === 3 && (
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-soft-aqua/10 text-soft-aqua border border-soft-aqua/20 uppercase">
                      Udefrakommende Dom
                    </span>
                    <p className="text-[12px] text-warm-white leading-relaxed font-sans mt-1">
                      Svag digital tilstedeværelse tolkes som manglende kommerciel vitalitet eller forældet struktur.
                    </p>
                  </div>
                )}
                {activeSignal === 4 && (
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20 uppercase">
                      Konverteringsfriktion
                    </span>
                    <p className="text-[12px] text-warm-white leading-relaxed font-sans mt-1">
                      En uklar kontaktvej kræver mental energi. Kunden vælger i stedet konkurrenten med den ukomplicerede vej.
                    </p>
                  </div>
                )}
                {activeSignal === 5 && (
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-soft-aqua/10 text-soft-aqua border border-soft-aqua/20 uppercase">
                      Evidens-mangel
                    </span>
                    <p className="text-[12px] text-warm-white leading-relaxed font-sans mt-1">
                      Uden konkrete og målbare B2B-cases bliver jeres påstande reduceret til uunderbyggede løfter.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Bottom status stats bar */}
      <div className="relative z-10 border-t border-warm-white/10 pt-3 flex justify-between text-[10px] font-mono text-warm-white/50">
        <div>System: Reality Scan</div>
        <div className="flex gap-4">
          <span>Observation: Active</span>
          <span>Sigtelinje: Præcis</span>
        </div>
      </div>
    </div>
  );
}
