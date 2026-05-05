import { Briefcase, Calendar } from 'lucide-react';

const InternshipSection = () => {
  const technologies = [
    'Java',
    'Spring Boot',
    'JPA/Hibernate',
    'MySQL',
    'REST APIs',
    'Postman',
    'Git',
  ];

  return (
    <section id="internship" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internship Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-lg ring-1 ring-border hover:shadow-xl transition-shadow duration-300">
          {/* Left accent bar */}
          <div
            className="hidden md:block absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-2xl"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start md:items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                Backend Development Intern — Doritech Consultancy, Noida
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground whitespace-nowrap shrink-0">
              <Calendar className="h-4 w-4" />
              <span>May 2025 – July 2025</span>
            </div>
          </div>

          {/* Responsibilities */}
          <ul className="list-disc pl-6 mt-6 space-y-2 text-muted-foreground">
            <li>Optimized API performance by refining SQL queries and adding indexing using MySQL</li>
            <li>Developed and integrated REST APIs using Java and Spring Boot</li>
            <li>Implemented structured logging and global exception handling for better debugging and traceability</li>
            <li>Identified and resolved issues by analyzing logs and validating API responses using Postman</li>
            <li>Refactored backend modules to improve maintainability and code structure</li>
          </ul>

          {/* Technologies */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-muted/70 transition-colors"
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
