import { Compass, Map, Layers, Cpu, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  // Map icons to each of the 5 phases
  const getIcon = (num: string) => {
    switch (num) {
      case "01":
        return Compass;
      case "02":
        return Map;
      case "03":
        return Layers;
      case "04":
        return Cpu;
      case "05":
        return CheckCircle;
      default:
        return Compass;
    }
  };

  return (
    <section id="process" className="py-24 bg-secondary-bg/25 relative overflow-hidden">
      {/* Dynamic graphic rings in BG */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-soft-purple/50 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
            كيف نعمل؟
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-dark-purple leading-tight mb-4">
            من الفكرة إلى الإطلاق.
          </h2>
          <p className="text-secondary-text text-base sm:text-lg leading-[1.8]">
            منهجية عمل متوازنة وهندسية تضمن تسليم العمل بأعلى دقة، مع تلافي العشوائية في كل مرحلة من مراحل التصميم والبرمجة.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          
          {/* Desktop connecting horizontal line */}
          <div className="hidden lg:block absolute top-[52px] right-12 left-12 h-0.5 bg-dashed bg-gradient-to-r from-primary-purple via-secondary-purple to-border-purple z-0"></div>

          {/* Steps list */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 items-start relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = getIcon(step.number);
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-right group"
                >
                  {/* Step bubble */}
                  <div className="relative mb-6">
                    {/* Glowing outer circle */}
                    <div className="absolute inset-0 bg-primary-purple/10 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    <div className="w-16 h-16 bg-white border-2 border-primary-purple rounded-2xl flex items-center justify-center text-primary-purple shadow-md relative z-10 transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary-purple group-hover:text-white">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>

                    {/* Numeric Badge */}
                    <span className="absolute -top-2.5 -left-2.5 bg-dark-purple text-white text-[10px] font-extrabold w-6 h-6 rounded-full flex items-center justify-center border border-white shadow-xs z-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Copy content */}
                  <div className="px-4 lg:px-0">
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl text-dark-purple mb-3 group-hover:text-primary-purple transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-secondary-text text-sm sm:text-[14px] leading-[1.7] font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
