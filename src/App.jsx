/* eslint-disable no-undef */
import "./App.css";
import { ThemeBtn } from "./Components/ThemeBtn";
import { Card } from "./Components/Card";
import { ThemeProvider } from "./Context/Theme";
import { useState, useEffect } from "react";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const DarkTheme = () => {
    setThemeMode("dark");
  };
  const LightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("Light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, DarkTheme, LightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
