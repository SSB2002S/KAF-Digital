import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { WHY_KAF_DATA } from "../data";

export default function WhyKaf() {
  return (
    <section id="why-kaf" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative radial background grids */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-soft-purple/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Head Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
            لماذا تختارنا لرحلتك؟
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-dark-purple leading-tight mb-4">
            لماذا تعمل مع كاف؟
          </h2>
          <p className="text-secondary-text text-base sm:text-lg leading-[1.8]">
            لا نكتفي ببناء تصاميم جذابة مرئياً فقط، بل نبتكر حلولاً رقمية ذكية تساهم بشكل ملموس في نمو أعمالك وسهولة وصولك لجمهورك.
          </p>
        </div>

        {/* 5 Points Layout: Elegant Bento-like Cards or Balanced Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {WHY_KAF_DATA.map((point, index) => {
            // Give specific cards slightly different accent styling for a modern visual rhythm (bento grid layout feel)
            const isPurpleTheme = point.id === 1 || point.id === 5;
            
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/5 flex flex-col justify-between ${
                  isPurpleTheme
                    ? "bg-gradient-to-b from-white to-soft-purple/45 border-primary-purple/20 hover:border-primary-purple"
                    : "bg-white border-border-purple/80 hover:border-primary-purple/40"
                }`}
              >
                <div>
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-4xl font-black ${
                      isPurpleTheme ? "text-primary-purple/20" : "text-border-purple"
                    }`}>
                      0{point.id}
                    </span>
                    <CheckCircle className={`w-5 h-5 ${
                      isPurpleTheme ? "text-primary-purple" : "text-secondary-purple"
                    }`} />
                  </div>

                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-dark-purple mb-3">
                    {point.title}
                  </h3>
                  
                  <p className="text-secondary-text text-sm sm:text-[15px] leading-[1.8] font-medium">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-purple/35 flex items-center justify-between">
                  <span className="text-[11px] text-secondary-text/80 font-bold uppercase tracking-wider">كاف ديجيتال</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-purple"></span>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
