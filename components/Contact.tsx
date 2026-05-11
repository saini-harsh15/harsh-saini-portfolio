import { Mail, Phone, MapPin, Github, Linkedin, TwitterIcon, Check } from "lucide-react";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "harshsaini2462@gmail.com",
      href: "mailto: harshsaini2462@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9528799256",
      href: "tel:+919528799256",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/saini-harsh15",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/harshsaini15/",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon className="h-5 w-5" />,
      href: "https://x.com/Harsh74641",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, creative projects,
            or potential collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information (top block up to Location) */}
          <div className="space-y-8 lg:self-stretch">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hi, I&apos;d love to hear from you. Drop me a message and
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Card (replacing Contact Form) */}
          <div className="bg-card/95 rounded-xl p-6 shadow-lg border border-border/50">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Backend Developer building scalable Java & Spring Boot applications.
              </h3>

              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-500 mt-1" />
                  <span>REST API Development</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-500 mt-1" />
                  <span>Spring Security & Authentication</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-500 mt-1" />
                  <span>MySQL Database Design</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-500 mt-1" />
                  <span>Deployment on Railway</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-500 mt-1" />
                  <span>Debugging & Performance Optimization</span>
                </div>
              </div>

              <div className="my-2 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />

              <div>
                <h4 className="font-semibold mb-2">Currently Open To:</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-purple-500 mt-1" />
                    <span>Backend Development Roles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-purple-500 mt-1" />
                    <span>Internship Opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-purple-500 mt-1" />
                    <span>Freelance Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social links row below, spanning both columns on large screens */}
          <div className="mt-6 lg:col-span-2">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
