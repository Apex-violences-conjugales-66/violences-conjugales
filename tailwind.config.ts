import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1184px",
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        amatic_sc: ["var(--font-amatic_sc)"],
      },
      backgroundImage: {
        "flower-pattern": "url('/flower-pattern.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
