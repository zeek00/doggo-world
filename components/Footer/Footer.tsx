import styles from "./Footer.module.css"
import {montserrat} from "@/public/fonts/fonts";


export default function Footer() {

    return (
        <div className={`${styles.footer} ${montserrat.className}`}>
            <p> &copy; 2025 doggo world | designed and developed by Isaac Isewede</p>
        </div>
    );
}