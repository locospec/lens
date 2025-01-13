import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { execSync } from "child_process";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
    },
  },
  plugins: [
    {
      name: "run-tsc",
      buildStart() {
        // Run Tailwind build when Vite starts building
        execSync("tsc -b ./tsconfig.lib.json");
      },
    },
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
    {
      name: "build-tailwind",
      buildStart() {
        // Run Tailwind build when Vite starts building
        execSync(
          "tailwindcss -m -i ./src/tailwind-entry.css -o ./dist/styles.css"
        );
      },
    },
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@types/react",
        "@types/react-dom",
      ],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: (chunkInfo) => {
          return "[name].js";
        },
        manualChunks: (id) => {
          console.log("id", id);

          if (id.includes("/lucide-react/dist/esm/icons/")) {
            return "lucide-react/icons";
          }

          if (id.includes("node_modules/@radix-ui/")) {
            const match = id.match(/@radix-ui\/([^/]+)/);
            if (match) {
              return `radix-ui/${match[1]}`;
            }
          }

          return null;
        },
      },
      // output: {
      //   assetFileNames: "assets/[name][extname]",
      //   entryFileNames: "[name].js",
      // },
    },
  },
});
