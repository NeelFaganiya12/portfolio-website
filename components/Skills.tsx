'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Cryptography',
      skills: ['Symmetric Encryption', 'Public-Key Cryptography', 'Zero-Knowledge Proofs', 'MPC', 'Homomorphic Encryption'],
    },
    {
      category: 'Programming Languages',
      skills: ['Python', 'C++', 'Java', 'JavaScript', 'Rust', 'Go'],
    },
    {
      category: 'Security Tools',
      skills: ['Wireshark', 'Burp Suite', 'Ghidra', 'Cryptanalysis Tools'],
    },
    {
      category: 'Research & Development',
      skills: ['Formal Verification', 'Protocol Design', 'Security Analysis', 'Academic Writing'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
