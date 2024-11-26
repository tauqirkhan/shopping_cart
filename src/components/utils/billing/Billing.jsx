import styles from "./billing.module.css";

const Billing = () => {
  return (
    <section className={styles.billing}>
      <div className={styles.head}>
        <h2 className={styles.heading}>Billing</h2>
        <h1 className={styles.headingPrice}>$105</h1>
      </div>
      <div className={styles.description}>
        <div className={styles.totalPrice}>
          <p>Product Price</p>
          <p>$100</p>
        </div>
        <div className={styles.fees}>
          <p>Delivery fees</p>
          <p>$5</p>
        </div>
      </div>
      <div className={styles.checkout}>
        <div className={styles.totalAmount}>
          <p>Total</p>
          <p>$105</p>
        </div>
        <button className={styles.payBtn}>Order & Pay</button>
      </div>
    </section>
  );
};

export default Billing;
