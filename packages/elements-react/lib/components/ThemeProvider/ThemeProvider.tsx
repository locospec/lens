import { Theme } from "@radix-ui/themes";
import React from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
  scaling?: string;
  radius?: string;
}

const ThemeProvider = ({
  children,
  scaling = "1",
  radius = "2",
}: ThemeProviderProps) => {
  if (!(+scaling < 2 && +scaling > 0)) {
    console.error("Invalid scaling");
    return <div>This is invalid scaling</div>;
  }
  if (!(+radius <= 2 && +radius > 0)) {
    console.error("Invalid radius");
    return <div>This is invalid radius</div>;
  }

  return <Theme>{children}</Theme>;
};

export default ThemeProvider;
