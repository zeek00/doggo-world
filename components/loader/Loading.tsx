import { FaDog } from "react-icons/fa6";
import styles from './Loading.module.css'



const Loading = () => {
    return (
        <span className='flex items-center h-screen justify-center text-4xl'>
            <FaDog className={styles.colorAnimate} />
        </span>
    );
}


export default Loading;