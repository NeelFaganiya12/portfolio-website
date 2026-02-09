'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const navItems = [
  { name: 'About', href: '/' },
  { name: 'Publications', href: '/publications' },
  { name: 'Experience', href: '/experience' },
  { name: 'Courses', href: '/courses' },
  { name: 'Teaching', href: '/teaching' },
  { name: 'CV', href: '/cv' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    setDark(isDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={isActive ? 'text-black dark:text-white font-medium' : 'text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white'}
              >
                {item.name}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
