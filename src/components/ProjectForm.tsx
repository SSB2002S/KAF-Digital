import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";

const whatsappLink = "https://wa.me/967734895281?text=مرحبًا%20فريق%20كاف%20ديجيتال،%20أود%20بدء%20محادثة%20بخصوص%20مشروعي.%20اسمي:%20%0Aنبذة%20مختصرة%20عن%20المشروع:%20%0Aالميزانية%20المتوقعة:%20%0Aأفضل%20وقت%20للتواصل:%20";
const whatsappNumber = "+967 734895281";

export default function ProjectForm() {
  return (
    <section id="contact" className="py-8 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-soft-purple/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 text-right">
            <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
              تواصل مباشر
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-dark-purple leading-tight mb-4">
              بادر بالتواصل معنا مباشرة عبر واتساب <br />
              <span className="text-primary-purple">رقمنا المسجل في الموقع جاهز للرد الفوري</span>
            </h2>
            <p className="text-secondary-text text-base leading-[1.8] mb-8 max-w-2xl">
              لا حاجة لتعبئة نموذج مشروع معقد. اضغط الزر أدناه وسنتواصل معك عبر الواتساب مباشرة لنناقش فكرتك،
              نبذة المشروع، ومتطلباتك بأسرع وقت.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-3xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 focus:outline-none"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب الآن
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white border border-border-purple/80 text-dark-purple px-6 py-4 rounded-3xl text-sm font-bold shadow-sm hover:border-primary-purple hover:text-primary-purple transition-all"
              >
                <PhoneCall className="w-5 h-5 text-emerald-500" />
                {whatsappNumber}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-secondary-bg/60 border border-border-purple/80 rounded-[32px] p-10 shadow-sm text-right">
            <h3 className="font-bold text-xl text-dark-purple mb-4">عن طريق الواتساب نستطيع</h3>
            <ul className="space-y-4 text-secondary-text leading-relaxed text-sm">
              <li>• بدء محادثة سريعة دون انتظار أو نقل بيانات غير ضرورية.</li>
              <li>• تقديم نصيحة أولية مجانية حول فكرة مشروعك.</li>
              <li>• ترتيب موعد اتصال أو عرض سعر خلال دقائق.</li>
              <li>• الرد على أي سؤال تقني أو تصميمي يهمك الآن.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
