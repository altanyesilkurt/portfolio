
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experienceData = [
  {
    company: "Enquire AI",
    position: "Senior Software Developer",
    period: "DEC 2022 - PRESENT",
    responsibilities: [
      "Developing and configuring unified global platform that enhance real-time access to global subject-matter expertise.",
      "Collaborated with cross-functional teams to maintain platform scalability and performance.",
      "Designed and implemented new features and ensuring software reliability through thorough testing and best practices."
    ]
  },
  {
    company: "BtcTurk",
    position: "Mid. Software Developer",
    period: "JUN 2021 - DEC 2022",
    responsibilities: [
      "Contributed to the development and maintenance of one of the largest cryptocurrency exchange platforms, serving over 5 million users.",
      "Designed and implemented new features to enhance trading performance and security.",
      "Optimized backend processes to improve system efficiency and reliability."
    ]
  },
  {
    company: "Litum Technologies",
    position: "Software Developer",
    period: "JUN 2020 - JUN 2021",
    responsibilities: [
      "Worked on geolocation tracking system (RTLS) for tracking assets and personnel within defined zones.",
      "Maintained and enhanced the Location Engine, Business Rule Engine, and Web UI to improve system accuracy and performance.",
      "Developed and integrated new features to support various industry use cases."
    ]
  },
  {
    company: "CFM Cooling and Automation",
    position: "Software Developer",
    period: "AUG 2019 - JUN 2020",
    responsibilities: [
      "Developed and integrated new features to support various industry use cases.",
      "Focused on writing clean, well-documented code while adhering to SOLID principles.",
      "Collaborated with the team to enhance system stability and usability."
    ]
  },
  {
    company: "Ipera Technologies",
    position: "Software Developer",
    period: "JUN 2018 - JUN 2019",
    responsibilities: [
      "Specialized in frontend application development, focusing on data visualization and reporting solutions.",
      "Developed interactive reports using Highcharts to analyze telephone traffic data.",
      "Assisted in optimizing database queries for better performance and usability."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Briefcase className="text-blue-700" size={24} />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.position} | {exp.company}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
