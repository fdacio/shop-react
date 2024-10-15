import styles from '@/components/input/Input.module.css';

export default function InputPassword(props) {

    const funcSet = props.funcSet;

    return (
        <div className={styles.container_input}>
            <label>{props.label}</label>
            <input className={styles.input} type="password" onChange={(event) => funcSet(event.target.value)} value={props.value || ''}/>
        </div>
    );

}
