import styles from './Hero.module.css'
import {indieFlower} from "@/public/fonts/fonts";
import Image from "next/image";

export default function Hero() {
    return (
        <div className={styles.container}>
            <span className={styles.textAndCTA}>
                <h1 className={indieFlower.className}>
                    Meet the Pups, <br/> Rate the Fluff
                </h1>
                <button className={indieFlower.className}>start sniffin</button>
            </span>
            <span className={styles.svg}>
                <Image src={'svg/hero-desktop.svg'} alt={'about us'} width={1200} height={800} priority/>

            </span>

        </div>
    )
}