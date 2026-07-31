import { Check, Shield, Users, Layers, Zap, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function TrustSection() {
  const trustPillars = [
    {
      title: "خبرة في مشاريع متنوعة",
      description: "عملنا على تصميم وتطوير واجهات وهويات لقطاعات متعددة تشمل التعليم والغذائيات والخدمات السريعة والاستشارات.",
      icon: Layers,
      color: "text-amber-500",
      bg: "bg-amber-500/5"
    },
    {
      title: "خدمات متكاملة",
      description: "نقوم بصياغة الاستراتيجية، رسم الواجهات، وتطوير الأكواد البرمجية تحت سقف واحد لضمان جودة الأداء ومطابقة التصاميم.",
      icon: Shield,
      color: "text-primary-purple",
      bg: "bg-primary-purple/5"
    },
    {
      title: "متابعة مباشرة ومستمرة",
      description: "يبقى العميل على تواصل مع المطورين والمصممين الأساسيين للمشروع دون وسيط، مما يزيد من سرعة الاستجابة والدقة.",
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-500/5"
    },
    {
      title: "تصميم مبني على المستخدم",
      description: "نقوم بدراسة سلوك واحتياجات جمهورك المستهدف قبل رسم الخطوط والألوان لتقديم واجهة مرنة وسلسة للجميع.",
      icon: Zap,
      color: "text-emerald-500",
      bg: "bg-emerald-500/5"
    },
    {
      title: "تنفيذ تقني قابل للتطوير",
      description: "نبرمج بأحدث التقنيات لنضمن سرعة استجابة فائقة لموقعك، ومستعد تماماً لأي تمدد أو ميزات مستقبلية قد يحتاجها عملك.",
      icon: Clock,
      color: "text-rose-500",
      bg: "bg-rose-500/5"
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-border-purple/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Brief introduction to Trust */}
          <div className="lg:col-span-5 text-right">
            <span className="text-xs font-bold text-primary-purple bg-soft-purple px-3.5 py-1.5 rounded-full inline-block mb-3">
              رؤيتنا المهنية للثقة
            </span>
            <h2 className="font-sans font-extrabold text-3xl text-dark-purple leading-tight mb-4">
              منهجية مبنية على الواقع والشفافية.
            </h2>
            <p className="text-secondary-text text-sm sm:text-base leading-[1.8] mb-6">
              نحن في كاف ديجيتال لا نبيع وعوداً كاذبة أو نضع أرقاماً عشوائية وهمية للزوار. نبني ثقة حقيقية ملموسة من خلال جودة أعمالنا المكتملة، وتواصلنا الشفاف والمستمر، والتزامنا بتقديم أعلى معايير الجودة والتصميم والبرمجة.
            </p>
            
            {/* Visual assurance card */}
            <div className="bg-secondary-bg border border-border-purple/70 p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-purple text-white flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-dark-purple text-sm mb-1">شعارنا الأسمى:</h4>
                <p className="text-secondary-text text-xs sm:text-sm">
                  الأثر الرقمي الحقيقي يقاس برضا المستخدم وتحقيق أهداف مشروعك، وليس مجرد تصاميم معزولة.
                </p>
              </div>
            </div>
          </div>

          {/* Left Column: Core solid trust pillars cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {trustPillars.slice(0, 4).map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-secondary-bg/30 border border-border-purple/60 hover:border-primary-purple/35 rounded-2xl p-5 hover:bg-white transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-dark-purple text-sm sm:text-base mb-2 group-hover:text-primary-purple transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-secondary-text text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>

            {/* 5th Pillar full width below the grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-secondary-bg/35 border border-border-purple/60 rounded-2xl p-5 hover:bg-white transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 group"
            >
              <div className={`w-10 h-10 rounded-xl ${trustPillars[4].bg} ${trustPillars[4].color} flex items-center justify-center shrink-0`}>
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h3 className="font-bold text-dark-purple text-sm sm:text-base mb-1 group-hover:text-primary-purple transition-colors">
                  {trustPillars[4].title}
                </h3>
                <p className="text-secondary-text text-xs sm:text-sm leading-relaxed">
                  {trustPillars[4].description}
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
