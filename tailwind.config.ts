import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7DAACB",
        secondary: "#E8DBB3",
        background: "#FFFDEB",
        accent: "#CE2626",
        ink: "#111111",
        muted: "#555555",
        card: "#FFFFFF"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 17, 17, 0.10)",
        line: "0 1px 0 rgba(17, 17, 17, 0.08)"
      },
      borderRadius: {
        card: "8px"
      }
    }
  },
  plugins: []
};

export default config;
