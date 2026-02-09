'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:your.email@uwaterloo.ca', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {currentYear} Neel Faganiya. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
