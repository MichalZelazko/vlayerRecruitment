import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-grow">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* <HeroSection/>
      <HighlightsSection/> */}
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
