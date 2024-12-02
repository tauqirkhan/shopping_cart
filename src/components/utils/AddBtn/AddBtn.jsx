import styles from "./AddBtn.module.css";
import { useContext } from "react";
import { PlusMinusBtn } from "./utils/PlusMinusBtn";
import SharedStateContext from "../../SharedStateContext";
import PropTypes from "prop-types";

export const AddCartBtn = ({
  itemId,
  itemPrice,
  itemImage,
  itemName,
  parentName,
}) => {
  const { checkoutArray, setCheckoutArray } = useContext(SharedStateContext);

  const currentIndex = checkoutArray.findIndex(
    (product) => product.id === itemId
  );

  const handleAddBtn = () => {
    setCheckoutArray(
      addToCart(
        itemId,
        itemPrice,
        itemImage,
        itemName,
        checkoutArray,
        currentIndex
      )
    );
  };

  return (
    <>
      {checkoutArray[currentIndex] &&
      checkoutArray[currentIndex].quantity > 0 ? (
        <PlusMinusBtn currentIndex={currentIndex} parentName={parentName} />
      ) : (
        <button
          className={
            parentName === "productPageBtn"
              ? styles.productPageBtn
              : styles.smallCardBtn
          }
          onClick={handleAddBtn}
        >
          Add to cart
        </button>
      )}
    </>
  );
};

AddCartBtn.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string,
  parentName: PropTypes.string,
};

AddCartBtn.defaultProps = {
  parentName: "smallCardBtn",
};

function addToCart(
  itemId,
  itemPrice,
  itemImage,
  itemName,
  checkoutArray,
  currentIndex
) {
  const cloneObject = [...checkoutArray];
  if (checkoutArray[currentIndex]) {
    cloneObject[currentIndex].quantity = cloneObject[currentIndex].quantity + 1;
  } else {
    cloneObject.push({
      id: itemId,
      quantity: 1,
      price: itemPrice,
      image: itemImage,
      name: itemName,
    });
  }
  return cloneObject;
}
