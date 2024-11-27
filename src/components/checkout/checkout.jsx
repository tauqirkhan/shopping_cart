import SharedStateContext from "../SharedStateContext";
import { useContext } from "react";
import Header from "../utils/header/header";
import styles from "./checkout.module.css";
import Billing from "../utils/billing/Billing";
import CheckoutProduct from "../utils/checkoutProduct/CheckoutProduct";

const Checkout = () => {
  const { checkoutArray, setCheckoutArray } = useContext(SharedStateContext);

  const totalProductPrice = checkoutArray.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.checkoutProducts}>
          <CheckoutProduct />
          <CheckoutProduct />
        </section>
        <Billing totalProductPrice={totalProductPrice} />
      </main>
    </div>
  );
};

export default Checkout;
