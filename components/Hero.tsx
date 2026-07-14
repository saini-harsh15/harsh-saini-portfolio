import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArrowDown, Code2, Briefcase, Layers } from 'lucide-react';

const stats = [
  { icon: Code2, value: '270+', label: 'LeetCode Problems' },
  { icon: Briefcase, value: 'Backend', label: 'Developer' },
  { icon: Layers, value: '3+', label: 'Major Projects' },
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

const resumeOptions = [
  {
    key: 'backend',
    emoji: '💻',
    title: 'Backend Developer Resume',
    subtitle: 'Java • Spring Boot • REST APIs • MySQL',
    file: '/Harsh_Saini_Backend_Developer_Resume.pdf',
    recommended: true,
  },
  {
    key: 'game-testing',
    emoji: '🎮',
    title: 'Game Testing Resume',
    subtitle: 'Manual Testing • Bug Reporting • Game QA',
    file: '/Harsh_Saini_Game_Testing_Resume.pdf',
    recommended: false,
  },
];

const HeroSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 pt-16">
      {/* Soft blurred gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-blue-300/10 dark:bg-purple-400/10 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] gap-10 lg:gap-8 items-center">
          {/* Left column — copy */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

              <Popover open={resumeOpen} onOpenChange={setResumeOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 py-3 text-lg transition-transform duration-300 hover:scale-105"
                    aria-haspopup="menu"
                    aria-expanded={resumeOpen}
                  >
                    Download Resume
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="center"
                  sideOffset={10}
                  role="menu"
                  className="w-[19rem] sm:w-80 p-3 rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                >
                  <p className="text-sm font-semibold text-foreground mb-3 px-1">
                    Choose a Resume
                  </p>
                  <div className="space-y-2">
                    {resumeOptions.map((option) => (
                      <a
                        key={option.key}
                        role="menuitem"
                        href={option.file}
                        download
                        onClick={() => setResumeOpen(false)}
                        className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/40 dark:bg-white/5 hover:bg-blue-500/10 hover:border-blue-400/30 focus-visible:bg-blue-500/10 focus-visible:border-blue-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 px-3 py-3 transition-all duration-200 cursor-pointer"
                      >
                        <span className="text-xl leading-none mt-0.5" aria-hidden="true">
                          {option.emoji}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-foreground">
                              {option.title}
                            </span>
                            {option.recommended && (
                              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-300 border border-blue-400/20">
                                Recommended
                              </span>
                            )}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {option.subtitle}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="group rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md px-3 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400/30"
                >
                  <Icon className="h-5 w-5 mx-auto mb-2 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-sm sm:text-base font-bold text-foreground">{value}</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — project showcase */}
          <div className="animate-fade-in-up [animation-delay:150ms] mt-4 lg:mt-0">
            <div className="mx-auto max-w-lg lg:max-w-none animate-float">
              <div className="rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  <div className="ml-3 h-5 flex-1 rounded-md bg-white/10 dark:bg-white/5" />
                </div>

                {/* Content */}
                <div
                  className={`p-5 sm:p-6 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <div
                    className={`rounded-lg overflow-hidden border border-white/10 bg-muted/40 aspect-video ${project.images.length > 1 ? 'mb-2' : 'mb-4'
                      }`}
                  >
                    <img
                      src={project.images[activeImage] ?? project.images[0]}
                      alt={`${project.title} screenshot ${activeImage + 1}`}
                      className="h-full w-full object-cover transition-opacity duration-300"
                    />
                  </div>

                  {project.images.length > 1 && (
                    <div className="flex gap-2 mb-4">
                      {project.images.map((img, i) => (
                        <button
                          key={img}
                          type="button"
                          onClick={() => setActiveImage(i)}
                          aria-label={`Show ${project.title} screenshot ${i + 1}`}
                          className={`h-12 w-16 sm:h-14 sm:w-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${i === activeImage
                            ? 'border-blue-500 opacity-100'
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

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {projects.map((p, i) => (
                  <span
                    key={p.title}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeProject ? 'w-6 bg-blue-500' : 'w-1.5 bg-blue-500/30'
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