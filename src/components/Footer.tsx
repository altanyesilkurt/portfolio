
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Altan Yesilkurt</h3>
            <p className="text-gray-300">Senior Fullstack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/altanyesilkurt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/altanyesilkurt/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:altanyesilkurt@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Altan Yesilkurt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
