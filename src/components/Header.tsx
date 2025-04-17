
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X, Code } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id') || '';
        
        if (sectionTop < 200 && sectionTop >= -200) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about me' },
    { id: 'experience', label: 'experience' },
    { id: 'skills', label: 'knowledge' },
    { id: 'contact', label: 'contacts' }
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="font-bold text-xl md:text-2xl text-white transition-all duration-300 hover:text-yellow-500">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-2"
          >
            <div className="bg-blue-500 p-2 rounded">
              <Code size={24} className="text-white" />
            </div>
            Altan Yesilkurt
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`text-white hover:text-yellow-500 uppercase text-sm font-medium tracking-wider transition-colors ${
                activeSection === item.id ? 'text-yellow-500' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:text-yellow-500 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Resume Button */}
        <a 
          href="/uploads/ebcf969f-1458-4557-941a-f9234b690e3b.png"
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center"
        >
          <Button 
            variant="outline" 
            className="gap-2 bg-yellow-500/10 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20"
          >
            <FileText size={16} />
            <span>Resume</span>
          </Button>
        </a>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`text-white hover:text-yellow-500 uppercase text-sm font-medium tracking-wider transition-colors py-2 border-b border-gray-700 ${
                  activeSection === item.id ? 'text-yellow-500' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/uploads/ebcf969f-1458-4557-941a-f9234b690e3b.png"
              target="_blank" 
              rel="noopener noreferrer"
              className="pt-2"
            >
              <Button 
                variant="outline" 
                className="gap-2 w-full justify-center bg-yellow-500/10 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20"
              >
                <FileText size={16} />
                <span>Resume</span>
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
