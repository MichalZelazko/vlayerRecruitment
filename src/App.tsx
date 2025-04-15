import "./App.css";
import Footer from "./components/footer/Footer";
import HighlightsSection from "./components/highlights-section/HighlightsSection";
import Navbar from "./components/navbar/Navbar";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-grow">
        {/* <HeroSection/>*/}
        <HighlightsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
