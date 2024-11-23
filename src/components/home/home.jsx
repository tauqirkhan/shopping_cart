import styles from "./home.module.css";
import Header from "../utils/header/header";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.leftSide}>
          Groceries at your doorstep
        </section>
        <section className={styles.rightSide}>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
