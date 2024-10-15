import Link from 'next/link';
import styles from '@/components/header/Header.module.css';

export default function Header() {

    return (
        <div className={styles.container_header}>
            <h1>Shop</h1>
            <h2>Sistema da Shop Api Rest Spring Boot</h2>
            <Link href="/login" className={styles.link_login}>Login</Link>
        </div>
    );

}