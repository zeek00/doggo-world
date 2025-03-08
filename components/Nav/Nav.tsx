import styles from './Nav.module.css';
import Logo from "@/components/ui/Logo/Logo";
import Button from "@/components/ui/Button/Button";
import Burger from "@/components/Nav/Burger";
import {ButtonProps} from "@/types/props";

const links: ButtonProps[] = [
    {to:'about', hoverColor:'hover:bg-[var(--peach-shade)]', borderColor:'border-[var(--peach-shade)]'},
    {to:'pets', hoverColor:'hover:bg-[var(--green-shade)]', borderColor:'border-[var(--green-shade)]'},
    {to:'breeds', hoverColor:'hover:bg-[var(--yellow-shade)]', borderColor:'border-[var(--yellow-shade)]'},
];

export default function Nav() {



    return (
        <>
            <div className={styles.desktopNav}>

                    <span>
                        <Logo/>
                    </span>

                    <span className={styles.btn}>
                       {links.map(
                           (link: ButtonProps) => (
                              <Button key={link.to} type='nav' hoverColor={link.hoverColor} to={link.to}/>
                           ))
                       }
                    </span>

                    <span>
                        <span className={styles.btn}>
                            <Button to='/featured' type='featured'/>
                        </span>

                    </span>
            </div>

            <div className={styles.mobileNav}>

                <Burger />
                <span>
                    <Logo/>
                </span>


            </div>
        </>


    )
}