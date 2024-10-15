import styles from './customers.module.css';

export default function Customers() {
  return (
    <div className={styles.content_customers}>
        <h1>CUSTOMERS</h1>
        <p>Pagina para lista de clientes</p>
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
    </div>
  );
}