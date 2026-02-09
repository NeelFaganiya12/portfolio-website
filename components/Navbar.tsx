'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

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
  const [mounted, setMounted] = useState(false);

  // Sync theme state from DOM for icon (script handles actual toggle)
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
    setMounted(true);
  }, []);

  // Sync theme when class changes (e.g. after script toggles)
  useEffect(() => {
    if (!mounted) return;
    const obs = new MutationObserver(() => setDark(document.documentElement.classList.contains('dark')));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, [mounted]);

  // Close mobile menu on route change (script added class; we remove it)
  useEffect(() => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.remove('menu-open');
  }, [pathname]);

  return (
    <nav id="main-nav" className="relative z-20 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 sm:py-4 min-w-0">
        <div className="flex items-center justify-between md:justify-center gap-2">
          {/* Hamburger - script toggles .menu-open on #main-nav; CSS shows correct icon */}
          <button
            type="button"
            id="menu-toggle"
            className="md:hidden p-2.5 rounded-md min-h-[44px] min-w-[44px] inline-flex items-center justify-center touch-manipulation cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700"
            aria-label="Open menu"
          >
            <span className="menu-icon-open inline-flex"><FiMenu size={22} /></span>
            <span className="menu-icon-close hidden"><FiX size={22} /></span>
          </button>

          <div className="hidden md:flex flex-wrap items-center justify-center gap-x-2 md:gap-x-6 gap-y-1 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-3 px-2 -my-1 rounded-md touch-manipulation md:py-0 md:px-0 md:my-0 min-h-[44px] inline-flex items-center justify-center md:min-h-0"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span className={isActive ? 'text-black dark:text-white font-medium' : 'text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white'}>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            id="theme-toggle"
            className="p-2.5 md:p-1.5 rounded-md touch-manipulation min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 inline-flex items-center justify-center cursor-pointer select-none text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white active:bg-gray-200 dark:active:bg-gray-700 ml-auto md:ml-0"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mounted && dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile menu panel - always in DOM; script + CSS show/hide via .menu-open */}
        <div className="mobile-menu-panel md:hidden">
          <div className="pt-2 pb-3 mt-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex flex-col gap-0 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-3 px-2 rounded-md touch-manipulation -mx-2"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className={isActive ? 'text-black dark:text-white font-medium' : 'text-gray-800 dark:text-gray-300'}>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
