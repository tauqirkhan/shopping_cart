import { useState, useEffect } from "react";
import fetchData from "./fetch";

export default function useData(url = "https://fakestoreapi.com/products") {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchProcessData = async () => {
      try {
        const response1 = await fetchData(url);

        if (!ignore) setData(response1);
      } catch (error) {
        if (!ignore) console.log(error);
      }
    };

    fetchProcessData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}
