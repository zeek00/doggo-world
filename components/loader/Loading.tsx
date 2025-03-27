import { FaDog } from "react-icons/fa6";
import styles from './Loading.module.css'



const Loading = () => {
    return (
        <span className={styles.loader}>
            <FaDog className={styles.colorAnimate} />
        </span>
    );
}


export default Loading;