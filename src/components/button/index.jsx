
import styles from '@/components/button/Button.module.css';


export default function Button(props) {

    return (
        <button className={styles.button} onClick={props.onClick}>{props.value}</button>
    );

}