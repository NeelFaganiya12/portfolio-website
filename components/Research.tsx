'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiSearch, FiBookOpen } from 'react-icons/fi';
import { useInView } from '@/hooks/useInView';

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const researchAreas = [
    {
      title: 'Cryptographic Protocols',
      description: 'Design and analysis of secure communication protocols, zero-knowledge proofs, and multi-party computation.',
      icon: FiSearch,
    },
    {
      title: 'Privacy-Preserving Technologies',
      description: 'Research on differential privacy, homomorphic encryption, and secure data processing techniques.',
      icon: FiBookOpen,
    },
    {
      title: 'System Security',
      description: 'Exploring secure system architectures, side-channel attacks, and hardware security.',
      icon: FiSearch,
    },
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Research
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At the CrySP Lab, I work on cutting-edge research in cryptography, security, and privacy.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <area.icon className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://crysp.uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Learn more about CrySP Lab
          </a>
        </motion.div>
      </div>
    </section>
  );
}
