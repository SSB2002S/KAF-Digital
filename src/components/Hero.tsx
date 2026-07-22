import React from "react";
import { ArrowDown, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
    <section
      id="hero"
      className="relative pt-24 pb-12 md:py-0 md:min-h-[720px] md:h-[720px] flex items-center bg-white overflow-hidden"
    >
      {/* Absolute Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-soft-purple/60 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-bg/80 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Right Column: Hero Copywriting & Actions */}
          <div className="md:col-span-7 flex flex-col items-start text-right">
            
            {/* Active Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-soft-purple border border-primary-purple/20 px-4 py-1.5 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold text-primary-purple">
                متاحون لاستقبال مشاريع مختارة
              </span>
              <Sparkles className="w-3 h-3 text-primary-purple" />
            </motion.div>

            {/* Core Value Proposition Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.2] text-dark-purple tracking-tight mb-5"
            >
              حلول رقمية <br />
              <span className="text-primary-purple relative">
                تصنع الأثر
                <span className="absolute bottom-1 right-0 left-0 h-1.5 bg-primary-purple/15 rounded-full"></span>
              </span>
            </motion.h1>

            {/* Narrative Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary-text text-base sm:text-lg lg:text-xl leading-[1.8] max-w-2xl mb-8 font-medium"
            >
              نجمع بين الهوية البصرية، وتجربة المستخدم، والتصميم الجرافيكي، وبناء صفحات الهبوط والصفحات الترحيبية لبناء حلول رقمية واضحة تخدم أهداف مشروعك من الفكرة حتى الإطلاق.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
            >
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "services")}
                className="inline-flex items-center justify-center bg-primary-purple hover:bg-secondary-purple text-white px-8 py-4 rounded-2xl font-bold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary-purple/20 cursor-pointer text-center"
              >
                استكشف خدماتنا
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="inline-flex items-center justify-center bg-white hover:bg-secondary-bg text-dark-purple border border-border-purple px-8 py-4 rounded-2xl font-bold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
              >
                استعرض دراسات المشاريع
              </a>
            </motion.div>

            {/* Core Capability Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center flex-wrap gap-x-4 gap-y-2 border-t border-border-purple/60 pt-6 w-full text-secondary-text text-sm font-semibold"
            >
              <span className="text-dark-purple/80 font-bold">تخصصاتنا:</span>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary-purple" />
                <span>هوية بصرية</span>
              </div>
              <span className="text-border-purple">•</span>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary-purple" />
                <span>واجهات وتجربة المستخدم UI/UX</span>
              </div>
              <span className="text-border-purple">•</span>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary-purple" />
                <span>تصميم جرافيكي</span>
              </div>
              <span className="text-border-purple">•</span>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-primary-purple" />
                <span>تطوير مواقع</span>
              </div>
            </motion.div>

          </div>

          {/* Left Column: Creative Geometric KAF Emblem & Dynamic Mockup */}
          <div className="md:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[380px] aspect-square flex items-center justify-center"
            >
              {/* Floating soft background rings */}
              <div className="absolute inset-0 bg-soft-purple/50 rounded-[40px] rotate-6 transform scale-95 z-0"></div>
              <div className="absolute inset-0 bg-primary-purple/5 rounded-[40px] -rotate-3 transform scale-100 z-0 border border-primary-purple/10 animate-pulse"></div>

              {/* Central Solid Premium Frame */}
              <div className="relative w-full h-full bg-white border border-border-purple rounded-[40px] shadow-xl p-8 flex flex-col justify-between z-10 overflow-hidden animate-float">
                {/* Visual grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e7e1f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 z-0"></div>
                
                {/* Frame Top Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
                  </div>
                  <span className="font-mono text-[10px] text-secondary-text font-semibold bg-secondary-bg px-2.5 py-1 rounded-full border border-border-purple">
                    KAF official
                  </span>
                </div>

                {/* Main Logo Emblem Design */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
                  <div className="w-28 h-28 bg-primary-purple rounded-[28px] flex items-center justify-center text-white text-[72px] font-black shadow-2xl shadow-primary-purple/35 relative transition-all duration-300 hover:rotate-3">
                    <span className="-mt-2 select-none">ك</span>
                    {/* Glowing point of visual energy */}
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-secondary-purple rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  
                  <h2 className="mt-6 font-bold text-2xl text-dark-purple">
                    KAF <span className="text-primary-purple">official</span>
                  </h2>
                  <p className="text-xs text-secondary-text font-medium mt-1">
                    نبني تجربة المستخدم بحب واحترافية
                  </p>
                </div>

                {/* Bottom Frame Stats Widget */}
                <div className="relative z-10 bg-soft-purple/80 border border-primary-purple/10 p-3 rounded-2xl flex items-center justify-between text-xs font-semibold text-primary-purple">
                  <span>🚀 نطلق الفكرة كأثر ملموس</span>
                  <span className="bg-white px-2 py-0.5 rounded-md border border-primary-purple/15 text-[10px]">
                    100% جودة
                  </span>
                </div>
              </div>

              {/* Absolute accessory cards */}
              <div className="absolute -right-6 top-12 z-20 bg-white border border-border-purple p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-600">
                  ⚡
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-dark-purple leading-tight">هوية متميزة</h4>
                  <p className="text-[9px] text-secondary-text leading-none mt-0.5">تصميم يبرز هويتك</p>
                </div>
              </div>

              <div className="absolute -left-8 bottom-16 z-20 bg-white border border-border-purple p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-600">
                  📱
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-dark-purple leading-tight">سهولة كاملة</h4>
                  <p className="text-[9px] text-secondary-text leading-none mt-0.5">رحلات مستخدم ذكية</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center gap-1 text-secondary-text animate-bounce z-10">
        <span className="text-[10px] font-semibold tracking-wider">اسحب للأسفل</span>
        <ArrowDown className="w-4 h-4 text-primary-purple" />
      </div>
    </section>
  );
}
