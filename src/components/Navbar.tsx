import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-scroll";
import {
  default as largeProfileImage,
  default as profileImage,
} from "../assets/profile.jpg";
import { RESUME_PDF, RESUME_PDF_FILENAME } from "../constants/resume";
import { useTheme } from "../hooks/useTheme";

// Typed icons
type IconProps = { size?: number; className?: string };
const FiMenu = FiIcons.FiMenu as React.ComponentType<IconProps>;
const FiX = FiIcons.FiX as React.ComponentType<IconProps>;
const FiSun = FiIcons.FiSun as React.ComponentType<IconProps>;
const FiMoon = FiIcons.FiMoon as React.ComponentType<IconProps>;
const FiXCircle = FiIcons.FiXCircle as React.ComponentType<IconProps>;
const FiGithub = FiIcons.FiGithub as React.ComponentType<IconProps>;
const FiLinkedin = FiIcons.FiLinkedin as React.ComponentType<IconProps>;
const FiFileText = FiIcons.FiFileText as React.ComponentType<IconProps>;
const FiDownload = FiIcons.FiDownload as React.ComponentType<IconProps>;

interface NavLink {
  name: string;
  target: string;
}

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);

  const links: NavLink[] = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Experience", target: "experience" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        menuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleProfileModal = () => {
    setProfileModalOpen(!profileModalOpen);
    if (menuOpen) setMenuOpen(false);
  };

  useEffect(() => {
    if (!profileModalOpen) return;

    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    } else {
      modalRef.current?.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProfileModalOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [profileModalOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md"
            : "bg-white/80 dark:bg-gray-800/80"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          {/* Logo with Profile Image */}
          <motion.button
            type="button"
            className="flex items-center gap-3 cursor-pointer group text-left"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
            onClick={toggleProfileModal}
            aria-label="Open profile details"
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400 group-hover:border-purple-500 transition-colors"
                whileHover={shouldReduceMotion ? undefined : { rotate: 5 }}
              >
                <img
                  src={profileImage}
                  alt="Siddharth Ramachandran"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Siddharth Ramachandran
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                Full Stack Dev
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-medium text-sm uppercase tracking-wider cursor-pointer relative group"
                activeClass="is-active"
                spy={true}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-500 text-white text-xs font-semibold tracking-wide uppercase hover:bg-blue-600 transition-colors"
            >
              <FiFileText size={16} />
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="menu-button p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobile-menu absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg md:hidden">
              <div className="px-6 py-4 flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.target}
                    to={link.target}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    activeClass="is-active bg-gray-100 dark:bg-gray-700"
                    spy={true}
                  >
                    {link.name}
                  </Link>
                ))}

                <a
                  href={RESUME_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  <FiFileText size={18} />
                  View Resume
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Profile Modal */}
      <AnimatePresence>
        {profileModalOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setProfileModalOpen(false)}
          >
            <motion.div
              initial={
                shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }
              }
              animate={{ scale: 1, opacity: 1 }}
              exit={
                shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              className="relative bg-white dark:bg-gray-900 rounded-xl max-w-md w-full mx-4 p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Profile details"
              ref={modalRef}
              tabIndex={-1}
            >
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Close profile modal"
              >
                <FiXCircle size={24} />
              </button>

              <div className="flex flex-col items-center gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400 dark:border-blue-600">
                  <img
                    src={largeProfileImage}
                    alt="Siddharth Ramachandran"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Siddharth Ramachandran
                  </h2>
                  <p className="text-blue-500 dark:text-blue-400">
                    Full Stack Developer
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">
                    Passionate about creating efficient, scalable web
                    applications
                  </p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://github.com/siddharthr3535"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:text-gray-900 dark:hover:text-white"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/siddharthr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:text-blue-600"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin size={20} />
                    </a>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={RESUME_PDF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                      <FiFileText size={18} />
                      <span>View Resume</span>
                    </a>

                    <a
                      href={RESUME_PDF}
                      download={RESUME_PDF_FILENAME}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiDownload size={18} />
                      <span className="text-sm">Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
