import { useState, useEffect } from "react";

const themes = ["light", "dark", "blue", "green", "yellow", "red"];

const ThemeSelect = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const savedPreference = localStorage.getItem("theme");
      if (savedPreference !== null) {
        return savedPreference;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTheme(event.target.value);
  };

  return (
    <label className=" flex md:absolute relative h-10 flex-col bg-amber-50  mx-auto   cursor-pointer ">
      <p className="bg-amber-800">Select Theme</p>
      <select value={theme} onChange={handleChange} className="form-select">
        {themes.map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ThemeSelect;
