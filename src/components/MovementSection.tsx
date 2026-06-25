import React from "react";
import { motion } from "motion/react";
import techImg from "../assets/images/modern_b2b_tech_hero_1782198979280.jpg";

interface MovementSectionProps {
  currentLanguage: "da" | "en";
}

export default function MovementSection({ currentLanguage }: MovementSectionProps) {
  const isEn = currentLanguage === "en";

  const t = {
    tag: isEn ? "ALIGNMENT & VELOCITY" : "STRATEGISK PERCEPTION",
    heading: isEn
      ? "YOUR STRENGTHS ONLY HAVE VALUE WHEN THE MARKET CAN SEE THEM."
      : "JERES STYRKE HAR KUN VÆRDI, NÅR MARKEDET KAN SE DEN.",
    p1: isEn
      ? "You know your expertise, experience, and real capacity. Potential clients only see what you make visible: your website, cases, documentation, leadership, positioning, and how you explain your value."
      : "I kender jeres faglighed, erfaring og reelle kapacitet. Potentielle kunder ser kun det, I gør synligt: jeres website, cases, dokumentation, ledelse, position og måde at forklare værdien på.",
    p2: isEn
      ? "When visible signals do not match your company's actual strength, you are evaluated on a weaker basis than your company deserves."
      : "Når de synlige signaler ikke står mål med virksomhedens reelle styrke, bliver I vurderet på et svagere grundlag, end jeres virksomhed fortjener.",
    highlight: isEn
      ? "PeopleLab X shows you where the gap occurs — and what needs to be made clearer first."
      : "PeopleLab X viser jer, hvor forskellen opstår — og hvad der først skal gøres tydeligere.",
  };

  return (
    <section
      id="movement-possibility-section"
      className="bg-[#244C43] text-[#FBFAF7] py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden border-b border-white/5"
    >
      {/* Background subtle atmospheric treatments */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="absolute top-[-30%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-[#DFFF54]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Focused Copy Layout */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#DFFF54] block font-bold">
            {t.tag}
          </span>
          <h2 className="font-sans font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] uppercase text-white">
            {t.heading}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-[#D7DAD5] leading-relaxed max-w-[540px]">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
          
          <div className="pt-4 border-t border-white/10 max-w-[540px]">
            <p className="text-[#DFFF54] font-sans font-bold text-lg">
              {t.highlight}
            </p>
          </div>
        </div>

        {/* Right Column: Clean Editorial B2B Photograph */}
        <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-[4px] overflow-hidden border border-white/10 shadow-lg bg-[#1e3f37]">
          <img
            id="movement-editorial-photo"
            src={techImg}
            alt="Real B2B context, people and expertise"
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
}
