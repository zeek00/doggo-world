import {fetchQueryResult} from "@/lib/api";
import {Pet} from "@/types/pets";
import Card from "@/components/ui/Card/Card";
import styles from "@/components/Pet/Pet.module.css"
import {Suspense} from "react";
import Loading from "@/components/loader/Loading";

type PageProps = {
    params: Promise<{query: string}>;
}

export default async function SearchQuery({params} : PageProps) {
    const {query} = await params;

    const searchQuery = decodeURIComponent(query);
    if (!searchQuery) {
        return <p>No search query provided.</p>;
    }
    try{
        const response = await fetchQueryResult(searchQuery);


        return (

            <div className={styles.card}>
                {response.length <= 30 &&
                    (response.map((pet: Pet) => (
                            <span key={pet.id}>
                                <Suspense fallback={<Loading/>}>
                                    <Card pet={pet} path={'breeds'}/>
                                </Suspense>
                            </span>
                    )))
                }

                {response.length === 0 && <span style={{color:'black'}}>No results</span>}
            </div>
        );

    }catch(error){
        console.error("Error fetching search results:", error);
    }

}