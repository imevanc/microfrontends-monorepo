import type { Config } from "tailwindcss";

const sharedConfig: Omit<Config, "content"> = {
  theme: {
    extend: {
      textColor: {
        purple: {
          50: "#faf6fe",
          100: "#f2e9fe",
          200: "#e7d7fd",
          300: "#d5b8fa",
          400: "#de0000", // Random red to ensure it's working
          500: "#a15eee",
          600: "#8a3de0",
          700: "#752cc4",
          800: "#6429a0",
          900: "#522281",
          950: "#360c5f",
        },
      },
    },
  },
  plugins: [],
};

export default sharedConfig;
