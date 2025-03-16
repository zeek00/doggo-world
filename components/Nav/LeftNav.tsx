"use client"
import { motion } from "framer-motion";
import styles from './Nav.module.css'
import {ButtonProps} from "@/types/props";
import Button from "@/components/ui/Button/Button";

const navVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
};

const links: ButtonProps[] = [
    {to:'featured', hoverColor:'hover:bg-[var(--yellow-shade)]', borderColor:'border-[var(--yellow-shade)]'},
    {to:'about', hoverColor:'hover:bg-[var(--peach-shade)]', borderColor:'border-[var(--peach-shade)]'},
    {to:'pets', hoverColor:'hover:bg-[var(--green-shade)]', borderColor:'border-[var(--green-shade)]'},
    {to:'breeds', hoverColor:'hover:bg-[var(--red-shade)]', borderColor:'border-[var(--red-shade)]'},
];

export default function LeftNav({closeNavAction}: { closeNavAction: () => void }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className={`${styles.leftNav} fixed top-10 left-0 w-64 text-white z-60 shadow-lg`}
            onClick={(e) => e.stopPropagation()}
        >

            <span className={styles.btnLinks}>

                   {links.map(
                       (link: ButtonProps, index) => (
                           <motion.div
                               key={link.to}
                               initial={{opacity: 0, x: -20}}
                               animate={{opacity: 1, x: 0}}
                               transition={{delay: index * 0.1, duration: 0.3}}
                           >
                               <Button key={link.to} type='lNav' to={link.to} hoverColor={link.hoverColor} close={closeNavAction}
                                       borderColor={link.borderColor}/>
                           </motion.div>
                       ))
                   }
            </span>
        </motion.div>
    )
}