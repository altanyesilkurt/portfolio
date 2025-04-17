
import React from "react";
import { Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-yellow-500">About Me</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
          <p className="text-lg text-center text-white/70 max-w-2xl">
            Passionate and results-driven Fullstack Developer with expertise in modern web technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-md mt-1">
                <Code size={24} className="text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Profile</h3>
                <p className="text-white/70">
                  I'm Altan Yesilkurt, a Senior Fullstack Developer with over 8 years of experience building 
                  responsive web applications using modern technologies. I specialize in creating efficient, 
                  scalable, and maintainable solutions that deliver exceptional user experiences.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-md mt-1">
                <Code size={24} className="text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">My Approach</h3>
                <p className="text-white/70">
                  I believe in writing clean, efficient code and staying up-to-date with the latest industry trends. 
                  My collaborative approach and strong communication skills enable me to work effectively with teams 
                  to deliver high-quality projects on time and within budget.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-md mt-1">
                <Code size={24} className="text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Beyond Coding</h3>
                <p className="text-white/70">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and sharing my knowledge through technical articles and mentoring. I'm passionate about continuous 
                  learning and personal development.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 animate-pulse"></div>
              <img 
                src="/uploads/altan.jpg"
                alt="Altan Yesilkurt"
                className="relative w-full h-full object-cover rounded-full p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
