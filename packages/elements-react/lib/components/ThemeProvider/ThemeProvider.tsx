import { Theme } from "@radix-ui/themes";
import { Moon, SunMedium } from "lucide-react";
import React from "react";
import "@radix-ui/themes/tokens.css";

export interface ThemeProviderProps {
  children: React.ReactNode;
  showThemeSwitcher?: boolean;
}

const ThemeProvider = ({
  children,
  showThemeSwitcher = true,
}: ThemeProviderProps) => {
  const isDevMode =
    showThemeSwitcher &&
    process.env.NODE_ENV !== "production" &&
    process.env.NODE_ENV !== "staging";
  const [appearance, setAppearance] = React.useState<
    "inherit" | "light" | "dark" | undefined
  >(isDevMode ? "light" : "inherit");

  const handleOnClick = () => {
    setAppearance(appearance === "light" ? "dark" : "light");
    switch (appearance) {
      case "light":
        return "dark";
      case "dark":
        return "light";
    }
  };
  return (
    <>
      {isDevMode && (
        <div
          className="le-absolute le-top-0 le-right-0 le-h-8 le-w-8 le-flex le-items-center le-justify-center le-cursor-pointer"
          onClick={handleOnClick}
        >
          {appearance === "dark" ? (
            <SunMedium />
          ) : (
            appearance === "light" && <Moon />
          )}
        </div>
      )}
      <Theme
        asChild
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
