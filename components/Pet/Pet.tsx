import {fetchPetById} from "@/lib/api";
import {Breed} from "@/types/pets";
import Image from "next/image";
import styles from "./Pet.module.css"


const Pet = async( {id} : {id: string}) => {

    const pet = await fetchPetById(id)

    return (
        <div>
            <div className={styles.imageBox}>
                <Image
                    src={pet.url}
                    alt={'pet picture'}
                    width={pet.width}
                    height={pet.height}
                    priority={true}
                />

            </div>
            {pet.breeds.map((pet: Breed) => (
                 <p key={pet.id}>{pet.name}</p>
            ))}

        </div>
    )

}

export default Pet