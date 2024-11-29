import { useParams } from "react-router-dom";
import useData from "../utils/hook";
import Header from "../utils/header/header";
import styles from "./product.module.css";
import { AddCartBtn } from "../utils/AddBtn/AddBtn";

const Product = () => {
  const { id } = useParams();
  const productsArr = useData();

  const product = productsArr.find((product) => product.id === parseInt(id));

  if (product === undefined) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.leftSide}>
          <div className={styles.imageDiv}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
              draggable="false"
            />
          </div>
          <div className={styles.information}>
            <h2 className={styles.about}>Description</h2>
            <p className={styles.description}>{product.description}</p>
          </div>
        </section>
        <section className={styles.rightSide}>
          <h1 className={styles.name}>{product.title}</h1>
          <div className={styles.price}>${product.price}</div>
          <AddCartBtn
            itemId={product.id}
            itemPrice={product.price}
            itemImage={product.image}
            itemName={product.title}
            parentName={"productPageBtn"}
          />
          {/* <button className={styles.addBtn}>Add</button> */}
        </section>
      </main>
    </>
  );
};

export default Product;
