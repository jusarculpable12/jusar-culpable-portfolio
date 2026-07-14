"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{ fontFamily: "var(--font-mono)" }}
      className="cursor-pointer flex h-8 w-8 items-center justify-center border border-[var(--hairline)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}