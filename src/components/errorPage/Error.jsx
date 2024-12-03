import { Link } from "react-router-dom";
import styles from "./Error.module.css";
import Header from "../utils/header/header";

const Error = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Link to="/">
          This is error page go back to home
          <br /> 🤗
        </Link>
      </main>
    </>
  );
};

export default Error;
