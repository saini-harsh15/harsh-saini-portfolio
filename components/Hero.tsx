import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
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

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Harsh Saini
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Backend-Focused Developer Building Scalable Web Applications
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I design and develop scalable backend systems and functional web applications.
            Driven to transform ideas into reliable, high-performance solutions through clean code and practical architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-3 text-lg" onClick={scrollToProjects}>
              View My Work
            </Button>

            {/* Download Resume Button */}
            <a
              href="/Harsh_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Download Resume
              </Button>
            </a>
          </div>

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
