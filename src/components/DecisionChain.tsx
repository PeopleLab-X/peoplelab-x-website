import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Eye, Compass, HelpCircle, ShieldCheck, HeartHandshake } from "lucide-react";

interface DecisionChainProps {
  currentLanguage: "da" | "en";
}

export default function DecisionChain({ currentLanguage }: DecisionChainProps) {
  const isEn = currentLanguage === "en";
  const [activeStep, setActiveStep] = useState(0);

  const t = {
    tag: isEn ? "DECISION CHAIN" : "BESLUTNINGSKÆDEN",
    heading: isEn
      ? "The journey from initial signal to final business choice"
      : "Rejsen fra første signal til det endelige forretningsvalg",
    lead: isEn
      ? "A B2B decision is not a single logical event. It is a chain of perceptions that can break at any link. Click each stage to see how a buyer reaches the final choice."
      : "Et B2B-valg er ikke en enkeltstående logisk begivenhed. Det er en kæde af opfattelser, der kan knække ved ethvert led. Vælg hvert trin for at se, hvordan kunden ledes til beslutningen.",
  };

  const steps = [
    {
      label: isEn ? "1. Signal" : "1. Signal",
      title: isEn ? "The first outward impression" : "Det første ydre aftryk",
      icon: Eye,
      desc: isEn
        ? "The buyer meets your digital touchpoints, your communication, and your representatives. If this signal is weak or generic, they leave immediately."
        : "Køberen møder jeres digitale touchpoints, budskaber og repræsentanter. Hvis signalet er svagt eller uinteressant, forlader de jer her.",
    },
    {
      label: isEn ? "2. Understanding" : "2. Forståelse",
      title: isEn ? "How the signal is decoded" : "Hvordan signalet afkodes",
      icon: Compass,
      desc: isEn
        ? "Do they instantly grasp your specialized advantage? Or are they left guessing because your website is full of generic buzzwords?"
        : "Forstår de øjeblikkeligt jeres specialiserede fordel? Eller efterlades de i tvivl, fordi jeres website er overfyldt med indhold, som alle siger?",
    },
    {
      label: isEn ? "3. Relevance" : "3. Relevans",
      title: isEn ? "Why it matters to their business" : "Hvorfor det betyder noget for dem",
      icon: HelpCircle,
      desc: isEn
        ? "Does the buyer recognize their own situation, problems, and strategic ambitions in the solutions you make visible?"
        : "Genkender køberen sin egen situation, sine forretningsmæssige problemer og strategiske ambitioner i de løsninger, I gør synlige?",
    },
    {
      label: isEn ? "4. Evidence" : "4. Bevis",
      title: isEn ? "What supports your claims" : "Hvad der understøtter jeres påstande",
      icon: CheckCircle2,
      desc: isEn
        ? "Verifiable proof. Detailed cases and measurable results. If you claim premium capability but offer no evidence, the chain breaks."
        : "Faktiske og målbare beviser. Hvis I hævder markedsledende kvalitet, men ikke dokumenterer det gennem dybe cases, brister kæden her.",
    },
    {
      label: isEn ? "5. Trust" : "5. Tillid",
      title: isEn ? "How risk is minimized" : "Hvordan risikoen minimeres",
      icon: ShieldCheck,
      desc: isEn
        ? "The strategic assessment of delivery risk. Does your brand represent professional precision, authority, and safety?"
        : "Den strategiske vurdering af leveringsrisiko. Fremstår jeres brand som et udtryk for professionel præcision, autoritet og sikkerhed?",
    },
    {
      label: isEn ? "6. Choice" : "6. Valg",
      title: isEn ? "The final commercial selection" : "Det endelige kommercielle valg",
      icon: HeartHandshake,
      desc: isEn
        ? "The buyer takes contact, invites you to tender, or selects you for a long-term partnership. The natural conclusion when all links hold."
        : "Kunden tager kontakt, inviterer jer til udbud eller vælger jer som fast partner. Den naturlige konsekvens, når alle led holder.",
    },
  ];

  return (
    <section
      id="decision-chain-section"
      className="bg-[#171817] text-[#FBFAF7] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-white/5 relative"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#FBFAF7_1px,transparent_1px),linear-gradient(to_bottom,#FBFAF7_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-[850px] space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#DFFF54] block font-bold">
            {t.tag}
          </span>
          <h2 className="font-sans font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] uppercase text-white">
            {t.heading}
          </h2>
          <p className="font-sans text-[#D7DAD5] text-base md:text-lg max-w-[680px]">
            {t.lead}
          </p>
        </div>

        {/* Desktop Interactive Step System */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start pt-6">
          
          {/* Left Column: Navigation chain (6 links) */}
          <div className="col-span-5 flex flex-col gap-3 relative">
            
            {/* Elegant vertical connecting track line */}
            <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-white/10 z-0" />
            <div
              className="absolute left-8 top-6 w-0.5 bg-[#DFFF54] z-0 transition-all duration-500"
              style={{
                height: `${(activeStep / (steps.length - 1)) * 88}%`,
              }}
            />

            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  id={`decision-chain-btn-${idx}`}
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex items-center gap-6 p-4 rounded-[4px] text-left transition-all duration-300 border focus:outline-none ${
                    isActive
                      ? "bg-[#244C43] border-[#DFFF54] shadow-md"
                      : "bg-transparent border-transparent text-[#D7DAD5] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-[#DFFF54] text-[#171817]" : "bg-white/10 text-[#FBFAF7]"
                    }`}
                  >
                    <IconComp size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#DFFF54]">
                      {step.label}
                    </span>
                    <span className="block text-sm font-sans font-semibold uppercase text-white">
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual and Descriptive display */}
          <div className="col-span-7 bg-[#244C43]/20 border border-white/10 rounded-[6px] p-10 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFFF54]/5 rounded-bl-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#DFFF54] tracking-widest uppercase">
                    {isEn ? "ANALYSIS FOCUS // LINK STRENGTH" : "ANALYSEFOKUS // LEDSTYRKE"}
                  </span>
                  <h3 className="font-sans font-bold text-3xl uppercase tracking-wide text-white">
                    {steps[activeStep].title}
                  </h3>
                </div>

                <p className="font-sans text-lg text-[#FBFAF7] leading-relaxed max-w-[560px]">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-white/10 pt-6 flex justify-between items-center text-xs font-mono text-[#D7DAD5]">
              <span>PEOPLELAB X — METHODOLOGY</span>
              <span>{isEn ? "STEP PROGRESSION: ACTIVE" : "TRINPROGRESSION: AKTIV"}</span>
            </div>
          </div>

        </div>

        {/* Mobile Vertical Flow (All visible, static layout) */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#244C43]/20 border border-white/10 rounded-[4px] p-6 space-y-4"
              >
                <div className="flex items-center gap-4 border-b border-white/5 pb-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFFF54] text-[#171817] flex items-center justify-center">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-[#DFFF54] uppercase tracking-widest">
                      {step.label}
                    </span>
                    <h3 className="text-sm font-sans font-bold uppercase text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#D7DAD5] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
