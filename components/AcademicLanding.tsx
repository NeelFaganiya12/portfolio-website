import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

type NewsItem = { date: string; body: string };

export default function AcademicLanding() {
  const news: NewsItem[] = [
    { date: 'Sept 2025', body: 'Joined CrySP Lab as a Graduate Researcher under Dr. Urs Hengartner' },
    { date: 'June 2025', body: 'Graduated from Toronto Metropolitan University with a BSc in Computer Science with Distinction' },
    { date: 'Feb 2025', body: 'Got accepted into the Master of Mathematics (MMath) program at the University of Waterloo' },
  ];

  const awards: NewsItem[] = [
    { date: 'Jan 2026', body: 'International Masters Award of Excellence - University of Waterloo' },
    { date: 'June 2025', body: 'BSc in CS with Distinction - Toronto Metropolitan University' },
    { date: 'Feb 2025', body: 'Graduate Research Studentship - University of Waterloo' },
  ];

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Name, School, Email, Office - centered */}
        <header className="mb-12 space-y-2 text-lg text-center">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Neel Faganiya</h1>
          <p className="text-gray-700 dark:text-gray-300">
            David R. Cheriton School of Computer Science, University of Waterloo
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <a href="mailto:nsfagani@uwaterloo.ca" className="underline hover:text-black dark:hover:text-white">nsfagani[at]uwaterloo[dot]ca</a>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Office: DC 3333
          </p>
        </header>

        {/* About: bio + social */}
        <section className="mb-16">
          <div className="space-y-6 text-gray-900 dark:text-gray-200 leading-relaxed font-serif">
            <p>
              I&apos;m an MMath student at the University of Waterloo and a researcher in the CrySP Lab, advised by Dr. Urs Hengartner.
              I work on <strong>behavioural biometrics</strong> and <strong>secure authentication</strong> systems at the intersection of
              security, <strong>machine learning</strong>, and human behavior — building robust, <strong>privacy-aware</strong> systems
              and exploring how behavioral signals can be used for security while staying resilient to adversarial attacks and misuse.
            </p>
            <p>
              I completed my <strong>BSc in Computer Science</strong> Co-op (Honours) at Toronto Metropolitan University (2020–2025).
              My experience includes <strong>Cyber Security Analyst</strong> roles in Global IT Risk and Cryptography &amp; Certificate Services.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/neelfaganiya12"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/neelfaganiya"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:nsfagani@uwaterloo.ca"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </section>

        {/* News */}
        <section className="mb-12 text-sm">
          <h2 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">News</h2>
          <div className="space-y-4">
            {news.map((item, i) => (
              <div key={i} className="flex items-baseline gap-1">
                <span className="text-gray-900 dark:text-gray-100 font-bold shrink-0 w-28">{item.date}</span>
                <span className="flex-1 min-w-2 overflow-hidden whitespace-nowrap text-gray-300 dark:text-gray-600 select-none text-xs">{".".repeat(80)}</span>
                <span className="text-gray-500 dark:text-gray-400 font-serif shrink-0">{item.body}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16 text-sm">
          <h2 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">Awards</h2>
          <div className="space-y-4">
            {awards.map((item, i) => (
              <div key={i} className="flex items-baseline gap-1">
                <span className="text-gray-900 dark:text-gray-100 font-bold shrink-0 w-28">{item.date}</span>
                <span className="flex-1 min-w-2 overflow-hidden whitespace-nowrap text-gray-300 dark:text-gray-600 select-none text-xs">{".".repeat(80)}</span>
                <span className="text-gray-500 dark:text-gray-400 font-serif shrink-0">{item.body}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
