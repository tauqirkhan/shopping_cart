import styles from "./CheckoutProductCard.module.css";
import PropTypes from "prop-types";

const CheckoutProduct = ({
  productId,
  productImageLink,
  productName,
  productQuantity,
  productPrice,
  checkoutArray,
  setCheckoutArray,
}) => {
  const handleDeleteItem = (deleteProductId) => {
    const newProducts = checkoutArray.filter(
      (product) => product.id !== deleteProductId
    );

    console.log(newProducts);
    setCheckoutArray(newProducts);
  };

  return (
    <div className={styles.card}>
      <div className={styles.information}>
        <div className={styles.imageDiv}>
          <img
            src={productImageLink}
            alt={productName}
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>{productName}</div>
        </div>
      </div>
      <div className={styles.adjustBtns}>{productQuantity}</div>
      <div className={styles.totalAndDelete}>
        <button
          className={styles.delete}
          onClick={() => handleDeleteItem(productId)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
          >
            <title>Delete {productName}</title>
            <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
          </svg>
        </button>
        <div className={styles.total}>${productPrice * productQuantity}</div>
      </div>
    </div>
  );
};

CheckoutProduct.propTypes = {
  productId: PropTypes.number.isRequired,
  productImageLink: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired,
  productPrice: PropTypes.number.isRequired,
  checkoutArray: PropTypes.array.isRequired,
  setCheckoutArray: PropTypes.array.isRequired,
};

export default CheckoutProduct;
