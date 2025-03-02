import { config } from "@repo/eslint-config/react-internal";

export default {
  ...config,
  root: true,
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
