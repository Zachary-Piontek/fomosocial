"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <main>
      {currentTheme === "dark" ? (
        <button onClick={() => setTheme("light")}>Light Mode</button>
      ) : (
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      )}
    </main>
  );
}
