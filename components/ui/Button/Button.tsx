"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";
import styles from './Button.module.css'
import { GiSittingDog } from "react-icons/gi";


import {LinkProps} from "@/types/props";
import {montserrat} from "@/public/fonts/fonts";


export default function Button({type,to,hoverColor, borderColor, bgColor, close} : LinkProps) {
    const pathname = usePathname();

    return (
        <div className={
            ` ${styles.linkContainer}
            ${hoverColor}
            ${pathname.startsWith(`/${to}`) && bgColor }
            `
        }>
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
                    ${montserrat.className}
                      animate__fadeIn
                    `}
                >
                    <span><GiSittingDog /></span>
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