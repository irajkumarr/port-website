import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./../app/globals.css";

export const metadata: Metadata = {
  title: "Raj Kumar Timalsina | Full Stack Mobile Developer",
  description:
    "Portfolio of Raj Kumar Timalsina, a Full Stack Mobile Developer specializing in Flutter and Node.js. Crafting robust backends and beautiful mobile experiences.",
  keywords: [
    "Raj Kumar Timalsina",
    "Full Stack Developer",
    "Mobile Developer",
    "Flutter",
    "Node.js",
    "Portfolio",
    "Backend Developer",
    "Frontend Developer",
    "App Developer",
  ],
  authors: [
    { name: "Raj Kumar Timalsina", url: "https://timalsinarajkumar.com.np" },
  ],
  creator: "Raj Kumar Timalsina",
  publisher: "Raj Kumar Timalsina",
  metadataBase: new URL("https://timalsinarajkumar.com.np"),

  openGraph: {
    title: "Raj Kumar Timalsina | Full Stack Mobile Developer",
    description:
      "Explore the portfolio of Raj Kumar Timalsina, a Full Stack Mobile Developer building scalable backends and beautiful mobile apps.",
    url: "https://timalsinarajkumar.com.np",
    siteName: "Raj Kumar Timalsina Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        // url: "/user-image.png",
        width: 1200,
        height: 630,
        alt: "Raj Kumar Timalsina Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raj Kumar Timalsina | Full Stack Mobile Developer",
    description:
      "Portfolio of Raj Kumar Timalsina, crafting robust backends and beautiful mobile applications.",
    images: ["/og-image.jpeg"],
    creator: "@irajkumarr_", // Optional
  },

  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest"></link>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
