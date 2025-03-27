import {Suspense} from "react";
import Loading from "@/components/loader/Loading";
import AllPets from "@/components/Pet/AllPets";

type PageProps = {
    searchParams: Promise<{page: string}>;
}
export default async function Page({searchParams} : PageProps ) {
    const {page} = await searchParams;

    return (
        <Suspense fallback={<Loading/>}>
            <AllPets page={page} />
        </Suspense>
    );
}