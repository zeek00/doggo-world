import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import AllPets from "@/components/Pet/AllPets";


export default function Page() {
    return (
        <Suspense fallback={<Loading/>}>
            <AllPets/>
        </Suspense>
    );
}