import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050c18",
          900: "#0a192f",
          850: "#0d1f3b",
          800: "#112240",
          700: "#1d3557",
          600: "#23456d",
        },
        brand: {
          blue: "#0056b3",
          cyan: "#00d2ff",
          darkCyan: "#00a8cc",
          whatsapp: "#25d366",
          whatsappHover: "#1fb855",
          lightBg: "#f4f7fa",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(0, 210, 255, 0.15) 0%, transparent 60%)",
        "radial-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 86, 179, 0.35), rgba(0, 210, 255, 0.12) 50%, transparent 100%)",
        "card-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(0, 210, 255, 0.3)",
        "glow-lg": "0 0 60px -10px rgba(0, 210, 255, 0.4)",
        "glow-wa": "0 0 30px -5px rgba(37, 211, 102, 0.45)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
