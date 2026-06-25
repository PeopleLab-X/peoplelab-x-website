import React from "react";
import { ArrowRight, Compass, Users, Sparkles, AlertTriangle, Layers, Eye } from "lucide-react";
import analyticsImg from "../assets/images/decision_analytics_environment_1782205748606.jpg";

import { contentDa } from "../content/da";
import { contentEn } from "../content/en";
import ContactOpening from "../components/ContactOpening";

// Stabile authentic portraits (uncomment these once files are uploaded)
// import cyrilPortrait from "../assets/people/cyril-alstrup.jpg";
// import christianPortrait from "../assets/people/christian-lahn-hoeyer.jpg";

const hasCyrilPortrait = false;      // Set to true once cyrilPortrait is uploaded & imported
const hasChristianPortrait = false;  // Set to true once christianPortrait is uploaded & imported

interface CompanyPageProps {
  currentLanguage: "da" | "en";
  setRoute: (route: string) => void;
}

export default function CompanyPage({ currentLanguage, setRoute }: CompanyPageProps) {
  const isEn = currentLanguage === "en";
  const tLeadership = isEn ? contentEn.leadership : contentDa.leadership;

  const t = {
    tag: isEn ? "PEOPLELAB X — FOUNDATIONAL PRINCIPLES" : "PEOPLELAB X — METODISK FUNDAMENT",
    heading: isEn
      ? "An intelligent approach to B2B perception"
      : "En intelligent tilgang til B2B-perception",
    subheading: isEn
      ? "We help you see your business outside-in, bridging the gap between internal intention and external reality."
      : "Vi hjælper jer med at se jeres forretning udefra og ind, og bygger bro over gabet mellem jeres interne hensigter og den eksterne virkelighed.",
    
    // 1. Why we exist
    whyTitle: isEn ? "Why PeopleLab X Exists" : "Hvorfor PeopleLab X eksisterer",
    whyDesc: isEn
      ? "To make the invisible visible. When you make vital decisions based on assumptions, historical successes, or internal consensus, you risk missing critical external factors. We provide a rigorous, independent mapping of what potential clients, partners, and competitors actually encounter from the outside. This ensures your commercial decisions are anchored in objective reality and your actual maturity level, rather than internal assumptions."
      : "For at gøre det usynlige synligt. Hvis I som ledelse træffer afgørende forretningsbeslutninger baseret på interne antagelser, historiske succeser eller indbyrdes konsensus, risikerer I at overse væsentlige eksterne faktorer. Vi tilbyder en systematisk, uvildig kortlægning af, hvad jeres potentielle kunder, partnere og konkurrenter reelt møder udefra. Det sikrer, at jeres kommercielle beslutninger er forankret i den faktiske virkelighed og jeres reelle modenhedsniveau, og ikke i jeres egne antagelser.",

    // 2. The Outside-In Principle
    outsideTitle: isEn ? "The Outside-In Principle" : "Udefra og ind-princippet",
    outsideDesc: isEn
      ? "You see your company through your daily efforts, values, and strategic documents. But the outside-in principle goes far deeper than your visible touchpoints. It is about beginning with the reality you must operate in — including what the market expects and requires from you, the standards against which you are assessed, and your actual maturity level. Only then do we move from the inside out to assess how you must adapt, focusing on the changes that create the greatest impact and the strongest results fastest."
      : "I ser jeres virksomhed gennem jeres daglige arbejde, jeres værdier og jeres strategiske planer. Men udefra og ind-princippet stikker dybere end blot jeres synlige kontaktpunkter. Det handler om at begynde med den virkelighed, I skal fungere i — herunder hvad markedet forventer og kræver af jer, hvilke standarder I bliver vurderet imod, og jeres reelle modenhedsniveau. Først derefter bevæger vi os indefra og ud for at vurdere, hvordan I skal tilpasse jer virkeligheden, og hvilke ændringer der skaber størst effekt og de bedste resultater hurtigst.",

    // 3. Human Judgment and Systematics
    judgmentTitle: isEn ? "Human Judgment & Systematics" : "Menneskelig dømmekraft & systematik",
    judgmentDesc: isEn
      ? "B2B buyer behavior and strategic decision patterns cannot be captured by automated tools or data collection alone. It requires experienced human analysis, qualitative understanding, and strategic intuition. We set this human perspective in a highly structured, objective analysis framework, transforming subjective impressions into traceable commercial evidence."
      : "B2B-købsadfærd og strategiske beslutningsmønstre kan ikke fanges af automatiserede værktøjer eller ren dataopsamling alene. Det kræver erfaren menneskelig analyse, kvalitativ forståelse og strategisk intuition. Vi sætter denne menneskelige dømmekraft i en stram, systematisk ramme, der forvandler subjektive indtryk til sporbar forretningsevidens.",

    // 4. AI as an Acceleration Layer
    aiTitle: isEn ? "AI as an Acceleration Layer" : "AI som et accelerationslag",
    aiDesc: isEn
      ? "We utilize artificial intelligence to accelerate data processing, parse complex market patterns, and deepen our investigation. However, AI is strictly used as an acceleration layer. It amplifies our depth but never replaces the personal, critical human judgment and contextual analysis required to formulate reliable guidance for your leadership."
      : "Vi anvender kunstig intelligens til at accelerere databehandling, afkode komplekse markedsmønstre og uddybe vores undersøgelser. AI fungerer dog udelukkende som et accelerationslag. Det forstærker vores dybde, men erstatter aldrig den personlige, kritiske menneskelige vurdering og den kontekstuelle forståelse, der kræves for at rådgive jeres ledelse.",

    // 5. The Three F1 Products Link
    productsTitle: isEn ? "The Three Core Deliverables" : "De tre kerneydelser",
    productsDesc: isEn
      ? "Our products follow a clear progression (See → Understand → Move), allowing you to address problems systematically:"
      : "Vores tre ydelser understøtter en logisk progression (Se → Forstå → Handl), som lader jer løse udfordringer systematisk:",
    productsScan: isEn
      ? "Reality Scan: Map what your market actually encounters, exposing your critical perception gaps."
      : "Reality Scan: Kortlæg, hvad jeres marked reelt møder, og få øje på jeres kritiske perceptionsgab.",
    productsCheck: isEn
      ? "Reality Check: Look behind the signals to diagnose the underlying internal, strategic or commercial barriers."
      : "Reality Check: Se bag signalerne og diagnosticer de bagvedliggende interne, strategiske eller kommercielle barrierer.",
    productsRoadmap: isEn
      ? "Reality Roadmap: Prioritize and sequence your next decisions and investments into a clear action framework."
      : "Reality Roadmap: Prioriter og planlæg jeres kommende beslutninger og investeringer i en klar, operationel rækkefølge.",

    // 6. Commercial Reality Intelligence
    disciplineTitle: isEn ? "Commercial Reality Intelligence" : "Commercial Reality Intelligence",
    disciplineDesc: isEn
      ? "Our long-term direction is the development of Commercial Reality Intelligence as an essential business discipline. We believe that future corporate success belongs to companies that continuously align their visible signals with their actual organizational capabilities, ensuring complete coherence across positioning, sales, and strategy."
      : "Vores langsigtede retning peger mod etableringen af Commercial Reality Intelligence som en ny, nødvendig forretningsdisciplin. Vi tror på, at fremtidens vindere er de virksomheder, der formår kontinuerligt at afstemme deres ydre signaler med deres reelle organisatoriske formåen, så der skabes fuld sammenhæng mellem positionering, salg og strategi.",

    // 7. Responsible Use of Intelligence
    responsibleTitle: isEn ? "Responsible Use of Intelligence" : "Ansvarlig omgang med intelligens",
    responsibleDesc: isEn
      ? "We treat all commercial signals, observations, and diagnostics with absolute confidentiality. We do not publish client names or share findings, and our analysis is conducted with deep respect for both your organization's history and the integrity of your market participants."
      : "Vi behandler alle kommercielle signaler, observationer og diagnosticeringer med fuldstændig fortrolighed. Vi offentliggør ikke klienters navne eller deler resultater, og vores arbejde udføres med dyb respekt for både jeres organisations historik og jeres markedspartneres integritet.",

    ctaText: isEn ? "Start a conversation with us" : "Start en samtale med os",
  };

  const handleCtaClick = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setRoute("/");
      setTimeout(() => {
        const target = document.getElementById("contact-section");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div id="company-page-root" className="pt-24 bg-[#F4F1EA] text-[#171817] font-sans">
      
      {/* 1. Intro Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 space-y-8">
        <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#244C43] block font-bold">
          {t.tag}
        </span>
        <div className="max-w-[900px] space-y-4">
          <h1 className="font-sans font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] uppercase text-[#171817]">
            {t.heading}
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#737771] leading-relaxed max-w-[720px] font-medium">
            {t.subheading}
          </p>
        </div>
      </section>

      {/* 2. Main Editorial Image and Why we exist / Outside-in */}
      <section className="border-y border-[#DDE5E1] py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) - Editorial Photography */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden border border-[#171817]/10 bg-[#DDE5E1] shadow-sm">
              <img
                src={analyticsImg}
                alt="Decision analytics environment"
                className="w-full h-full object-cover brightness-95 contrast-105 hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#244C43] text-white text-[8px] font-mono tracking-widest uppercase py-1 px-2.5 rounded">
                PEOPLELAB X — ANALYSIS SYSTEM
              </div>
            </div>

            <div className="p-6 bg-[#F4F1EA] border border-[#171817]/5 rounded-[4px] space-y-4">
              <div className="flex items-center gap-2 text-[#244C43]">
                <Layers size={18} />
                <span className="font-sans font-bold text-xs uppercase tracking-wider">
                  {isEn ? "OUTSIDE-IN ASSESSMENT" : "UDEFRA OG IND VURDERING"}
                </span>
              </div>
              <p className="text-xs text-[#737771] leading-relaxed whitespace-pre-line">
                {isEn
                  ? "Where are you strong — and where do you lose momentum?\n\nWe examine the factors that shape the market’s overall assessment of you.\n\nThis shows where you meet today’s expectations — and where unclear positioning, weak evidence or insufficient maturity may weaken your market position and commercial impact."
                  : "Hvor står I stærkt — og hvor mister I kraft?\n\nVi undersøger de forhold, der former markedets samlede vurdering af jer.\n\nDet viser, hvor I matcher dagens forventninger — og hvor uklarhed, manglende beviser eller utilstrækkelig modenhed kan svække jeres position og kommercielle gennemslagskraft."}
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols) - Core Statements */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Why PeopleLab X Exists */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#244C43]">
                <Users size={20} />
                <h2 className="font-sans font-bold text-xl uppercase tracking-wide text-[#171817]">
                  {t.whyTitle}
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#737771] leading-relaxed max-w-[580px]">
                {t.whyDesc}
              </p>
            </div>

            {/* The Outside-In Principle */}
            <div className="space-y-4 pt-8 border-t border-[#171817]/10">
              <div className="flex items-center gap-3 text-[#244C43]">
                <Eye size={20} />
                <h2 className="font-sans font-bold text-xl uppercase tracking-wide text-[#171817]">
                  {t.outsideTitle}
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#737771] leading-relaxed max-w-[580px]">
                {t.outsideDesc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Detailed bento of methodologies */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Human Judgment */}
          <div className="bg-white border border-[#171817]/10 p-8 rounded-[4px] space-y-4 shadow-xs">
            <div className="flex justify-between items-center border-b border-[#171817]/5 pb-3">
              <span className="font-mono text-[9px] text-[#244C43] font-bold">
                {isEn ? "METHODOLOGY // HUMAN INTUITION" : "METODE // MENNESKELIG INTUITION"}
              </span>
              <Compass size={16} className="text-[#244C43]" />
            </div>
            <h3 className="font-sans font-bold text-base text-[#171817] uppercase tracking-wide leading-tight">
              {t.judgmentTitle}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#737771] leading-relaxed">
              {t.judgmentDesc}
            </p>
          </div>

          {/* AI as Acceleration */}
          <div className="bg-white border border-[#171817]/10 p-8 rounded-[4px] space-y-4 shadow-xs">
            <div className="flex justify-between items-center border-b border-[#171817]/5 pb-3">
              <span className="font-mono text-[9px] text-[#244C43] font-bold">
                {isEn ? "TECHNOLOGY // ACCELERATION LAYER" : "TEKNOLOGI // ACCELERATIONSLAG"}
              </span>
              <Sparkles size={16} className="text-[#244C43]" />
            </div>
            <h3 className="font-sans font-bold text-base text-[#171817] uppercase tracking-wide leading-tight">
              {t.aiTitle}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#737771] leading-relaxed">
              {t.aiDesc}
            </p>
          </div>

          {/* Products Link */}
          <div className="bg-white border border-[#171817]/10 p-8 rounded-[4px] space-y-4 shadow-xs md:col-span-2">
            <div className="flex justify-between items-center border-b border-[#171817]/5 pb-3">
              <span className="font-mono text-[9px] text-[#244C43] font-bold">
                {isEn ? "THE PRODUCT PORTFOLIO" : "PRODUKTPORTEFØLJEN"}
              </span>
              <Layers size={16} className="text-[#244C43]" />
            </div>
            <h3 className="font-sans font-bold text-base text-[#171817] uppercase tracking-wide leading-tight">
              {t.productsTitle}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#737771] leading-relaxed max-w-[800px]">
              {t.productsDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-4 bg-[#F4F1EA]/50 rounded-[4px] border border-[#171817]/5 space-y-2">
                <span className="font-mono text-[10px] text-[#244C43] font-bold">01 — SEE</span>
                <p className="text-xs text-[#737771] leading-relaxed">{t.productsScan}</p>
              </div>
              <div className="p-4 bg-[#F4F1EA]/50 rounded-[4px] border border-[#171817]/5 space-y-2">
                <span className="font-mono text-[10px] text-[#244C43] font-bold">02 — UNDERSTAND</span>
                <p className="text-xs text-[#737771] leading-relaxed">{t.productsCheck}</p>
              </div>
              <div className="p-4 bg-[#F4F1EA]/50 rounded-[4px] border border-[#171817]/5 space-y-2">
                <span className="font-mono text-[10px] text-[#244C43] font-bold">03 — MOVE</span>
                <p className="text-xs text-[#737771] leading-relaxed">{t.productsRoadmap}</p>
              </div>
            </div>
          </div>

          {/* Commercial Reality Intelligence */}
          <div className="bg-white border border-[#171817]/10 p-8 rounded-[4px] space-y-4 shadow-xs">
            <div className="flex justify-between items-center border-b border-[#171817]/5 pb-3">
              <span className="font-mono text-[9px] text-[#244C43] font-bold">
                {isEn ? "THE DISCIPLINE // FUTURE DIRECTION" : "DISCIPLINEN // LANGSIGTET RETNING"}
              </span>
              <Layers size={16} className="text-[#244C43]" />
            </div>
            <h3 className="font-sans font-bold text-base text-[#171817] uppercase tracking-wide leading-tight">
              {t.disciplineTitle}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#737771] leading-relaxed">
              {t.disciplineDesc}
            </p>
          </div>

          {/* Responsible Use */}
          <div className="bg-white border border-[#171817]/10 p-8 rounded-[4px] space-y-4 shadow-xs">
            <div className="flex justify-between items-center border-b border-[#171817]/5 pb-3">
              <span className="font-mono text-[9px] text-[#244C43] font-bold">
                {isEn ? "ETHICS & PRIVACY // CONFIDENTIALITY" : "ETIK & FORTROLIGHED"}
              </span>
              <Layers size={16} className="text-[#244C43]" />
            </div>
            <h3 className="font-sans font-bold text-base text-[#171817] uppercase tracking-wide leading-tight">
              {t.responsibleTitle}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#737771] leading-relaxed">
              {t.responsibleDesc}
            </p>
          </div>

        </div>

        {/* CTA Back to Contact */}
        <div className="text-center pt-8">
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#244C43] uppercase tracking-wider font-bold hover:underline bg-transparent border-none cursor-pointer"
          >
            <span>{t.ctaText}</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section id="leadership-section" className="bg-[#FBFAF7] border-y-2 border-[#171817]/20 py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 space-y-20">
          
          {/* Section tag and Intro Header with high-contrast, robust left system border */}
          <div className="border-l-4 border-[#244C43] pl-6 md:pl-8 space-y-6 max-w-[900px]">
            <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#244C43] font-bold block">
              {isEn ? "LEADERSHIP" : "LEDELSE"}
            </span>
            <h2 className="font-sans font-bold text-[clamp(2.5rem,6vw,4.2rem)] leading-[0.95] uppercase text-[#171817] tracking-tight">
              {tLeadership.title}
            </h2>
            {tLeadership.subtitle && (
              <p className="font-sans text-xl md:text-2xl text-[#171817] font-semibold leading-relaxed tracking-tight">
                {tLeadership.subtitle}
              </p>
            )}
          </div>

          {/* Intro Narrative text (asymmetrical layout with high contrast) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-4">
            <div className="lg:col-span-7 space-y-6 text-[#424641] text-base md:text-lg leading-relaxed font-sans font-weight-body">
              {tLeadership.intro1 && <p className="font-weight-semibold text-[#171817] text-lg md:text-xl leading-relaxed">{tLeadership.intro1}</p>}
              {tLeadership.intro2 && <p>{tLeadership.intro2}</p>}
              {tLeadership.intro3 && <p>{tLeadership.intro3}</p>}
            </div>
            <div className="lg:col-span-5 space-y-6 text-[#424641] text-base md:text-lg leading-relaxed font-sans font-weight-body lg:border-l-2 lg:border-[#171817]/15 lg:pl-12">
              {tLeadership.intro4 && <p>{tLeadership.intro4}</p>}
              {tLeadership.outro && <p className="font-weight-bold text-[#244C43] italic text-lg md:text-xl leading-relaxed">{tLeadership.outro}</p>}
            </div>
          </div>

          {/* Profiles Grid - Two robust columns with strict aspect ratio, no card borders or shadows */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 pt-16 border-t border-[#171817]/15">
            
            {/* Cyril Alstrup Profile */}
            <div className="md:col-span-6 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="relative aspect-[4/5] w-full max-w-[540px] overflow-hidden rounded-none border-2 border-[#171817]/15 bg-[#F4F1EA] group transition-all duration-300">
                  {hasCyrilPortrait ? (
                    <img
                      src={undefined /* cyrilPortrait */}
                      alt={tLeadership.cyril.alt}
                      className="w-full h-full object-cover object-center filter grayscale brightness-[0.98] contrast-[1.05] group-hover:scale-[1.02] transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F4F1EA] select-none">
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#244C43] font-bold mb-3">
                        {tLeadership.pendingText}
                      </span>
                      <span className="text-xs font-sans text-[#424641] max-w-[280px] leading-relaxed">
                        {isEn 
                          ? "Original portrait (_AM25419.jpeg) is pending upload." 
                          : "Det autentiske portrætfoto (_AM25419.jpeg) afventer upload."}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#244C43] text-white text-[9px] font-mono tracking-widest uppercase py-1.5 px-3.5 font-bold">
                    {tLeadership.cyril.title.toUpperCase()}
                  </div>
                </div>
                <div className="space-y-4 max-w-[540px]">
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-weight-bold text-2xl md:text-3xl uppercase tracking-tight text-[#171817]">
                      {tLeadership.cyril.name}
                    </h3>
                    <span className="font-mono text-xs md:text-sm text-[#244C43] font-bold uppercase tracking-wider block">
                      {tLeadership.cyril.title}
                    </span>
                  </div>
                  <div className="font-sans text-base text-[#424641] space-y-4 leading-relaxed pt-2">
                    {tLeadership.cyril.bio1 && <p className="font-weight-semibold text-[#171817] text-lg leading-relaxed">{tLeadership.cyril.bio1}</p>}
                    {tLeadership.cyril.bio2 && <p>{tLeadership.cyril.bio2}</p>}
                    {tLeadership.cyril.bio3 && <p>{tLeadership.cyril.bio3}</p>}
                  </div>
                </div>
              </div>
              {tLeadership.cyril.linkedin && (
                <div className="pt-4">
                  <a
                    href={tLeadership.cyril.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isEn ? "View Cyril Alstrup on LinkedIn" : "Se Cyril Alstrup på LinkedIn"}
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-[#244C43] hover:text-[#171817] font-bold uppercase tracking-wider group transition-colors"
                  >
                    <span className="underline decoration-2 underline-offset-4">{isEn ? "View Cyril on LinkedIn" : "Se Cyril på LinkedIn"}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>

            {/* Christian Lahn Høyer Profile */}
            <div className="md:col-span-6 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="relative aspect-[4/5] w-full max-w-[540px] overflow-hidden rounded-none border-2 border-[#171817]/15 bg-[#F4F1EA] group transition-all duration-300">
                  {hasChristianPortrait ? (
                    <img
                      src={undefined /* christianPortrait */}
                      alt={tLeadership.christian.alt}
                      className="w-full h-full object-cover object-center filter grayscale brightness-[0.98] contrast-[1.05] group-hover:scale-[1.02] transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F4F1EA] select-none">
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#244C43] font-bold mb-3">
                        {tLeadership.pendingText}
                      </span>
                      <span className="text-xs font-sans text-[#424641] max-w-[280px] leading-relaxed">
                        {isEn 
                          ? "Original portrait is pending upload." 
                          : "Det autentiske portrætfoto afventer upload."}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#244C43] text-white text-[9px] font-mono tracking-widest uppercase py-1.5 px-3.5 font-bold">
                    {tLeadership.christian.title.toUpperCase()}
                  </div>
                </div>
                <div className="space-y-4 max-w-[540px]">
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-weight-bold text-2xl md:text-3xl uppercase tracking-tight text-[#171817]">
                      {tLeadership.christian.name}
                    </h3>
                    <span className="font-mono text-xs md:text-sm text-[#244C43] font-bold uppercase tracking-wider block">
                      {tLeadership.christian.title}
                    </span>
                  </div>
                  <div className="font-sans text-base text-[#424641] space-y-4 leading-relaxed pt-2">
                    {tLeadership.christian.bio1 && <p className="font-weight-semibold text-[#171817] text-lg leading-relaxed">{tLeadership.christian.bio1}</p>}
                    {tLeadership.christian.bio2 && <p>{tLeadership.christian.bio2}</p>}
                    {tLeadership.christian.bio3 && <p>{tLeadership.christian.bio3}</p>}
                  </div>
                </div>
              </div>
              {tLeadership.christian.linkedin && (
                <div className="pt-4">
                  <a
                    href={tLeadership.christian.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isEn ? "View Christian Lahn Høyer on LinkedIn" : "Se Christian Lahn Høyer på LinkedIn"}
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-[#244C43] hover:text-[#171817] font-bold uppercase tracking-wider group transition-colors"
                  >
                    <span className="underline decoration-2 underline-offset-4">{isEn ? "View Christian on LinkedIn" : "Se Christian on LinkedIn"}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 5. Concluding Contact Section */}
      <ContactOpening currentLanguage={currentLanguage} />

    </div>
  );
}
