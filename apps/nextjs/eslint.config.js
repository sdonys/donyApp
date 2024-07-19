import baseConfig, { restrictEnvAccess } from "@dony/eslint-config/base";
import nextjsConfig from "@dony/eslint-config/nextjs";
import reactConfig from "@dony/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
