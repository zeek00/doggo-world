import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import Pet from "@/components/Pet/Pet"

export default async function PetPage({params} : {params: {id: string}}) {
    const {id} = await params;



    return (
        <Suspense fallback={<Loading />}>
            <Pet id={id} />
        </Suspense>
    );


}