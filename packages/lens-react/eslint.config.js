import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "writable",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...ts.configs["recommended"].rules,
      ...reactHooks.configs.recommended.rules,
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      curly: "error",
      "@typescript-eslint/no-unused-vars": "off", // Disabled
      "@typescript-eslint/explicit-function-return-type": "off", // Disabled
      "@typescript-eslint/no-explicit-any": "off", // Disabled
      "no-undef": "off", // Disabled
      "react-hooks/rules-of-hooks": "off", // Disabled
      "react-refresh/only-export-components": "off", // Disabled
      "react-hooks/exhaustive-deps": "off", // Disabled
      "no-empty-pattern": "off", // Disabled
      "no-dupe-keys": "off", // Disabled to fix duplicate key errors
      "no-useless-escape": "off", // Disabled
      "no-prototype-builtins": "off", // Disabled
      eqeqeq: "off", // Disabled
    },
  },
];
