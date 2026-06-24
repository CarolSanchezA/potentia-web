import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import Triage from "@/components/sections/Triage";
import Faq from "./components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-potentia-bg text-potentia-dark font-sans antialiased">
      {" "}
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Services />
        <Triage />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
