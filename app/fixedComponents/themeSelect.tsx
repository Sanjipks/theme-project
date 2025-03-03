import { useState, useEffect } from "react";

const themes = [
  { name: "light", color: "white" },
  { name: "dark", color: "black" },
  { name: "blue", color: "blue" },
  { name: "green", color: "green" },
  { name: "yellow", color: "yellow" },
  { name: "red", color: "red" },
];

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
  const [openThemeOptions, setOpenThemeOptions] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSelectTheme = (selectedtheme: string): void => {
    setTheme(selectedtheme);
  };

  const handleShowThemeOptions = (): void => {
    setOpenThemeOptions((prev) => !prev);
  };

  return (
    <div className=" p-4">
      <label className=" flex absolute flex-col bg-amber-50  cursor-pointer ">
        <div className="flex flex-col gap-0">
          <p className="bg-amber-400">Select Theme</p>
          <div
            className={`flex h-6 w-auto ${
              theme === "dark"
                ? "bg-gray-800"
                : theme === "light"
                ? "bg-gray-200"
                : `bg-${theme}-800`
            } rounded-full`}
            onClick={handleShowThemeOptions}
          ></div>
        </div>
        {openThemeOptions && (
          <div className="w-auto h-auto bg-white">
            {themes.map((themeOption) => (
              <div
                key={themeOption.name}
                className={`flex w-auto h-6 relative rounded-full `}
                onClick={() => handleSelectTheme(themeOption.name)}
              >
                <div>
                  {" "}
                  <span>
                    {themeOption.name.charAt(0).toUpperCase() +
                      themeOption.name.slice(1)}
                  </span>
                  <div className={`flex b h-6 w-6`}></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </label>
    </div>
  );
};

export default ThemeSelect;
