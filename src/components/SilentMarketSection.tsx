import React from "react";
import { motion } from "motion/react";

interface SilentMarketSectionProps {
  currentLanguage: "da" | "en";
}

export default function SilentMarketSection({ currentLanguage }: SilentMarketSectionProps) {
  const isEn = currentLanguage === "en";

  const t = {
    tag: isEn ? "UNSEEN EVALUATION" : "FØR FØRSTE KONTAKT",
    heading: isEn
      ? "Most of the market's assessment occurs outside your field of vision."
      : "Det meste af markedets vurdering foregår uden for jeres synsfelt.",
    lead1: isEn
      ? "Potential clients research companies, compare alternatives, and form their first assessment without making themselves known."
      : "Potentielle kunder undersøger virksomheder, sammenligner alternativer og danner deres første vurdering, uden at give sig til kende.",
    lead2: isEn
      ? "You do not see them in CRM. They are not registered as leads. You receive no explanation if they deselect you."
      : "I ser dem ikke i CRM. De bliver ikke registreret som leads. I får ingen forklaring, hvis de vælger jer fra.",
    lead3: isEn
      ? "PeopleLab X analyzes the decision basis they encounter before contact occurs."
      : "PeopleLab X analyserer det beslutningsgrundlag, de møder, før kontakten opstår.",
    highlight: isEn
      ? "What you cannot see in your pipeline can still be decisive for your growth."
      : "Det, I ikke kan se i jeres pipeline, kan stadig være afgørende for jeres vækst.",
    titleConsequences: isEn ? "How silent deselection occurs:" : "Hvordan det tavse fravalg sker i praksis:",
  };

  const consequences = [
    {
      id: "01",
      title: isEn ? "The Categorization Error" : "Kategoriseringsfejlen",
      desc: isEn
        ? "Potential clients classify you as a generic low-cost supplier because your high-end B2B specialization is buried in generic buzzwords."
        : "Potentielle kunder klassificerer jer som en generisk billigleverandør, fordi jeres høje B2B-specialisering drukner i corporate klicheer.",
    },
    {
      id: "02",
      title: isEn ? "The Evidence Deficit" : "Bevis-vakuummet",
      desc: isEn
        ? "You claim high premium outcomes, but your website only has small stock images and no real, verifiable client results. The buyer leaves due to lack of trust."
        : "I hævder stor effekt, men jeres website viser kun stockbilleder og ingen reelle, målbare kunderesultater. Køberen går videre af mangel på tillid.",
    },
    {
      id: "03",
      title: isEn ? "The Friction Threshold" : "Kontakt-friktionen",
      desc: isEn
        ? "Your contact route is a long, demanding form or a generic sales mail. High-intent decision makers prefer a direct, low-barrier intellectual peer conversation."
        : "Jeres kontaktvej er en lang formular eller en upersonlig salgsmail. Beslutningstagere med stor autoritet foretrækker en ukompliceret og personlig dialog.",
    },
    {
      id: "04",
      title: isEn ? "The Mirror Trap" : "Spejlfælden",
      desc: isEn
        ? "Your messaging mirrors the industry exactly. You look like five other partners, meaning the buyer defaults to the cheapest or best-known brand."
        : "Jeres kommunikation spejler branchen fuldstændigt. I ligner fem andre, hvilket betyder, at køber vælger det billigste eller mest kendte brand.",
    },
  ];

  return (
    <section
      id="silent-market-section"
      className="bg-[#F4F1EA] text-[#171817] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#DDE5E1]"
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
        
        {/* Main Section Header and Text Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#244C43] block font-bold">
              {t.tag}
            </span>
            <h2 className="font-sans font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] uppercase text-[#171817]">
              {t.heading}
            </h2>
          </div>

          {/* Right Column: Brødtekst & Highlight */}
          <div className="lg:col-span-6 space-y-8 lg:pt-8">
            <div className="space-y-4 text-base md:text-lg text-[#424641] leading-relaxed font-sans">
              <p>{t.lead1}</p>
              <p>{t.lead2}</p>
              <p className="font-semibold text-[#171817]">{t.lead3}</p>
            </div>

            <div className="border-l-2 border-[#244C43] pl-6 py-1">
              <p className="font-sans font-bold text-base md:text-lg text-[#244C43]">
                {t.highlight}
              </p>
            </div>
          </div>

        </div>

        {/* Consequences clean list layout (No dashboard, no shadows, modern redational style) */}
        <div className="space-y-8 pt-12 border-t border-[#171817]/10">
          <span className="block font-sans font-bold text-[14px] text-[#171817] uppercase tracking-wider">
            {t.titleConsequences}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {consequences.map((c, idx) => (
              <div
                key={idx}
                className="space-y-3 pb-6 border-b border-[#171817]/10 last:border-none md:last:border-b"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#244C43] font-bold">
                    [0{idx + 1}]
                  </span>
                  <h3 className="font-sans font-bold text-lg text-[#171817] uppercase tracking-wide">
                    {c.title}
                  </h3>
                </div>
                <p className="font-sans text-sm md:text-base text-[#424641] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
