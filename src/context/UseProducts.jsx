import react from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useProducts = () => {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  console.log(data);

  return { data, error, isLoading };
};

export default useProducts;
