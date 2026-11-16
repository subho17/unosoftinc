import type { NextConfig } from "next";

// Static Hostinger export: EXPORT=true npm run build:export
const isExport = process.env.EXPORT === "true" || process.env.NEXT_EXPORT === "true";
// Self-hosted Node server: STANDALONE=true npm run build:standalone
const isStandalone = process.env.STANDALONE === "true";

const nextConfig: NextConfig = {
  // Vercel (and any default `next build`) must use the normal build output.
  // `standalone` is only for self-hosted Node servers and is not used on Vercel.
  output: isExport ? "export" : isStandalone ? "standalone" : undefined,
  images: {
    // A static export has no Image Optimization API, so images must be served as-is.
    // On Vercel the optimizer is available and stays enabled.
    unoptimized: isExport,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
