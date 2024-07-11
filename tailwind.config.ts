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
      screens: {
        sm: "450px",
        md: "768px",
        lg: "1056px",
      },
    },
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
export default config;
