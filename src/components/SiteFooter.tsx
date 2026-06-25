import React from "react";

interface SiteFooterProps {
  currentLanguage: "da" | "en";
  setRoute: (route: string) => void;
  openPrivacy: () => void;
}

export default function SiteFooter({ currentLanguage, setRoute, openPrivacy }: SiteFooterProps) {
  const isEn = currentLanguage === "en";

  const t = {
    about: isEn
      ? "B2B perception and corporate decision intelligence. We show how companies are understood, assessed and chosen from the outside."
      : "B2B perception og beslutningsintelligens. Vi viser, hvordan virksomheder bliver forstået, vurderet og valgt udefra.",
    products: isEn ? "Products" : "Produkter",
    company: isEn ? "Company" : "Virksomhed",
    connect: isEn ? "Connect" : "Forbindelser",
    scan: "Reality Scan",
    check: "Reality Check",
    roadmap: "Reality Roadmap",
    howWeWork: isEn ? "How we work" : "Sådan arbejder vi",
    aboutUs: "PeopleLab X",
    privacy: isEn ? "Privacy Policy" : "Privatlivspolitik",
    contact: isEn ? "Contact" : "Kontakt os",
    version: "PEOPLELAB X A/S — Version 1.2",
    rights: isEn ? "© 2026 PeopleLab X. All rights reserved." : "© 2026 PeopleLab X. Alle rettigheder forbeholdes.",
  };

  const handleLinkClick = (path: string) => {
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId: string) => {
    setRoute("/");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer
      id="global-site-footer"
      className="bg-[#171817] text-[#FBFAF7]/50 py-16 px-6 md:px-12 lg:px-20 border-t border-white/5 text-[13px] font-sans"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column: Brand wordmark & description */}
        <div className="md:col-span-4 space-y-4">
          <button
            onClick={() => {
              setRoute("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-sans font-bold tracking-tight text-white text-lg bg-transparent border-none cursor-pointer p-0"
          >
            PEOPLELAB <span className="text-[#DFFF54] font-black">X</span>
          </button>
          <p className="max-w-xs text-xs text-[#DDE5E1]/60 leading-relaxed">
            {t.about}
          </p>
        </div>

        {/* Center columns */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-12">
          {/* Products */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.15em] block font-bold">
              {t.products}
            </span>
            <ul className="space-y-2 pl-0">
              <li>
                <button
                  onClick={() => handleLinkClick("/reality-scan")}
                  className="hover:text-[#DFFF54] transition text-left text-[13px] text-[#FBFAF7]/70 font-medium font-sans bg-transparent border-none cursor-pointer"
                >
                  {t.scan}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/reality-check")}
                  className="hover:text-[#DFFF54] transition text-left text-[13px] text-[#FBFAF7]/70 font-medium font-sans bg-transparent border-none cursor-pointer"
                >
                  {t.check}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/reality-roadmap")}
                  className="hover:text-[#DFFF54] transition text-left text-[13px] text-[#FBFAF7]/70 font-medium font-sans bg-transparent border-none cursor-pointer"
                >
                  {t.roadmap}
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.15em] block font-bold">
              {t.company}
            </span>
            <ul className="space-y-2 pl-0">
              <li>
                <button
                  onClick={() => handleLinkClick("/peoplelab-x")}
                  className="hover:text-[#DFFF54] transition text-left text-[13px] text-[#FBFAF7]/70 font-medium font-sans bg-transparent border-none cursor-pointer"
                >
                  {t.aboutUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("how-we-work-section")}
                  className="hover:text-[#DFFF54] transition text-left text-[13px] text-[#FBFAF7]/70 font-medium font-sans bg-transparent border-none cursor-pointer"
                >
                  {t.howWeWork}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("contact-section")}
                  className="hover:text-[#DFFF54] transition text-left text-[13px] text-[#FBFAF7]/70 font-medium font-sans bg-transparent border-none cursor-pointer"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Connections */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.15em] block font-bold">
              {t.connect}
            </span>
            <ul className="space-y-2 pl-0">
              <li>
                <a
                  href="https://www.linkedin.com/company/peoplelabx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DFFF54] transition text-[13px] text-[#FBFAF7]/70 font-medium font-sans"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <button
                  onClick={openPrivacy}
                  className="hover:text-[#DFFF54] transition text-left text-[13px] text-[#FBFAF7]/70 font-medium font-sans bg-transparent border-none cursor-pointer p-0"
                >
                  {t.privacy}
                </button>
              </li>
              <li className="text-[#FBFAF7]/30 text-xs font-mono pt-2">
                office@peoplelabx.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto border-t border-white/5 mt-16 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-white/30 font-mono">
        <span>{t.version}</span>
        <span>{t.rights}</span>
      </div>
    </footer>
  );
}
