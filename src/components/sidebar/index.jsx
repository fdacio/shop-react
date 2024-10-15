import Link from 'next/link';
import styles from '@/components/sidebar/Sidebar.module.css';


export default function Sidebar() {

    return (
        <div className={styles.container_sidebar}>
            <nav className={styles.container_links}>
                <Link href="/" className={styles.link_menu}>Home</Link>
                <Link href="/products" className={styles.link_menu}>Products</Link>
                <Link href="/customers" className={styles.link_menu}>Customers</Link>
                <Link href="/shopping" className={styles.link_menu}>Shopping</Link>
            </nav>
        </div>
    );

}