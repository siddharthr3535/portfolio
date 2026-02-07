import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    title: "Image Manipulation Tool",
    description:
      "A modular desktop tool built using Java and Swing UI, supporting 15+ image processing operations across 8+ formats with a clean MVC architecture.",
    tech: ["Java", "Swing", "JUnit", "OOP"],
    github:
      "https://github.com/Nishaant-Soni/PDP_Assignment-4/tree/Assignment6",
  },
  {
    title: "Contact Importer",
    description:
      "A TypeScript-based contact importing app that parses, validates, and stores contact data in structured format using React and Tailwind.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/siddharthr3535/ContactImporter",
  },
  {
    title: "Canvas-Inspired LMS",
    description:
      "Full-featured Learning Management System (LMS) with course, assignment, quiz, and user management, built with role-based access, auto-grading, and real-time analytics. Deployed to support 1000+ concurrent users.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/siddharthr3535/kambaz-react-web-app",
  },
  {
    title: "Flight Strike Analysis Platform",
    description:
      "An analytics platform that leverages R, SQLite, and MySQL to process 50,000+ flight strike records. Generated 20+ interactive visualizations to highlight trends in wildlife collisions by region, severity, and frequency.",
    tech: ["R", "RStudio", "MySQL", "SQLite", "Data Visualization"],
  },
  {
    title: "SettleMint",
    description:
      "A Splitwise-like expense sharing web app built with FastAPI and TypeScript, allowing users to add splits, track balances, and manage shared expenses in real time.",
    tech: ["FastAPI", "TypeScript", "React", "TailwindCSS"],
    github: "https://github.com/siddharthr3535/SettleMint-Web-App",
  },
  {
    title: "Sentiment Aura",
    description:
      "Real-time full-stack app that transforms speech into dynamic generative art. Orchestrates Deepgram WebSocket transcription, OpenAI sentiment analysis, and p5.js Perlin noise visualization. Built with React, FastAPI, showcasing async API orchestration and creative data-driven design for Memory Machines technical assessment.",
    tech: ["React", "FastAPI", "Deepgram API", "OpenAI API", "p5.js"],
    github: "https://github.com/siddharthr3535/sentiment_aura",
    demo: "https://spiffy-phoenix-80b648.netlify.app",
  },
];

const Projects: FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-transform cursor-default hover:shadow-lg focus-within:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
              tabIndex={0}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion ? { duration: 0 } : { delay: 0.1, duration: 0.3 }
              }
            >
              <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
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
