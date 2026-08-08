import React, { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import kafIcon from "../assets/projectLogo/Kaf.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for high visual focus feedback
      const sections = ["hero", "about", "services", "projects", "process", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#hero", id: "hero" },
    { label: "من نحن", href: "#about", id: "about" },
    { label: "خدماتنا", href: "#services", id: "services" },
    { label: "أعمالنا", href: "#projects", id: "projects" },
    { label: "طريقة العمل", href: "#process", id: "process" },
    { label: "تواصل معنا", href: "#contact", id: "contact" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border-purple shadow-sm py-4"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Right: Brand Logo & Title */}
            <a
              href="#hero"
              onClick={(e) => handleScrollToSection(e, "#hero")}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-purple rounded-lg p-1"
              aria-label="KAF Digital official الرئيسية"
            >
              {/* Elegant Custom SVG Logo for KAF representing creative geometry */}
              <div className="relative w-10 h-10  rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-purple/20 transition-transform duration-300 group-hover:scale-105">
                <img src={kafIcon} alt="شعار كاف" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary-purple rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl tracking-tight text-dark-purple group-hover:text-primary-purple transition-colors">
                  KAF <span className="text-primary-purple">Digital official</span>
                </span>
                <span className="text-[10px] text-secondary-text font-medium -mt-1">
                  كاف ديجيتال
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-secondary-bg px-2 py-1.5 rounded-full border border-border-purple">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`relative px-4 py-2 rounded-full text-[15px] font-medium transition-all focus:outline-none ${
                      isActive
                        ? "text-primary-purple font-semibold"
                        : "text-secondary-text hover:text-main-text"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-white rounded-full shadow-xs border border-border-purple/50 z-[-1]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Left: Desktop Call to Action button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
                className="inline-flex items-center gap-2 bg-primary-purple hover:bg-secondary-purple text-white px-6 py-2.5 rounded-xl font-semibold text-[15px] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-primary-purple/15 hover:shadow-lg focus:ring-4 focus:ring-primary-purple/20 cursor-pointer"
              >
                <span>ابدأ مشروعك</span>
                <Send className="w-4 h-4 transform rotate-180" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-secondary-text hover:text-main-text hover:bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-primary-purple transition-all"
                style={{ width: 44, height: 44 }} // Accessible touch target
                aria-expanded={isMobileMenuOpen}
                aria-label="قائمة التنقل"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (RTL supportive) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="p-6 border-b border-border-purple flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-purple rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    ك
                  </div>
                  <span className="font-bold text-dark-purple">كاف ديجيتال</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-secondary-text hover:bg-secondary-bg"
                  style={{ width: 40, height: 40 }}
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                        isActive
                          ? "bg-soft-purple text-primary-purple font-semibold"
                          : "text-secondary-text hover:text-main-text hover:bg-secondary-bg"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowLeft className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`} />
                    </a>
                  );
                })}
              </nav>

              <div className="p-6 border-t border-border-purple">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="flex items-center justify-center gap-2 bg-primary-purple hover:bg-secondary-purple text-white w-full py-3.5 rounded-xl font-semibold shadow-md shadow-primary-purple/15 text-center focus:outline-none"
                >
                  <span>ابدأ مشروعك الآن</span>
                  <Send className="w-4 h-4 transform rotate-180" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
