import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEY } from "../services/constants";

const useGetTopProductsQuery = () => {
  return useQuery(
    [QUERY_KEY.TOP_PRODUCTS],
    async () => {
      const response = await axios.get(`${baseURL}/ecommerce/product/popular`);
      return response.data.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export { useGetTopProductsQuery };
