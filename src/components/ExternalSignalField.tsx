import React from "react";

interface ExternalSignalFieldProps {
  currentLanguage: "da" | "en";
}

export default function ExternalSignalField({ currentLanguage }: ExternalSignalFieldProps) {
  const isEn = currentLanguage === "en";

  const t = {
    tag: isEn ? "THE VISIBLE BASIS FOR DECISIONS" : "DET SYNLIGE BESLUTNINGSGRUNDLAG",
    heading: isEn
      ? "Many scattered signals become one unified picture"
      : "Mange spredte signaler bliver til ét samlet billede",
    lead: isEn
      ? "Potential buyers don't just read your core values. They subconsciously cross-reference multiple signals across your touchpoints to decide whether you are credible."
      : "Potentielle købere læser ikke blot jeres værdigrundlag. De krydsrefererer ubevidst snesevis af signaler på tværs af jeres kontaktpunkter for at vurdere, om I er troværdige.",
  };

  const signals = [
    {
      id: "01",
      label: isEn ? "WEBSITE" : "HJEMMESIDE",
      title: isEn ? "YOUR WEBSITE AND MESSAGING" : "JERES HJEMMESIDE OG BUDSKABER",
      desc: isEn 
        ? "Can they quickly understand who you are, what you solve, and why you are relevant?" 
        : "Kan de hurtigt forstå, hvem I er, hvad I løser, og hvorfor I er relevante?",
    },
    {
      id: "02",
      label: isEn ? "EVIDENCE" : "BEVISER",
      title: isEn ? "YOUR CASES AND EVIDENCE" : "JERES CASES OG BEVISER",
      desc: isEn 
        ? "Can they see documented results that make your claims credible?" 
        : "Kan de se dokumenterede resultater, der gør jeres påstande troværdige?",
    },
    {
      id: "03",
      label: isEn ? "LEADERSHIP" : "LEDELSE",
      title: isEn ? "YOUR LEADERSHIP AND VISIBLE EXPERTISE" : "JERES LEDELSE OG SYNLIGE FAGLIGHED",
      desc: isEn 
        ? "Do the people who drive the company stand out as clear and relevant authorities?" 
        : "Fremstår de mennesker, der bærer virksomheden, som tydelige og relevante autoriteter?",
    },
    {
      id: "04",
      label: isEn ? "SALES ASSETS" : "SALGSMATERIALE",
      title: isEn ? "YOUR SALES COLLATERAL" : "JERES SALGSMATERIALE",
      desc: isEn 
        ? "Does your material make it easier to understand, compare, and defend choosing you?" 
        : "Gør jeres materiale det lettere at forstå, sammenligne og forsvare valget af jer?",
    },
    {
      id: "05",
      label: isEn ? "POSITIONING" : "POSITIONERING",
      title: isEn ? "YOUR POSITION IN THE CATEGORY" : "JERES POSITION I KATEGORIEN",
      desc: isEn 
        ? "Do you stand out as a clear choice — or as one of many similar companies?" 
        : "Fremstår I som et tydeligt valg — eller som én blandt mange lignende virksomheder?",
    },
    {
      id: "06",
      label: isEn ? "DOCUMENTATION" : "DOKUMENTATION",
      title: isEn ? "YOUR TECHNICAL AND COMMERCIAL DOCUMENTATION" : "JERES TEKNISKE OG KOMMERCIELLE DOKUMENTATION",
      desc: isEn 
        ? "Is the information that reduces risk and supports the decision visible and easy to use?" 
        : "Er den information, der reducerer risiko og understøtter beslutningen, synlig og let at bruge?",
    },
  ];

  return (
    <section
      id="external-signal-field"
      className="bg-[#EFECE5] text-[#171817] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#DDE5E1]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Introduktion (5 of 12 columns on desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#244C43] font-bold block">
              {t.tag}
            </span>
            <h2 className="font-sans font-bold text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05] uppercase text-[#171817]">
              {t.heading}
            </h2>
            <p className="font-sans text-[#424641] text-base md:text-lg leading-relaxed font-normal">
              {t.lead}
            </p>
          </div>

          {/* De seks signaler som redaktionel liste (7 of 12 columns on desktop) */}
          <div className="lg:col-span-7 space-y-0">
            <div className="border-t border-[#B8BDB7]">
              {signals.map((sig) => (
                <div
                  key={sig.id}
                  className="py-8 border-b border-[#B8BDB7] flex flex-col sm:flex-row gap-6 md:gap-8 items-start"
                >
                  {/* Number & Tag */}
                  <div className="w-20 shrink-0 flex flex-col gap-1">
                    <span className="font-mono text-[#244C43] font-bold text-lg md:text-xl leading-none">
                      {sig.id}
                    </span>
                    <span className="font-mono text-[9px] text-[#244C43]/60 uppercase tracking-wider font-bold">
                      {sig.label}
                    </span>
                  </div>

                  {/* Header & Explanation */}
                  <div className="space-y-2 flex-1">
                    <h3 className="font-sans font-bold text-lg md:text-xl uppercase text-[#171817] leading-snug">
                      {sig.title}
                    </h3>
                    <p className="font-sans text-base text-[#424641] font-normal leading-relaxed">
                      {sig.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
