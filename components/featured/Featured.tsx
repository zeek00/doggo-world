// import {fetchFeaturedPet, fetchPets} from "@/lib/api";
import styles from './Featured.module.css'
import Image from "next/image";
import {Breed, FeaturedProp} from "@/types/pets";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import {montserrat} from "@/public/fonts/fonts";


const Featured = async ({featured}: { featured: FeaturedProp })=>{

        return (
            <div className={styles.mobile}>
                <div className={styles.container}>

                    <span className={styles.imageBox}>
                        <Image
                            src={featured.url}
                            alt={'pet image'}
                            width={featured.width}
                            height={featured.height}
                            className={styles.image}
                            priority
                        />
                    </span>

                    {featured.breeds.map((pet: Breed) => (
                        <span key={pet.id} className={styles.detailsBox}>
                             <span className={styles.col1}>
                                <h1>{pet.name}</h1>
                                <Link className={montserrat.className} href={`/breeds/${pet.breed_group}`}>{`(${pet.breed_group})`}</Link>
                             </span>

                            <span className={`${styles.col2} ${montserrat.className}`}>
                                <div className={styles.weight}>
                                    <h3>Weight</h3>
                                    <p>imperial: {pet.weight.imperial} metric: {pet.weight.metric}</p>
                                </div>
                                <div className={styles.lifeSpan}>
                                    <h3>Life span</h3>
                                    <p>{pet.life_span}</p>
                                </div>
                                <div className={styles.height}>
                                    <h3>Height</h3>
                                    <p>imperial: {pet.height.imperial} metric: {pet.height.metric}</p>
                                </div>
                            </span>

                            <p className={`${montserrat.className} ${styles.temperament}`}> <span>Temperament:</span><br/> {pet.temperament}</p>

                            <span className={`${styles.actions} ${montserrat.className}`}>
                                <span className={styles.likeIcon}>
                                    <FaHeart/>
                                </span>
                                <Link className={styles.actionLink} href="/pets" > Explore </Link>

                            </span>



                        </span>
                    ))}
                </div>
            </div>
        );



}

export default Featured;