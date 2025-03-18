import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
   { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
   { languageOptions: { globals: globals.node } },
   pluginJs.configs.recommended,
   {
      ignores: ["node_modules"],
   },
   {
      languageOptions: {
         ecmaVersion: "latest"
      },
      rules: {
         "quotes": ["error", "double"],
         "semi": ["error", "always"],
         "indent": ["error", 3],
         "no-unused-vars": "off"
      }
   }
];