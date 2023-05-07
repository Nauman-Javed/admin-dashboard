import { createContext, useState } from "react";
import { useContext } from "react";

const themeContext = createContext();
export const useTheme = () => useContext(themeContext);

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  let heading;
  let subHeading;
  let background;

  if (mode === "light") {
    heading = "#42446E";
    subHeading = "#666666";
    background = "#ffff";
  } else {
    heading = "#D9D9D9";
    subHeading = "#A7A7A7";
    background = "#191919";
  }

  return (
    <themeContext.Provider
      value={{ heading, subHeading, background, setMode, mode }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
