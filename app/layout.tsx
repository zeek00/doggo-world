import type { Metadata } from "next";
import { geistSans, geistMono } from "../public/fonts/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Doggo World",
  description: "A Dog showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
