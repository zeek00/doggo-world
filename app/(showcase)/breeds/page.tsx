import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import Breeds from "@/components/Breeds/Breeds";

export default function BreedsPage(){
    return  (
        <Suspense fallback={<Loading />}>
            <Breeds />
        </Suspense>
    )
}