import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import img from "./assets/ChatGPT Image Apr 1, 2025, 09_35_27 AM.png";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-screen text-white font-sans bg-cover bg-center bg-fixed scroll-smooth"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
