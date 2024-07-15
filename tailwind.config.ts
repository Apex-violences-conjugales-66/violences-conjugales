import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: "#1E1E1E",
      white: "#fff",
      orange: {
        DEFAULT: "#FE945C",
        light: "#FEA97D",
      },
      yellow: {
        DEFAULT: "#FFBD45",
        light: "#FFCA6A",
      },
      blue: {
        DEFAULT: "#ADD8E6",
        green: "#13a89d",
        dark: "#1475bb",
        hover: "#6eb4cb",
      },
      red: {
        DEFAULT: "#CA1010",
      },
      purple: {
        DEFAULT: "#C9A2BC",
      },
    },
    container: {
      center: true,
      padding: "4rem",
      screens: {
        md: "896px",
        xl: "1184px",
      },
    },
    screens: {
      sm: "450px",
      md: "896px",
      lg: "1024px",
      xl: "1184px",
    },
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
      },
      backgroundImage: {
        "flower-pattern": "url('/flower-pattern.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
