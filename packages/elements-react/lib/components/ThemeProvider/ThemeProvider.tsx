import { Theme } from "@radix-ui/themes";
import React from "react";
import "@radix-ui/themes/tokens.css";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      <Theme
        asChild
        // appearance="dark"
        // data-is-root-theme={false}
        role="application"
        className="lens-root twp"
      >
        {children}
      </Theme>
    </>
  );
};

export default ThemeProvider;
