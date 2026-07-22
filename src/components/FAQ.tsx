import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS_DATA } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first FAQ by default for better visual cues

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-secondary-bg/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
            الأسئلة الشائعة
          </span>
          <h2 className="font-sans font-extrabold text-3xl text-dark-purple leading-tight mb-4">
            لديك سؤال؟ ستجد إجابته هنا.
          </h2>
          <p className="text-secondary-text text-base">
            قمنا بجمع وتلخيص أبرز الاستفسارات المتكررة التي تصلنا من عملائنا لنسهل عليك فهم طريقة تقديم الخدمات وتفاصيل التعاون.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-primary-purple shadow-md shadow-primary-purple/5"
                    : "border-border-purple/80 hover:border-primary-purple/35"
                }`}
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-right font-sans font-bold text-base sm:text-lg text-dark-purple hover:text-primary-purple transition-colors cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-primary-purple" : "text-secondary-purple"}`} />
                    <span>{faq.question}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-primary-purple text-white rotate-180" : "bg-soft-purple text-primary-purple"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-1 text-secondary-text text-sm sm:text-[15px] leading-[1.8] border-t border-border-purple/35">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}