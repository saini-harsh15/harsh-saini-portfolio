import { Mail, Github, Linkedin, GraduationCap, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Research Published",
    detail:
      "Co-authored an AI matchmaking paper (BERT/SBERT/FAISS) presented at GSIR 2025.",
  },
  {
    icon: GraduationCap,
    title: "Backend Internship",
    detail:
      "Optimized SQL queries and indexing at Doritech Consultancy, cutting query latency.",
  },
];

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:harshsaini2462@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/saini-harsh15",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harshsaini15/",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
    >
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-24 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl animate-blob [animation-delay:3s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 lg:gap-12 items-start">
          {/* Left Card */}
          <div className="animate-fade-in-up [animation-delay:100ms] mx-auto lg:mx-0 max-w-sm w-full">
            <div className="animate-float rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />

                <div className="ml-3 h-5 flex-1 rounded-md bg-white/10 dark:bg-white/5" />
              </div>

              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg ring-4 ring-white/20">
                    HS
                  </div>

                  <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-400 border-2 border-white dark:border-background" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  Harsh Saini
                </h3>

                <p className="text-sm text-muted-foreground mb-5">
                  Java Backend Developer
                </p>

                <div className="flex gap-3">
                  {contactLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={label}
                      className="group flex items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/10 dark:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400/30"
                    >
                      <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in-up [animation-delay:200ms] space-y-6">
            <p className="text-lg text-muted-foreground leading-8 text-justify">
              I'm a backend-focused full-stack developer who builds systems that
              hold up under real use. My core stack is <strong>Java 21</strong>,
              <strong> Spring Boot</strong>, and <strong>MySQL</strong>. I
              design REST APIs, secure them with Spring Security, and model data
              with JPA/Hibernate for production-grade persistence. My frontend
              experience with React and JavaScript keeps me comfortable across
              the full stack.
            </p>

            <p className="text-lg text-muted-foreground leading-8 text-justify">
              During my internship at <strong>Doritech Consultancy</strong>, I
              optimized SQL queries and indexing that measurably improved API
              response times. I've also co-authored an AI research paper on
              startup-investor matchmaking presented at GSIR 2025. Outside of
              shipped code, I debug using structured logging, test APIs with
              Postman, and use Git and Docker as part of my daily development
              workflow.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {highlights.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400/30"
                >
                  <Icon className="h-5 w-5 mb-2 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />

                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    {title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;