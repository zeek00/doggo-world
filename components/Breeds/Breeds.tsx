import styles from './Breeds.module.css'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import {breedGroups} from "@/data/data";
import {fetchPets} from "@/lib/api";
import {getAllBreedGroups} from "@/lib/utils";

export default  async function Breeds() {
    try {
        const pets = await fetchPets();
        const groups = await getAllBreedGroups(pets)

        return (
            <div className={styles.container}>
                 { groups &&
                    Object.entries(breedGroups).map(([group, data]) => (
                        <span key={group}
                              className={`${styles.card} bg-gradient-to-l from-[var(--yellow-shade)]  to-[var(--green-shade)] text-transparent `}>
                            <h1>Discover</h1>
                            <h2>{group}</h2>
                            <span className={styles.img}>
                                <Image
                                    src={data.svg}
                                    alt="svg-img"
                                    width={150}
                                    height={150}
                                    className="w-28 sm:w-28 md:w-28 lg:w-28 xl:w-32 h-auto"
                                    priority
                                />
                            </span>
                            <span className={styles.discover}>
                                <Link href={`breeds/${group}`}>
                                    <FaArrowRight/>
                                </Link>
                            </span>

                    </span>
                    ))
                }
            </div>
        )

    }catch (error) {
        console.error("Error fetching featured breeds:", error);
    }

}