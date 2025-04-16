import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero-section/HeroSection";
import HighlightsSection from "./components/highlights-section/HighlightsSection";
import Navbar from "./components/navbar/Navbar";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // global duration
      once: true, // only animate once
    });
  }, []);
  return (
    <>
      <Navbar />
      <main className="w-full flex-grow">
        <HeroSection />
        <HighlightsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
