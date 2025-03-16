import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  dev: {
    assetPrefix: "https://microfrontends-monorepo-journeya.vercel.app/",
  },
  output: {
    assetPrefix: "https://microfrontends-monorepo-journeya.vercel.app/",
  },
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
