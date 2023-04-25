import React from "react";
import Layout from "../../layout";
import ProductCard from "../../components/ProductCard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import { Pagination } from "antd";
import useSWR from "swr";
import { Container } from "./index";

export default function Others() {
  const { data, isLoading, isError } = useFetch();
  const [all, setAll] = React.useState(1);
  return (
    <Layout
      title="Products - Others"
      content={
        <>
          <h1>OTHERS</h1>
          {data && <p>Showing all {data?.length} results</p>}
          <Container>
            {isLoading &&
              Array.from({ length: 8 }, (index) => {
                return <ProductCardSkeleton key={index} />;
              })}
            {isError &&
              Array.from({ length: 8 }, (index) => {
                return <ProductCardSkeleton key={index} />;
              })}
            {data &&
              data
                ?.slice((all - 1) * 12, (all - 1) * 12 + 12)
                .map((product, index) => {
                  return <ProductCard key={index} {...product} />;
                })}
          </Container>
          <br />
          {data && (
            <Pagination
              className="pagination_style"
              total={data?.length}
              pageSize={12}
              current={all}
              showSizeChanger={false}
              onChange={(all) => {
                setAll(all);
              }}
            />
          )}
        </>
      }
    />
  );
}

const useFetch = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/ecommerce/product/all?category=Others`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

