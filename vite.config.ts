import { defineConfig } from "vitest/config"
import { createLogger } from "vite"
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// src/i18n.ts intentionally both statically imports header/footer/home
// (needed for first paint) and dynamically imports every namespace,
// including those three, through the same lazy-loading i18next backend.
// Vite correctly can't move an already-statically-bundled module into a
// separate chunk and warns about it during build -- that's exactly the
// desired outcome here, not a bug, so silence just this one message
// (this warning is logged directly by Vite, not routed through Rollup's
// onwarn, hence the custom logger rather than rollupOptions.onwarn).
const logger = createLogger()
const rawWarn = logger.warn
logger.warn = (msg, options) => {
  if (msg.includes("dynamically imported") && msg.includes("but also statically imported")) {
    return
  }
  rawWarn(msg, options)
}

// https://vite.dev/config/
export default defineConfig({
  customLogger: logger,
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://backend:3001",
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split the monolithic main chunk into vendor groups that change at
        // very different rates. React/react-dom/react-router barely ever
        // change between deploys, so isolating them lets browsers keep
        // reusing the cached chunk across releases instead of
        // re-downloading it every time app code changes. Radix/floating-ui
        // and i18next are grouped separately for the same reason, and
        // because it breaks the single >500kB chunk into pieces the
        // browser can fetch in parallel.
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
            "@radix-ui/react-tabs",
          ],
          "vendor-i18n": [
            "i18next",
            "react-i18next",
            "i18next-browser-languagedetector",
          ],
        },
      },
    },
  },
})
