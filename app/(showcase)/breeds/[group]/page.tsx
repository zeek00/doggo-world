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
        console.log(petGroups);
        return (
            <Suspense fallback={<Loading />}>
                <div className={styles.container}>
                    <h1>{group}</h1>
                    <div className={styles.card}>
                        {petGroups.map((pet) => (
                            <Card key={pet.id} {...pet} />
                        ))}
                    </div>
                </div>
            </Suspense>

        );
    }catch(error){

    }


}