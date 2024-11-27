import styles from "./billing.module.css";

const Billing = ({ totalProductPrice }) => {
  const deliveryFees =
    totalProductPrice > 100 || totalProductPrice == 0 ? 0 : 10;
  const totalPrice = (totalProductPrice + deliveryFees).toFixed(2);

  return (
    <section className={styles.billing}>
      <div className={styles.head}>
        <h2 className={styles.heading}>Billing</h2>
        <h1 className={styles.headingPrice}>${totalPrice}</h1>
      </div>
      <div className={styles.description}>
        <div className={styles.totalPrice}>
          <p>Product Price</p>
          <p>${totalProductPrice}</p>
        </div>
        <div className={styles.fees}>
          <p>Delivery Charge</p>
          <p>{deliveryFees === 0 ? "Free above $100" : `$${deliveryFees}`}</p>
        </div>
      </div>
      <div className={styles.checkout}>
        <div className={styles.totalAmount}>
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
        <button className={styles.payBtn}>Order & Pay</button>
      </div>
    </section>
  );
};

export default Billing;
