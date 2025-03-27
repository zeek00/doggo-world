import {FaSearch} from "react-icons/fa";
import styles from "./Search.module.css"
import {getQuery} from "@/components/Search/actions";

export default function SearchForm(){
    return (
        <form className={styles.container} action={getQuery}>
            <input type="search" name="query" className={styles.search} required placeholder={'search..'}  />
            <button type="submit" className={styles.searchBtn}>
                <FaSearch className={styles.icon}/>
            </button>
        </form>
    )
}