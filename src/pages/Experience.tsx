import React, { FC } from "react";
import { motion } from "framer-motion";
import ZohoLogo from "../assets/Zoho.png";
import AlphionLogo from "../assets/Alphion.png";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  details: string[];
  logo: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Alphion Corporation",
    duration: "Dec 2023 – Jul 2024",
    logo: AlphionLogo,
    details: [
      "Built backend microservices in Java and Spring Boot to onboard 1000+ network devices.",
      "Integrated Google Maps API for node location accuracy across 500+ nodes.",
      "Locked down web forms with CSRF protection to reduce security issues by 60%.",
      "Automated network health checks, cutting manual audits by 70% and speeding alerts.",
    ],
  },
  {
    title: "Member Technical Staff",
    company: "Zoho Corporation",
    duration: "Aug 2022 – Jul 2023",
    logo: ZohoLogo,
    details: [
      "Created a Java authentication system, reducing unauthorized access by 30%.",
      "Built a real-time analytics dashboard with Java & PostgreSQL.",
      "Refactored 5k+ lines for FIPS‑compliant encryption.",
      "Integrated OAuth 2.0 for seamless enterprise SSO.",
    ],
  },
  {
    title: "Project Trainee",
    company: "Zoho Corporation",
    duration: "Oct 2021 – May 2022",
    logo: ZohoLogo,
    details: [
      "Tuned Java REST endpoints with Jersey, slashing response times by 25%.",
      "Enhanced logging/monitoring to cut debugging time by 30%.",
      "Profiled performance with JProfiler, boosting throughput by 15%.",
    ],
  },
];

const Experience: FC = () => (
  <section
    id="experience"
    className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-4"
    aria-label="Experience Section"
  >
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      My Experience
    </motion.h2>

    <div className="relative max-w-4xl mx-auto">
      {/* vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1 bg-gray-300 dark:bg-gray-700 w-1 h-full" />

      {experienceData.map((exp, idx) => {
        const isLeft = idx % 2 === 0;
        return (
          <div key={idx} className={`grid grid-cols-9 items-center mb-16`}>
            {/* Left side card */}
            {isLeft && (
              <motion.div
                className="col-span-4 col-start-1 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <h3 className="font-semibold text-lg text-blue-500 dark:text-blue-400 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {exp.company}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Circle + Logo */}
            <div className="col-span-1 flex justify-center">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right side date or card */}
            {isLeft ? (
              <div className="col-span-4 col-start-6 text-right text-gray-600 dark:text-gray-400 italic text-sm">
                {exp.duration}
              </div>
            ) : (
              <motion.div
                className="col-span-4 col-start-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <h3 className="font-semibold text-lg text-blue-500 dark:text-blue-400 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {exp.company}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Opposite date */}
            {!isLeft && (
              <div className="col-span-4 col-start-1 text-left text-gray-600 dark:text-gray-400 italic text-sm">
                {exp.duration}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </section>
);

export default Experience;
