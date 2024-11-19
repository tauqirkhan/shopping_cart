import { useParams } from "react-router-dom";

const Product = () => {
  const { name } = useParams();

  return <>{name === "productId" ? <div>Hello</div> : <div>Nothing </div>}</>;
};

export default Product;
