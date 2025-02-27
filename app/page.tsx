import {preload} from "@/lib/api";
import Loading from "@/components/loader/Loading";

export default async function Home() {
    preload();

    return (
        <div className='flex justify-center align-items-center mt-20'>
            Hola
            <Loading/>
        </div>
    );
}
