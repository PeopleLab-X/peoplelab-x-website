import React from "react";
import { motion } from "motion/react";
import b2bLeaderImg from "../assets/images/b2b_leader_hero_1782194701258.jpg";

interface InsideKnowledgeSectionProps {
  currentLanguage: "da" | "en";
}

export default function InsideKnowledgeSection({ currentLanguage }: InsideKnowledgeSectionProps) {
  const isEn = currentLanguage === "en";

  const t = {
    tag: isEn ? "MARKET EVALUATION" : "MARKEDETS VURDERING",
    heading: isEn
      ? "The market does not see what you know."
      : "Markedet ser ikke det, I ved.",
    body1: isEn
      ? "You know the story behind your company. You know your employees' experience, your clients' results, the professional quality, and the many decisions that have shaped the company."
      : "I kender historien bag virksomheden. I kender medarbejdernes erfaring, kundernes resultater, den faglige kvalitet og de mange beslutninger, der har skabt virksomheden.",
    body2: isEn
      ? "Potential clients do not have access to that knowledge."
      : "Potentielle kunder har ikke adgang til den viden.",
    body3: isEn
      ? "They evaluate you based on the signals and evidence they can find. Therefore, a strong company can still appear unclear, generic, or difficult to choose."
      : "De vurderer jer ud fra de signaler og beviser, de kan finde. Derfor kan en stærk virksomhed stadig fremstå uklar, generisk eller vanskelig at vælge.",
    questionsTitle: isEn ? "Four critical questions:" : "De fire afgørende spørgsmål:",
    questions: isEn
      ? [
          "Do they quickly understand what you are exceptionally strong at?",
          "Can they see clear evidence of your claims?",
          "Does your positioning stand out as different and stronger than the alternatives?",
          "Do they have enough basis to carry you forward in their decision?",
        ]
      : [
          "Forstår de hurtigt, hvad I er særligt stærke til?",
          "Kan de se tydelige beviser for jeres påstande?",
          "Fremstår jeres position anderledes og stærkere end alternativerne?",
          "Har de nok grundlag til at tage jer med videre i deres beslutning?",
        ],
    highlight: isEn
      ? "The gap between internal truth and external perception is where commercial growth and customer trust are lost."
      : "Gabet mellem den interne sandhed og den eksterne opfattelse er der, hvor kommerciel fremdrift og kundetillid går tabt.",
  };

  return (
    <section
      id="inside-knowledge"
      className="bg-[#F4F1EA] text-[#171817] py-24 md:py-32 px-6 md:px-12 lg:px-20 relative border-b border-[#DDE5E1]"
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
        
        {/* Eyebrow & Main Section Intro */}
        <div className="max-w-[850px] space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#244C43] block font-bold">
            {t.tag}
          </span>
          <h2 className="font-sans font-bold text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.05] uppercase text-[#171817]">
            {t.heading}
          </h2>
        </div>

        {/* Asymmetrical 5/7 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols): Clean Editorial Photography */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[4px] overflow-hidden border border-[#171817]/10 bg-[#DDE5E1]">
            <img
              id="inside-knowledge-asymmetric-photo"
              src={b2bLeaderImg}
              alt="B2B professional evaluation"
              className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column (7 Cols): Off-center Text and Questions list */}
          <div className="lg:col-span-7 space-y-10 max-w-[640px]">
            <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.65] text-[#424641] font-sans">
              <p className="font-normal">{t.body1}</p>
              <p className="text-[#171817] font-semibold">{t.body2}</p>
              <p className="font-normal">{t.body3}</p>
            </div>

            <div className="space-y-6 border-t border-[#171817]/10 pt-8">
              <span className="block font-sans font-bold text-[14px] text-[#171817] uppercase tracking-wider">
                {t.questionsTitle}
              </span>
              <ul className="space-y-4 pl-0">
                {t.questions.map((qText, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[16px] text-[#424641] py-2 border-b border-[#171817]/5 last:border-none">
                    <span className="font-mono text-[13px] text-[#244C43] font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="font-sans font-medium text-[#171817]">{qText}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:mt-16 lg:pt-8 max-w-[850px] border-l-4 border-[#244C43] pl-8 py-2 bg-[#DDE5E1]/20 rounded-r-md"
        >
          <p className="font-serif italic text-xl md:text-2xl text-[#244C43] leading-relaxed">
            {t.highlight}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
