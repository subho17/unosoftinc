/**
 * Cross-platform standalone build for self-hosted Node servers
 * (Hostinger VPS, Docker, etc.). Not used on Vercel.
 *
 * Produces `.next/standalone` with a minimal server.js.
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
  env: { ...process.env, STANDALONE: "true" },
});

child.on("exit", (code, signal) => {
  if (signal) {
    console.error(`Build terminated by signal ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});
