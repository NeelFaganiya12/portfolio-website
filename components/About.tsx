'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I am a first-year Master of Mathematics (MMath) student in Computer Science at the University of Waterloo, 
            specializing in Cryptography, Security, and Privacy at the CrySP Lab. I am advised by Dr. Urs Hengartner.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I completed my Bachelor of Science (BSc) in Computer Science Co-op (Honours) from Toronto Metropolitan University in Toronto (2020–2025). 
            My experience spans cybersecurity analysis, IT risk, and cryptography and certificate services from my time 
            as a Cyber Security Analyst.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My research focuses on behavioural biometrics and secure authentication systems at the intersection 
            of security, machine learning, and human behavior. I am interested in building robust, privacy-aware 
            systems and in how behavioral signals can be leveraged for security while remaining resilient to 
            adversarial attacks and misuse.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
