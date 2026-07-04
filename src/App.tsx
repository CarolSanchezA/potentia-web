import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";
import Reviews from "@/components/sections/Reviews";
import Triage from "@/components/sections/Triage";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";


export default function App() {
  return (
    <div className="min-h-screen bg-white text-potentia-dark font-sans antialiased">
      {" "}
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Reviews />
        <Triage />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
