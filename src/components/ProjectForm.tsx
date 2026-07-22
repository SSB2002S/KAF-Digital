import React, { useState } from "react";
import { Send, CheckCircle2, AlertTriangle, PhoneCall, Loader2, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectFormValues } from "../types";

export default function ProjectForm() {
  const initialValues: ProjectFormValues = {
    fullName: "",
    companyName: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    budget: "",
    timeline: "",
    description: "",
  };

  const [values, setValues] = useState<ProjectFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<ProjectFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [simulateError, setSimulateError] = useState(false); // Toggle to test error handling

  const validateField = (name: keyof ProjectFormValues, value: string) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = "هذا الحقل مطلوب";
    } else {
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMsg = "يرجى إدخال بريد إلكتروني صحيح";
        }
      } else if (name === "whatsapp") {
        // Simple global phone validation
        const phoneRegex = /^[\d\s\-\+\(\)]{7,15}$/;
        if (!phoneRegex.test(value)) {
          errorMsg = "يرجى إدخال رقم هاتف صحيح";
        }
      }
    }
    return errorMsg;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    const errorMsg = validateField(name as keyof ProjectFormValues, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const formErrors: Partial<ProjectFormValues> = {};
    let hasErrors = false;

    Object.keys(values).forEach((key) => {
      const fieldName = key as keyof ProjectFormValues;
      const errorMsg = validateField(fieldName, values[fieldName]);
      if (errorMsg) {
        formErrors[fieldName] = errorMsg;
        hasErrors = true;
      }
    });

    setErrors(formErrors);

    if (hasErrors) {
      return;
    }

    // Submit form simulations
    setIsSubmitting(true);
    setSubmitStatus("idle");

    setTimeout(() => {
      setIsSubmitting(false);
      if (simulateError) {
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
        
        // Persist real lead data into localstorage
        const currentLeads = JSON.parse(localStorage.getItem("kaf_project_leads") || "[]");
        currentLeads.push({
          ...values,
          id: Date.now().toString(),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem("kaf_project_leads", JSON.stringify(currentLeads));

        setValues(initialValues);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vector ring */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-soft-purple/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Right side: Explanatory Column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-right">
            <div>
              <span className="text-sm font-bold text-primary-purple bg-soft-purple px-4 py-1.5 rounded-full inline-block mb-3">
                خطوتك الأولى للأثر
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-dark-purple leading-tight mb-4">
                لديك فكرة؟ <br />
                <span className="text-primary-purple">لنحدد الخطوة المناسبة لمشروعك</span>.
              </h2>
              <p className="text-secondary-text text-base leading-[1.8] mb-6">
                شاركنا نبذة عن مشروعك الاستراتيجي وأهدافك الإبداعية، وسيقوم فريق كاف بمراجعة كافة التفاصيل وصياغة تصور مبدئي والتواصل معك خلال يوم عمل واحد فقط.
              </p>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-4 pt-6 border-t border-border-purple/40">
              <h4 className="font-bold text-dark-purple text-sm mb-3">تفضل التواصل المباشر والسريع؟</h4>
              
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href="https://wa.me/966500000000" // Simulated premium placeholder contact
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-2xl text-sm font-bold transition-all shadow-md shadow-emerald-500/10 focus:outline-none"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>تواصل مباشرة عبر واتساب</span>
                </a>
                
                <a
                  href="mailto:kaf.digita0ffice@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-secondary-bg hover:bg-soft-purple border border-border-purple/60 hover:border-primary-purple/35 text-dark-purple px-5 py-3 rounded-2xl text-sm font-bold transition-all focus:outline-none"
                >
                  <span>البريد الإلكتروني</span>
                </a>
              </div>

              {/* Simulation switch to showcase error state */}
              <div className="pt-4 flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={simulateError}
                    onChange={(e) => setSimulateError(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-full rtl:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500"></div>
                  <span className="ms-2 text-xs font-bold text-secondary-text">
                    محاكاة حدوث خطأ عند إرسال النموذج
                  </span>
                </label>
              </div>
            </div>

          </div>

          {/* Left side: Fully interactive form */}
          <div className="lg:col-span-7">
            <div className="bg-secondary-bg/40 border border-border-purple/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  /* Success State Frame */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-4 space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto border border-emerald-100">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-2xl text-dark-purple mb-2">تم الإرسال بنجاح!</h3>
                      <p className="text-secondary-text text-sm sm:text-base max-w-md mx-auto leading-[1.8]">
                        تم استلام تفاصيل مشروعك بنجاح. سنتواصل معك خلال يوم عمل واحد عبر البريد أو واتساب لنبدأ النقاش الفني.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="inline-flex items-center gap-2 text-primary-purple hover:text-secondary-purple font-bold text-sm sm:text-base cursor-pointer focus:outline-none"
                    >
                      <span>إرسال طلب مشروع آخر</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  /* Form Frame */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Error simulation banner inside form if active */}
                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div className="text-right text-xs sm:text-sm">
                          <p className="font-bold">عذراً، تعذر إرسال طلبك حالياً.</p>
                          <p className="mt-1 text-red-700/90">
                            يرجى التحقق من اتصال الإنترنت، أو تعبئة البيانات بالكامل، أو التواصل معنا مباشرة ومباشرة عبر واتساب.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5 text-right">
                        <label htmlFor="fullName" className="block text-xs sm:text-sm font-bold text-dark-purple">
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={values.fullName}
                          onChange={handleChange}
                          placeholder="مثال: فيصل القحطاني"
                          className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none ${
                            errors.fullName ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                          }`}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                      </div>

                      {/* Company input */}
                      <div className="space-y-1.5 text-right">
                        <label htmlFor="companyName" className="block text-xs sm:text-sm font-bold text-dark-purple">
                          اسم المشروع أو الشركة *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={values.companyName}
                          onChange={handleChange}
                          placeholder="مثال: شركة ثروة لخدمات المال"
                          className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none ${
                            errors.companyName ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                          }`}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email input */}
                      <div className="space-y-1.5 text-right">
                        <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-dark-purple">
                          البريد الإلكتروني *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none ltr text-right ${
                            errors.email ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                      </div>

                      {/* Whatsapp input */}
                      <div className="space-y-1.5 text-right">
                        <label htmlFor="whatsapp" className="block text-xs sm:text-sm font-bold text-dark-purple">
                          رقم واتساب المباشر *
                        </label>
                        <input
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          value={values.whatsapp}
                          onChange={handleChange}
                          placeholder="مثال: +966 50000000"
                          className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none ltr text-right ${
                            errors.whatsapp ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                          }`}
                        />
                        {errors.whatsapp && <p className="text-red-500 text-xs">{errors.whatsapp}</p>}
                      </div>
                    </div>

                    {/* Service requested selector */}
                    <div className="space-y-1.5 text-right">
                      <label htmlFor="serviceType" className="block text-xs sm:text-sm font-bold text-dark-purple">
                        الخدمة المطلوبة *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={values.serviceType}
                        onChange={handleChange}
                        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none ${
                          errors.serviceType ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                        }`}
                      >
                        <option value="">-- اختر مجال العمل المطلوب --</option>
                        <option value="تصميم واجهات وتجربة المستخدم UI/UX">تصميم واجهات وتجربة المستخدم UI/UX</option>
                        <option value="تصميم الهوية البصرية">تصميم الهوية البصرية</option>
                        <option value="التصميم الجرافيكي">التصميم الجرافيكي</option>
                        <option value="المواقع والمنتجات الرقمية">المواقع والمنتجات الرقمية</option>
                        <option value="أخرى">خدمات أخرى / استشارة إبداعية</option>
                      </select>
                      {errors.serviceType && <p className="text-red-500 text-xs">{errors.serviceType}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Budget selector */}
                      <div className="space-y-1.5 text-right">
                        <label htmlFor="budget" className="block text-xs sm:text-sm font-bold text-dark-purple">
                          الميزانية التقريبية *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={values.budget}
                          onChange={handleChange}
                          className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none ${
                            errors.budget ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                          }`}
                        >
                          <option value="">-- اختر الميزانية المقررة --</option>
                          <option value="أقل من 5,000 ريال">أقل من 5,000 ريال سعودي</option>
                          <option value="5,000 - 15,000 ريال">5,000 - 15,000 ريال سعودي</option>
                          <option value="15,000 - 30,000 ريال">15,000 - 30,000 ريال سعودي</option>
                          <option value="أكثر من 30,000 ريال">أكثر من 30,000 ريال سعودي</option>
                        </select>
                        {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
                      </div>

                      {/* Timeline expected selector */}
                      <div className="space-y-1.5 text-right">
                        <label htmlFor="timeline" className="block text-xs sm:text-sm font-bold text-dark-purple">
                          موعد الإطلاق المتوقع *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={values.timeline}
                          onChange={handleChange}
                          className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none ${
                            errors.timeline ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                          }`}
                        >
                          <option value="">-- اختر الإطار الزمني --</option>
                          <option value="عاجل (خلال أسبوعين)">عاجل (خلال أسبوعين)</option>
                          <option value="خلال شهر">خلال شهر</option>
                          <option value="خلال 2 - 3 أشهر">خلال 2 - 3 أشهر</option>
                          <option value="مرن / لا يوجد وقت محدد">مرن / لا يوجد وقت محدد</option>
                        </select>
                        {errors.timeline && <p className="text-red-500 text-xs">{errors.timeline}</p>}
                      </div>
                    </div>

                    {/* Project description */}
                    <div className="space-y-1.5 text-right">
                      <label htmlFor="description" className="block text-xs sm:text-sm font-bold text-dark-purple">
                        حدثنا عن فكرتك وأهدافك *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={values.description}
                        onChange={handleChange}
                        placeholder="اكتب نبذة مختصرة عن فكرة مشروعك، المشكلة التي ترغب في حلها، والنتيجة التي تطمح لها..."
                        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none resize-none ${
                          errors.description ? "border-red-500" : "border-border-purple/80 focus:border-primary-purple"
                        }`}
                      ></textarea>
                      {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-secondary-purple disabled:bg-primary-purple/60 text-white py-4 px-6 rounded-2xl font-bold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:transform-none shadow-lg shadow-primary-purple/15 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>جاري مراجعة وإرسال الطلب...</span>
                        </>
                      ) : (
                        <>
                          <span>ابدأ مناقشة مشروعك</span>
                          <Send className="w-4 h-4 transform rotate-180" />
                        </>
                      )}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
