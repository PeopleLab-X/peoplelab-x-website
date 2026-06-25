import React from "react";
import { motion } from "motion/react";
import heroImg from "../assets/images/b2b_research_hero_1782375976645.jpg";

interface HeroLivingIntelligenceProps {
  currentLanguage: "da" | "en";
  onOrderClick: () => void;
  onExploreClick: () => void;
}

export default function HeroLivingIntelligence({
  currentLanguage,
  onOrderClick,
  onExploreClick,
}: HeroLivingIntelligenceProps) {
  const isEn = currentLanguage === "en";

  const t = {
    eyebrow: isEn ? "BEFORE THE SALES DIALOGUE" : "FØR SALGSDIALOGEN",
    heading: isEn
      ? "FROM HIDDEN STRENGTH<br class='hidden lg:inline'/> TO A CLEAR POSITION IN THE MARKET."
      : "FRA SKJULT STYRKE<br class='hidden lg:inline'/> TIL EN KLAR POSITION I MARKEDET.",
    lead: isEn
      ? "Relevant companies research and assess you long before they make contact. If your strengths, positioning, and evidence are not clear, you risk being deselected without ever knowing it."
      : "Relevante virksomheder undersøger og vurderer jer, længe før de tager kontakt. Hvis jeres styrker, position og beviser ikke står tydeligt nok, risikerer I at blive valgt fra, uden at I nogensinde ved det.",
    ctaPrimary: isEn ? "Order a Reality Scan" : "Bestil et Reality Scan",
    ctaSecondary: isEn ? "How We Work" : "Sådan arbejder vi",
    microcopy: isEn
      ? "Independent analysis based on real external evidence."
      : "Uvildig analyse baseret på faktiske eksterne beviser.",
  };

  return (
    <section
      id="hero-living-intelligence"
      className="relative min-h-[95svh] flex flex-col justify-center bg-[#F4F1EA] text-[#171817] pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-[#DDE5E1]"
    >
      {/* Background soft glow or organic mesh gradient representation */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#DFFF54]/10 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#244C43]/5 blur-[100px] pointer-events-none select-none" />

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left column: Highly styled copy */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#244C43] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] font-bold text-[#424641]">
              {t.eyebrow}
            </span>
          </motion.div>

          {/* Heading with clamp typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-bold leading-[0.92] tracking-tight text-[#171817] uppercase text-[clamp(2.8rem,7vw,5.5rem)]"
            dangerouslySetInnerHTML={{ __html: t.heading }}
          />

          {/* Lead paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[#424641] font-medium leading-[1.48] text-[clamp(1.1rem,1.5vw,1.45rem)] max-w-[620px]"
          >
            {t.lead}
          </motion.p>

          {/* Call to action & microcopy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-order-cta"
                onClick={onOrderClick}
                className="h-14 px-8 bg-[#DFFF54] hover:bg-[#DFFF54]/90 text-[#171817] font-sans font-bold text-sm tracking-wider uppercase rounded-[4px] border-none cursor-pointer active:scale-95 transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
              >
                <span>{t.ctaPrimary}</span>
              </button>

              <button
                id="hero-explore-cta"
                onClick={onExploreClick}
                className="h-14 px-8 bg-transparent hover:bg-[#171817]/5 text-[#171817] font-sans font-bold text-sm tracking-wider uppercase rounded-[4px] border border-[#171817]/20 cursor-pointer active:scale-95 transition-all duration-200 flex items-center justify-center"
              >
                <span>{t.ctaSecondary}</span>
              </button>
            </div>
            
            <p className="font-mono text-[10px] text-[#424641] uppercase tracking-[0.08em]">
              {t.microcopy}
            </p>
          </motion.div>

        </div>

        {/* Right column: Documental visual media with mask reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative w-full aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] rounded-[4px] overflow-hidden border border-[#171817]/10 shadow-md bg-[#DDE5E1]"
        >
          <img
            id="hero-main-documentary-image"
            src={heroImg}
            alt="B2B Reality analysis scene"
            className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-1000 ease-in-out"
            referrerPolicy="no-referrer"
          />
          {/* Subtle vignette/gradient treatment */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#171817]/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
