
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <div className="container mx-auto px-4 py-6">
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
