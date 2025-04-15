import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return (
        <p style={{padding: '0.5rem 0'}}>
            <Link href="/">
                <Image
                    src="/svg/logo.svg"
                    alt="logo"
                    width={50}
                    height={50}
                    priority
                />
            </Link>
        </p>
    )
}