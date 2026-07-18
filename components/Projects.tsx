import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "HotelHub – Hotel Reservation & Management System",
    description:
      "A full-stack hotel reservation and management platform built with Java Spring Boot and React. It features role-based authentication (Customer, Hotel Admin, Super Admin), hotel approval workflows, room management, online booking, reviews, analytics dashboards, and a modern responsive UI designed for real-world hotel operations.",
    image: "/Hotel.png",
    technologies: ["Java", "Spring Boot", "React", "REST APIs", "Hibernate / JPA", "MySQL"],
    liveDemoUrl: "https://hotelmanage-six.vercel.app/",
    githubUrl: "https://github.com/saini-harsh15/Hotel-Management",
  },
  {
    title: "StartupEcosystem – AI-Powered Startup–Investor Matchmaking Platform",
    description:
      "A backend-driven platform that connects startups with relevant investors using AI-based matchmaking. Built with Java and Spring Boot, it provides secure REST APIs, role-based authentication, and efficient data handling to enable intelligent matching based on domain, funding stage, and investment preferences.",
    image: "/Startup.png",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Security (JWT)",
      "JPA / Hibernate",
      "MySQL",
      "AI Matching Logic",
    ],
    liveDemoUrl: "https://startupeco-production.up.railway.app/",
    githubUrl: "https://github.com/saini-harsh15/Startup",
  },
  {
    title: "Task Manager",
    description:
      "A backend-driven task management system built using Java and Spring Boot that allows users to create, update, and manage tasks efficiently. The application includes secure authentication, RESTful APIs, and structured database design to ensure reliable task handling and data consistency.",
    image: "/Task.png",
    technologies: ["Java", "Spring Boot", "REST APIs", "Spring Security", "JPA / Hibernate", "MySQL"],
    liveDemoUrl: "https://task-production-c618.up.railway.app/login",
    githubUrl: "https://github.com/saini-harsh15/Task-Manager",
  },
];

const featuredProject = projects[0];
const otherProjects = projects.slice(1);

const ProjectLinks = ({
  githubUrl,
  liveDemoUrl,
  variant = "outline",
}: {
  githubUrl: string;
  liveDemoUrl?: string;
  variant?: "default" | "outline";
}) => (
  <div className="flex flex-wrap gap-3">
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <Button variant={variant}>
        <Github className="h-4 w-4 mr-2" />
        View Code
      </Button>
    </a>

  </div>
);

const TechPills = ({ technologies }: { technologies: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-400/20"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gradient-to-br from-zinc-100 to-stone-100 dark:from-zinc-950 dark:to-stone-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-amber-500/10 dark:bg-amber-500/10 blur-3xl animate-blob [animation-delay:1.5s]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl animate-blob [animation-delay:3.5s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing my backend expertise and full-stack capabilities.
          </p>
        </div>

        {/* Featured project */}
        <div className="animate-fade-in-up [animation-delay:100ms] mb-12 rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-400/30">
          <div className="grid lg:grid-cols-2">
            <div className="bg-white/95 dark:bg-white/90 p-6 flex items-center justify-center">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                width={900}
                height={500}
                className="w-full max-h-[420px] object-contain rounded-lg"
              />
            </div>

            <div className="p-8 flex flex-col">
              <span className="inline-flex w-fit mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 text-white text-sm font-semibold">
                Featured Project
              </span>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                {featuredProject.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              <div className="mb-8">
                <TechPills technologies={featuredProject.technologies} />
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </a>

                <a
                  href={featuredProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-400/30"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-white/95 dark:bg-white/90 p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={256}
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed min-h-[110px]">
                  {project.description}
                </p>

                <div className="mb-6">
                  <TechPills technologies={project.technologies} />
                </div>

                <div className="mt-auto">
                  <ProjectLinks githubUrl={project.githubUrl} liveDemoUrl={project.liveDemoUrl} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
