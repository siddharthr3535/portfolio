import React, { FC } from "react";
import { motion } from "framer-motion";

// List your skills exactly as you display them
const skills = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Node.js",
  "Express.js",
  "React",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "Python",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "AWS",
];

// Map the displayed skill string to the asset filename (without “.jpg”)
const assetMap: Record<string, string> = {
  "Spring Boot": "Spring",
  "Spring MVC": "Spring",
  "Node.js": "Node",
  "Express.js": "Express",
  // everything else matches its own name
};

const About: FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-20"
      aria-label="About Section"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Summary */}
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm a passionate Software Engineer with 2+ years of experience in
          full-stack development. I focus on building scalable, high‑performing
          web applications using Java, React and other modern frameworks.
        </motion.p>

        {/* Soft Skills & Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Soft Skills */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4 dark:text-blue-400">
              Soft Skills
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                Passion &amp; Ownership
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                Adaptability &amp; Problem‑Solving
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                Cross‑Functional Teamwork
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                Strong Communication
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4 dark:text-blue-400">
              Education
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-4">
              <li>
                <strong className="block text-lg">
                  Master of Computer Science
                </strong>
                <span className="text-gray-600 dark:text-gray-400">
                  Northeastern University
                </span>
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  GPA: 4.0 • Sep 2024 – May 2026
                </span>
              </li>
              <li className="pt-2">
                <strong className="block text-lg">
                  Bachelor of Computer Science
                </strong>
                <span className="text-gray-600 dark:text-gray-400">
                  Anna University
                </span>
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  GPA: 8.79/10 • Jul 2018 – May 2022
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-blue-500 mb-6 dark:text-blue-400 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
            {skills.map((skill, idx) => {
              const key = assetMap[skill] ?? skill;
              const src = require(`../assets/${key}.jpg`) as string;
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-2 text-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shadow-sm">
                    <img
                      src={src}
                      alt={skill}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">
                    {skill}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
