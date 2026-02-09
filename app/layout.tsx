import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neel Faganiya",
  description: "Portfolio of Neel Faganiya — MMath Computer Science student at University of Waterloo (CrySP), advised by Dr. Urs Hengartner. BSc from Toronto Metropolitan University.",
  icons: { icon: "/logo.svg" },
};

export const viewport = { width: "device-width", initialScale: 1, maximumScale: 5 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');})();`,
          }}
        />
        <div className="min-h-screen w-full bg-page-dots text-gray-900 dark:text-gray-100">
          <Navbar />
          {children}
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  function initNav() {
    document.addEventListener('click', function(e) {
      var themeBtn = e.target && e.target.closest && e.target.closest('#theme-toggle');
      var menuBtn = e.target && e.target.closest && e.target.closest('#menu-toggle');
      var navLink = e.target && e.target.closest && e.target.closest('nav a[href]');
      if (themeBtn) {
        e.preventDefault();
        var next = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (err) {}
      }
      if (menuBtn) {
        e.preventDefault();
        var nav = document.getElementById('main-nav');
        if (nav) nav.classList.toggle('menu-open');
      }
      if (navLink) {
        var n = document.getElementById('main-nav');
        if (n) n.classList.remove('menu-open');
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNav);
  else initNav();
})();
            `.trim(),
          }}
        />
      </body>
    </html>
  );
}
