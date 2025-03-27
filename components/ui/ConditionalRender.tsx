"use client"
import {usePathname} from "next/navigation";
import SearchForm from "@/components/Search/SearchForm";

const ConditionalRender = ({}) => {
    const pathname = usePathname();

    const prefixes = ['/pets', '/search', '/featured'];

    const matches = prefixes.some(prefix => pathname.startsWith(prefix));

    return (
        <span style={{display: 'flex', justifyContent: 'center', width: '90%', margin: '0 auto'}}>
            {matches ? <SearchForm/> : <></>}
        </span>
    )
}

export default ConditionalRender