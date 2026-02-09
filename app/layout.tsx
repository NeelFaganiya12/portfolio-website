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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d))document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');})();`,
          }}
        />
        <div className="min-h-screen bg-page-dots text-gray-900 dark:text-gray-100">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
