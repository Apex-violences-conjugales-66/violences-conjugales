import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: {
        DEFAULT: "#1E1E1E",
        light: "#E4E4E4",
      },
      white: "#fff",
      orange: {
        DEFAULT: "#FE945C",
        light: "#FFF7F0 ",
      },
      yellow: {
        DEFAULT: "#FFBD45",
        light: "#FFF3DE",
      },
      blue: {
        DEFAULT: "#ADD8E6",
        green: "#13a89d",
        dark: "#1475bb",
        hover: "#6eb4cb",
        light: "#F0FAFF",
      },
      red: {
        DEFAULT: "#CA1010",
      },
      pink: {
        DEFAULT: "#FFCCD6",
        light: "#FFF0F3",
      },
      purple: {
        DEFAULT: "#C9A2BC",
        light: "#F0F0FF",
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
      md: "768px",
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
