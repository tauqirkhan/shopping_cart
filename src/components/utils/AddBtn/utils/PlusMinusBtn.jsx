import styles from "./PlusMinusBtn.module.css";
import { useContext } from "react";
import SharedStateContext from "../../../SharedStateContext";

export const PlusMinusBtn = ({ currentIndex }) => {
  const { checkoutObject, setCheckoutObject } = useContext(SharedStateContext);

  const handleAddQuantity = () => {
    // setQuantity((prevValue) => prevValue + 1);
    setCheckoutObject(increaseQuantity(checkoutObject, currentIndex));
  };

  const handleSubtractQuantity = () => {
    // setQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    setCheckoutObject(decreaseQuantity(checkoutObject, currentIndex));
  };

  return (
    <div className={styles.plusMinusDiv}>
      <button className={styles.minusBtn} onClick={handleSubtractQuantity}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={15}
          height={15}
          fill="var(--text-on-bg)"
        >
          <title>minus</title>
          <path
            d="M19,13H5V11H19V13Z"
            stroke="var(--text-on-bg)"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <p>{checkoutObject[currentIndex].quantity}</p>
      <button className={styles.plusBtn} onClick={handleAddQuantity}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={15}
          height={15}
        >
          <title>plus</title>
          <path
            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            stroke="var(--text-on-bg)"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    </div>
  );
};

function increaseQuantity(checkoutObject, currentIndex) {
  const cloneObject = [...checkoutObject];

  // const index = cloneObject.findIndex((product) => product.id === itemId);
  cloneObject[currentIndex].quantity = cloneObject[currentIndex].quantity + 1;

  return cloneObject;
}

function decreaseQuantity(checkoutObject, currentIndex) {
  const cloneObject = [...checkoutObject];

  // const index = cloneObject.findIndex((product) => product.id === itemId);
  if (cloneObject[currentIndex].quantity > 0) {
    cloneObject[currentIndex].quantity = cloneObject[currentIndex].quantity - 1;
  }

  return cloneObject;
}
