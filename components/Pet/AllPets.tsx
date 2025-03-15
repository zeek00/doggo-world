
import {fetchPets} from "@/lib/api";
import styles from  './Pet.module.css'
import Card from "@/components/ui/Card/Card";
import Link from "next/link";


const AllPets = async({page}: { page: string }) => {
    try{
        const pages = Number(page) || 1; // Get page number from URL
        const allPets = await fetchPets(pages, 20); //

        return (
            <div className={styles.all}>
                <div className={styles.card}>
                    {allPets.map((pet) => (
                        <Card key={pet.id} {...pet} />
                    ))}
                </div>


                {/* Pagination Links */}

                <div className={styles.pagination}>
                    {pages > 1 && (
                        <Link href={`?page=${pages - 1}`}>
                            <button>{'<'}</button>
                        </Link>
                    )}
                    {allPets.length === 19 && (
                        <Link href={`?page=${pages + 1}`}>
                            <button> {'>'} </button>
                        </Link>
                    )}
                </div>
            </div>
        )

    } catch (error) {
        console.error("Error fetching featured pet:", error);
    }


}

export default AllPets