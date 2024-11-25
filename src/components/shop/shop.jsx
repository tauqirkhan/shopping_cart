import Header from "../utils/header/header";
import useData from "../utils/hook";
import Products from "../utils/products/products";
import styles from "./shop.module.css";
import { useState } from "react";

const Shop = () => {
  const categories = useData("https://fakestoreapi.com/products/categories");
  const [selectedCategory, setSelectedCategory] = useState("electronics");

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.categories}>
          {categories.map((category) => {
            return (
              <div
                key={category}
                onClick={() => handleCategory(category)}
                className={`${
                  category === selectedCategory ? styles.active : ""
                } ${styles.category}`}
              >
                {category}
              </div>
            );
          })}
        </section>
        <section className={styles.products}>
          <Products key={selectedCategory} categoryName={selectedCategory} />
        </section>
      </main>
    </div>
  );
};

export default Shop;
