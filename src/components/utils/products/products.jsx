import useData from "../hook";
import styles from "./products.module.css";
import { AddCartBtn } from "../AddBtn/AddBtn";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Products = ({ categoryName }) => {
  const productsArr = useData(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );

  if (!productsArr.length > 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {/* <h1 className={styles.categoryName}>{`Order ${categoryName} online`}</h1> */}

      {productsArr.map((product) => {
        return (
          <div className={styles.card} key={product.id}>
            <Link className={styles.linkCard} to={`/product/${product.id}`}>
              <div className={styles.imageDiv}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.img}
                  draggable="false"
                />
              </div>
              <div className={styles.information}>
                <div className={styles.mainInfo}>
                  <h2 className={styles.title}>{product.title}</h2>
                  <div className={styles.rating}>
                    <div className={styles.star}>
                      <p>{product.rating.rate}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={15}
                        height={15}
                        fill={"white"}
                      >
                        <title>star</title>
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                    </div>
                    <p>{product.rating.count} Ratings</p>
                  </div>
                </div>
                <div className={styles.price}>${product.price}</div>
              </div>
            </Link>
            <AddCartBtn
              itemId={product.id}
              itemPrice={product.price}
              itemImage={product.image}
              itemName={product.title}
            />
          </div>
        );
      })}
    </>
  );
};

Products.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Products;
