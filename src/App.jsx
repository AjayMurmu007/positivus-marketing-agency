import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cat from "./components/Cat";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/workingProcess";
import Team from "./components/team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-primary overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Cat />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
