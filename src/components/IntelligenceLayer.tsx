import React from "react";
import { motion } from "motion/react";

interface IntelligenceLayerProps {
  currentLanguage: "da" | "en";
}

export default function IntelligenceLayer({ currentLanguage }: IntelligenceLayerProps) {
  const isEn = currentLanguage === "en";

  const t = {
    tag: isEn ? "STRATEGIC ASSET" : "STRATEGISK VIRKSOMHEDSAKTIV",
    heading: isEn
      ? "WHAT OTHERS UNDERSTAND SHAPES YOUR VALUE"
      : "DET, ANDRE FORSTÅR, FORMER JERES VÆRDI",
    p1: isEn
      ? "For boards, private equity funds, and strategic partners, how a company is understood from the outside has a direct impact. It affects risk, valuation, and future growth potential."
      : "For bestyrelser, kapitalfonde og strategiske partnere har det direkte betydning, hvordan en virksomhed bliver forstået udefra. Det påvirker både risiko, værdisætning og fremtidigt vækstpotentiale.",
    p2: isEn
      ? "An independent B2B signal scan shows where the company's strengths, position, and evidence are not clear enough. This can help explain lower valuations, weaker impact of marketing investments, and unclear market relevance."
      : "Et uafhængigt B2B-signalscan viser, hvor virksomhedens styrker, position og beviser ikke står tydeligt nok. Det kan være med til at forklare lavere værdisætning, svagere effekt af marketinginvesteringer og uklar markedsrelevans.",
  };

  const systems = [
    {
      label: isEn ? "FINANCIAL VALUE" : "FINANSIEL VÆRDI",
      title: isEn ? "VALUATION INTEGRITY" : "VÆRDISÆTNINGS-INTEGRITET",
      desc: isEn
        ? "When your value is clear, it reduces price pressure and protects your margin."
        : "Når jeres værdi står tydeligt, mindsker det prispres og beskytter jeres margin.",
    },
    {
      label: isEn ? "RISK ASSESSMENT" : "RISIKOVURDERING",
      title: isEn ? "ACQUISITION DUE DILIGENCE" : "DUE DILIGENCE VED OPKØB",
      desc: isEn
        ? "Providing acquirers with an objective, outside-in assessment of the target company's real-world market position before closing."
        : "Giver opkøbere og kapitalfonde en uvildig, udefra-og-ind analyse af målvirkshomhedens reelle markedsposition før overtagelse.",
    },
    {
      label: isEn ? "EFFICIENT GROWTH" : "EFFEKTIV VÆKST",
      title: isEn ? "ALLOCATION EFFICIENCY" : "ALLOKERINGS-EFFEKTIVITET",
      desc: isEn
        ? "Ensuring growth capital is invested in resolving the true friction point rather than over-optimizing superficial sales campaigns."
        : "Sikrer, at vækstkapital investeres i at løse det reelle problem frem for at over-optimere på overfladiske salgskampagner.",
    },
  ];

  return (
    <section
      id="intelligence-layer-section"
      className="bg-[#171817] text-[#FBFAF7] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#3A3D39]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: 5 of 12 columns */}
          <div className="lg:col-span-5 space-y-6 max-w-[520px]">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#DFFF54] font-bold block">
              {t.tag}
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] uppercase text-white">
              {t.heading}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[#E5E8E4] leading-relaxed font-normal">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
          </div>

          {/* Right Column: 7 of 12 columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {systems.map((sys, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                key={idx}
                className="bg-[#1E1F1E] border border-[#424641] p-8 md:p-9 rounded-[4px] flex flex-col justify-between min-h-[180px] hover:border-[#DFFF54]/60 transition-all duration-300"
              >
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-[#DFFF54] font-bold tracking-widest uppercase block">
                    {sys.label}
                  </span>
                  <h3 className="font-sans font-bold text-lg md:text-xl uppercase text-white tracking-wide">
                    {sys.title}
                  </h3>
                </div>
                <p className="font-sans text-sm md:text-base leading-relaxed text-[#E5E8E4] font-normal pt-4 border-t border-[#424641] mt-4">
                  {sys.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
