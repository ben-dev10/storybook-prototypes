import { Moon, Sun } from "lucide-react";
import { useState } from "react";
// import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  function handleToggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains("light") ? "light" : "dark";

    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("portfolio-theme", newTheme);
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
  }

  // TODO: animate with FMo (use actual svgs for icons)
  return (
    <button
      onClick={handleToggleTheme}
      className="max-w-max rounded-full p-1 text-foreground hover:bg-gray-100 dark:hover:bg-gray-900"
    >
      {theme === "light" ? (
        <Sun
          strokeWidth={2}
          size={18}
          className="rotate-0 transform transition-transform duration-500 dark:rotate-180"
        />
      ) : (
        <Moon
          strokeWidth={2}
          size={18}
          className="rotate-0 transform transition-transform duration-500 dark:rotate-180"
        />
      )}
    </button>
  );
}
