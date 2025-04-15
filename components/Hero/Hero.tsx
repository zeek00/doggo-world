import styles from './Hero.module.css'
import {indieFlower} from "@/public/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className={styles.container}>
            <span className={styles.textAndCTA}>
                <h1 className={indieFlower.className}>
                    Meet the Pups, <br/> Rate the Fluff
                </h1>
                <button className={indieFlower.className}>
                    <Link href='/pets'>start sniffin</Link>
                </button>
            </span>
            <span className={styles.svg}>
                <Image src={'svg/hero-desktop.svg'} alt={'about us'} width={1200} height={800} priority/>

            </span>

        </div>
    )
}