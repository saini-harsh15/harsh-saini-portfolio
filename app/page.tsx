"use client"
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const navItems = [
  { id: "about", label: "About" },
  { id: "internship", label: "Internship" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-50/80 dark:bg-blue-950/70 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harsh Saini
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                      <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`relative py-1 font-medium transition-colors duration-200 ${
                              isActive
                                  ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                  : "text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {item.label}
                        {isActive && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                        )}
                      </button>
                  );
                })}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDark(!isDark)}
                    className="ml-4"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>

              <div className="md:hidden flex items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDark(!isDark)}
                    className="mr-2"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
              <div className="md:hidden bg-blue-50/95 dark:bg-blue-950/90 backdrop-blur-md border-t border-white/10 animate-fade-in">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                                isActive
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                    : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                          {item.label}
                        </button>
                    );
                  })}
                </div>
              </div>
          )}
        </nav>

        <main>
          <Hero />
          <About />
          <Internship />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">© Harsh Saini.</p>
          </div>
        </footer>
      </div>
  );
}