import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/ames/Navbar";
import Hero from "@/components/ames/Hero";
import About from "@/components/ames/About";
import Activities from "@/components/ames/Activities";
import Gallery from "@/components/ames/Gallery";
import News from "@/components/ames/News";
import Contact from "@/components/ames/Contact";
import Donation from "@/components/ames/Donation";
import Footer from "@/components/ames/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <News />
      <Donation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
