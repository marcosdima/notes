import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, import: require('eslint-plugin-import'), jest: require('eslint-plugin-jest'), security: require('eslint-plugin-security') },
    extends: ["js/recommended", "plugin:prettier/recommended", "plugin:import/errors", "plugin:jest/recommended", "plugin:security/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": ["error", "always"],
      "prefer-const": "error",
      "no-shadow": "error"
    }
  },
]);
