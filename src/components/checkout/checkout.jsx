import SharedStateContext from "../SharedStateContext";
import { useContext } from "react";
import Header from "../utils/header/header";
import styles from "./checkout.module.css";
import Billing from "../utils/billing/Billing";
import CheckoutProductCard from "../utils/checkoutProduct/CheckoutProductCard";

const Checkout = () => {
  const { checkoutArray, setCheckoutArray } = useContext(SharedStateContext);

  const totalProductPrice = checkoutArray.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const roundTotalProductPrice = parseFloat(totalProductPrice.toFixed(2));

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.checkoutProducts}>
          {checkoutArray.length > 0 &&
            checkoutArray.map((product) => {
              if (product.quantity > 0) {
                return (
                  <CheckoutProductCard
                    key={product.id}
                    productImageLink={product.image}
                    productName={product.name}
                    productQuantity={product.quantity}
                    productPrice={product.price}
                    checkoutArray={checkoutArray}
                    setCheckoutArray={setCheckoutArray}
                    productId={product.id}
                  />
                );
              }
            })}
        </section>
        <Billing totalProductPrice={roundTotalProductPrice} />
      </main>
    </div>
  );
};

export default Checkout;
