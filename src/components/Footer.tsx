import React from "react";
import { ArrowUp, Mail, Phone, Linkedin, Instagram, ExternalLink, Award } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const socialLinks = [
    { label: "Behance", href: "https://behance.net", icon: ExternalLink },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <footer className="bg-[#211A2B] text-gray-300 pt-20 pb-10 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 text-right">
          
          {/* Logo and Description (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="#hero"
              onClick={(e) => handleScrollToSection(e, "hero")}
              className="inline-flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 bg-primary-purple rounded-xl flex items-center justify-center text-white font-bold text-xl">
                ك
              </div>
              <div>
                <span className="font-sans font-extrabold text-xl text-white tracking-tight">
                  KAF <span className="text-primary-purple">Digital official</span>
                </span>
                <p className="text-[10px] text-gray-400 font-medium -mt-1">كاف ديجيتال</p>
              </div>
            </a>
            
            <p className="text-gray-400 text-sm leading-[1.8] max-w-sm">
              نجمع بين الاستراتيجية والإبداع البصري لنصمم هويات رائدة وواجهات مستخدم ممتازة ونطور مواقع تفاعلية سريعة تخدم أهداف مشروعك من الفكرة حتى الإطلاق.
            </p>

            {/* Quick trust seal */}
            <div className="flex items-center gap-2 text-primary-purple text-xs font-bold">
              <Award className="w-4 h-4 shrink-0" />
              <span>حلول رقمية مبتكرة تصنع الأثر</span>
            </div>
          </div>

          {/* Quick links: Services (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base border-r-2 border-primary-purple pr-2.5">
              خدمات كاف الرقمية
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, "services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  تصميم واجهات وتجربة المستخدم UI/UX
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, "services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  تصميم الهوية البصرية والشعارات
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, "services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  تصميم منشورات الحملات الإعلانية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, "services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  برمجة وتطوير المواقع والأنظمة
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links: Company Navigation (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base border-r-2 border-primary-purple pr-2.5">
              تصفح الأقسام
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleScrollToSection(e, "hero")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollToSection(e, "about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleScrollToSection(e, "projects")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  دراسات المشاريع
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleScrollToSection(e, "process")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  آلية خطوات العمل
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Methods (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base border-r-2 border-primary-purple pr-2.5">
              تواصل مباشر
            </h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <a
                  href="mailto:kaf.digita0ffice@gmail.com"
                  className="flex items-center gap-2 justify-end text-gray-400 hover:text-white transition-colors"
                >
                  <span className="ltr">kaf.digita0ffice@gmail.com</span>
                  <Mail className="w-4 h-4 text-primary-purple" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966500000000"
                  className="flex items-center gap-2 justify-end text-gray-400 hover:text-white transition-colors"
                >
                  <span className="ltr">+966 500000000</span>
                  <Phone className="w-4 h-4 text-emerald-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          
          {/* Copyrights */}
          <div className="text-gray-400 text-center sm:text-right font-medium">
            <p>© {new Date().getFullYear()} كاف ديجيتال أوفيس KAF Digital official. جميع الحقوق محفوظة.</p>
            <p className="text-xs text-gray-500 mt-1">نصمّم الفكرة. نبني التجربة. نصنع الأثر.</p>
          </div>

          {/* Social icons, Legal terms, and Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-primary-purple flex items-center justify-center transition-all"
                    aria-label={soc.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="h-4 w-px bg-white/10 hidden sm:block"></div>

            <div className="flex gap-4 text-xs font-semibold">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">الشروط والأحكام</a>
            </div>

            <button
              onClick={handleScrollToTop}
              className="bg-primary-purple hover:bg-secondary-purple text-white p-3 rounded-xl transition-all shadow-lg shadow-primary-purple/10 cursor-pointer flex items-center justify-center"
              style={{ width: 44, height: 44 }}
              aria-label="العودة لأعلى الصفحة"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
