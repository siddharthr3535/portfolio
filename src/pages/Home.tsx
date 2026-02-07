import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, useReducedMotion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import * as FiIcons from "react-icons/fi";
import profileImage from "../assets/profile.jpg";
import { RESUME_PDF, RESUME_PDF_FILENAME } from "../constants/resume";

const Home: FC = () => {
  const typewriterWords: string[] = ["Full-Stack Engineer", "Tech Explorer"];
  type IconProps = { size?: number; className?: string };
  const FiGithub = FiIcons.FiGithub as React.ComponentType<IconProps>;
  const FiLinkedin = FiIcons.FiLinkedin as React.ComponentType<IconProps>;
  const FiDownload = FiIcons.FiDownload as React.ComponentType<IconProps>;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-300 pt-0 mt-0"
      aria-label="Home Section"
    >
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          className="hidden md:block mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg mt-14"
          initial={shouldReduceMotion ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { delay: 0.2, type: "spring" }
          }
        >
          <img
            src={profileImage}
            alt="Siddharth Ramachandran"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4 font-heading"
          initial={shouldReduceMotion ? false : { y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Siddharth
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl mb-6 text-gray-600 dark:text-gray-200"
          initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.5 }
          }
        >
          A Passionate{" "}
          <span className="text-blue-500 dark:text-blue-400">
            <Typewriter
              words={typewriterWords}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-8 max-w-lg mx-auto"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { delay: 0.6, duration: 0.5 }
          }
        >
          Software Engineer with 2+ years of experience in full-stack
          development. Proven track record of shipping high-quality products
          with a focus on scalability, optimization, and user experience. Adept
          at translating business and product ideas into engineering solutions
          and collaborating in cross-functional teams to drive product
          development.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={shouldReduceMotion ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={
            shouldReduceMotion ? { duration: 0 } : { delay: 0.8, duration: 0.4 }
          }
        >
          <ScrollLink
            to="projects"
            smooth
            duration={600}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all hover:shadow-xl cursor-pointer flex items-center gap-2"
          >
            View Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth
            duration={600}
            className="bg-transparent border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg transition-all hover:shadow-xl cursor-pointer flex items-center gap-2"
          >
            Contact Me
          </ScrollLink>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { delay: 1 }}
        >
          <a
            href="https://github.com/siddharthr3535"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:text-gray-900 dark:hover:text-white"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-ramachandran-b37a471b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            download={RESUME_PDF_FILENAME}
          >
            <FiDownload size={18} />
            <span className="text-sm">Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
