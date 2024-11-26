import styles from "./AddBtn.module.css";
import { useState, useContext } from "react";
import { PlusMinusBtn } from "./utils/PlusMinusBtn";
import SharedStateContext from "../../SharedStateContext";

export const AddCartBtn = ({ itemId, itemPrice }) => {
  // const [productQuantity, setProductQuantity] = useState(0);
  const { checkoutObject, setCheckoutObject } = useContext(SharedStateContext);

  const currentIndex = checkoutObject.findIndex(
    (product) => product.id === itemId
  );

  const handleAddBtn = () => {
    // setProductQuantity((prevValue) => prevValue + 1);
    setCheckoutObject(
      addToCart(itemId, itemPrice, checkoutObject, currentIndex)
    );
  };

  console.log("addBtn: ", checkoutObject);
  return (
    <>
      {checkoutObject[currentIndex] &&
      checkoutObject[currentIndex].quantity > 0 ? (
        <PlusMinusBtn
          // quantity={productQuantity}
          // setQuantity={setProductQuantity}
          itemId={itemId}
          itemPrice={itemPrice}
          currentIndex={currentIndex}
        />
      ) : (
        <button className={styles.addCartBtn} onClick={handleAddBtn}>
          Add to cart
        </button>
      )}
    </>
  );
};

function addToCart(itemId, itemPrice, checkoutObject, currentIndex) {
  const cloneObject = [...checkoutObject];
  if (checkoutObject[currentIndex]) {
    cloneObject[currentIndex].quantity = cloneObject[currentIndex].quantity + 1;
  } else {
    cloneObject.push({ id: itemId, quantity: 1, price: itemPrice });
  }
  return cloneObject;
}
