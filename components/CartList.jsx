/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { InputField } from "../reusables";

const CartList = () => {
  return (
    <Container>
      <div className="title">1.</div>
      <div className="title">Design and Relax</div>
      <img src="/assets/productImage.jpeg" alt="Product" />
      <div className="amount">$599.00</div>
      <InputField inputType={"number"} />
      <div className="subtotal">$599.00</div>
      <FaTimesCircle className="close-btn" />
    </Container>
  );
};

export default CartList;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  padding: 0.5rem 1rem;
  font-weight: 300;
  font-size: 1.1rem;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .close-btn {
    font-size: 1.1rem;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`;
