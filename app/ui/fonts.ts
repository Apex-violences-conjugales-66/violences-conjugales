import { Lato, League_Gothic } from "next/font/google";

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const league_gothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gothic",
});
