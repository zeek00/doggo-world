"use client";
import React, { useState } from "react";
import { PiDogFill } from "react-icons/pi";
import styles from "./Nav.module.css";
import LeftNav from "@/components/Nav/LeftNav";
import { AnimatePresence, motion } from "framer-motion";


export default function Burger() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <span className={styles.burger} onClick={() => setOpen(!open)}>
                <PiDogFill />
            </span>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setOpen(false)}
                    >

                        <div className="relative w-full h-full flex">
                            <LeftNav closeNav={() => setOpen(false)}/>
                        </div>

                    </motion.div>
                    )}

            </AnimatePresence>

        </>
    );
}