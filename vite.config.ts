import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import solid from "vite-plugin-solid"

export default defineConfig({
  base: "./",
  plugins: [solid(), VitePWA({ registerType: "autoUpdate" })],
})
