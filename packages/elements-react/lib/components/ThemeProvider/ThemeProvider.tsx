import { Theme } from "@radix-ui/themes";
import React from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <Theme asChild className="lens-root">
      {children}
    </Theme>
  );
};

export default ThemeProvider;
