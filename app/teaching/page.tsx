const teaching = [
  { course: "CS 453/698", title: "Software and Systems Security", term: "Winter 2026" },
  { course: "CS 135", title: "Designing Functional Programs", term: "Fall 2025" },
];

export default function TeachingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">Teaching</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">Teaching Assistant:</p>
      <div className="space-y-4">
        {teaching.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1"
          >
            <div className="shrink-0">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{item.course}:</span>{" "}
              <span className="text-gray-900 dark:text-gray-200">{item.title}</span>
            </div>
            <span className="hidden sm:inline flex-1 min-w-2 overflow-hidden whitespace-nowrap text-gray-300 dark:text-gray-600 select-none text-xs">{".".repeat(80)}</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm shrink-0 sm:text-right">{item.term}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
