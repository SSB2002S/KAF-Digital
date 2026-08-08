import { useState, useEffect } from "react";
import { Filter, Eye, AlertTriangle, RefreshCw, X, Check, ArrowLeft, Layers, ShieldCheck, Target } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import tharwahLogo from "../assets/projectLogo/ثروة.jpeg";
import superGoLogo from "../assets/projectLogo/سوبر قو ديلفري.jpeg";
import waraqNakhaLogo from "../assets/projectLogo/ورق ونكهة.jpeg";
import nahajLogo from "../assets/projectLogo/نهج.jpeg";
import kafProjectLogo from "../assets/projectLogo/ايقونة-كاف.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { key: "all", label: "الكل" },
    { key: "ui-ux", label: "UI/UX" },
    { key: "branding", label: "الهوية البصرية" },
    { key: "graphics", label: "التصميم الجرافيكي" },
    { key: "web", label: "المواقع" },
    { key: "systems", label: "الأنظمة الرقمية" },
  ];

  // Filter projects list
  const filteredProjects = PROJECTS_DATA.filter(
    (project) => activeFilter === "all" || project.categoryKey === activeFilter
  );

  // Simulate loading skeleton whenever filter changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  // Render highly-polished CSS/SVG dynamic illustrative cover mockups
  const renderProjectCover = (id: string) => {
    switch (id) {
      case "tharwah":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-green-300 to-green-900 flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-bold bg-white/20 text-white backdrop-blur-md px-2.5 py-1 rounded-full">تطبيق أطفال مالي</span>
              <span className="text-white font-bold text-xs">ثروة ⭐</span>
            </div>
            
            {/* Visual piggybank & coin representation */}
            <div className="my-auto flex flex-col items-center justify-center z-10 relative">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md border-4 border-green-300/45 rounded-full flex items-center justify-center shadow-lg relative">
                {/* <span className="text-4xl">🪙</span> */}
                <img className="w-full h-full object-cover rounded-full" src={tharwahLogo} alt="شعار ثروة" />
                {/* <span className="absolute -top-1 -right-1 text-lg">🐷</span> */}
              </div>
              {/* <div className="mt-4 flex gap-1 bg-white/25 rounded-full px-3 py-1 text-[10px] text-white font-bold border border-white/10">
                <span>الادخار الحالي:</span>
                <span className="text-amber-300">١٢٠ ريال</span>
              </div> */}
            </div>

            <div className="flex justify-between items-center text-[9px] text-white/70 z-10">
              <span>تحت إشراف ولي الأمر</span>
              <span>معدل نمو ٨٥٪</span>
            </div>
          </div>
        );
      case "super-go":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-sky-300 to-sky-600 flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0"></div>
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-bold bg-black/30 text-white backdrop-blur-md px-2.5 py-1 rounded-full">هوية سرعة البرق</span>
              <span className="text-white font-bold text-xs">SUPER GO ⚡</span>
            </div>
            
            <div className="my-auto flex flex-col items-center justify-center z-10">
              {/* <div className="relative w-24 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl transform rotate-3">
                <span className="text-2xl font-black text-orange-600">GO!</span>
                <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-dark-purple text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  🏍️
                </div>
              </div> */}
              <div className="w-20 h-20 border-4 border-sky-200/45 bg-white/10 backdrop-blur-md  rounded-full flex items-center justify-center shadow-lg relative">
                <img className="w-full h-full object-cover rounded-full" src={superGoLogo} alt="شعار سوبر جو" />
                {/* <span className="absolute -top-1 -right-1 text-lg">🐷</span> */}
              </div>
              {/* <div className="w-16 h-1 bg-black/20 rounded-full mt-3 blur-xs"></div> */}
            </div>

            <div className="flex justify-between items-center text-[9px] text-white/95 z-10 font-bold">
              <span>توصيل حيوي قوي</span>
              <span>١٢٠٪ تحميل إضافي</span>
            </div>
          </div>
        );
      case "waraq-nakha":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-emerald-200 to-teal-800 flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-black/10 z-0"></div>
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-bold bg-white/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-1 rounded-full">علامة أغذية فاخرة</span>
              <span className="text-white font-bold text-xs">ورق نكهة 🍃</span>
            </div>
            
            <div className="my-auto flex flex-col items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full border-4 border-green-300/45 relative flex items-center justify-center bg-white/5">
                <div className="w-full h-full rounded-full bg-emerald-900/60 flex items-center justify-center">
                    {/* <span className="text-3xl">🍋</span> */}
                    <img className="w-full h-full object-cover rounded-full" src={waraqNakhaLogo} alt="شعار ورق نكهة" />
                </div>
                {/* <div className="absolute -top-1 right-2 text-xl">🍁</div> */}
              </div>
              {/* <span className="text-amber-400 font-bold text-xs tracking-widest mt-3">طعم أصيل وفاخر</span> */}
            </div>

            <div className="flex justify-between items-center text-[9px] text-white/80 z-10">
              <span>هوية تسويقية مبهرة</span>
              <span>٧٥٪ زيادة بالمبيعات</span>
            </div>
          </div>
        );
      case "nahaj":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-green-500 via-green-700 to-green-900 flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] opacity-10"></div>
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-bold bg-white/20 text-white backdrop-blur-md px-2.5 py-1 rounded-full">منصة استشارية ذكية</span>
              <span className="text-white font-bold text-xs">نهج 🗺️</span>
            </div>

            <div className="my-auto flex flex-col items-center justify-center z-10 relative">
              <div className="w-20 h-20 rounded-full border-4 border-sky-200/45 flex items-center justify-center relative">
                {/* <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 flex items-center justify-center shadow-inner">
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 rounded-full border-2 border-white/90"></div>
                    <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-white/90"></div>
                    <div className="absolute bottom-1 left-2.5 w-4 h-0.5 bg-white/90 rotate-45"></div>
                    <div className="absolute top-2 right-1.5 w-3 h-0.5 bg-white/70"></div>
                  </div>
                </div> */}
                {/* <span className="absolute -top-1 -right-1 text-lg">🧭</span> */}
                <div className="w-full h-full rounded-full bg-emerald-900/60 flex items-center justify-center">
                    <img className="w-full h-full object-cover rounded-full" src={nahajLogo} alt="شعار نهج" />
                </div>
              </div>
              {/* <div className="mt-4 flex gap-1 bg-white/25 rounded-full px-3 py-1 text-[10px] text-white font-bold border border-white/10">
                <span>تجربة بحث ذكية</span>
                <span className="text-cyan-200">٤٥٪</span>
              </div> */}
            </div>

            <div className="flex justify-between items-center text-[9px] text-white/70 z-10">
              <span>تقليل التشتت البصري</span>
              <span>تحويل أسرع وأكثر سلاسة</span>
            </div>
          </div>
        );
      case "kaf-website":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-dark-purple flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#5635c7_1px,transparent_1px)] [background-size:20px_20px] opacity-35"></div>
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-bold bg-primary-purple/35 text-white border border-primary-purple/35 px-2.5 py-1 rounded-full">الموقع الرسمي</span>
              <span className="text-white font-bold text-xs">KAF 🌐</span>
            </div>
            
            <div className="my-auto flex flex-col items-center justify-center z-10">
              {/* <div className="w-20 h-20 bg-primary-purple rounded-2xl flex items-center justify-center text-white text-4xl font-extrabold shadow-xl shadow-primary-purple/30 transition-transform hover:scale-105">
                ك
              </div> */}
              <div className="w-20 h-20 bg-white/90 backdrop-blur-md border-4 border-dark-purple rounded-full flex items-center justify-center shadow-lg relative">
                <img className="w-full h-full object-cover rounded-full" src={kafProjectLogo} alt="شعار KAF" />
              </div>
              {/* <span className="text-[10px] font-mono text-purple-200 font-bold tracking-widest mt-2">DIGITAL official</span> */}
            </div>

            <div className="flex justify-between items-center text-[9px] text-white/60 z-10">
              <span>تجربة تفاعلية وبصرية فائقة</span>
              <span>سرعة ١٠٠/١٠٠</span>
            </div>
          </div>
        );
      default:
        return <div className="w-full h-full bg-secondary-bg"></div>;
    }
  };

  return (
    <section id="projects" className="py-24 bg-secondary-bg/30 relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-soft-purple/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-right">
            <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
              دراسات الحالات والأعمال
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-dark-purple leading-tight mb-3">
              مشاريع صُممت لتحقيق أهداف واضحة.
            </h2>
            <p className="text-secondary-text text-base max-w-2xl font-medium">
              لا نعرض صورًا فقط، بل نوضح المشكلة والهدف، ودور كاف الاستراتيجي، والحل الذي تم ابتكاره وتصميمه لكل مشروع.
            </p>
          </div>

        </div>

        {/* Filter Navigation */}
        <div className="flex items-center flex-wrap gap-2.5 mb-10 pb-2 border-b border-border-purple/35">
          <Filter className="w-4 h-4 text-secondary-text shrink-0 ml-2" />
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-purple/35 cursor-pointer ${
                  isActive
                    ? "bg-primary-purple text-white shadow-md shadow-primary-purple/20"
                    : "bg-white text-secondary-text border border-border-purple/60 hover:text-main-text hover:border-primary-purple/30"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Render Content */}
        <AnimatePresence mode="wait">
            {loading ? (
              /* Skeleton Loader */
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[1, 2, 3].map((n) => (
                  <div key={n} className="bg-white border border-border-purple rounded-3xl p-5 space-y-4 animate-pulse">
                    <div className="w-full aspect-[4/3] bg-secondary-bg rounded-2xl"></div>
                    <div className="h-4 bg-secondary-bg rounded-md w-1/3"></div>
                    <div className="h-6 bg-secondary-bg rounded-md w-2/3"></div>
                    <div className="space-y-2 pt-2">
                      <div className="h-3 bg-secondary-bg rounded-md w-full"></div>
                      <div className="h-3 bg-secondary-bg rounded-md w-5/6"></div>
                    </div>
                    <div className="h-10 bg-secondary-bg rounded-xl w-full pt-4"></div>
                  </div>
                ))}
              </motion.div>
            ) : filteredProjects.length === 0 ? (
              /* Empty State */
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white border border-border-purple rounded-3xl p-12 text-center max-w-md mx-auto my-12"
              >
                <div className="w-14 h-14 bg-soft-purple text-primary-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-dark-purple mb-2">لا توجد مشاريع مخصصة</h3>
                <p className="text-secondary-text text-sm leading-relaxed mb-6">
                  نحن نعمل حالياً على صياغة وبناء دراسات الحالات الخاصة بهذا التصنيف. تصفّح التصنيفات الأخرى للاطلاع على أثرنا الإبداعي.
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="bg-primary-purple hover:bg-secondary-purple text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md cursor-pointer"
                >
                  عرض جميع المشاريع
                </button>
              </motion.div>
            ) : (
              /* Dynamic Project Cards Grid */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white border border-border-purple/80 hover:border-primary-purple rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-primary-purple/5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Interactive Visual Cover */}
                      <div className="w-full aspect-[4/3] relative overflow-hidden">
                        {renderProjectCover(project.id)}
                      </div>

                      {/* Info & Copywriting */}
                      <div className="p-6">
                        <span className="text-[11px] font-bold text-primary-purple uppercase tracking-wider bg-soft-purple px-2.5 py-1 rounded-md mb-3 inline-block">
                          {project.category}
                        </span>
                        
                        <h3 className="font-sans font-extrabold text-xl text-dark-purple mb-2 group-hover:text-primary-purple transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-secondary-text text-sm leading-[1.6] line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Trigger Action */}
                    <div className="px-6 pb-6 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 bg-secondary-bg hover:bg-soft-purple text-dark-purple hover:text-primary-purple py-3 px-4 rounded-xl text-sm font-bold border border-border-purple/60 hover:border-primary-purple/35 transition-all cursor-pointer focus:outline-none"
                      >
                        <span>استعرض دراسة المشروع</span>
                        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-dark-purple/75 backdrop-blur-sm z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
            >
              {/* Modal Card Content (stops click propagation) */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-border-purple"
              >
                
                {/* Fixed Top Close bar inside modal */}
                <div className="sticky top-0 bg-white border-b border-border-purple/50 px-6 py-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-primary-purple rounded-full"></span>
                    <span className="text-sm font-bold text-dark-purple">دراسة حالة متكاملة</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl text-secondary-text hover:bg-secondary-bg hover:text-main-text transition-all focus:outline-none"
                    style={{ width: 40, height: 40 }}
                    aria-label="إغلاق النافذة"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Cover graphic */}
                <div className="w-full h-48 sm:h-60 relative">
                  {renderProjectCover(selectedProject.id)}
                </div>

                {/* Deep Study Details */}
                <div className="p-6 sm:p-8 space-y-8 text-right">
                  
                  {/* General Title Block */}
                  <div>
                    <span className="text-xs font-bold text-primary-purple bg-soft-purple px-3 py-1 rounded-full mb-3 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-dark-purple">
                      {selectedProject.title}
                    </h2>
                    <p className="text-secondary-text text-base leading-[1.7] mt-3 font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border-purple/40">
                    
                    {/* Problem Statement */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-dark-purple">
                        <Target className="w-5 h-5 text-amber-500 shrink-0" />
                        <h4 className="font-bold text-[15px]">المشكلة أو الهدف الاستراتيجي:</h4>
                      </div>
                      <p className="text-secondary-text text-sm sm:text-[15px] leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    {/* KAF's Strategic Role */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-dark-purple">
                        <Layers className="w-5 h-5 text-primary-purple shrink-0" />
                        <h4 className="font-bold text-[15px]">دور ومساهمة كاف:</h4>
                      </div>
                      <p className="text-secondary-text text-sm sm:text-[15px] leading-relaxed">
                        {selectedProject.role}
                      </p>
                    </div>

                  </div>

                  {/* Render delivered services */}
                  <div className="bg-secondary-bg p-5 rounded-2xl border border-border-purple/60">
                    <h4 className="font-bold text-dark-purple text-sm mb-3">الخدمات التي قمنا بتنفيذها في هذا المشروع:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((srv, idx) => (
                        <span key={idx} className="bg-white border border-border-purple/80 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-secondary-text flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-primary-purple" />
                          <span>{srv}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Measured Outcome / Results */}
                  <div className="bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-2xl">
                    <div className="flex items-center gap-2 text-emerald-800 mb-2">
                      <ShieldCheck className="w-5 h-5 shrink-0" />
                      <h4 className="font-bold text-base">الأثر والمخرجات الفعلية للعمل:</h4>
                    </div>
                    <p className="text-emerald-950 text-sm sm:text-[15px] font-medium leading-relaxed">
                      {selectedProject.result}
                    </p>
                  </div>

                </div>

                {/* Modal bottom action */}
                <div className="border-t border-border-purple/50 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary-bg/50">
                  <span className="text-xs text-secondary-text font-medium">أعجبتك دراسة الحالة وتطمح لتحقيق أثر مماثل؟</span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-primary-purple hover:bg-secondary-purple text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer w-full sm:w-auto text-center"
                  >
                    ابدأ مشروعاً مشابهاً معنا
                  </button>
                </div>

              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
