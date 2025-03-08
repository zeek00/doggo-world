import {ReactNode} from "react";
import type { Metadata } from "next";
import {indieFlower} from '@/public/fonts/fonts';
import "../styles/globals.css";
import Nav from "@/components/Nav/Nav";


export const metadata: Metadata = {
  title: "Doggo World",
  description: "A Dog showcase",
};

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${indieFlower.className} `}
      >
      <Nav />

        {children}
      </body>
    </html>
  );
}
