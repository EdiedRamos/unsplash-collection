import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cc-dark": "#121826",
        "cc-white": "#FFF",
        "cc-gray-100": "#E5E7EB",
        "cc-gray-100-op": "#E5E7EBCC",
      },
      fontSize: {
        "cs-50": "12px",
        "cs-100": "14px",
        "cs-200": "16px",
        "cs-300": "36px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
