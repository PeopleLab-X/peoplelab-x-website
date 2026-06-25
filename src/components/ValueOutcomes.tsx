import React from "react";
import { motion } from "motion/react";

interface ValueOutcomesProps {
  currentLanguage: "da" | "en";
}

export default function ValueOutcomes({ currentLanguage }: ValueOutcomesProps) {
  const isEn = currentLanguage === "en";

  const t = {
    tag: isEn ? "VALUE DELIVERABLES" : "KOMMERCIELLE RESULTATER",
    heading: isEn
      ? "The concrete business outcomes you realize udefra-og-ind"
      : "De konkrete forretningsresultater I opnår udefra-og-ind",
    lead: isEn
      ? "Our independent assessments lead to direct improvement in five critical areas of your corporate growth."
      : "Vores uvildige analyser skaber direkte forbedringer på tværs af fem kritiske områder i jeres kommercielle forretning.",
  };

  const outcomes = [
    {
      word: isEn ? "PRECISION." : "PRÆCISION.",
      title: isEn ? "Unassailable specialized B2B position" : "Uafviselig specialiseret B2B-position",
      desc: isEn
        ? "Eliminate generic buzzwords. Your unique technical advantages and specialized premium role are decoded instantly by potential clients."
        : "Fjern de generiske buzzwords. Jeres unikke tekniske fordele og specialiserede premium-rolle afkodes øjeblikkeligt af potentielle kunder.",
      style: "lg:col-span-7 font-sans",
    },
    {
      word: isEn ? "VELOCITY." : "HASTIGHED.",
      title: isEn ? "Drastically reduced sales friction" : "Hærget salgsfriktion i tilbudsrunder",
      desc: isEn
        ? "Your sales team encounters pre-qualified, high-intent interest because the buyer's internal risk assessment has already been resolved."
        : "Jeres salgsteam møder prækvalificeret, motiveret interesse, fordi køberens interne risikovurdering og indvendinger allerede er afklaret.",
      style: "lg:col-span-5 font-sans",
    },
    {
      word: isEn ? "AUTHORITY." : "AUTORITET.",
      title: isEn ? "Stronger traceable evidence portfolio" : "Uomtvistelig og sporbar bevisbyrde",
      desc: isEn
        ? "Align claims with verifiable outcomes. Move cases from simple quotes to robust, authoritative technical documentation."
        : "Harmoniser jeres løfter med dokumenterede resultater. Gør jeres kundecases til uafviselige, autoritative beviser.",
      style: "lg:col-span-5 font-sans",
    },
    {
      word: isEn ? "CALIBER." : "KVALITET.",
      title: isEn ? "Higher-caliber leads and strategic inquiries" : "Højere kvalitet af henvendelser",
      desc: isEn
        ? "Attract complex, higher-value B2B enterprise clients instead of small commodity seekers who default to price comparisons."
        : "Tiltræk komplekse B2B-virksomheder med større volumen i stedet for mindre kunder, der udelukkende sammenligner på prisen.",
      style: "lg:col-span-7 font-sans",
    },
    {
      word: isEn ? "DIRECTION." : "RETNING.",
      title: isEn ? "Clear, unified leadership decision roadmap" : "Klar, fælles ledelsesmæssig retning",
      desc: isEn
        ? "End internal speculation on why growth stalls. Build next year's investments on observed external evidence and priority-sequenced reality."
        : "Slut med interne spekulationer om, hvorfor væksten tøver. Byg jeres investeringer på faktisk observerede beviser og en prioriteret rækkefølge.",
      style: "lg:col-span-12 border-t border-[#171817]/10 pt-8 mt-4 font-sans",
    },
  ];

  return (
    <section
      id="value-outcomes-section"
      className="bg-[#F4F1EA] text-[#171817] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#DDE5E1]"
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-[850px] space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#244C43] block font-bold">
            {t.tag}
          </span>
          <h2 className="font-sans font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] uppercase text-[#171817]">
            {t.heading}
          </h2>
          <p className="font-sans text-[#424641] text-base md:text-lg max-w-[640px]">
            {t.lead}
          </p>
        </div>

        {/* Five Out-of-box typographic outputs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {outcomes.map((ot, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              key={idx}
              className={`${ot.style} space-y-3`}
            >
              <span className="block font-sans font-black text-3xl md:text-4xl text-[#244C43] tracking-wider">
                {ot.word}
              </span>
              <h3 className="font-sans font-bold text-lg md:text-xl text-[#171817] uppercase tracking-wide">
                {ot.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-[#424641] leading-relaxed max-w-[580px]">
                {ot.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
