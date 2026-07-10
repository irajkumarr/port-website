import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./../app/globals.css";

export const metadata: Metadata = {
  title: "Raj Kumar Timalsina | Full Stack Mobile & Flutter Developer Nepal",
  description:
    "Portfolio of Raj Kumar Timalsina, a professional Full Stack Mobile Developer and Flutter Developer in Nepal. Crafting robust backends with Node.js and beautiful cross-platform mobile experiences.",
  keywords: [
    "Raj Kumar Timalsina",
    "Raj Timalsina",
    "Raj Kumar Flutter Developer",
    "Raj Kumar Full Stack Mobile Developer",
    "Flutter Developer Nepal",
    "Full Stack Mobile Developer Nepal",
    "Flutter Developer Portfolio",
    "Node.js Flutter Developer",
    "Mobile App Developer Nepal",
    "Hetauda",
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
    title: "Raj Kumar Timalsina | Full Stack Mobile & Flutter Developer Nepal",
    description:
      "Explore the portfolio of Raj Kumar Timalsina, a Full Stack Mobile Developer building scalable backends and beautiful mobile apps.",
    url: "https://timalsinarajkumar.com.np",
    siteName: "Raj Kumar Timalsina Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Raj Kumar Timalsina | Full Stack Mobile & Flutter Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raj Kumar Timalsina | Full Stack Mobile & Flutter Developer Nepal",
    description:
      "Portfolio of Raj Kumar Timalsina, crafting robust backends and beautiful mobile applications.",
    images: ["/og-image.jpeg"],
    creator: "@irajkumarr_",
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
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
        "name": "Raj Kumar Timalsina",
        "alternateName": "Raj Timalsina",
        "jobTitle": "Full Stack Mobile Developer & Flutter Developer",
        "url": "https://timalsinarajkumar.com.np",
        "image": "https://timalsinarajkumar.com.np/user-image.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hetauda",
          "addressRegion": "Bagmati",
          "addressCountry": "NP"
        },
        "nationality": {
          "@type": "Country",
          "name": "Nepal"
        },
        "sameAs": [
          "https://github.com/irajkumarr",
          "https://www.linkedin.com/in/irajkumarr",
          "https://x.com/irajkumarr_"
        ],
        "description": "Professional Flutter Developer and Full Stack Mobile Developer from Nepal. Expert in building mobile apps with Flutter, Dart, Node.js, Express, MongoDB, and Firebase.",
        "knowsAbout": [
          "Flutter",
          "Dart",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase",
          "REST API",
          "Provider State Management",
          "Git",
          "GitHub",
          "Mobile App Development",
          "Full Stack Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://timalsinarajkumar.com.np/#website",
        "url": "https://timalsinarajkumar.com.np",
        "name": "Raj Kumar Timalsina | Flutter & Full Stack Mobile Developer Portfolio",
        "publisher": {
          "@id": "https://timalsinarajkumar.com.np/#person"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest"></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

