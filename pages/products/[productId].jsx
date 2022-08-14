import React from "react";
import Layout from "../../layout";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import { Pagination } from "antd";
import useSWR from "swr";
import { useRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, InputField } from "../../reusables";

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
  console.log(data);
  const [quantity, setQuantity] = React.useState(1);
  return (
    <Layout
      title="Product Details"
      content={
        <Container>
          {/* {isLoading &&
            Array.from({ length: 6 }, (index) => {
              return <ProductCardSkeleton key={index} />;
            })}
          {isError && <h1>SOMETHING WENT WRONG</h1>} */}
          <div className="first_row">
            <ImageLoader
              src="/assets/productImage.jpeg"
              effect="blur"
              alt="Product"
            />
            <div className="details">
              <h1>Blaze Shoes</h1>
              <div className="amount">$500.55</div>
              <p>
                Find work that truly matters to you and your life will change.
                Forget about your traditional recruitment and searching for job.
                Do what you love. You need to start now, because your dream will
                follow your passion for art and design. We are small group of
                passionate designers and architects…Find work that truly matters
                to you and your life will change. Forget about your traditional
                recruitment and searching for job. Do what you love. You need to
                start now, because your dream will follow your passion for art
                and design. We are small group of passionate designers and
                architects
              </p>
              <div className="flex">
                <InputField inputType="number" placeholder={"Qty"} />
                <Button text="Add to Cart" primary />
              </div>
              <div className="others">
                <b>SKU: </b>
                RElax2736798
              </div>
              <div className="others">
                <b>Category: </b>
                Accessories, All Product, New Arrivals
              </div>
            </div>
          </div>
          <div className="second_row">
            <h3>Description</h3>
            <hr />
            <br />
            <h2>Description</h2>
            <p>
              {" "}
              Find work that truly matters to you and your life will change.
              Forget about your traditional recruitment and searching for job.
              Do what you love. You need to start now, because your dream will
              follow your passion for art and design. We are small group of
              passionate designers and architects…Find work that truly matters
              to you and your life will change. Forget about your traditional
              recruitment and searching for job. Do what you love. You need to
              start now, because your dream will follow your passion for art and
              design. We are small group of passionate designers and architects
            </p>
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

  hr {
    margin: 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid #0000004a;
  }

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

    h1 {
      font-size: 2em;
      font-weight: bold;
    }

    .others {
      font-size: 1.2em;
      font-weight: 200;
    }

    .flex {
      display: flex;
      gap: 1rem;
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
`;
