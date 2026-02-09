'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiBook } from 'react-icons/fi';
import { useInView } from '@/hooks/useInView';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Master of Mathematics (MMath)',
      field: 'Computer Science',
      institution: 'University of Waterloo',
      period: '2024 - Present',
      description: 'First-year student specializing in Cryptography, Security, and Privacy at CrySP Lab. Advised by Dr. Urs Hengartner.',
      location: 'Waterloo, ON, Canada',
    },
    {
      degree: 'Bachelor of Science (BSc) Co-op (Honours)',
      field: 'Computer Science',
      institution: 'Toronto Metropolitan University',
      period: '2020 – 2025',
      description: 'Completed undergraduate degree in Computer Science with Co-op and Honours.',
      location: 'Toronto, ON, Canada',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-primary-500"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <FiBook className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {edu.field}
                  </h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.location} • {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
