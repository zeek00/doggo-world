import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import Pet from "@/components/Pet/Pet"

type PageProps = {
    params: Promise<{id: string}>;
}

export default async function PetPage({params} : PageProps) {
    const {id} = await params;



    return (
        <Suspense fallback={<Loading />}>
            <Pet id={id} />
        </Suspense>
    );


}