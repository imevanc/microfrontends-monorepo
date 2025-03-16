import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "journeya",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
      dts: false,
    }),
  ],
  server: {
    port: 3001,
  },
});
