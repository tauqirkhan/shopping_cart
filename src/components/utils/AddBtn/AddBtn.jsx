import styles from "./AddBtn.module.css";
import { useContext } from "react";
import { PlusMinusBtn } from "./utils/PlusMinusBtn";
import SharedStateContext from "../../SharedStateContext";

export const AddCartBtn = ({ itemId, itemPrice }) => {
  const { checkoutArray, setCheckoutArray } = useContext(SharedStateContext);

  const currentIndex = checkoutArray.findIndex(
    (product) => product.id === itemId
  );

  const handleAddBtn = () => {
    setCheckoutArray(addToCart(itemId, itemPrice, checkoutArray, currentIndex));
  };

  return (
    <>
      {checkoutArray[currentIndex] &&
      checkoutArray[currentIndex].quantity > 0 ? (
        <PlusMinusBtn
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

function addToCart(itemId, itemPrice, checkoutArray, currentIndex) {
  const cloneObject = [...checkoutArray];
  if (checkoutArray[currentIndex]) {
    cloneObject[currentIndex].quantity = cloneObject[currentIndex].quantity + 1;
  } else {
    cloneObject.push({ id: itemId, quantity: 1, price: itemPrice });
  }
  return cloneObject;
}
