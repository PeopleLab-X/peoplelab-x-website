import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SiteHeaderProps {
  currentLanguage: "da" | "en";
  setLanguage: (lang: "da" | "en") => void;
  currentRoute: string;
  setRoute: (route: string) => void;
  theme?: "light" | "dark";
}

export default function SiteHeader({
  currentLanguage,
  setLanguage,
  currentRoute,
  setRoute,
  theme = "light",
}: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    da: {
      products: "Produkter",
      howWeWork: "Sådan arbejder vi",
      peoplelabX: "PeopleLab X",
      startConversation: "Start en samtale",
      scan: "Reality Scan",
      check: "Reality Check",
      roadmap: "Reality Roadmap",
    },
    en: {
      products: "Products",
      howWeWork: "How we work",
      peoplelabX: "PeopleLab X",
      startConversation: "Start a conversation",
      scan: "Reality Scan",
      check: "Reality Check",
      roadmap: "Reality Roadmap",
    },
  }[currentLanguage];

  const handleLogoClick = () => {
    setRoute("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductSelect = (path: string) => {
    setRoute(path);
    setProductsOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionNavigate = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentRoute !== "/") {
      setRoute("/");
      // wait for home to mount then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="site-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4F1EA]/95 border-b border-[#171817]/5 py-3 shadow-sm backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <button
            id="site-logo"
            onClick={handleLogoClick}
            className="flex items-center gap-1.5 font-sans font-bold tracking-tight text-[#171817] text-[20px] md:text-[22px] bg-transparent border-none cursor-pointer focus:outline-none"
          >
            PEOPLELAB <span className="text-[#244C43] font-black">X</span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-8 xl:gap-10 font-sans">
            {/* Products dropdown trigger */}
            <div className="relative">
              <button
                id="header-products-trigger"
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                className={`relative flex items-center gap-1 text-[#171817] hover:text-[#244C43] text-xs font-mono uppercase tracking-wide font-weight-semibold bg-transparent border-none cursor-pointer py-2 focus:outline-none transition-all duration-150 ${
                  ["/reality-scan", "/reality-check", "/reality-roadmap"].includes(currentRoute)
                    ? "text-[#244C43] border-b-2 border-[#244C43]"
                    : "border-b-2 border-transparent"
                }`}
              >
                {t.products} <ChevronDown size={14} className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    id="products-dropdown-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, easing: [0.22, 1, 0.36, 1] }}
                    onMouseLeave={() => setProductsOpen(false)}
                    className="absolute top-full left-0 mt-1 w-52 bg-[#F4F1EA] border-2 border-[#171817]/15 rounded-none shadow-md py-2 flex flex-col z-50"
                  >
                    <button
                      onClick={() => handleProductSelect("/reality-scan")}
                      className="px-5 py-3 text-left text-xs font-sans font-weight-bold text-[#171817] hover:bg-[#244C43]/10 hover:text-[#244C43] transition-colors"
                    >
                      {t.scan}
                    </button>
                    <button
                      onClick={() => handleProductSelect("/reality-check")}
                      className="px-5 py-3 text-left text-xs font-sans font-weight-bold text-[#171817] hover:bg-[#244C43]/10 hover:text-[#244C43] transition-colors"
                    >
                      {t.check}
                    </button>
                    <button
                      onClick={() => handleProductSelect("/reality-roadmap")}
                      className="px-5 py-3 text-left text-xs font-sans font-weight-bold text-[#171817] hover:bg-[#244C43]/10 hover:text-[#244C43] transition-colors"
                    >
                      {t.roadmap}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              id="header-how-we-work"
              onClick={() => handleSectionNavigate("how-we-work-section")}
              className={`text-[#171817] hover:text-[#244C43] text-xs font-mono uppercase tracking-wide font-weight-semibold bg-transparent border-none cursor-pointer py-2 transition-all duration-150 ${
                currentRoute === "/"
                  ? "text-[#244C43] border-b-2 border-[#244C43]"
                  : "border-b-2 border-transparent"
              }`}
            >
              {t.howWeWork}
            </button>

            <button
              id="header-peoplelab-x"
              onClick={() => {
                setRoute("/peoplelab-x");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-[#171817] hover:text-[#244C43] text-xs font-mono uppercase tracking-wide font-weight-semibold bg-transparent border-none cursor-pointer py-2 transition-all duration-150 ${
                currentRoute === "/peoplelab-x"
                  ? "text-[#244C43] border-b-2 border-[#244C43]"
                  : "border-b-2 border-transparent"
              }`}
            >
              {t.peoplelabX}
            </button>
          </nav>

          {/* Action buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-[11px] font-mono border-2 border-[#171817]/15 rounded-full px-2.5 py-1 bg-[#F4F1EA]/50">
              <button
                id="header-lang-da"
                onClick={() => setLanguage("da")}
                className={`py-0.5 px-1.5 font-weight-bold rounded transition-all cursor-pointer ${
                  currentLanguage === "da" ? "bg-[#244C43] text-white" : "text-[#424641] hover:text-[#171817]"
                }`}
              >
                DA
              </button>
              <span className="text-[#171817]/15">|</span>
              <button
                id="header-lang-en"
                onClick={() => setLanguage("en")}
                className={`py-0.5 px-1.5 font-weight-bold rounded transition-all cursor-pointer ${
                  currentLanguage === "en" ? "bg-[#244C43] text-white" : "text-[#424641] hover:text-[#171817]"
                }`}
              >
                EN
              </button>
            </div>

            {/* Start conversation Primary CTA button */}
            <button
              id="header-cta-button"
              onClick={() => handleSectionNavigate("contact-section")}
              className="inline-flex items-center justify-center h-[46px] px-6 bg-[#DFFF54] hover:bg-[#DFFF54]/90 text-[#171817] font-sans font-bold text-xs tracking-wider uppercase rounded-[4px] border-none cursor-pointer active:scale-95 transition-all duration-200"
            >
              {t.startConversation}
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Minimal Language Switcher for mobile top bar */}
            <button
              id="mobile-lang-quick-switch"
              onClick={() => setLanguage(currentLanguage === "da" ? "en" : "da")}
              className="flex items-center gap-1 p-2 text-xs font-mono text-[#171817] border border-[#171817]/10 rounded-full px-2.5 py-1 bg-[#F4F1EA]"
            >
              <Globe size={13} />
              <span>{currentLanguage === "da" ? "EN" : "DA"}</span>
            </button>

            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171817] bg-transparent border-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Fullscreen overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F4F1EA] flex flex-col justify-between pt-24 pb-10 px-8"
          >
            {/* Large calm menu items */}
            <div className="flex flex-col gap-6 mt-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#737771]">
                {currentLanguage === "da" ? "RUTE / MENU" : "NAVIGATION"}
              </span>

              {/* Products visible directly */}
              <div className="flex flex-col gap-4 border-b border-[#171817]/5 pb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#244C43] font-bold">
                  {t.products}
                </span>
                <button
                  onClick={() => handleProductSelect("/reality-scan")}
                  className="text-left font-sans font-semibold text-2xl text-[#171817] hover:text-[#244C43] transition-colors"
                >
                  {t.scan}
                </button>
                <button
                  onClick={() => handleProductSelect("/reality-check")}
                  className="text-left font-sans font-semibold text-2xl text-[#171817] hover:text-[#244C43] transition-colors"
                >
                  {t.check}
                </button>
                <button
                  onClick={() => handleProductSelect("/reality-roadmap")}
                  className="text-left font-sans font-semibold text-2xl text-[#171817] hover:text-[#244C43] transition-colors"
                >
                  {t.roadmap}
                </button>
              </div>

              {/* Other Links */}
              <div className="flex flex-col gap-4 pt-2">
                <button
                  onClick={() => handleSectionNavigate("how-we-work-section")}
                  className="text-left font-sans font-semibold text-2xl text-[#171817] hover:text-[#244C43] transition-colors"
                >
                  {t.howWeWork}
                </button>
                <button
                  onClick={() => {
                    setRoute("/peoplelab-x");
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-left font-sans font-semibold text-2xl text-[#171817] hover:text-[#244C43] transition-colors"
                >
                  {t.peoplelabX}
                </button>
              </div>
            </div>

            {/* Bottom button inside mobile view */}
            <div className="space-y-6">
              <button
                onClick={() => handleSectionNavigate("contact-section")}
                className="w-full h-14 bg-[#DFFF54] text-[#171817] rounded-[4px] font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <span>{t.startConversation}</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center justify-between text-xs font-mono text-[#737771]">
                <span>PEOPLELAB X</span>
                <div className="flex gap-4">
                  <button onClick={() => { setLanguage("da"); setMobileMenuOpen(false); }} className={currentLanguage === "da" ? "font-bold text-[#171817]" : ""}>DA</button>
                  <button onClick={() => { setLanguage("en"); setMobileMenuOpen(false); }} className={currentLanguage === "en" ? "font-bold text-[#171817]" : ""}>EN</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
