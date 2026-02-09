'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { useInView } from '@/hooks/useInView';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experience = [
    {
      role: 'Cyber Security Analyst',
      team: 'Cryptography and Certificate Services',
      period: 'May 2024 – August 2024',
      description: 'Focused on cryptography and certificate services.',
    },
    {
      role: 'Cyber Security Analyst',
      team: 'Cryptography and Certificate Services',
      period: 'May 2023 – August 2023',
      description: 'Focused on cryptography and certificate services.',
    },
    {
      role: 'Cyber Security Analyst',
      team: 'Global IT Risk',
      period: 'September 2022 – April 2023',
      description: 'Worked on global IT risk assessment and security analysis.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
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
                    <FiBriefcase className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {job.role}
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {job.team}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {job.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {job.description}
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
