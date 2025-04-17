
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import ParticlesBg from "particles-bg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Particles effect */}
      <div className="absolute inset-0 z-0">
        <ParticlesBg type="cobweb" bg={true} color="#f8b500" num={100} />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="text-yellow-500 block mb-3">WEB DESIGN</span>
          <span className="text-yellow-500">AND DEVELOPMENT</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-8 animate-fade-in opacity-90">
          Altan Yesilkurt - Senior Fullstack Developer
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          <a href="mailto:altanyesilkurt@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" onClick={() => scrollToSection("contact")}>
              CONTACT ME
            </Button>
          </a>
        </div>
        
        <div 
          className="absolute bottom-8 left-0 right-0 mx-auto transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          <ChevronDown size={32} className="text-white/80 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
