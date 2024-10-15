import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.content_home}>
        <h1>HOME</h1>
        <p>Bem Vindo "USER_NAME"</p>
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
    </div>
  );
}
