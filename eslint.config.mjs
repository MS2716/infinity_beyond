import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: "next/core-web-vitals",
    rules: {
      // Other rules...
      "jsx-a11y/anchor-is-valid": "off",
    },
  }),
];

export default eslintConfig;
