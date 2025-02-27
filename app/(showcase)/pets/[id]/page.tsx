import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import Pet from "@/components/Pet/Pet"

type PageProps = {
    params: {id: string};
}

export default function PetPage({params} : PageProps) {
    const {id} = params;



    return (
        <Suspense fallback={<Loading />}>
            <Pet id={id} />
        </Suspense>
    );


}