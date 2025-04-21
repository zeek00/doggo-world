import {preload} from "@/lib/api";
import Hero from "@/components/Hero/Hero";

export default async function Home() {

    preload();

    return (
        <div className={`flex justify-center align-items-center `}>
            <Hero/>
        </div>
    );
}
