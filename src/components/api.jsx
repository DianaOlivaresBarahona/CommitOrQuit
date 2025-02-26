import react from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const WebshopSwr = () => {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return <div></div>;
};

export default WebshopSwr;
