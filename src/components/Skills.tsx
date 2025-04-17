
import { Card } from "@/components/ui/card";
import { Code, Star } from "lucide-react";

const skillsData = {
  frontend: [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Angular.js",
    "Vue.js",
    "Node.js",
    "HTML5 / CSS3",
    "Atomic UI",
    "Redux / XState"
  ],
  backend: [
    "REST API / JSON",
    "C# / .Net",
    "SQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "MVC / MVVM"
  ],
  tools: [
    "Firebase",
    "PlantUIO",
    "DevExpress",
    "Ionic Framework",
    "Jasmine / Karma",
    "Selenium",
    "GitHub-GitLab-BitBucket",
    "CI / CD Toolchain",
    "Kibana",
    "Postman",
    "Jira"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full mr-3">
              <Code className="text-blue-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Frontend</h3>
          </div>
          <ul className="space-y-2">
            {skillsData.frontend.map((skill, index) => (
              <li key={index} className="flex items-start">
                <Star className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full mr-3">
              <Code className="text-blue-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Backend</h3>
          </div>
          <ul className="space-y-2">
            {skillsData.backend.map((skill, index) => (
              <li key={index} className="flex items-start">
                <Star className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full mr-3">
              <Code className="text-blue-700" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Tools & Others</h3>
          </div>
          <ul className="space-y-2">
            {skillsData.tools.map((skill, index) => (
              <li key={index} className="flex items-start">
                <Star className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
