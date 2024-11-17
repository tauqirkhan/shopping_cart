import useData from "./components/utils/hook";

const App = () => {
  const data = useData("https://fakestoreapi.com/products");
  console.log("returned data", data);

  return;
};

export default App;
