import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  dev: {
    assetPrefix: "https://microfrontends-monorepo.vercel.app/",
  },
  output: {
    assetPrefix: "https://microfrontends-monorepo.vercel.app/",
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "host",
      remotes: {
        journeya:
          "journeya@https://microfrontends-monorepo-journeya.vercel.app/mf-manifest.json",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
});
