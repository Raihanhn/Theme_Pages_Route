// components/Navbar.tsx
"use client"; // needed because it uses ThemeButton
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
      <div>Logo</div>
      <div className="flex items-center gap-4">
        <ThemeButton />
      </div>
    </nav>
  );
}
