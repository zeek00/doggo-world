import styles from "@/components/Pet/Pet.module.css";
import Card from "@/components/ui/Card/Card";
import {fetchPets} from "@/lib/api";
import {getPetsByGroup} from "@/lib/utils";
import {Suspense} from "react";
import Loading from "@/components/loader/Loading";

type PageProps = {
    params: Promise<{group: string}>;
}

export default async function PetGroupPage({params} : PageProps) {
    const {group} = await params;
    try{
        const pets = await fetchPets();
        const petGroups = await getPetsByGroup(group, pets)
        if (!petGroups) return <p className="text-center text-[#FAC05E] text-lg">pet group unavailable</p>;

        return (
            <Suspense fallback={<Loading />}>
                <div className={styles.container}>
                    <h1>{group}</h1>
                    <div className={styles.card}>
                        {petGroups.map((pet) => (
                            <span key={pet.id} >
                                <Card pet={pet} path={'breeds'}/>

                            </span>
                        ))}
                    </div>
                </div>
            </Suspense>

        );
    }catch(error){
        console.error("Error fetching  pet group:", error);
        return <p className="text-center text-red-400">Failed to load pet group.</p>;

    }


}