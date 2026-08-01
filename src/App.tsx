/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesBar from "./components/ServicesBar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyKaf from "./components/WhyKaf";
import Process from "./components/Process";
import TrustSection from "./components/TrustSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ProjectForm from "./components/ProjectForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-main-text selection:bg-primary-purple/15 selection:text-primary-purple antialiased">
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Short Services Quick overview bar */}
        <ServicesBar />

        {/* 4. About Us (من نحن) */}
        <AboutUs />

        {/* 5. Services Detail (الخدمات) */}
        <Services />

        {/* 6. Case Studies & Projects (المشاريع المختارة) */}
        <Projects />

        {/* 7. Why KAF? (لماذا كاف؟) */}
        <WhyKaf />

        {/* 8. Working process timeline (آلية العمل) */}
        <Process />

        {/* 9. True trust factors (عناصر الثقة الحقيقية) */}
        <TrustSection />

        {/* 10. Partner Testimonials (آراء العملاء) */}
        <Testimonials />

        {/* 11. Frequently Asked Questions (الأسئلة الشائعة) */}
        <FAQ />

        {/* 12. Direct contact section (التواصل المباشر) */}
        <ProjectForm />
      </main>

      {/* 13. Footer (التذييل) */}
      <Footer />

      {/* 14. Non-intrusive Sticky Floating WhatsApp Bubble (Section 20 requirement) */}
      <a
        href="https://wa.me/967734895281?text=مرحبًا%20فريق%20كاف%20ديجيتال،%20أود%20بدء%20محادثة%20بخصوص%20مشروعي.%20اسمي:%20%0Aنبذة%20مختصرة%20عن%20المشروع:%20%0Aالميزانية%20المتوقعة:%20%0Aأفضل%20وقت%20للتواصل:%20"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        style={{ width: 56, height: 56 }}
        title="تواصل مباشرة عبر واتساب"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-6 h-6 stroke-[2.5]" />
        
        {/* Hover Label */}
        <span className="absolute right-14 bg-dark-purple text-white text-xs font-bold py-2 px-3 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
          تواصل معنا مباشرة عبر واتساب
        </span>
      </a>
    </div>
  );
}
