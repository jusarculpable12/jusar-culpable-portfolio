"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { techStackCategories } from "@/data/tech-stack";
import { projects } from "@/data/projects";

const experience = [
  { title: "Mid-Level Full Stack Web Developer", place: "TechZ Digital", years: "2026–Present" },
  { title: "Full Stack Web Developer", place: "PixelDev Code Community", years: "2022–2026" },
  { title: "BS Information Technology", place: "Asian College of Technology", years: "2020–2025" },
  { title: "TVL — ICT", place: "Asian College of Technology SHS", years: "2018–2020" },
  { title: "Hello World!", place: "Wrote my first line of code", years: "2018" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jusar-culpable-763618391/" },
  { label: "GitHub", href: "https://github.com/jusarculpable12" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01db1dfcd325be6f42" },
  { label: "Hubstaff Talent", href: "https://hubstafftalent.net/profiles/jusar-culpable"},
];

const display = { fontFamily: "var(--font-display)" };
const mono = { fontFamily: "var(--font-mono)" };

function Blob({ className, duration = 10 }: { className: string; duration?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full bg-[var(--accent)] blur-3xl ${className}`}
      style={{ opacity: 0.18 }}
      animate={{ y: [0, 24, 0], x: [0, 16, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={mono} className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
      {children}
    </p>
  );
}

function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3.5 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="status-dot absolute inline-flex h-2 w-2 rounded-full bg-[var(--signal)]" />
      </span>
      <span style={mono} className="text-xs font-medium">open to new opportunities</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Blob className="left-[-8%] top-[-4%] h-80 w-80" duration={11} />
      <Blob className="right-[-6%] top-[20%] h-64 w-64" duration={9} />

      <header className="sticky top-0 z-20 border-b border-[var(--hairline)] bg-[var(--bg)]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span style={display} className="text-lg font-bold tracking-tight">
            Jusar <span className="text-[var(--accent)]">Culpable</span>
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden gap-6 text-sm font-medium sm:flex">
              <a href="#about" className="hover:text-[var(--accent)]">About</a>
              <a href="#work" className="hover:text-[var(--accent)]">Work</a>
              <a href="#contact" className="hover:text-[var(--accent)]">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 items-center gap-14 py-20 md:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <StatusBadge />
            </motion.div>
            <motion.h1
              style={display}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
            >
              Jusar
              <br />
              Culpable
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]"
            >
              Mid Level Full Stack Web Developer building fast, modern web apps with Next.js,
              WordPress, Shopify, and Webflow from Cebu, Philippines.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:jaxsar.culpable@gmail.com"
                className="flex items-center gap-2 rounded-lg bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--bg)] transition hover:bg-[var(--accent)]"
              >
                <Mail size={16} />
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/Jusar Culpable Resume.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-[var(--hairline)] px-6 py-3.5 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative mx-auto w-full max-w-[400px] md:max-w-[350px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] shadow-xl">
              <Image src="/head-shot-v2.png" alt="Jusar Culpable" fill className="object-cover" />
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <p style={display} className="max-w-2xl text-3xl font-semibold leading-snug sm:text-4xl">
              Mid-level Full Stack Developer with nearly 4 years shipping production web apps.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-1 gap-4 text-[15px] leading-relaxed text-[var(--muted)] sm:grid-cols-2">
              <p>
                Mid Level Full Stack Web Developer with nearly 4 years of hands-on experience
                designing, developing, customizing, and maintaining modern, high-performance
                websites across WordPress, Wix, Squarespace, Webflow, GoHighLevel, and Shopify 
                delivering scalable solutions across both no-code/low-code builders and custom
                development.
              </p>
              <p>
                Proficient in HTML, CSS, JavaScript, PHP, SQL, and modern frameworks including
                Next.js and TypeScript, with GitHub for version control and Vercel for CI/CD
                deployment. Also skilled in hosting, domain, and DNS management across
                SiteGround, cPanel, Hostinger, WP Engine, and DigitalOcean covering the full
                website lifecycle from setup through ongoing maintenance and security.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="py-16">
          <Reveal>
            <div className="flex items-center justify-between">
              <Eyebrow>Tech Stack</Eyebrow>
              <Link
                href="/tech-stack"
                className="flex items-center gap-1 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                View All
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-6 space-y-8">
            {techStackCategories.slice(0, 3).map((group, gi) => (
              <Reveal key={group.category} delay={gi * 0.05}>
                <h3 style={mono} className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.02 }}
                      whileHover={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                      style={mono}
                      className="cursor-default rounded-md border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-16">
          <Reveal>
            <Eyebrow>Experience</Eyebrow>
          </Reveal>
          <div className="mt-6 space-y-3">
            {experience.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex flex-col justify-between gap-2 rounded-xl border border-[var(--hairline)] bg-[var(--surface)] px-6 py-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-[var(--muted)]">{item.place}</p>
                  </div>
                  <span style={mono} className="w-fit text-xs font-medium text-[var(--accent)]">
                    {item.years}
                  </span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="py-16">
          <Reveal>
            <div className="flex items-center justify-between">
              <Eyebrow>Projects</Eyebrow>
              <Link
                href="/projects"
                className="flex items-center gap-1 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                View All
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="group block"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-[var(--hairline)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p style={mono} className="mb-2 text-[10px] font-medium uppercase tracking-wide text-white/70">
                        Used:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-white/30 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{project.description}</p>
                    </div>
                    <ArrowUpRight size={16} className="mt-1 shrink-0 text-[var(--muted)] transition group-hover:text-[var(--accent)]" />
                    </div>
                  </motion.a>
                </Reveal>
              ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-[var(--ink)] px-8 py-16 text-center sm:px-16">
              <Blob className="left-[-10%] top-[-15%] h-60 w-60" duration={9} />
              <div className="relative">
                <h2 style={display} className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-[var(--bg)] sm:text-5xl">
                  Have a project in mind? Let&apos;s build it.
                </h2>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:jaxsar.culpable@gmail.com"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-white"
                >
                  <Mail size={18} />
                  jaxsar.culpable@gmail.com
                </motion.a>
                <div className="mt-8 flex justify-center gap-6 text-sm font-medium text-[var(--bg)]/70">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} className="hover:text-[var(--bg)]">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <p className="pb-10 text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Jusar Culpable
        </p>
      </main>
    </div>
  );
}