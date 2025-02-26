import { Geist, Geist_Mono } from "next/font/google";
import { Indie_Flower } from "next/font/google";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


const indieFlower = Indie_Flower({ subsets: ["latin"], weight: "400" });

export { geistSans, geistMono, indieFlower };