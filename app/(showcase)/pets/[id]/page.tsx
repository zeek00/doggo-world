import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import {fetchPetById} from "@/lib/api";
import Featured from "@/components/featured/Featured";

type PageProps = {
    params: Promise<{id: string}>;
}

export default async function PetPage({params} : PageProps) {
    const {id} = await params;
    try {
        const petObject = await fetchPetById(id)
        if (!petObject) return <p className="text-center text-[#FAC05E] text-lg">pet unavailable</p>;


        return (
            <Suspense fallback={<Loading/>}>
                <Featured featured={petObject}/>
            </Suspense>
        );
    }catch (error){
        console.error("Error fetching pet id:", error);
        return <p className="text-center text-red-400">Failed to load pet.</p>;
    }

}