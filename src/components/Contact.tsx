import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Contact</h2>
      <Card className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-700 mb-6">
              Feel free to reach out to me for any inquiries about potential collaborations, job opportunities, or just to connect!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Mail className="text-blue-700" size={20} />
                </div>
                <a href="mailto:altanyesilkurt@gmail.com" className="text-blue-600 hover:underline">
                  altanyesilkurt@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Phone className="text-blue-700" size={20} />
                </div>
                <a href="tel:+90544 241 57 63" className="text-blue-600 hover:underline">
                  +90 544 241 57 63
                </a>
              </li>
              <li className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Github className="text-blue-700" size={20} />
                </div>
                <a href="https://github.com/altanyesilkurt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/altanyesilkurt
                </a>
              </li>
              <li className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Linkedin className="text-blue-700" size={20} />
                </div>
                <a href="https://linkedin.com/in/altanyesilkurt/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/altanyesilkurt
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">Language</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Turkish (Native)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">English (B2)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/uploads/ebcf969f-1458-4557-941a-f9234b690e3b.png"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
