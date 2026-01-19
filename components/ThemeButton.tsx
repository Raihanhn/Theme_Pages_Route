// components/ThemeButton.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mount to avoid hydration issues
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <RiMoonFill className="h-5 w-5 text-orange-500" />
      ) : (
        <RiSunFill className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
}
