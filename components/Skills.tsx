
import { Code, Monitor, Database, Server, Wrench, Target } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-8 w-8" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Responsive Design"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8" />,
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Spring Security (JWT)",
        "JPA / Hibernate"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      skills: [
        "MySQL",
        "SQL",
        "Database Design",
        "Normalization",
        "Indexing"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Core Focus",
      icon: <Target className="h-8 w-8" />,
      skills: ["Backend System Design",
        "API Development",
        "Database Optimization"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="h-8 w-8" />,
      skills: ["AWS", "Docker", "Git", "Github Actions"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      skills: [
        "Java",
        "SQL",
        "JavaScript"
      ],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m passionate about working with cutting-edge technologies and constantly expanding my skill set.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-muted/70 transition-colors"
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
