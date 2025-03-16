import Featured from "@/components/featured/Featured";
import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import {fetchFeaturedPet, fetchPets} from "@/lib/api";
import {FeaturedProp} from "@/types/pets";

export default async function FeaturedPage() {
    try{
        const pets = await fetchPets(0,10)
        const featured: FeaturedProp = await fetchFeaturedPet(pets);
        if (!featured) return <p className="text-center text-[#FAC05E] text-lg">featured pet unavailable</p>;

        return (
            <Suspense fallback={<Loading />}>
                <Featured featured={featured} />
            </Suspense>
        )
    }catch (error){
        console.error("Error fetching featured pet:", error);
        return <p className="text-center text-red-400">Failed to load pet.</p>;


    }

}