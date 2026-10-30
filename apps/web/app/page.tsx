import { PromoBanner } from "@/components/marketing/PromoBanner";
import { Navbar } from "@/components/marketing/Navbar";
import { HeroSection } from "@/components/marketing/HeroSection";
import { Footer } from "@/components/marketing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-white text-slate-900">
      <PromoBanner />
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
