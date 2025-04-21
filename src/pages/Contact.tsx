import { FC, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_hvlm9zm";
const TEMPLATE_ID = "template_ypo2yz5";
const PUBLIC_KEY = "5iDnNphwabY-NM-QD";

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white py-20 px-6 sm:px-10"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-white text-black border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                  dark:bg-gray-900 dark:text-white dark:border-gray-700"
              />
            </div>

            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-2xl text-white font-semibold transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              {submitted ? "Thank You! ✅" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
