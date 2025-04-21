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
    title: "Software Engineer",
    company: "Alphion Corporation",
    duration: "Dec 2023 – Jul 2024",
    details: [
      "Built backend microservices in Java and Spring Boot that helped onboard 1000+ network devices for BSNL and Airtel.",
      "Hooked up Google Maps into the platform to boost location accuracy across 500+ nodes.",
      "Locked down web forms with CSRF protection and helped squash 60% of potential security issues.",
      "Automated network health checks so the team didn’t have to — cut manual checks by 70% and made alerts way faster.",
    ],
  },
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation",
    duration: "Aug 2022 – Jul 2023",
    details: [
      "Created a custom authentication system in Java — reduced unauthorized logins and made security reviews smoother.",
      "Worked on a dashboard that tracked cloud usage and activities in real time (built with Java + PostgreSQL).",
      "Cleaned up 5000+ lines of legacy code to follow strict security standards (FIPS).",
      "Integrated OAuth 2.0 for SSO logins — made access more secure and seamless for enterprise clients.",
    ],
  },
  {
    title: "Project Trainee",
    company: "Zoho Corporation",
    duration: "Oct 2021 – May 2022",
    details: [
      "Tuned up Java REST APIs with Jersey — dropped response times by 25%.",
      "Improved logging and monitoring so devs could debug stuff faster.",
      "Used JProfiler to analyze and optimize performance — gave us a 15% boost in service speed.",
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
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-4">
                {exp.duration}
              </p>

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
