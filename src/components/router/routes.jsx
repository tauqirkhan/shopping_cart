import Home from "../home/home";
import Error from "../errorPage/Error";
import Shop from "../shop/shop";
import Checkout from "../checkout/checkout";
import Product from "../product/product";

const routes = [
  {
    path: "/",
    element: <Home />,
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
    path: "product/:id",
    element: <Product />,
  },
];

export default routes;
