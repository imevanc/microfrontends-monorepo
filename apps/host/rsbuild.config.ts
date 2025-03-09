import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const getRemoteEntryUrl = () =>
  process.env.VERCEL_ENV === "production"
    ? "https://microfrontends-monorepo.vercel.app/mf-manifest.json"
    : "http://localhost:3001/mf-manifest.json";

console.log("getRemoteEntryUrl", getRemoteEntryUrl());

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "host",
      remotes: {
        journeya: `journeya@${getRemoteEntryUrl()}`,
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
  source: {
    define: {
      "process.env.VERCEL_ENV": JSON.stringify(process.env.VERCEL_ENV || ""),
    },
  },
});
