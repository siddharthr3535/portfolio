import { FC } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  details: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "ValueLabs",
    duration: "Sep 2023 – Jul 2024",
    details: [
        "Led the development of a healthcare application using React Micro-frontend Architecture.",

        "Improved scalability and reduced feature delivery time by 25%.",
        
        "Spearheaded the implementation of engineering processes, tools, and systems.",
        
        "Enhanced team productivity and scalability through process improvements.",
        
        "Mentored junior developers and optimized Git workflows, boosting collaboration and code quality."
    ],
  },
  {
    title: "Software Engineer",
    company: "ValueLabs",
    duration: "Apr 2022 – Sep 2023",
    details: [
        "Developed reusable React components.",

        "Enhanced code maintainability through component creation.",
        
        "Improved application performance by optimizing architecture.",
        
        "Contributed to a 20% increase in user engagement.",
        
        "Incorporated customer feedback into product features."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "ValueLabs",
    duration: "Jan 2022 – Mar 2022",
    details: [
        "Designed and implemented React components.",

        "Reduced task time by 20% through efficient coding.",
        
        "Improved code stability using Jest testing.",
        
        "Collaborated with senior engineers on client features.",
        
        "Improved application performance metrics through collaborative efforts."
    ],
  },
];

const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-300 py-20"
      aria-label="Experience Section"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-transform cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-4">{exp.duration}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.details.map((point, pointIdx) => (
                  <li key={pointIdx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
