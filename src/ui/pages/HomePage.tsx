import { Outlet } from "react-router-dom";
import Navbar from "@/ui/layout/Navbar";
import Footer from "@/ui/layout/Footer";
import FloatingWhatsApp from "@/ui/layout/FloatingWhatsApp";
import HeroSection from "@/ui/features/hero/HeroSection";
import TeamSection from "@/ui/features/team/TeamSection";
import TestimonialsSection from "@/ui/features/testimonials/TestimonialsSection";
import TriageSection from "@/ui/features/triage/TriageSection";
import FaqSection from "@/ui/features/faq/FaqSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-potentia-dark font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <TestimonialsSection />
        <TriageSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />

      {/* Rotas legais montam o seu overlay aqui, sobre a home. */}
      <Outlet />
    </div>
  );
}
