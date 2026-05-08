import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const ProjectsSection = () => {
  const projects = [
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
        "AI Matching Logic"
      ],
      liveDemoUrl: "https://startupeco-production.up.railway.app/",
      githubUrl: "https://github.com/saini-harsh15/Startup",
    },
    {
      title: "Task Manager",
      description:
          "A backend-driven task management system built using Java and Spring Boot that allows users to create, update, and manage tasks efficiently. The application includes secure authentication, RESTful APIs, and structured database design to ensure reliable task handling and data consistency.",
      image: "/Task.png",
      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Spring Security",
        "JPA / Hibernate",
        "MySQL"
      ],
      liveDemoUrl: "https://task-production-c618.up.railway.app/login;jsessionid=FE109CA15DFB0094E63C991758442374",
      githubUrl: "https://github.com/saini-harsh15/Task-Manager",
    }
  ]

  return (
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my backend expertise and full-stack capabilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {projects.map((project) => (
                <div
                    key={project.title}
                    className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
                >

                  {/* Image */}
                  <div className="bg-white p-4">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-contain"
                        width={700}
                        height={256}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    {/* Fixed height description (aligns cards) */}
                    <p className="text-muted-foreground mb-4 leading-relaxed min-h-[110px]">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                          <span
                              key={tech}
                              className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>

                    {/* Button ALWAYS at bottom */}
                    <div className="mt-auto">
                      <div className="flex gap-2">
                        {project.liveDemoUrl && (
                          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
            ))}
          </div>

        </div>
      </section>
  )
}

export default ProjectsSection