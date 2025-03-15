import styles from './Breeds.module.css'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import {breedGroups} from "@/data/data";

export default  function Breeds() {

        return (
            <div className={styles.container}>
                {
                    Object.entries(breedGroups).map(([group, data]) => (
                        <span key={group} className={`${styles.card} bg-gradient-to-l from-[var(--yellow-shade)]  to-[var(--green-shade)] text-transparent `}>
                            <h1>Discover</h1>
                            <h2>{group}</h2>
                            <span className={styles.img}>
                                <Image
                                    src={data.svg}
                                    alt="svg-img"
                                    width={150}
                                    height={150}
                                    className="w-16 sm:w-20 md:w-22 lg:w-24 xl:w-28 h-auto"
                                />
                            </span>
                            <span className={styles.discover}>
                                <Link href={`breeds/${group}`}>
                                    <FaArrowRight />
                                </Link>
                            </span>

                    </span>
                    ))
                }
            </div>
        )



}