import React from "react";
import Layout from "../../layout";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import { Pagination } from "antd";
import useSWR from "swr";

export default function AllProducts() {
  const { data, isLoading, isError } = useFetch();
  const [all, setAll] = React.useState(1);
  return (
    <Layout
      title="Products"
      content={
        <>
          <h1>ALL PRODUCTS</h1>
          {data && <p>Showing all {data?.length} results</p>}
          <Container>
            {isLoading &&
              Array.from({ length: 6 }, (index) => {
                return <ProductCardSkeleton key={index} />;
              })}
            {isError &&
              Array.from({ length: 6 }, (index) => {
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
    `https://api.escuelajs.co/api/v1/products`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
