/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { useRouter } from "next/router";

const ProductCard = (props) => {
  const router = useRouter();
  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/products/${id}`);
  };
  return (
    <Container onClick={(e) => handleClick(e, props?.id)} key={props?.id}>
      <ImageLoader src={props?.images[0]} alt="" effect="blur" />
      <h3>{props?.title}</h3>
      <h3>${props?.price?.toLocaleString()}</h3>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 300px;
    transition: all 0.3s ease-in-out;

    :hover {
      opacity: 0.9;
    }
  }

  h3 {
    font-weight: 200;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`;

const ImageLoader = styled(LazyLoadImage)`
  width: 100%;
  height: 300px; !important;
  object-fit: fill !important;
  transition: all 0.3s ease-in-out;
`;
