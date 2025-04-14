import { FC } from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import React from "react";

const GithubIcon = FaIcons.FaGithub as React.ComponentType;
const ExternalLinkIcon = FaIcons.FaExternalLinkAlt as React.ComponentType;

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description:
      "A responsive E-Commerce website focusing on performance and user-centric design. Reduced bounce rate by 15%.",
    tech: ["React", "TypeScript"],
    github: "https://github.com/Sandeep25560/E-Commerce-Website/tree/master",
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack system with React.js, ASP.NET Core, and MySQL. Handled 1000+ users with seamless CRUD functionality.",
    tech: ["React", "ASP.NET Core", "MySQL"],
    github: "https://github.com/Sandeep25560/Employee_Management",
  },
  {
    title: "TravelSync",
    description:
      "Performance-optimized travel planner built with Flask and SQLAlchemy. Reduced query times by 30%.",
    tech: ["Flask", "SQLAlchemy", "Python"],
    github: "https://github.com/Sandeep25560/travel-planner",
  },
  {
    title: "Task Management Application",
    description:
      "Cross-platform task app using React and ASP.NET Core. Achieved 98% test coverage and smooth data syncing.",
    tech: ["React", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/Sandeep25560/Task-Management-system",
  },
];

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-transform cursor-default hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-500 dark:text-blue-300 hover:underline"
                  >
                    <GithubIcon /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-500 dark:text-blue-300 hover:underline"
                  >
                    <ExternalLinkIcon /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
