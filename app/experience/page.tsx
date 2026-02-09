const experience = [
  { role: "Cyber Security Analyst", org: "Cryptography & Certificate Services", dates: "May 2024 – August 2024" },
  { role: "Cyber Security Analyst", org: "Cryptography & Certificate Services", dates: "May 2023 – August 2023" },
  { role: "Cyber Security Analyst", org: "Global IT Risk", dates: "September 2022 – April 2023" },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">Experience</h1>
      <div className="space-y-6">
        {experience.map((job, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1">
            <div className="shrink-0">
              <div className="text-gray-900 dark:text-gray-100 font-bold">{job.role}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">{job.org}</div>
            </div>
            <span className="hidden sm:inline flex-1 min-w-2 overflow-hidden whitespace-nowrap text-gray-300 dark:text-gray-600 select-none text-xs self-center">{".".repeat(80)}</span>
            <div className="text-gray-600 dark:text-gray-400 text-sm shrink-0 sm:text-right">{job.dates}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
