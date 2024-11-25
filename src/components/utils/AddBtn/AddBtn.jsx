import styles from "./AddBtn.module.css";
import { useState } from "react";
import { PlusMinusBtn } from "./utils/PlusMinusBtn";

export const AddCartBtn = () => {
  const handleAddBtn = () => {
    setProductQuantity((prevValue) => prevValue + 1);
  };

  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <>
      {productQuantity > 0 ? (
        <PlusMinusBtn
          quantity={productQuantity}
          setQuantity={setProductQuantity}
        />
      ) : (
        <button className={styles.addCartBtn} onClick={handleAddBtn}>
          Add to cart
        </button>
      )}
    </>
  );
};
