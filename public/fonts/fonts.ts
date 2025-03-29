import { Montserrat } from 'next/font/google';
import { Indie_Flower } from "next/font/google";



const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['300', '400', '500', '600', '700'], // Specify desired weights
});


const indieFlower = Indie_Flower({ subsets: ["latin"], weight: "400" });

export { montserrat, indieFlower };