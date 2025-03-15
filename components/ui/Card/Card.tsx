import {Breed, Pet} from '@/types/pets'
import styles from './Card.module.css'
import Link from "next/link";
import Image from "next/image";
import {fetchPetById} from "@/lib/api";

export default async function Card(pet: Pet){
    try{
        const petObject = await fetchPetById(pet.reference_image_id)
        if (!petObject) return <p className="text-center text-[#FAC05E] text-lg">pet unavailable</p>;
        console.log(petObject.breeds);
        return (
            <div className={styles.container}>
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
                            <h2>{pet.name}</h2>
                            <Link  href={`/breeds/${pet.breed_group}`} className={styles.breedGroup}>{pet.breed_group}</Link>
                            <p>Life Span: {pet.life_span}</p>
                        </span>

                    ))
                }
                <span className={styles.actionBox}>
                    <Link href={`pets/${petObject.id}`}>Learn More</Link>
                </span>

            </div>
        )

    } catch (error) {
        console.error("Error fetching featured pet:", error);
        return <p className="text-center text-red-400">Failed to load pet.</p>;

    }


}