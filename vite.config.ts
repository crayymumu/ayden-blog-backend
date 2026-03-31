import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";
import path from "path";
import type { Plugin } from "vite";

/**
 * Automatically generate a barrel file for the icons directory
 * @returns {Plugin} - The Vite plugin
 */
function autoIconBarrel(): Plugin {
  const iconsDir = path.resolve(__dirname, "src/icons/sources");
  const barrelPath = path.resolve(iconsDir, "index.ts");

  function generate() {
    const files = fs
      .readdirSync(iconsDir)
      .filter((f) => f.endsWith(".tsx") && f !== "index.tsx")
      .sort();
    const content =
      files
        .map((f) => `export * from "./${f.replace(/\.tsx$/, "")}";`)
        .join("\n") + "\n";
    const existing = fs.existsSync(barrelPath)
      ? fs.readFileSync(barrelPath, "utf-8")
      : "";
    if (existing !== content) {
      fs.writeFileSync(barrelPath, content);
    }
  }

  return {
    name: "auto-icon-barrel",
    buildStart() {
      generate();
    },
    configureServer(server) {
      generate();
      server.watcher.on("add", (file) => {
        if (file.startsWith(iconsDir) && file.endsWith(".tsx")) generate();
      });
      server.watcher.on("unlink", (file) => {
        if (file.startsWith(iconsDir) && file.endsWith(".tsx")) generate();
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [tsconfigPaths({ root: __dirname }), react(), autoIconBarrel()],
});
