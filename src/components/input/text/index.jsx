
import styles from '@/components/input/Input.module.css';


export default function InputText(props) {

    const funcSet = props.funcSet;

    return (
        <div className={styles.container_input}>
            <label>{props.label}</label>
            <input className={styles.input} type="text" onChange={(event) => funcSet(event.target.value)} value={props.value || ''}/>
        </div>
    );

}



