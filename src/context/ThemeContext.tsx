'use client'
import React, { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

export interface ThemeContextProps {
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const getFromLocalStorage = (): Theme => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return (value as Theme) || "light";
  }
  return "light";
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const contextValue: ThemeContextProps = { theme, toggle };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
