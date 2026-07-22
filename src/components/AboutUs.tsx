import React from "react";
import { ShieldCheck, Zap, Users, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  const pillars = [
    {
      title: "نفهم الفكرة قبل التصميم",
      desc: "نحلل أبعاد مشروعك ونقاط القوة والجمهور المستهدف لنضمن بناء قاعدة استراتيجية متينة وصحيحة.",
      icon: Users,
      color: "bg-amber-500/10 text-amber-600"
    },
    {
      title: "نجمع التصميم والتنفيذ معًا",
      desc: "ندمج خبرات المصممين والمطورين لضمان تنفيذ الواجهات البرمجية بمنتهى الدقة والانسجام والسرعة.",
      icon: Zap,
      color: "bg-primary-purple/10 text-primary-purple"
    },
    {
      title: "نبني حلولاً قابلة للتطور والنمو",
      desc: "نعتمد أسساً تقنية وتصميمية معيارية تمنح مشروعك المرونة الكاملة للنمو والتوسع المستقبلي.",
      icon: ShieldCheck,
      color: "bg-emerald-500/10 text-emerald-600"
    }
  ];

  const handleScrollToProcess = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("process");
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
    <section id="about" className="py-20 bg-secondary-bg/50 relative overflow-hidden">
      {/* Visual ambient circles */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-soft-purple/30 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right side: Strong Copywriting */}
          <div className="lg:col-span-6 text-right">
            <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-4">
              مكتبنا الرقمي
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-dark-purple leading-tight mb-6">
              مكتب رقمي يبني التجربة <br />
              <span className="text-primary-purple">من بدايتها</span>.
            </h2>
            
            <p className="text-secondary-text text-base sm:text-lg leading-[1.8] mb-4 font-medium">
              KAF Digital official مكتب متعدد التخصصات يجمع بين التصميم والتقنية لمساعدة المشاريع الناشئة ورواد الأعمال وأصحاب العلامات التجارية على حضور واضح وتجارب رقمية متكاملة.
            </p>
            
            <p className="text-secondary-text text-base leading-[1.8] mb-8">
              لا نبدأ بالشكل النهائي مباشرة، بل نبدأ بفهم الفكرة، والجمهور، وأهداف المشروع، ثم نبني الحل المناسب من التخطيط والتصميم حتى التنفيذ والإطلاق المتكامل.
            </p>

            <a
              href="#process"
              onClick={handleScrollToProcess}
              className="inline-flex items-center gap-2 text-primary-purple hover:text-secondary-purple font-bold text-base transition-colors group cursor-pointer focus:outline-none focus:underline"
            >
              <span>اكتشف فلسفة كاف في العمل</span>
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Left side: Pillars list with micro animations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="bg-white border border-border-purple rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:border-primary-purple/30 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pillar.color} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="font-sans font-bold text-lg text-dark-purple mb-2 group-hover:text-primary-purple transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-secondary-text text-sm sm:text-[15px] leading-[1.7]">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
