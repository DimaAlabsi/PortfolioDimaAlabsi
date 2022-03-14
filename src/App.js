import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  useEffect(() => {
    document.title = "Dima's Portfolio";
  }, []);

  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
