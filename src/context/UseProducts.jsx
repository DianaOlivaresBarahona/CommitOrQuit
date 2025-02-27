import react from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UseProducts = () => {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  return { data, error, isLoading };
};
export default UseProducts;
