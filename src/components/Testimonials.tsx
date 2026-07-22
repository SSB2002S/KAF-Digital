import { Quote, MessageSquare, Award } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  // If no testimonials exist, the section is completely hidden as per Section 15 rules.
  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-border-purple/45">
      {/* Ambient elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-soft-purple/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
            شركاء النجاح والأثر
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-dark-purple leading-tight mb-4">
            ماذا يقول عملاؤنا عن كاف؟
          </h2>
          <p className="text-secondary-text text-base">
            آراء وتوصيات حقيقية من شركائنا الذين تشرفنا بمساعدتهم على بناء حضورهم البصري وتحسين تجارب مستخدمي أنظمتهم الرقمية.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-secondary-bg/40 border border-border-purple/80 hover:border-primary-purple rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:shadow-primary-purple/5 transition-all duration-300 relative group"
            >
              {/* Giant quote mark in background */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-purple/5 group-hover:text-primary-purple/10 transition-colors z-0" />

              <div className="relative z-10">
                {/* Visual rating stars */}
                <div className="flex gap-1 text-amber-500 mb-6 text-sm">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>

                <p className="text-dark-purple text-[15px] sm:text-base leading-[1.8] font-medium mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Bottom Partner Metadata */}
              <div className="pt-6 border-t border-border-purple/40 relative z-10 flex items-center gap-3">
                {/* Beautiful custom avatar placeholder with initials */}
                <div className="w-11 h-11 rounded-full bg-soft-purple border border-primary-purple/20 flex items-center justify-center text-primary-purple font-extrabold text-sm shrink-0">
                  {testimonial.author.slice(0, 2)}
                </div>
                
                <div className="text-right">
                  <h4 className="font-sans font-bold text-dark-purple text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-primary-purple text-xs font-semibold mt-0.5">
                    {testimonial.project}
                  </p>
                  <span className="text-secondary-text text-[11px] block mt-0.5 font-medium">
                    {testimonial.serviceType}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Trust badge below */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary-bg border border-border-purple/60 px-5 py-2.5 rounded-2xl text-xs text-secondary-text font-bold">
            <Award className="w-4 h-4 text-primary-purple" />
            <span>نلتزم بنسبة رضا ١٠٠٪ لجميع شركائنا في كاف ديجيتال </span>
          </div>
        </div>

      </div>
    </section>
  );
}
