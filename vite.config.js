import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// For Daisy UI default light theme
// @type {import('tailwindcss').Config}
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: ["light"], // 👈 Forces light theme
//   },
//   plugins: [require("daisyui")],
// };
