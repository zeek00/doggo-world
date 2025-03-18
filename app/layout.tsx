import {ReactNode} from "react";
import type { Metadata } from "next";
import {indieFlower} from '@/public/fonts/fonts';
import "../styles/globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "Doggo World",
  description: "A Dog showcase",
    icons: [
        { rel: "icon", url: "/favicon.ico", sizes: "any" },
        { rel: "apple-touch-icon", url: "/apple-icon.png" },
        { rel: "icon", url: "/favicon.png", type: "image/png" }
    ],
};



export default function RootLayout({children}: { children: ReactNode }) {
  return (
      <html lang="en">
      <body className={`${indieFlower.className} flex flex-col min-h-screen`}>
          <span className=" top-0 w-full z-10">
            <Nav/>
          </span>


          <main className="flex-grow ">
                  {children}
          </main>

          <span className="mt-auto">
            <Footer/>
          </span>

      </body>
      </html>
  );
}
