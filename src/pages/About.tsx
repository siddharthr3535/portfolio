import { FC } from "react";
import { motion } from "framer-motion";

const About: FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-300 py-20"
      aria-label="About Section"
    >
      <div className="max-w-5xl mx-auto">
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
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm a passionate Software Engineer with 2+ years of experience in full-stack development. 
          I focus on building scalable, high-performing applications using React, TypeScript, Flask, ASP.NET Core 
          and more. I enjoy solving real-world problems with clean code and elegant UIs.
        </motion.p>

        {/* Skills + Education Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
              Soft Skills
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span>Passion & Ownership</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span>Adaptability & Problem-Solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span>Cross-Functional Teamwork</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span>Strong Communication</span>
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
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400 mb-4">
              Education
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-4">
              <li>
                <strong className="block text-lg">Master of Computer Science</strong>
                <span className="text-gray-600 dark:text-gray-400">Kent State University</span><br />
                <span className="text-sm text-gray-500 dark:text-gray-500">GPA: 3.9 • Aug 2024 - Dec 2025</span>
              </li>
              <li className="pt-2">
                <strong className="block text-lg">Bachelor of Computer Science</strong>
                <span className="text-gray-600 dark:text-gray-400">Anna University</span><br />
                <span className="text-sm text-gray-500 dark:text-gray-500">GPA: 8.65/10 • Jul 2018 - May 2022</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          
        >
          <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400 mb-4 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "React", "TypeScript", "JavaScript", 
              "Python", "Flask", "ASP.NET Core",
              "PostgreSQL", "Angular", "MySQL",
              "Tailwind CSS", "Docker", "AWS"
            ].map((skill, index) => (
              <motion.div
                key={index} 
                whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}             
transition={{ delay: 0.1, duration: 0.1 }}

                className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg text-center shadow-sm"
              >
                <span className="text-gray-800 dark:text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;