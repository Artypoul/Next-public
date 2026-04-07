import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "#8B5CF6",
        neonBlue: "#38BDF8",
        surface: "#0B1026"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 0%, rgba(56,189,248,0.25), transparent 40%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.25), transparent 40%)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.5), 0 0 40px rgba(56,189,248,0.2)"
      }
    }
  },
  plugins: []
};

export default config;
