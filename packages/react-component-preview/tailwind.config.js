/** @type {import('tailwindcss').Config} */
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from "tailwindcss-scoped-preflight";
export default {
  content: ["./src/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: [
    require("tailwindcss-animate"),
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".twp", {
        except: ".no-twp",
      }),
    }),
  ],
};
