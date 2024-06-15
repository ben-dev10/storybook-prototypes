import { Sun } from "lucide-react";

export default function ThemeToggle() {
  function handleToggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains("light") ? "light" : "dark";

    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("portfolio-theme", newTheme);
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
  }

  return (
    <div className="max-w-max rounded-full p-1 text-foreground hover:bg-gray-100 dark:hover:bg-gray-900">
      <Sun size={18} strokeWidth={2} id="toggle" onClick={handleToggleTheme} />
    </div>
  );
}
