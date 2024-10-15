
'use client'
import { Children } from 'react';
import styles from '@/components/form/Form.module.css';

export default function Form({ children }, props) {

    return (
        <form className={styles.container_form} id={props.id}>
            {Children.map(children, child => 
                <div>
                    {child}
                </div>
            )}
        </form>
    );

}