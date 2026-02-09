type Course = {
  code: string;
  title: string;
  term: string;
  link?: string;
};

const courses: Course[] = [
  {
    code: "CS 889",
    title: "Interfaces for Human-AI Interaction",
    term: "Winter 2026",
    link: "https://docs.google.com/document/d/1EX4IgrrRCL0ld7V6A1o0RWQf54TyFDR2qWtFM5CYs0g/edit?tab=t.0#heading=h.974wpju80gwo",
  },
  {
    code: "CS 846",
    title: "LLMs for Software Engineering",
    term: "Winter 2026",
    link: "https://cs.uwaterloo.ca/~m2nagapp/courses/CS846/1261/",
  },
  {
    code: "CS 858",
    title: "Trustworthy Machine Learning: A systems-security approach",
    term: "Fall 2025",
    link: "https://outline.uwaterloo.ca/viewer/view/nv598c",
  },
  {
    code: "CS 798",
    title: "Privacy in Computation and Communication",
    term: "Fall 2025",
    link: "https://crysp.uwaterloo.ca/courses/privcc/f25/",
  },
];

export default function CoursesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">Courses</h1>
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.code}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 text-sm"
          >
            <div className="shrink-0">
              {course.link ? (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-900 dark:text-gray-100 hover:underline"
                >
                  <span className="font-semibold">{course.code}:</span>{" "}
                  {course.title}
                </a>
              ) : (
                <>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{course.code}:</span>{" "}
                  <span className="text-gray-900 dark:text-gray-200">{course.title}</span>
                </>
              )}
            </div>
            <span className="hidden sm:inline flex-1 min-w-2 overflow-hidden whitespace-nowrap text-gray-300 dark:text-gray-600 select-none text-xs">{".".repeat(80)}</span>
            <div className="text-gray-600 dark:text-gray-400 shrink-0 sm:text-right">{course.term}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
