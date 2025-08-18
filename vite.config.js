import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import "react-pro-sidebar/dist/css/styles.css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
