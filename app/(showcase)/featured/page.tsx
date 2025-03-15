import Featured from "@/components/featured/Featured";
import {Suspense} from "react";
import Loading from "@/components/loader/Loading";

export default function FeaturedPage() {
    return (
        <Suspense fallback={<Loading />}>
            <Featured/>
        </Suspense>
    )
}