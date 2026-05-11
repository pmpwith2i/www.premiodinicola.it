import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
  locales: ["it"],
  sourceLocale: "it",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
};

export default config;
