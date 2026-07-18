import { Code, Monitor, Database, Server, Wrench, Target } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Spring Security (JWT)', 'JPA / Hibernate'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'SQL', 'Database Design', 'Normalization', 'Indexing'],
  },
  {
    title: 'Core Focus',
    icon: Target,
    skills: ['Backend System Design', 'API Development', 'Database Optimization'],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Docker', 'Git', 'Github Actions'],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'SQL', 'JavaScript'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-gradient-to-br from-zinc-100 to-stone-100 dark:from-zinc-950 dark:to-stone-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 dark:bg-amber-500/10 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core technologies I use to design, build, and optimize backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, skills }, index) => (
            <div
              key={title}
              className="group h-full animate-fade-in-up rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-xl hover:border-emerald-400/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center text-white mb-4 shadow-md transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/20 transition-colors hover:bg-emerald-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
