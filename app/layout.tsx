import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Source_Sans_3({
  variable: "--font-profile-sans",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-profile-serif",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-profile-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Your Name — ML Systems Research",
  description:
    "Draft academic profile for research in GPU computing, distributed learning systems, and efficient AI.",
  openGraph: {
    title: "Your Name — ML Systems Research",
    description:
      "Academic profile, selected work, technical writing, and curriculum vitae.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — ML Systems Research",
    description:
      "Academic profile, selected work, technical writing, and curriculum vitae.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sans.variable + " " + serif.variable + " " + mono.variable}>
        {children}
      </body>
    </html>
  );
}
