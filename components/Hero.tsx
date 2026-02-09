'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:your.email@uwaterloo.ca', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm md:text-base uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Researcher · CrySP Lab
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Neel Faganiya
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Cryptography, Security & Privacy
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-500 dark:text-gray-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            MMath in Computer Science, University of Waterloo
          </motion.p>
          <motion.div
            className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <span>CrySP Lab</span>
            <span className="text-gray-300 dark:text-gray-600">·</span>
            <span>Advised by Dr. Urs Hengartner</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#about"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="mr-2">Scroll to explore</span>
            <FiArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
