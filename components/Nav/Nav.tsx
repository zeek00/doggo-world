import styles from './Nav.module.css';
import Logo from "@/components/ui/Logo/Logo";
import Button from "@/components/ui/Button/Button";
import Burger from "@/components/Nav/Burger";
import {ButtonProps} from "@/types/props";

const links: ButtonProps[] = [
    {to:'pets', bgColor: 'bg-[var(--yellow-shade)]', hoverColor:'hover:bg-[var(--yellow-shade)]', borderColor:'border-[var(--yellow-shade)]'},
    {to:'breeds', bgColor: 'bg-[var(--peach-shade)]', hoverColor:'hover:bg-[var(--peach-shade)]', borderColor:'border-[var(--peach-shade)]'},
    {to:'about', bgColor: 'bg-[var(--red-shade)]', hoverColor:'hover:bg-[var(--red-shade)]', borderColor:'border-[var(--red-shade)]'},

];

export default function Nav() {



    return (
        <>
            <div className={styles.desktopNav}>

                    <span className={styles.logo}>
                        <Logo/>
                    </span>

                    <span className={styles.btn}>
                       {links.map(
                           (link: ButtonProps) => (
                              <Button key={link.to} type='nav' hoverColor={link.hoverColor} bgColor={link.bgColor} to={link.to}/>
                           ))
                       }
                    </span>

                    <span className={styles.btn}>
                        <Button to='/featured' type='featured'/>
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