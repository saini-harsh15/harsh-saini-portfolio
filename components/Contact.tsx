import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Check,
} from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "harshsaini2462@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=harshsaini2462@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9528799256",
    href: "tel:+919528799256",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/saini-harsh15",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harshsaini15/",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/Harsh74641",
    label: "X",
  },
];

const capabilities = [
  "REST API Development",
  "Spring Security & Authentication",
  "MySQL Database Design",
  "Deployment on Railway",
  "Debugging & Performance Optimization",
];

const openTo = [
  "Backend Development Roles",
  "Fresher / Full-time Opportunities",
  "Freelance Projects",
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-3xl animate-blob [animation-delay:2.5s]" />
        <div className="absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl animate-blob [animation-delay:0.5s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, backend-focused
            projects, or potential collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in-up [animation-delay:100ms] space-y-8 lg:self-stretch">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Let's Connect
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Whether you have a role in mind, want to collaborate, or simply
                want to say hello, I'd love to hear from you. Reach out and I'll
                get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, title, value, href }) => {
                const Wrapper = href ? "a" : "div";

                return (
                  <Wrapper
                    key={title}
                    {...(
                      href
                        ? {
                          href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                        : {}
                    )}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400/30"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-foreground">
                        {title}
                      </h4>

                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Profile Card */}
          <div className="animate-fade-in-up [animation-delay:200ms] rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400/30">
            <h3 className="text-xl font-semibold mb-4 text-foreground leading-snug">
              Backend Developer building scalable Java & Spring Boot
              applications.
            </h3>

            <div className="space-y-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">
                Currently Open To
              </h4>

              <div className="space-y-2">
                {openTo.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up [animation-delay:300ms] lg:col-span-2">
            <h4 className="font-semibold text-sm text-foreground mb-4">
              Follow Me
            </h4>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-11 h-11 rounded-lg border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400/30 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
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