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
    setOpenThemeOptions(false);
  };

  const handleShowThemeOptions = (): void => {
    setOpenThemeOptions((prev) => !prev);
  };

  return (
    <div className="p-4">
      <label className=" flex absolute flex-col cursor-pointer ">
        <div className="flex flex-col gap-0">
          <p className="">Select Theme</p>
          <div
            className={`flex h-6 w-auto ${
              theme === "dark"
                ? "bg-gray-700"
                : theme === "light"
                ? "bg-gray-50"
                : `bg-${theme}-800`
            } rounded-full`}
            onClick={handleShowThemeOptions}
          />
        </div>
        {openThemeOptions && (
          <div className="w-auto h-auto  border  border-b-cyan-300 p-1 bg-blue-400 rounded-md">
            {themes.map((themeOption) => (
              <div
                key={themeOption.name}
                className={`flex flex-col p-1 `}
                onClick={() => handleSelectTheme(themeOption.name)}
              >
                <div className="flex flex-row justify-between">
                  <div>
                    {themeOption.name.charAt(0).toUpperCase() +
                      themeOption.name.slice(1)}
                  </div>
                  <div
                    className={`flex h-6 w-8   ${
                      themeOption.color === "white"
                        ? "bg-white hover:bg-gray-200"
                        : themeOption.color === "black"
                        ? "bg-black hover:bg-gray-700"
                        : themeOption.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-800"
                        : themeOption.color === "green"
                        ? "bg-green-600 hover:bg-green-700"
                        : themeOption.color === "yellow"
                        ? "bg-yellow-500 hover:bg-yellow-400"
                        : themeOption.color === "red"
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-white"
                    } rounded-full`}
                  ></div>
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
