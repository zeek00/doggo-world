import Link from "next/link";
import styles from './Button.module.css'
import { PiDogFill } from "react-icons/pi";
import {LinkProps} from "@/types/props"


export default function Button({type,to,hoverColor, borderColor, close} : LinkProps) {
    return (
        <div className={`${hoverColor} ${styles.linkContainer}`}>
            {
                type === 'nav' &&
                <span className={styles.links}>
                    <Link href={`/${to}`}>{to}</Link>
                </span>
            }

            {
                type === 'featured' &&
                <span className={` 
                   
                    ${styles.featureBtn}
                    border rounded-md
                    `}
                >
                    <span><PiDogFill /></span>
                    <Link href={to}>Featured</Link>
                </span>

            }

            {
                type === 'lNav' &&
                <span className={` ${styles.lNav} ${hoverColor} border-l-4 ${borderColor} `}>
                    <Link href={`/${to}`}  onClick={close}>{to}</Link>
                </span>
            }



        </div>
    )
}