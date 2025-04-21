'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './error.module.css'
import { FaShieldDog } from "react-icons/fa6";

export default function PageError({ error } : Readonly<{
    error: Error & { digest?: string }
}>) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const router = useRouter()

    const goBack = () => {
        router.back()
    }
    return (
        <div className={styles.container}>
            <span className={styles.box}></span>
            <span><FaShieldDog/></span>
            <h2>Oops! This pup ran off...</h2>
            <p>Looks like the page you're sniffing for doesn't exist. Try heading back to the main kennel !</p>

            <button onClick={goBack}>Return to Previous</button>
        </div>
    )
}
