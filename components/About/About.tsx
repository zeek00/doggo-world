import styles from './About.module.css'
import Image from "next/image";
import {montserrat} from "@/public/fonts/fonts";

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={montserrat.className}>About</h1>
            <span className={styles.desktop}>
                <Image src={'svg/about-desktop-white.svg'} alt={'about us'} width={1200} height={800} priority/>
            </span>
            <span className={styles.mobile}>
                <Image src={'svg/about-mobile-white.svg'} alt={'about us'} width={500} height={700} priority/>
            </span>
        </div>
    );
}