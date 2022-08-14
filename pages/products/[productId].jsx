import React from "react";
import Layout from "../../layout";
import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, InputField } from "../../reusables";
import Skeleton from "react-loading-skeleton";

export default function SingleProduct() {
  const router = useRouter();
  const { productId } = router.query;
  const useFetch = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR(
      `https://api.escuelajs.co/api/v1/products/${productId}`,
      fetcher
    );
    return {
      data,
      isLoading: !error && !data,
      isError: error,
    };
  };
  const { data, isLoading, isError } = useFetch();
  const [quantity, setQuantity] = React.useState(1);
  return (
    <Layout
      title="Product Details"
      content={
        <Container>
          {isLoading && (
            <>
              <div className="first_row">
                <Skeleton width={"100%"} height="500px" />
                <div className="details">
                  <Skeleton width={"100%"} height="50px" />
                  <Skeleton width={"100%"} height="40px" />
                  <Skeleton width={"100%"} height="120px" />
                  <div className="flex">
                    <Skeleton width={"100px"} height="30px" />
                    <Skeleton width={"100px"} height="30px" />
                  </div>
                  <div className="others">
                    <Skeleton width={"400px"} height="30px" />
                  </div>
                  <div className="others">
                    <Skeleton width={"400px"} height="30px" />
                  </div>
                </div>
              </div>
              <div className="second_row">
                <Skeleton width={"100%"} height="30px" />
                <hr />
                <br />
                <Skeleton width={"100%"} height="30px" />
                <Skeleton width={"100%"} height="50px" />
              </div>
            </>
          )}
          {isError && <h1>SOMETHING WENT WRONG</h1>}
          <div className="first_row">
            <ImageLoader
              src={"/assets/productImage.jpeg"}
              effect="blur"
              alt="Product"
            />
            <div className="details">
              <h1>{data?.title}</h1>
              <div className="amount">${data?.price?.toLocaleString()}</div>
              <p>{data?.description}</p>
              <div className="others">
                <b>SKU: </b>
                {data?.title}
                {data?.id}
              </div>
              <div className="others">
                <b>Category: </b>
                {data?.category?.name}
              </div>
              <br />
              <div className="flex">
                <InputField inputType="number" placeholder={"Qty"} />
                <Button text="Add to Cart" primary />
              </div>
            </div>
          </div>
          <div className="second_row">
            <h3>Description</h3>
            <hr />
            <br />
            <h2>Description</h2>
            <p>{data?.description}</p>
          </div>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .second_row {
    h3 {
      border-radius: 5px 5px 0 0;
      width: max-content;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-top: 1px solid #0000004a;
      border-left: 1px solid #0000004a;
      border-right: 1px solid #0000004a;
    }
  }

  p {
    font-weight: 200;
    font-size: 1rem;
    text-align: justify;
  }

  .first_row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 2em;
      font-weight: bold;
    }

    .others {
      font-size: 1.2em;
      font-weight: 200;
    }

    .amount {
      font-size: 28px;
      font-weight: 300;
      color: #333;
      letter-spacing: 2px;
      line-height: 100%;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

const ImageLoader = styled(LazyLoadImage)`
  width: 100%;
  height: 500px !important;
  object-fit: fill !important;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    height: 400px !important;
  }

  @media screen and (max-width: 425px) {
    height: 300px !important;
  }
`;
