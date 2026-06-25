import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import HeroLivingIntelligence from "../components/HeroLivingIntelligence";
import InsideKnowledgeSection from "../components/InsideKnowledgeSection";
import ExternalSignalField from "../components/ExternalSignalField";
import SilentMarketSection from "../components/SilentMarketSection";
import DecisionChain from "../components/DecisionChain";
import MethodPrinciples from "../components/MethodPrinciples";
import MovementSection from "../components/MovementSection";
import ValueOutcomes from "../components/ValueOutcomes";
import IntelligenceLayer from "../components/IntelligenceLayer";
import ContactOpening from "../components/ContactOpening";

interface HomeProps {
  currentLanguage: "da" | "en";
  setRoute: (route: string) => void;
}

export default function Home({ currentLanguage, setRoute }: HomeProps) {
  const isEn = currentLanguage === "en";

  const tProgression = {
    tag: isEn ? "PRODUCT PROGRESSION" : "PRODUKTPROGRESION // METODIK",
    heading: isEn
      ? "From initial external audit to a prioritized decision direction"
      : "Fra første eksterne signalanalyse til en prioriteret retning",
    lead: isEn
      ? "PeopleLab X works with three connected formats. Each answers a different critical management question."
      : "PeopleLab X arbejder med tre sammenhængende formater. Hvert format besvarer et unikt spørgsmål for ledelsen.",
  };

  const productsList = [
    {
      id: "scan",
      num: "01",
      title: "Reality Scan",
      question: isEn ? "What do potential clients encounter?" : "Hvad møder potentielle kunder udefra?",
      desc: isEn
        ? "An independent external signal audit. Shows how your business is likely to be understood, assessed, and chosen before contact."
        : "Uafhængig ekstern signalanalyse. Viser, hvordan jeres forretning forstås, vurderes og vælges, før der tages kontakt.",
      path: "/reality-scan" as const,
      bg: "bg-white text-[#171817] border border-[#171817]/10",
      ctaColor: "text-[#244C43] font-bold hover:underline",
    },
    {
      id: "check",
      num: "02",
      title: "Reality Check",
      question: isEn ? "What organizational drivers create that picture?" : "Hvilke organisatoriske årsager skaber billedet?",
      desc: isEn
        ? "A deep-dive root cause diagnostic. Explains where strategic, operational, or behavioral friction inside the company dilutes your external value."
        : "Dybdegående årsagsdiagnostik. Afdækker, hvor strategisk eller organisatorisk friktion indefra svækker jeres eksterne værdi.",
      path: "/reality-check" as const,
      bg: "bg-[#244C43] text-white border border-[#244C43]",
      ctaColor: "text-[#DFFF54] font-bold hover:underline",
    },
    {
      id: "roadmap",
      num: "03",
      title: "Reality Roadmap",
      question: isEn ? "What decisions deserve priority first?" : "Hvilke beslutninger kræver prioritet først?",
      desc: isEn
        ? "A tailored sequencing framework. Plans your next 6-to-12 months of positioning, evidence alignment, and commercial initiatives."
        : "Skræddersyet handlingsplan. Planlægger jeres næste 6-12 måneders positionering, bevisbyrde og kommercielle indsatser.",
      path: "/reality-roadmap" as const,
      bg: "bg-white text-[#171817] border border-[#171817]/10",
      ctaColor: "text-[#244C43] font-bold hover:underline",
    },
  ];

  const handleProductNavigate = (path: string) => {
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreClick = () => {
    const el = document.getElementById("product-progression-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="homepage-content-root">
      {/* 1. Immersive Hero Section */}
      <HeroLivingIntelligence
        currentLanguage={currentLanguage}
        onOrderClick={() => {
          const el = document.getElementById("contact-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onExploreClick={handleExploreClick}
      />

      {/* 2. Perspective Asymmetry Grid Section */}
      <InsideKnowledgeSection currentLanguage={currentLanguage} />

      {/* 3. Signals Collage Section */}
      <ExternalSignalField currentLanguage={currentLanguage} />

      {/* 4. Silent Market Loss Section */}
      <SilentMarketSection currentLanguage={currentLanguage} />

      {/* 5. Decision Chain Section */}
      <DecisionChain currentLanguage={currentLanguage} />

      {/* 6. Product Progression Section (The Three Connected Formats) */}
      <section
        id="product-progression-section"
        className="bg-[#EFECE5] text-[#171817] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b border-[#DDE5E1]"
      >
        <div className="max-w-[1280px] mx-auto space-y-16">
          <div className="max-w-[850px] space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#244C43] block font-bold">
              {tProgression.tag}
            </span>
            <h2 className="font-sans font-bold text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05] uppercase text-[#171817]">
              {tProgression.heading}
            </h2>
            <p className="font-sans text-[#424641] text-base md:text-lg max-w-[680px] font-weight-medium">
              {tProgression.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productsList.map((prod) => {
              const isDarkCard = prod.id === "check";
              const cardSecText = isDarkCard ? "text-[#D7DAD5]" : "text-[#424641]";
              const cardPrimText = isDarkCard ? "text-[#FBFAF7]" : "text-[#171817]";
              
              return (
                <div
                  key={prod.id}
                  className={`p-8 rounded-none transition-all duration-300 flex flex-col justify-between min-h-[380px] ${prod.bg}`}
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-current/10 pb-3">
                      <span className="font-sans font-black text-2xl opacity-40">
                        {prod.num}
                      </span>
                      <span className="font-sans font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 bg-current/5">
                        FORMAT
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-xl uppercase tracking-wide">
                        {prod.title}
                      </h3>
                      <p className={`font-sans italic text-sm leading-snug font-weight-medium ${isDarkCard ? "text-[#DFFF54]" : "text-[#244C43]"}`}>
                        "{prod.question}"
                      </p>
                    </div>

                    <p className={`font-sans text-xs md:text-sm leading-relaxed font-weight-body ${cardSecText}`}>
                      {prod.desc}
                    </p>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => handleProductNavigate(prod.path)}
                      className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-wider bg-transparent border-none cursor-pointer p-0 transition-all ${prod.ctaColor}`}
                    >
                      <span>{isEn ? "Read details" : "Se detaljer"}</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Core Method Principles Section */}
      <MethodPrinciples currentLanguage={currentLanguage} />

      {/* 8. Possibility & Velocity Transformation Section */}
      <MovementSection currentLanguage={currentLanguage} />

      {/* 9. Value Outcomes Typographic Callout Section */}
      <ValueOutcomes currentLanguage={currentLanguage} />

      {/* 10. Deep Intelligence Systemic Layer Section */}
      <IntelligenceLayer currentLanguage={currentLanguage} />

      {/* 11. Light Warm Contact Opening Section */}
      <ContactOpening currentLanguage={currentLanguage} />
    </div>
  );
}
