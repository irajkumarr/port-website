import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Kumar Timalsina | Full-Stack & Flutter Developer",
  description:
    "Full-Stack & Flutter Developer with hands-on experience building production-grade mobile applications and robust backend services. Strong background in Clean Architecture, BLoC, Riverpod, Spring Boot, Node.js, WebSockets, and Redis.",
  keywords: [
    "Raj Kumar Timalsina",
    "Raj K Timalsina",
    "Flutter Developer Nepal",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Clean Architecture Flutter",
    "Dart",
    "Node.js",
    "Spring Boot",
    "Redis",
    "MongoDB",
    "BLoC",
    "Riverpod",
  ],
  authors: [
    {
      name: "Raj Kumar Timalsina",
      url: "https://timalsinarajkumar.com.np",
    },
  ],
  creator: "Raj Kumar Timalsina",
  publisher: "Raj Kumar Timalsina",
  metadataBase: new URL("https://timalsinarajkumar.com.np"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Raj Kumar Timalsina | Full-Stack & Flutter Developer",
    description:
      "Full-Stack & Flutter Developer with hands-on experience building production-grade mobile applications and robust backend services.",
    url: "https://timalsinarajkumar.com.np",
    siteName: "Raj Kumar Timalsina Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Raj Kumar Timalsina | Full Stack & Flutter Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raj Kumar Timalsina | Full-Stack & Flutter Developer",
    description:
      "Portfolio of Raj Kumar Timalsina, crafting robust backends and beautiful mobile applications.",
    images: ["/og-image.jpeg"],
    creator: "@irajkumarr_",
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://timalsinarajkumar.com.np/#person",
        name: "Raj Kumar Timalsina",
        alternateName: "Raj K Timalsina",
        jobTitle: "Full-Stack & Flutter Developer",
        url: "https://timalsinarajkumar.com.np",
        image: "https://timalsinarajkumar.com.np/avatar-opt.webp",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kathmandu / Hetauda",
          addressRegion: "Bagmati",
          addressCountry: "NP",
        },
        nationality: {
          "@type": "Country",
          name: "Nepal",
        },
        sameAs: [
          "https://github.com/irajkumarr",
          "https://www.linkedin.com/in/irajkumarr",
          "https://x.com/irajkumarr_",
        ],
        description:
          "Full-Stack & Flutter Developer specializing in Clean Architecture, BLoC, Riverpod, Node.js, Spring Boot, Redis, and cross-platform mobile development.",
        knowsAbout: [
          "Flutter",
          "Dart",
          "Clean Architecture",
          "BLoC",
          "Riverpod",
          "Node.js",
          "Spring Boot",
          "Express.js",
          "MongoDB",
          "Redis",
          "Firebase",
          "REST API",
          "WebSockets",
          "Git & GitHub",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://timalsinarajkumar.com.np/#website",
        url: "https://timalsinarajkumar.com.np",
        name: "Raj Kumar Timalsina | Full-Stack & Flutter Developer Portfolio",
        publisher: {
          "@id": "https://timalsinarajkumar.com.np/#person",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-zinc-50 dark:bg-[#0a0d14] text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
