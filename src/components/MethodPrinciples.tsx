import React from "react";
import { motion } from "motion/react";

interface MethodPrinciplesProps {
  currentLanguage: "da" | "en";
}

export default function MethodPrinciples({ currentLanguage }: MethodPrinciplesProps) {
  const isEn = currentLanguage === "en";

  const t = {
    tag: isEn ? "METODISKE PRINCIPPER" : "METODISKE PRINCIPPER",
    heading: isEn
      ? "Five principles governing our analyses"
      : "Fem principper, der styrer vores analyser",
    lead: isEn
      ? "You will not receive a superficial review or a long list of everything that can be improved.\n\nWe work according to a strict analytical discipline. First, we examine the reality you must operate in. Then we show where you stand, what matters most, and which changes will create the greatest impact fastest."
      : "I får ikke en overfladisk gennemgang eller en lang liste over alt, der kan forbedres.\n\nVi arbejder efter a fast analytisk disciplin. Først undersøger vi den virkelighed, I skal fungere i. Derefter viser vi, hvor I står, hvad der betyder mest, og hvilke ændringer der kan skabe størst effekt hurtigst.",
  };

  const principles = [
    {
      num: "01",
      title: isEn ? "The whole before the detail" : "Helheden før detaljen",
      desc: isEn
        ? "We begin with what must stand clear to those who examine and assess you:\n\nWho are you?\nWhat makes you relevant?\nWhy should you be chosen?\n\nWhen your position and central idea are unclear, improvements to individual pages, wordings, and features cannot resolve the fundamental problem."
        : "Vi begynder med det, der skal stå klart for dem, der undersøger og vurderer jer:\n\nHvem er I?\nHvad gør jer relevante?\nHvorfor skal I vælges?\n\nNår jeres position og centrale idé er uklar, kan forbedringer af enkelte sider, formuleringer og funktioner ikke løse det grundlæggende problem.",
    },
    {
      num: "02",
      title: isEn ? "Outside in — then inside out" : "Udefra og ind — derefter indefra og ud",
      desc: isEn
        ? "We begin with the reality you must operate in.\n\nWhat does the market expect from you today?\nWhich demands and standards are you assessed against?\nHow are your competitors and category developing?\nWhere do you stand in relation to the market and your own level of maturity?\n\nOnly then do we assess how you must adapt.\n\nWe prioritise the changes that matter most, are most realistic to implement, and can create the greatest results fastest."
        : "Vi begynder med den virkelighed, I skal fungere i.\n\nHvad forventer markedet af jer i dag?\nHvilke krav og standarder bliver I vurderet imod?\nHvordan udvikler jeres konkurrenter og kategori sig?\nHvor står I i forhold til markedet og jeres egen modenhed?\n\nFørst derefter vurderer vi, hvordan I skal tilpasse jer.\n\nVi prioriterer de ændringer, der har størst betydning, er mest realistiske at gennemføre og kan skabe de bedste resultater hurtigst.",
    },
    {
      num: "03",
      title: isEn ? "Observation before assumption" : "Observation før antagelse",
      desc: isEn
        ? "We base our work on what can actually be seen, documented, and verified.\n\nWhen something is an observation, we state it.\nWhen something is an interpretation, we explain the foundation.\nWhen something is a hypothesis, we mark it clearly.\n\nYou must always be able to see the difference."
        : "Vi tager udgangspunkt i det, der faktisk kan ses, dokumenteres og efterprøves.\n\nNår noget er en observation, siger vi det.\nNår noget er en fortolkning, forklarer vi grundlaget.\nNår noget er en hypotese, markerer vi det tydeligt.\n\nI skal altid kunne se forskellen.",
    },
    {
      num: "04",
      title: isEn ? "The burden of proof lies with us" : "Bevisbyrden ligger hos os",
      desc: isEn
        ? "When we point to ambiguity, weak signals, or a lack of coherence, we show exactly what the assessment is based on.\n\nYou should not accept our conclusions on trust alone. You must be able to trace them back to concrete observations and verify the foundation yourself."
        : "Når vi påpeger uklarhed, svage signaler eller manglende sammenhæng, viser vi præcist, hvad vurderingen bygger på.\n\nI skal ikke acceptere vores konklusioner på tillid alene. I skal kunne følge dem tilbage til konkrete observationer og selv kontrollere grundlaget.",
    },
    {
      num: "05",
      title: isEn ? "Clarity ahead of you. Depth behind." : "Klarhed foran jer. Dybde bagved.",
      desc: isEn
        ? "You do not have to work your way through complex models and academic terminology to understand what matters.\n\nYou get the essentials:\n• What do we see?\n• Why does it matter?\n• What is the consequence?\n• What should you do first?\n\nBehind the clear presentation lies a thorough analysis across market, maturity, position, signals, and commercial impact."
        : "I skal ikke arbejde jer gennem komplekse modeller og akademisk fagsprog for at forstå, hvad der betyder noget.\n\nI får det væsentlige:\n• Hvad ser vi?\n• Hvorfor betyder det noget?\n• Hvad er konsekvensen?\n• Hvad bør I gøre først?\n\nBag den klare form ligger en grundig analyse på tværs af marked, modenhed, position, signaler og kommerciel effekt.",
    },
  ];

  return (
    <section
      id="method-principles-section"
      className="bg-[#F4F1EA] text-[#171817] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#DDE5E1]"
    >
      <div className="max-w-[1100px] mx-auto space-y-20">
        
        {/* Intro */}
        <div className="max-w-[850px] space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#244C43] block font-bold">
            {t.tag}
          </span>
          <h2 className="font-sans font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] uppercase text-[#171817]">
            {t.heading}
          </h2>
          <p className="font-sans text-[#424641] text-base md:text-lg max-w-[640px] whitespace-pre-line">
            {t.lead}
          </p>
        </div>

        {/* Vertical Composition with Lines */}
        <div className="space-y-12 relative">
          {principles.map((pr, idx) => {
            const isLast = idx === principles.length - 1;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                key={pr.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative pb-12 border-b border-[#171817]/5"
              >
                {/* Large principle number */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <span className="font-sans font-black text-5xl md:text-6xl text-[#244C43]/20 tracking-tighter">
                    {pr.num}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#244C43] md:hidden" />
                </div>

                {/* Title */}
                <div className="md:col-span-5 md:pt-2">
                  <h3 className="font-sans font-bold text-xl md:text-2xl text-[#171817] uppercase tracking-wide leading-tight">
                    {pr.title}
                  </h3>
                </div>

                {/* Explanation */}
                <div className="md:col-span-5 md:pt-2">
                  <p className="font-sans text-sm md:text-base text-[#424641] leading-relaxed whitespace-pre-line">
                    {pr.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
