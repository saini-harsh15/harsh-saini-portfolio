import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const ProjectsSection = () => {
  const projects = [

    {
      title: "HotelHub – Hotel Reservation & Management System",
      description:
        "A full-stack hotel reservation and management platform built with Java Spring Boot and React. It features role-based authentication (Customer, Hotel Admin, Super Admin), hotel approval workflows, room management, online booking, reviews, analytics dashboards, and a modern responsive UI designed for real-world hotel operations.",

      image: "/Hotel.png",

      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "REST APIs",
        "Hibernate / JPA",
        "MySQL"
      ],

      githubUrl: "https://github.com/saini-harsh15/Hotel-Management"
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

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

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
        <>
          {/* Featured Project */}

          <div className="mb-12">

            <div className="bg-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">

              <div className="grid lg:grid-cols-2">

                {/* Image */}

                <div className="bg-white p-6 flex items-center justify-center">

                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={900}
                    height={500}
                    className="w-full max-h-[420px] object-contain"
                  />

                </div>

                {/* Content */}

                <div className="p-8 flex flex-col">

                  <span className="inline-flex w-fit mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
                    ⭐ Featured Project
                  </span>

                  <h3 className="text-3xl font-bold mb-4">
                    {featuredProject.title}
                  </h3>

                  <p className="text-muted-foreground leading-8 mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">

                    {featuredProject.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="mt-auto">

                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <Button>

                        <Github className="h-4 w-4 mr-2" />

                        View Code

                      </Button>

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Other Projects */}

          <div className="grid lg:grid-cols-2 gap-8">

            {otherProjects.map((project) => (

              <div
                key={project.title}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
              >

                <div className="bg-white p-4">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={256}
                    className="w-full h-64 object-contain"
                  />

                </div>

                <div className="p-6 flex flex-col flex-grow">

                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed min-h-[110px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="mt-auto">

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <Button variant="outline">

                        <Github className="h-4 w-4 mr-2" />

                        View Code

                      </Button>

                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </>

      </div>
    </section>
  )
}

export default ProjectsSection