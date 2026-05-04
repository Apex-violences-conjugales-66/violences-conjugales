import { amatic_sc, roboto } from "@/app/ui/fonts";
import type { Metadata } from "next";
import { cn } from "@/app/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.violences-conjugales.org"),
  title: {
    default: "APEX  ·  Violences Conjugales",
    template: "%s  ·  APEX",
  },
  description:
    "APEX est une association dédiée à la lutte contre les violences conjugales. Retrouvez nos ressources, formations et actions pour accompagner les victimes.",
  keywords: [
    "apex",
    "perpignan",
    "violences conjugales",
    "association",
    "aide aux victimes",
    "formations",
    "66",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "APEX | Violences Conjugales",
    title: "APEX | Violences Conjugales",
    description:
      "APEX est une association dédiée à la lutte contre les violences conjugales. Retrouvez nos ressources, formations et actions pour accompagner les victimes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "APEX | Violences Conjugales",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn(
        `${roboto.variable}`,
        `${amatic_sc.variable}`,
        "font-roboto text-gray-800 font-light text-pretty scroll-smooth",
      )}
    >
      <body>{children}</body>
    </html>
  );
}
