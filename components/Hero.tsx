import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code2, Briefcase, Layers } from 'lucide-react';

const stats = [
  { icon: Code2, value: '270+', label: 'LeetCode Problems' },
  { icon: Briefcase, value: 'Backend', label: 'Developer' },
  { icon: Layers, value: '3', label: 'Major Projects' },
];

const projects = [
  {
    title: 'HotelHub',
    description: 'Full-stack hotel management system with secure auth, booking flow, and an admin analytics dashboard.',
    images: [
      '/projects/hotelhub.png',
      '/projects/myhotels.png',
      '/projects/pendinghotels.png',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
  },
  {
    title: 'Startup Ecosystem Tracker',
    description: 'AI-powered startup-investor matchmaking using BERT/SBERT embeddings and FAISS similarity search.',
    images: [
      '/projects/startupdashboard.png',
      '/projects/investordashboard.png',
      '/projects/AcceptedFunding.png',
    ],
    tech: ['Java', 'BERT', 'FAISS', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'Task Manager',
    description: 'REST API-driven task management app with JWT authentication and role-based access control.',
    images: ['/projects/TaskManager.png'],
    tech: ['Java', 'Spring Security', 'REST APIs', 'MySQL'],
  },
];

const RESUME_FILE = '/Harsh_Saini_Backend_Developer_Resume.pdf';

const HeroSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
        setActiveImage(0);
        setFade(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const project = projects[activeProject];

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 to-stone-100 dark:from-zinc-950 dark:to-stone-900 pt-16">
        {/* Soft blurred gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-amber-500/10 dark:bg-amber-500/10 blur-3xl animate-blob [animation-delay:2s]" />
          <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-stone-400/10 dark:bg-stone-500/10 blur-3xl animate-blob [animation-delay:4s]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] gap-10 lg:gap-8 items-center">
            {/* Left column — copy */}
            <div className="animate-fade-in-up text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
                Harsh Saini
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 font-semibold mb-3">
                Java Backend Developer
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6 font-mono tracking-tight">
                Spring Boot • Spring Security • REST APIs • MySQL • Docker
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I build secure and scalable backend applications with Java and Spring Boot,
                focusing on clean architecture, REST APIs, authentication, and high-performance
                database design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
                <Button
                    size="lg"
                    className="w-full sm:w-auto px-8 py-3 text-lg transition-transform duration-300 hover:scale-105"
                    onClick={scrollToProjects}
                >
                  View Projects
                </Button>

                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 py-3 text-lg transition-transform duration-300 hover:scale-105"
                >
                  <a href={RESUME_FILE} download>
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
                {stats.map(({ icon: Icon, value, label }) => (
                    <div
                        key={label}
                        className="group rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md px-3 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400/30"
                    >
                      <Icon className="h-5 w-5 mx-auto mb-2 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-sm sm:text-base font-bold text-foreground">{value}</div>
                      <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight">{label}</div>
                    </div>
                ))}
              </div>
            </div>

            {/* Right column — project showcase */}
            <div className="animate-fade-in-up [animation-delay:150ms] mt-4 lg:mt-0">
              <div className="mx-auto max-w-lg lg:max-w-none animate-float">
                <div className="relative">
                  <div className="absolute left-1/2 top-0 h-4 w-36 -translate-x-1/2 rounded-t-2xl bg-zinc-900/90 dark:bg-zinc-100/90" />
                  <div className="rounded-[1.75rem] border border-white/20 bg-zinc-950/90 dark:bg-zinc-900/90 shadow-2xl overflow-hidden">
                    <div className="flex justify-center px-6 pt-4">
                      <div className="h-4 w-24 rounded-full bg-black/40 dark:bg-white/20" />
                    </div>

                    <div className="px-3 sm:px-4 pt-3 pb-4">
                      <div className="rounded-[1.25rem] border border-white/10 bg-zinc-900/95 dark:bg-zinc-800/95 p-3 sm:p-4 shadow-inner">
                        <div className="rounded-[1rem] bg-black overflow-hidden">
                          <div
                              className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'
                              }`}
                          >
                            <div className="relative aspect-[16/10] bg-black">
                              <img
                                  src={project.images[activeImage] ?? project.images[0]}
                                  alt={`${project.title} screenshot ${activeImage + 1}`}
                                  className="h-full w-full object-contain object-center"
                              />
                            </div>
                          </div>
                        </div>

                        {project.images.length > 1 && (
                            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                              {project.images.map((img, i) => (
                                  <button
                                      key={img}
                                      type="button"
                                      onClick={() => setActiveImage(i)}
                                      aria-label={`Show ${project.title} screenshot ${i + 1}`}
                                      className={`h-12 w-16 sm:h-14 sm:w-20 rounded-md overflow-hidden border-2 transition-all duration-300 shrink-0 ${i === activeImage
                                          ? 'border-emerald-500 opacity-100'
                                          : 'border-white/10 opacity-60 hover:opacity-90'
                                      }`}
                                  >
                                    <img
                                        src={img}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                  </button>
                              ))}
                            </div>
                        )}
                      </div>
                    </div>

                    <div className="px-5 pb-5">
                      <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <div className="hidden sm:flex flex-wrap justify-end gap-2 max-w-[42%]">
                          {project.tech.slice(0, 3).map((tech) => (
                              <span
                                  key={tech}
                                  className="text-[10px] font-medium px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20"
                              >
                            {tech}
                          </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto h-6 w-[70%] rounded-b-[1.5rem] bg-zinc-900/95 dark:bg-zinc-100/90 shadow-[0_20px_40px_rgba(0,0,0,0.35)]" />
                  <div className="mx-auto h-1 w-[45%] rounded-full bg-white/10 dark:bg-zinc-500/30 mt-3" />
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {projects.map((p, i) => (
                      <span
                          key={p.title}
                          className={`h-1.5 rounded-full transition-all duration-300 ${i === activeProject ? 'w-6 bg-emerald-500' : 'w-1.5 bg-emerald-500/30'
                          }`}
                      />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 lg:mt-14">
            <Button
                variant="ghost"
                size="icon"
                onClick={scrollToAbout}
                className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;