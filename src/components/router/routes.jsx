import App from "../../App";
import Error from "../errorPage/Error";
import Shop from "../shop/shop";
import Checkout from "../checkout/checkout";
import Product from "../product/product";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "product:name",
    element: <Product />,
  },
];

export default routes;
