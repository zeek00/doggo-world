// noinspection JSFileReferences

import {fetchPets} from "@/lib/api";
import styles from  './Pet.module.css'
import Link from "next/link";


const AllPets = async() => {
    const allPets = await  fetchPets()

    return (
        <div className={styles.all}>
            {allPets.map((pet) => (
                <Link href={`pets/${pet.reference_image_id}`} key={pet.id}>{pet.reference_image_id}</Link>
            ))}

        </div>
    )

}

export default AllPets