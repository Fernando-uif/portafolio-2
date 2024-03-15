import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando Sosa T.",
  description: "Welcome to my portfolio",
  openGraph: {
    images: {
      url: "/assets/images/design/profile-image.png",
    },
  },
  twitter: {
    images: "/assets/images/design/profile-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  );
}
