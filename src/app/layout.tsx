import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando Sosa T.",
  description: "Welcome to my portfolio",
  
  openGraph: {
    images: ["/assets/images/design/profile-image.png"],
    description:'Welcome to my portfolio'
  },
  twitter: {
    images: ["/assets/images/design/profile-image.png"],
    description:'Welcome to my portfolio'
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
