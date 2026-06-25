import React from "react";
import { motion } from "motion/react";
import { ArrowRight, HelpCircle, Eye, Compass, ShieldCheck, Ban, CheckCircle2 } from "lucide-react";

interface ProductPageProps {
  currentLanguage: "da" | "en";
  productPath: "/reality-scan" | "/reality-check" | "/reality-roadmap";
  setRoute: (route: string) => void;
}

export default function ProductPage({ currentLanguage, productPath, setRoute }: ProductPageProps) {
  const isEn = currentLanguage === "en";

  // Texts for Reality Scan
  const scanData = {
    tag: isEn ? "01 — EXTERNAL SIGNAL AUDIT" : "01 — EKSTERN SIGNALANALYSE",
    heading: "Reality Scan",
    subheading: isEn
      ? "See how your company is understood, assessed and chosen from the outside."
      : "Se hvordan jeres virksomhed forstås, vurderes og vælges udefra.",
    whenRelevantTitle: isEn ? "When is Reality Scan relevant for you?" : "Hvornår er Reality Scan relevant for jer?",
    whenRelevantDesc: isEn
      ? "A Reality Scan is critical when you suspect a mismatch between your actual professional capabilities and the visible signals you make public. If you experience that high-value opportunities bypass you, or that sales dialogue is drawn into a price war, your external positioning is likely unclear or misunderstood."
      : "Et Reality Scan er afgørende, når I mistænker et gab mellem jeres reelle faglige formåen og de synlige signaler, I sender til markedet. Hvis I oplever, at attraktive kunder overser jer, eller at salgsdialogen hurtigt trækker ud i en diskussion om pris, er det ofte et tegn på, at jeres eksterne positionering er uklar eller fejlfortolket.",
    investigatesTitle: isEn ? "What do we investigate?" : "Hvad undersøger PeopleLab X?",
    investigatesDesc: isEn
      ? "Where are you strong — and where do you lose momentum?\n\nWe examine the factors that shape the market’s overall assessment of you.\n\nThis shows where you meet today’s expectations — and where unclear positioning, weak evidence or insufficient maturity may weaken your market position and commercial impact."
      : "Hvor står I stærkt — og hvor mister I kraft?\n\nVi undersøger de forhold, der former markedets samlede vurdering af jer.\n\nDet viser, hvor I matcher dagens forventninger — og hvor uklarhed, manglende beviser eller utilstrækkelig modenhed kan svække jeres position og kommercielle gennemslagskraft.",
    investigatesItems: isEn
      ? [
          "Core positioning: What role do you claim to own in the market?",
          "Value clarity: Is your primary advantage obvious within 15 seconds?",
          "Traceable evidence: Do your cases and documentation prove your claims?",
          "Digital authority: Does your website present you as an authoritative category leader?",
          "Employee profiles: Are your key people visible and aligned as specialized experts?",
          "Competitive comparison: How do you stand out among actual alternative choices?",
          "Risk signals: Are there subconscious friction points triggering buyer caution?",
          "Call to action: Is the path to complex strategic dialogue clear and respectful?",
        ]
      : [
          "Kerne-positionering: Hvilken rolle påstår I at besidde i markedet?",
          "Værditydelighed: Er jeres primære fordel indlysende på 15 sekunder?",
          "Sporbar dokumentation: Beviser jeres cases og dokumentation jeres påstande?",
          "Digital autoritet: Fremstår jeres website som en autoritativ markedsleder?",
          "Medarbejderprofiler: Er jeres nøglepersoner synlige og afstemte som fagspecifikke eksperter?",
          "Konkurrent-sammenligning: Hvordan differentierer I jer mod de faktiske alternative valg?",
          "Risikosignaler: Er der ubevidste friktionspunkter, der skaber unødig tvivl hos køberen?",
          "Kontaktpunkter: Er vejen til den dybe, strategiske dialog enkel og respektfuld?",
        ],
    processTitle: isEn ? "How does the process work?" : "Hvordan foregår processen?",
    processDesc: isEn
      ? "We work strictly outside-in. We do not begin with your internal explanations, slide decks, or ambitions. Instead, we map and analyze what the market actually encounters when they evaluate you. This ensures a 100% objective, evidence-based assessment of your visible brand."
      : "Vi arbejder konsekvent udefra-og-ind. Vi begynder ikke med jeres interne forklaringer, præsentationsmaterialer eller hensigter. I stedet kortlægger og analyserer vi det, som markedet reelt møder, når de vurderer jer. Det sikrer en 100% objektiv, bevisbaseret vurdering af jeres synlige profil.",
    getsTitle: isEn ? "What do you receive?" : "Hvad får I?",
    getsDesc: isEn
      ? "You receive a documented management report that categorizes observations into clear, actionable sections:"
      : "I modtager en dokumenteret ledelsesrapport, som strukturerer observationerne i overskuelige afsnit:",
    getsItems: isEn
      ? [
          "An executive summary of how you are understood and assessed udefra.",
          "Clear classification of strengths that support your position.",
          "Identification of weak points, doubts, and critical perception gaps.",
          "Specific recommendations on what should be adjusted first.",
          "A personal management review where we present findings and discuss next steps.",
        ]
      : [
          "Et samlet ledelsesoverblik over, hvordan I forstår og vurderes udefra.",
          "Klar kategorisering af de styrker, der understøtter jeres position.",
          "Identifikation af svagheder, tvivlsspørgsmål og kritiske perceptionsgab.",
          "Konkrete anbefalinger til, hvad der bør justeres først.",
          "En personlig ledelsesgennemgang, hvor vi præsenterer resultaterne og drøfter vejen frem.",
        ],
    isNotTitle: isEn ? "What the product is NOT" : "Hvad produktet IKKE er",
    isNotDesc: isEn
      ? "Reality Scan is not an automated SEO report, a design review, or a simple collection of marketing advice. It is a highly specialized strategic analysis of B2B decision signals. We do not sell websites or campaign implementation, which ensures our analysis remains entirely unbiased and objective."
      : "Reality Scan er ikke en automatiseret SEO-rapport, en designvurdering eller en simpel samling af marketinggode råd. Det er en højt specialiseret strategisk analyse af B2B-beslutningssignaler. Vi sælger ikke hjemmesider eller kampagneimplementering, hvilket sikrer, at vores analyse forbliver fuldstændig uvildig og objektiv.",
    nextStepTitle: isEn ? "The natural next step" : "Det naturlige næste trin",
    nextStepDesc: isEn
      ? "We start with a conversation to understand where you stand and what makes a Reality Scan relevant for your situation."
      : "Vi starter med en indledende samtale for at forstå, hvor I står, og hvad der gør et Reality Scan relevant for jeres situation.",
    cta: isEn ? "Start a Reality Scan" : "Bestil et Reality Scan",
  };

  // Texts for Reality Check
  const checkData = {
    tag: isEn ? "02 — DIAGNOSTIC & ROOT-CAUSE ANALYSIS" : "02 — DIAGONSTIK & ÅRSAGSANALYSE",
    heading: "Reality Check",
    subheading: isEn
      ? "An outside-in assessment of how well your company matches the reality the market places in front of you."
      : "En udefra-og-ind vurdering af, hvor godt jeres virksomhed matcher den virkelighed, markedet stiller jer overfor.",
    whenRelevantTitle: isEn ? "When is Reality Check relevant for you?" : "Hvornår er Reality Check relevant for jer?",
    whenRelevantDesc: isEn
      ? "The analysis examines market demands, your current level of maturity and the factors that affect your ability to be understood, assessed, chosen and developed.\n\nThe result is not a long list of possible improvements. You receive a prioritised assessment of the changes most likely to create the greatest impact and the strongest results fastest.\n\nMaturity is not only about how developed your company is internally. It shows the distance between:\n• what the market expects today\n• what your company currently delivers\n• what is required to move to the next relevant level\n\nThe maturity ladder is therefore used to assess which demands you already meet, where you lose strength and which changes will move you furthest."
      : "Analysen undersøger både markedets krav, jeres aktuelle modenhed og de forhold, der påvirker jeres evne til at blive forstået, vurderet, valgt og udviklet.\n\nResultatet er ikke en lang liste af forbedringsmuligheder. I får en prioriteret vurdering af, hvilke ændringer der kan skabe størst effekt og de bedste resultater hurtigst.\n\nModenhed handler ikke kun om, hvor udviklet jeres virksomhed er internt. Den viser afstanden mellem:\n• det markedet forventer i dag\n• det jeres virksomhed faktisk leverer\n• det der skal til for at bevæge jer til næste relevante niveau\n\nModenhedsstigen bruges derfor til at vurdere, hvilke krav I allerede matcher, hvor I mister styrke, og hvilke ændringer der vil flytte jer mest.",
    investigatesTitle: isEn ? "What do we investigate?" : "Hvad undersøger PeopleLab X?",
    investigatesDesc: isEn
      ? "We dive behind the external signals and investigate the underlying internal causes of perception friction:"
      : "Vi ser bag de eksterne signaler og undersøger de bagvedliggende interne årsager til, at der opstår friktion i markedets opfattelse:",
    investigatesItems: isEn
      ? [
          "Value alignment: Is your value language understood and shared across sales, marketing, and leadership?",
          "Evidence portfolio: Do your internal operational systems collect and structure the proof the market expects?",
          "Specialization barriers: What internal systems lock you in your legacy category?",
          "Commercial friction: Where do high-tier technical capabilities get lost in the transition to the market?",
        ]
      : [
          "Værdisproget: Er jeres interne forankring af værdibudskaber afstemt på tværs af salg, marketing og ledelse?",
          "Bevisbyrden: Indsamler og strukturerer jeres interne processer de beviser, som markedet reelt efterspørger?",
          "Kategorilåse: Hvilke organisatoriske vaner eller strukturer fastholder jer i jeres historiske kategori?",
          "Kommerciel friktion: Hvor taber jeres stærkeste faglige rådgivning kraft i overgangen fra internt til eksternt?",
        ],
    processTitle: isEn ? "How does the process work?" : "Hvordan foregår processen?",
    processDesc: isEn
      ? "We conduct deep-dive qualitative audits of your commercial workflows, interview key internal stakeholders, and compare internal perceptions directly with the independent findings from the Reality Scan. This isolates the precise organizational drivers that dilute your value."
      : "Vi gennemfører kvalitative audits af jeres kommercielle arbejdsprocesser, interviewer nøglepersoner i organisationen og sammenholder jeres interne opfattelser direkte med de uvildige observationer fra Reality Scan. Derved isolerer vi de organisatoriske årsager, der svækker jeres værdi.",
    getsTitle: isEn ? "What do you receive?" : "Hvad får I?",
    getsDesc: isEn
      ? "You receive a comprehensive root-cause diagnostic profile:"
      : "I modtager en dybdegående diagnosticering af jeres kommercielle barrierer:",
    getsItems: isEn
      ? [
          "An isolation of organizational and strategic friction points.",
          "A clear map of where your commercial energy and technical expertise are lost.",
          "Actionable diagnostics separating superficial marketing symptoms from deep organizational causes.",
          "A structured basis for aligning your internal value language across departments.",
        ]
      : [
          "En præcisering af jeres organisatoriske og strategiske friktionspunkter.",
          "Et klart kort over, hvor jeres kommercielle energi og faglige dybde siver ud.",
          "En diagnose, der adskiller overfladiske marketingsymptomer fra reelle organisatoriske årsager.",
          "Et konkret grundlag for at harmonisere jeres værdisprog på tværs af afdelinger.",
        ],
    isNotTitle: isEn ? "What the product is NOT" : "Hvad produktet IKKE er",
    isNotDesc: isEn
      ? "Reality Check is not a general HR survey, workplace assessment, or a generic organizational consult. It is a strictly commercial audit focused solely on the internal structural barriers that damage your market positioning."
      : "Reality Check er ikke en trivselsmåling, en HR-undersøgelse eller en generel organisationsudvikling. Det er en målrettet kommerciel diagnosticering af de interne barrierer, der blokerer for jeres gennemslagskraft i markedet.",
    nextStepTitle: isEn ? "The natural next step" : "Det naturlige næste trin",
    nextStepDesc: isEn
      ? "A diagnostic discussion to clarify your commercial challenges and evaluate if a Reality Check is the right approach for your team."
      : "En diagnostisk samtale, hvor vi afklarer jeres kommercielle udfordringer og vurderer, om et Reality Check er den rigtige vej frem for jeres ledelse.",
    cta: isEn ? "Discuss a Reality Check" : "Anmod om et Reality Check",
  };

  // Texts for Reality Roadmap
  const roadmapData = {
    tag: isEn ? "03 — PRIORITIZATION & SEQUENCING" : "03 — PRIORITERING & BESLUTNINGSREKKFØLGE",
    heading: "Reality Roadmap",
    subheading: isEn
      ? "Prioritize the initiatives that change reality — not simply those that are easiest to start."
      : "Prioriter de initiativer, der flytter virkeligheden — ikke blot dem, der er lettest at starte.",
    whenRelevantTitle: isEn ? "When is Reality Roadmap relevant for you?" : "Hvornår er Reality Roadmap relevant for jer?",
    whenRelevantDesc: isEn
      ? "PeopleLab X does not recommend everything that could be improved.\n\nWe prioritise what:\n• matters most\n• can create the greatest impact\n• is most realistic to implement\n• can produce the strongest results fastest."
      : "PeopleLab X anbefaler ikke alt, der kan forbedres.\n\nVi prioriterer det, der:\n• har størst betydning\n• kan skabe størst effekt\n• er mest realistisk at gennemføre\n• kan give de bedste resultater hurtigst.",
    investigatesTitle: isEn ? "What do we investigate?" : "Hvad undersøger PeopleLab X?",
    investigatesDesc: isEn
      ? "We analyze the logical dependencies and sequence of your strategic choices:"
      : "Vi analyserer de logiske sammenhænge og rækkefølgen af jeres strategiske valg:",
    investigatesItems: isEn
      ? [
          "Barriers: Which obstacles must be removed before other commercial investments make sense?",
          "Velocity: Which decisions will create the fastest and most sustainable market progression?",
          "Resources: How do you focus your management's attention and capital on the right tasks?",
          "Tracking: What milestones and parameters should be used to monitor your positioning health?",
        ]
      : [
          "Barrierer: Hvilke hindringer skal ryddes af vejen, før andre kommercielle investeringer giver mening?",
          "Fremdrift: Hvilke beslutninger skaber den hurtigste og mest holdbare markedsfremgang?",
          "Ressourcer: Hvordan fokuserer I ledelsens opmærksomhed og ressourcer på de rigtige opgaver?",
          "Målinger: Hvilke parametre skal I følge for at sikre, at jeres ydre signal udvikler sig rigtigt?",
        ],
    processTitle: isEn ? "How does the process work?" : "Hvordan foregår processen?",
    processDesc: isEn
      ? "In close collaboration with your leadership team, we synthesize the diagnostic findings into a structured progression plan. We determine which issues deserve immediate attention and map out a logical timeline for your next 6 to 12 months."
      : "I tæt samarbejde med jeres ledelse omsætter vi analysens resultater til en struktureret retningsplan. Vi fastlægger, hvilke opgaver der kræver øjeblikkelig handling, og tegner en logisk tidslinje for jeres næste 6-12 måneder.",
    getsTitle: isEn ? "What do you receive?" : "Hvad får I?",
    getsDesc: isEn
      ? "You receive a prioritized, strategic sequence framework:"
      : "I modtager en prioriteret og strategisk beslutningsplan:",
    getsItems: isEn
      ? [
          "A tailored 6-to-12 month sequencing framework with concrete milestones.",
          "Clear ownership, metrics, and risk limits for each phase.",
          "A joint leadership alignment on what to fix first, saving capital and effort.",
          "A defined framework for harmonizing sales and marketing around a single value language.",
        ]
      : [
          "En skræddersyet handlings- og prioriteringsplan over 6-12 måneder med klare milepæle.",
          "Klart defineret ansvar, målinger og risikorammer for hver fase.",
          "Fælles ledelsesafstemning om, hvad der skal løses først, hvilket sparer tid og kapital.",
          "En defineret model for at harmonisere salg og marketing omkring et fælles værdisprog.",
        ],
    isNotTitle: isEn ? "What the product is NOT" : "Hvad produktet IKKE er",
    isNotDesc: isEn
      ? "Reality Roadmap is not a generic marketing activity plan, a list of campaign dates, or loose strategic advice. It is a rigorous sequencing tool designed to maximize your commercial speed and focus."
      : "Reality Roadmap er ikke en generisk aktivitetsplan for marketing, en liste med kampagnedatoer eller uforpligtende strategiske råd. Det er et operationelt prioriteringsværktøj, der sikrer maksimal kommerciel hastighed og ledelsesfokus.",
    nextStepTitle: isEn ? "The natural next step" : "Det naturlige næste trin",
    nextStepDesc: isEn
      ? "A strategic conversation about your long-term commercial goals and how to map your prioritized path forward."
      : "En strategisk samtale om jeres langsigtede mål, og hvordan vi sammen lægger jeres prioriterede vej fremad.",
    cta: isEn ? "Order a Reality Roadmap" : "Få et Reality Roadmap",
  };

  const currentData =
    productPath === "/reality-scan"
      ? scanData
      : productPath === "/reality-check"
      ? checkData
      : roadmapData;

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

  const getHeaderIcon = () => {
    if (productPath === "/reality-scan") return <Eye className="text-[#244C43] w-12 h-12" />;
    if (productPath === "/reality-check") return <Compass className="text-[#DFFF54] w-12 h-12" />;
    return <ShieldCheck className="text-[#244C43] w-12 h-12" />;
  };

  const isDark = productPath === "/reality-check";
  const secText = isDark ? "text-[#D7DAD5]" : "text-[#424641]";
  const primText = isDark ? "text-[#FBFAF7]" : "text-[#171817]";

  return (
    <div
      id="product-page-root"
      className={`pt-24 font-sans min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#171817] text-[#FBFAF7]" : "bg-[#F4F1EA] text-[#171817]"
      }`}
    >
      {/* 1. Header Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-8 border-current/10">
          <div className="space-y-4 max-w-[850px]">
            <span
              className={`text-[11px] font-mono uppercase tracking-[0.16em] block font-bold ${
                isDark ? "text-[#DFFF54]" : "text-[#244C43]"
              }`}
            >
              {currentData.tag}
            </span>
            <h1 className="font-sans font-bold text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] uppercase">
              {currentData.heading}
            </h1>
            <p className={`font-sans text-xl md:text-2xl leading-relaxed font-semibold max-w-[720px] ${secText}`}>
              {currentData.subheading}
            </p>
          </div>
          <div className="shrink-0 p-4 rounded-full bg-current/5 flex items-center justify-center">
            {getHeaderIcon()}
          </div>
        </div>
      </section>

      {/* 2. When Relevant & Product Investigation */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: When is it relevant */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className={isDark ? "text-[#DFFF54]" : "text-[#244C43]"} size={22} />
              <h2 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-wide">
                {currentData.whenRelevantTitle}
              </h2>
            </div>
            <p className={`text-base md:text-lg leading-relaxed whitespace-pre-line ${secText}`}>
              {currentData.whenRelevantDesc}
            </p>
          </div>

          {/* Right Column: What do we investigate */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-wide">
              {currentData.investigatesTitle}
            </h2>
            <p className={`text-sm leading-relaxed whitespace-pre-line ${secText}`}>
              {currentData.investigatesDesc}
            </p>
            <ul className="space-y-3 pl-0 list-none">
              {currentData.investigatesItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${
                      isDark ? "bg-[#DFFF54]" : "bg-[#244C43]"
                    }`}
                  />
                  <span className={`font-medium ${primText}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Process & Deliverables Grid */}
      <section className={`py-20 border-y ${isDark ? "bg-black/20 border-white/10" : "bg-white border-[#171817]/10"}`}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: How process works */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-wide">
              {currentData.processTitle}
            </h2>
            <p className={`text-sm md:text-base leading-relaxed ${secText}`}>
              {currentData.processDesc}
            </p>
          </div>

          {/* Right Column: What do you receive */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans font-bold text-xl md:text-2xl uppercase tracking-wide">
              {currentData.getsTitle}
            </h2>
            <p className={`text-sm leading-relaxed ${secText}`}>
              {currentData.getsDesc}
            </p>
            <div className="grid grid-cols-1 gap-4">
              {currentData.getsItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 border rounded-[4px] flex gap-3 ${
                    isDark ? "bg-white/[0.02] border-white/10" : "bg-[#F4F1EA]/50 border-[#171817]/5"
                  }`}
                >
                  <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isDark ? "text-[#DFFF54]" : "text-[#244C43]"}`} />
                  <span className={`text-xs md:text-sm leading-relaxed ${primText}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. What product is NOT & Next Step */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* What it is not */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3 text-[#C96F4A]">
              <Ban size={20} />
              <h2 className="font-sans font-bold text-lg md:text-xl uppercase tracking-wide text-[#C96F4A]">
                {currentData.isNotTitle}
              </h2>
            </div>
            <p className={`text-xs md:text-sm leading-relaxed ${secText}`}>
              {currentData.isNotDesc}
            </p>
          </div>

          {/* Next natural step & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans font-bold text-lg md:text-xl uppercase tracking-wide">
              {currentData.nextStepTitle}
            </h2>
            <p className={`text-xs md:text-sm leading-relaxed ${secText}`}>
              {currentData.nextStepDesc}
            </p>
            <button
              id="product-cta-btn"
              onClick={handleCtaClick}
              className={`h-14 px-8 font-sans font-bold text-xs tracking-wider uppercase rounded-[4px] border-none cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 ${
                isDark
                  ? "bg-[#DFFF54] hover:bg-[#DFFF54]/90 text-[#171817]"
                  : "bg-[#244C43] hover:bg-[#244C43]/90 text-white"
              }`}
            >
              <span>{currentData.cta}</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
