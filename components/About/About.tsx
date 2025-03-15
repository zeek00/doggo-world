import styles from './About.module.css'
import Image from "next/image";

export default function About() {
    return (
        <div className={styles.container}>
            <span className={styles.desktop}>
                <Image src={'svg/about-desktop.svg'} alt={'about us'} width={1200} height={800} priority/>
            </span>
            <span className={styles.mobile}>
                <Image src={'svg/about-mobile.svg'} alt={'about us'} width={500} height={700} priority/>
            </span>

        </div>
    )
}