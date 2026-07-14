"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search, X } from "lucide-react";
import { projects } from "@/data/projects";
import { ThemeToggle } from "@/components/theme-toggle";

const display = { fontFamily: "var(--font-display)" };
const mono = { fontFamily: "var(--font-mono)" };

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesSearch =
        query === "" ||
        p.title.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  // Reset pagination whenever the search or filter changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, activeTag]);

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-[var(--hairline)] bg-[var(--bg)]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
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

      <main className="mx-auto max-w-5xl px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={display}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Projects
        </motion.h1>

        {/* Search */}
        <div className="mt-10 flex items-center gap-2 rounded-lg border border-[var(--hairline)] bg-[var(--surface)] px-4 py-3">
          <Search size={16} className="text-[var(--muted)]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by project name or technology..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="text-[var(--muted)] hover:text-[var(--ink)]"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
              activeTag === null
                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                : "border-[var(--hairline)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              style={mono}
              className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                activeTag === tag
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-[var(--hairline)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-[var(--muted)]">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"} found
        </p>

        {/* Grid */}
        {visibleProjects.length === 0 ? (
          <div className="mt-16 text-center text-[var(--muted)]">
            No projects match that search or filter.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, i) => (
            <motion.a
                key={project.slug}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % PAGE_SIZE) * 0.05 }}
                className="group block"
                >
                <div className="relative aspect-video overflow-hidden rounded-xl border border-[var(--hairline)]">
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>
                <h3 className="mt-3 font-semibold transition group-hover:text-[var(--accent)]">{project.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                    <span
                        key={tag}
                        style={mono}
                        className="rounded border border-[var(--hairline)] bg-[var(--surface)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                </motion.a>
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-lg border border-[var(--hairline)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer"
            >
              Load more
            </button>
          </div>
        )}
      </main>
    </div>
  );
}