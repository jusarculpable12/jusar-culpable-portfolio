"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { techStackCategories } from "@/data/tech-stack";
import { ThemeToggle } from "@/components/theme-toggle";

const display = { fontFamily: "var(--font-display)" };
const mono = { fontFamily: "var(--font-mono)" };

export default function TechStackPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-[var(--hairline)] bg-[var(--bg)]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={display}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Tech Stack
        </motion.h1>

        <div className="mt-12 space-y-10">
          {techStackCategories.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
            >
              <h2 style={mono} className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                {group.category}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    style={mono}
                    className="rounded-md border border-[var(--hairline)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}