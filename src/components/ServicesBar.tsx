import { Palette, Sparkles, Layout, Laptop, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function ServicesBar() {
  const categories = [
    { label: "الهوية البصرية", icon: Palette, color: "text-amber-500", bg: "bg-amber-500/5" },
    { label: "التصميم الجرافيكي", icon: Sparkles, color: "text-indigo-500", bg: "bg-indigo-500/5" },
    { label: "تجربة المستخدم UI/UX", icon: Layout, color: "text-primary-purple", bg: "bg-primary-purple/5" },
    { label: "المواقع وصفحات الهبوط", icon: Laptop, color: "text-emerald-500", bg: "bg-emerald-500/5" },
    { label: "المنتجات والأنظمة الرقمية", icon: Layers, color: "text-rose-500", bg: "bg-rose-500/5" },
  ];

  return (
    <section className="relative z-20 -mt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-border-purple rounded-3xl shadow-lg p-4 md:p-6 lg:p-8"
        >
          {/* Grid Layout of Uniform Services Tags */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-border-purple/40">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-center gap-3 justify-center p-3 sm:py-2 rounded-2xl transition-all duration-300 hover:bg-secondary-bg group ${
                    index > 1 ? "pt-4 md:pt-2" : ""
                  }`}
                >
                  <div className={`w-10 h-10 ${cat.bg} ${cat.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="font-sans font-bold text-sm sm:text-[15px] text-dark-purple group-hover:text-primary-purple transition-colors text-center sm:text-right">
                    {cat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
