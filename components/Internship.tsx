import { Briefcase, Calendar } from 'lucide-react';

const technologies = [
  'Java',
  'Spring Boot',
  'JPA/Hibernate',
  'MySQL',
  'REST APIs',
  'Postman',
  'Git',
];

const responsibilities = [
  'Optimized API performance by refining SQL queries and adding indexing using MySQL',
  'Developed and integrated REST APIs using Java and Spring Boot',
  'Implemented structured logging and global exception handling for better debugging and traceability',
  'Identified and resolved issues by analyzing logs and validating API responses using Postman',
  'Refactored backend modules to improve maintainability and code structure',
];

const InternshipSection = () => {
  return (
    <section id="internship" className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl animate-blob [animation-delay:1s]" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-3xl animate-blob [animation-delay:5s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="animate-fade-in-up [animation-delay:100ms] relative max-w-4xl mx-auto rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400/30">
          <div
            className="hidden md:block absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-2xl"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start md:items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-md shrink-0">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug text-foreground">
                Backend Development Intern — Doritech Consultancy, Noida
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground whitespace-nowrap shrink-0">
              <Calendar className="h-4 w-4" />
              <span>May 2025 – July 2025</span>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">
            {responsibilities.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-400/20 transition-colors hover:bg-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;