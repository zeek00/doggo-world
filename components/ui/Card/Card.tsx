import {Breed, Pet} from '@/types/pets'
import styles from './Card.module.css'
import Link from "next/link";
import Image from "next/image";
import {fetchPetById} from "@/lib/api";
import {montserrat} from "@/public/fonts/fonts";

export default async function Card({pet, path}: { pet: Pet, path: string }) {
    try{
        const petObject = await fetchPetById(pet.reference_image_id)
        if (!petObject) return <p className="text-center text-[#FAC05E] text-lg">pet unavailable</p>;
        return (
            <div className={`${styles.container} w-[300px] md:w-[350px]  `}>
                <span className={styles.imageBox}>
                    <Image
                        src={petObject.url}
                        alt={'pet image'}
                        fill
                        className={styles.image}
                        priority
                    />
                </span>
                {
                    petObject.breeds.map((pet: Breed) => (
                        <span key={pet.id} className={styles.detailsBox}>
                            {pet.breed_group && (<Link href={`/breeds/${pet.breed_group}`}
                                                       className={`${montserrat.className} ${styles.breedGroup}`}>{pet.breed_group}</Link>)}
                            {!pet.breed_group && (<p className={styles.breedGroup}>??</p>)}
                            <h2>{pet.name}</h2>
                            <p className={`${montserrat.className}`}>Life Span: {pet.life_span}</p>
                        </span>

                    ))
                }
                <span className={`${styles.actionBox} ${montserrat.className}`}>
                   { path === 'pets' && <Link href={`${path}/${petObject.id}`}>Learn More</Link> }
                    { path === 'breeds' && <Link href={`../pets/${petObject.id}`}>Learn More</Link> }

                </span>

            </div>
        )

    } catch (error) {
        console.error("Error fetching featured pet:", error);
        return <p className="text-center text-red-400">Failed to load pet.</p>;

    }


}