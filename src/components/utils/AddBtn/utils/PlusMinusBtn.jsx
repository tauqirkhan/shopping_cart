import styles from "./PlusMinusBtn.module.css";

export const PlusMinusBtn = ({ quantity, setQuantity }) => {
  const handleAddQuantity = () => {
    setQuantity((prevValue) => prevValue + 1);
  };

  const handleSubtractQuantity = () => {
    setQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
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
      <p>{quantity}</p>
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
