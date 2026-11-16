/**
 * Cross-platform static export build.
 *
 * Sets EXPORT=true (read by next.config.ts to switch output to "export")
 * and runs `next build`, so this works on Windows, macOS and Linux
 * without needing `set`/`cross-env`.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));

if (!existsSync(nextBin)) {
  console.error("Could not find the Next.js CLI. Run `npm install` first.");
  process.exit(1);
}

const child = spawn(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: { ...process.env, EXPORT: "true" },
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`Build terminated by signal ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});
