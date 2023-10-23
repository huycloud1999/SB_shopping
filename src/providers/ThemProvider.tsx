"use client"
import React, { useContext, ReactNode, useState, useEffect } from 'react';
import { ThemeContext, ThemeContextProps } from '@/context/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const contextValue = useContext<ThemeContextProps | undefined>(ThemeContext);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!contextValue || !mounted) {
    return null;
  }

  const { theme } = contextValue;

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
