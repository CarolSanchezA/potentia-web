import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Footer from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-potentia-bg text-potentia-dark font-sans antialiased">
      {" "}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
