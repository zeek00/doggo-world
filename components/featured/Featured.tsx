import {fetchFeaturedPet, fetchPets} from "@/lib/api";
import styles from './Featured.module.css'
import Image from "next/image";
import {Breed} from "@/types/pets";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";


const Featured = async ()=>{

    try{
        const pets = await fetchPets(0,10)
        const featured = await fetchFeaturedPet(pets);
        if (!featured) return <p className="text-center text-[#FAC05E] text-lg">No featured pet available</p>;

        return (
            <div className={styles.mobile}>
                <div className={styles.container}>

                    <span className={styles.imageBox}>
                        <Image
                            src={featured.url}
                            alt={'pet image'}
                            fill
                            className={styles.image}
                            priority
                        />
                    </span>

                    {featured.breeds.map((pet: Breed) => (
                        <span key={pet.id} className={styles.detailsBox}>
                             <span className={styles.col1}>
                                <p>{pet.name}</p>
                                <span className={styles.likeIcon}>
                                    <FaHeart/>
                                </span>
                             </span>

                            <span className={styles.breedGroup}>
                                   <Link href={`/breeds/${pet.breed_group}`}>{pet.breed_group}</Link>
                            </span>

                            {pet.bred_for &&
                                <span className={styles.bredFor}>
                                    <label>Bred for:</label>
                                    <p>"{pet.bred_for}"</p>
                                </span>
                            }

                            {pet.life_span &&
                                <span className={styles.lifeSpan}>
                                    <label>Life Span:</label>
                                    <p>"{pet.life_span}"</p>
                                </span>
                            }

                            {pet.temperament &&
                                <span className={styles.temperament}>
                                    <label>Temperament:</label>
                                    <p>"{pet.temperament}"</p>
                                </span>
                            }
                        </span>
                    ))}
                </div>
            </div>
        );

    }catch(error){
        console.error("Error fetching featured pet:", error);
        return <p className="text-center text-red-400">Failed to load featured pet.</p>;

    }


}

export default Featured;