import * as tslint from "typescript-eslint";
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin"

export default tslint.config(
  eslint.configs.recommended,
  ...tslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",

      }
    }
  },
  {
    files: ["**/*.js"],
    extends: [tslint.configs.disableTypeChecked]
  },
  {
    plugins: { "@stylistic": stylistic }
  }
)
