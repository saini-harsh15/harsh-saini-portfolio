"use client";

import { FormEvent, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CircleCheck,
  Plus,
  Send,
} from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [sentName, setSentName] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Unable to send your message.");
      }

      setSentName(formData.name.trim());
      setFormData({ name: "", email: "", query: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const resetContactForm = () => {
    setStatus("idle");
    setStatusMessage("");
    setSentName("");
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-zinc-100 to-stone-100 dark:from-zinc-950 dark:to-stone-900"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-500/10 dark:bg-amber-500/10 blur-3xl animate-blob [animation-delay:2.5s]" />
        <div className="absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl animate-blob [animation-delay:0.5s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mb-6 rounded-full" />

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
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400/30"
                  >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110">
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

          {/* Contact Form */}
        <div className="animate-fade-in-up [animation-delay:200ms] rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-400/30">
            <h3 className="text-xl font-semibold mb-2 text-foreground leading-snug">
              Send a Message
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              Share your details and query. Your message will be sent directly
              to harshsaini2462@gmail.com.
            </p>

            {status === "success" ? (
              <div
                className="flex min-h-[430px] flex-col items-center justify-center py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 shadow-sm ring-1 ring-emerald-500/20 dark:text-emerald-400">
                  <CircleCheck className="h-9 w-9" aria-hidden="true" />
                </div>

                <h4 className="text-2xl font-semibold text-foreground">
                  Message sent
                </h4>

                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  Thanks{sentName ? `, ${sentName}` : ""}. Your query has been
                  sent to Harsh, and you will hear back soon.
                </p>

                <Button
                  type="button"
                  variant="outline"
                  onClick={resetContactForm}
                  className="mt-7 h-11 border-emerald-500/30 bg-emerald-500/5 text-emerald-700 hover:bg-emerald-500/10 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
                >
                  <Plus className="h-4 w-4" />
                  Send another message
                </Button>
              </div>
            ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  className="h-11 border-white/20 bg-white/30 dark:bg-white/5"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  required
                  className="h-11 border-white/20 bg-white/30 dark:bg-white/5"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-query" className="text-sm font-medium text-foreground">
                  Query
                </label>
                <Textarea
                  id="contact-query"
                  name="query"
                  value={formData.query}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, query: event.target.value }))
                  }
                  placeholder="Tell me what you want to discuss"
                  required
                  rows={5}
                  className="min-h-32 resize-none border-white/20 bg-white/30 dark:bg-white/5"
                />
              </div>

              {status === "error" && statusMessage && (
                <p
                  className="text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  {statusMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full h-11 bg-gradient-to-r from-amber-500 to-emerald-600 text-white hover:from-amber-600 hover:to-emerald-700"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Query"}
              </Button>
            </form>
            )}
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
                className="group w-11 h-11 rounded-lg border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400/30 hover:text-emerald-600 dark:hover:text-emerald-400"
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
