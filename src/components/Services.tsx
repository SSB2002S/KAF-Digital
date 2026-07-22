import { Layout, Palette, Sparkles, Code, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "../data";

export default function Services() {
  // Map icons dynamically to avoid using string indexers directly
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return Layout;
      case "Palette":
        return Palette;
      case "Sparkles":
        return Sparkles;
      case "Code":
        return Code;
      default:
        return Layout;
    }
  };

  const handleRequestService = (serviceTitle: string) => {
    const formElement = document.getElementById("contact");
    const serviceSelect = document.getElementById("serviceType") as HTMLSelectElement;
    
    if (serviceSelect) {
      serviceSelect.value = serviceTitle;
    }

    if (formElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = formElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden border-b border-border-purple/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
            خدماتنا الرقمية
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-dark-purple leading-tight mb-4">
            خدمات متكاملة من الفكرة إلى الإطلاق.
          </h2>
          <p className="text-secondary-text text-base sm:text-lg leading-[1.8] font-medium">
            نقدم خدمات مترابطة تساعد مشروعك على بناء هويته، وتحسين تجربته الرقمية، والوصول إلى المستخدم بصورة واضحة واحترافية.
          </p>
        </div>

        {/* Services Grid (Equal heights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-border-purple/80 hover:border-primary-purple rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-primary-purple/5 transition-all duration-300 group"
              >
                <div>
                  {/* Top: Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-soft-purple text-primary-purple flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0 shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-dark-purple group-hover:text-primary-purple transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-text text-sm sm:text-base leading-[1.7] mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Bullet points (exactly 3 items max on home screen) */}
                  <div className="border-t border-border-purple/40 pt-5 mb-8">
                    <h4 className="text-xs font-bold text-dark-purple uppercase tracking-wider mb-3">
                      تشمل الخدمة:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.items.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-secondary-text text-sm sm:text-[15px]">
                          <CheckCircle2 className="w-4 h-4 text-primary-purple shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Interactive CTA Button (explicitly avoids 'المزيد') */}
                <div className="pt-4 border-t border-border-purple/40 flex items-center justify-between">
                  <button
                    onClick={() => handleRequestService(service.title)}
                    className="inline-flex items-center gap-2 text-primary-purple hover:text-secondary-purple font-bold text-sm sm:text-base transition-colors group/btn cursor-pointer focus:outline-none"
                  >
                    <span>طلب الخدمة لمشروعك</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                  </button>
                  <span className="font-mono text-xs font-semibold text-border-purple group-hover:text-primary-purple/35 transition-colors">
                    0{index + 1}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
