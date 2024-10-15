import styles from './shopping.module.css';

export default function Shopping() {
  return (
    <div className={styles.content_shopping}>
        <h1>SHOPPING</h1>
        <p>Página para lista de compras dos clientes</p>
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
    </div>
  );
}
