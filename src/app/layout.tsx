import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bewear.",
  description: "Find the perfect outfit for any occasion at Bewear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
