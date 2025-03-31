import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      <Navbar/>

      <HeroSection/>

      <About/>

      <Skill/>

      <Projects/>

      <Contact/>

      <Footer/>
    </div>
  );
};

export default App;