import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync, statSync } from "fs";

const root = new URL(".", import.meta.url).pathname;

function collectHtmlEntries(dir) {
  const input = {};
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === "assets" || name.startsWith("."))
      continue;
    const full = resolve(dir, name);
    if (statSync(full).isDirectory()) {
      Object.assign(input, collectHtmlEntries(full));
    } else if (name === "index.html") {
      const key =
        dir === root
          ? "main"
          : dir
              .replace(root, "")
              .replace(/\//g, "-")
              .replace(/^-/, "");
      input[key] = full;
    }
  }
  return input;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: collectHtmlEntries(root),
    },
  },
});
