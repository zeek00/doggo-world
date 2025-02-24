import { FaDog } from "react-icons/fa6";
import "animate.css/animate.min.css";
import styles from './Loading.module.css'



const Loading = () => {
    return (
        <span className={`animate__animated animate__bounce animate__infinite text-5xl`}>
            <FaDog className={styles.colorAnimate} />
        </span>
    );
}


export default Loading;