const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          
          {/* User Avatar positioned below heading */}
          <div className="flex justify-center mb-12">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              HS
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">Hello! I&apos;m Harsh Saini</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">

              I&apos;m a full-stack web developer with a strong focus on backend development, passionate about building systems that are reliable, scalable, and built with purpose. Through hands-on projects and academic work, I&apos;ve developed solid experience in Java, Spring Boot, and REST APIs, with a good grip on MySQL for data modeling and persistence — complemented by clean, responsive frontend work using HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond writing code, I care about how it holds up — through structured debugging, API testing with Postman, and performance optimization that goes beyond making things work to making things work well. I&apos;m comfortable with Git and Docker in my workflow, and I&apos;m steadily growing my understanding of system design and microservices architecture, driven by a genuine interest in solving real-world backend challenges.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-muted-foreground">harshsaini2462@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <p className="text-muted-foreground">+91-9528799256</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
