'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from '@/hooks/useInView';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Privacy-Preserving Analytics System',
      description: 'A system implementing differential privacy techniques for secure data analytics while maintaining statistical utility.',
      technologies: ['Python', 'Differential Privacy', 'Cryptography'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Secure Multi-Party Computation Framework',
      description: 'Implementation of MPC protocols for secure computation across multiple parties without revealing private inputs.',
      technologies: ['C++', 'MPC', 'Cryptography'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Cryptographic Protocol Analyzer',
      description: 'Tool for formal verification and analysis of cryptographic protocols using automated theorem proving.',
      technologies: ['Python', 'Formal Verification', 'Cryptography'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FiGithub size={20} className="mr-2" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
