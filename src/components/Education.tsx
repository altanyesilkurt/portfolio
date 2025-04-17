
import { Card } from "@/components/ui/card";
import { Calendar, School, Award } from "lucide-react";

const educationData = [
  {
    institution: "Yildiz Technical University",
    degree: "Bachelor of Science in Computer Science",
    period: "SEP 2014 - JAN 2019",
    details: "GPA: 3.1 / 4 (Honor Student)"
  },
  {
    institution: "Turkcell",
    degree: "Software Quality and Testing",
    period: "OCT 2017 - DEC 2017",
    details: "Certification"
  },
  {
    institution: "PluralSight",
    degree: "Angular Fundamentals",
    period: "JAN 2021 - FEB 2021",
    details: "Certification"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Education & Certification</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  {index === 0 ? (
                    <School className="text-blue-700" size={24} />
                  ) : (
                    <Award className="text-blue-700" size={24} />
                  )}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-lg text-gray-700">{edu.degree}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-700">{edu.details}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
