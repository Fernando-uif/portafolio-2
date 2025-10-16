import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

const siteUrl = "https://fernandososa.dev";
const description =
  "Located in Mexico City. I am a web developer passionate about building accessible web applications as well as learning new technologies that allow me to create interesting elements";
const imageUrl = `${siteUrl}/assets/images/design/profile-image.png`;
const altImage = "Fernando Sosa T.";
const title = "Fernando Sosa T. - Web Developer";

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["web developer", "frontend developer", "react", "next.js", "typescript", "mexico city", "portfolio"],
  authors: [{ name: "Fernando Sosa Torres" }],
  creator: "Fernando Sosa Torres",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: title,
    description: description,
    siteName: "Fernando Sosa T. Portfolio",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: altImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageUrl],
    creator: "@fernandososa",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#141514" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={space.className}>{children}</body>
    </html>
  );
}
