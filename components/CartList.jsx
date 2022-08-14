/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { InputField } from "../reusables";

const CartList = () => {
  return (
    <Container>
      <div className="web">
        <div className="title">1.</div>
        <div className="title">Design and Relax</div>
        <img src="/assets/productImage.jpeg" alt="Product" />
        <div className="amount">$599.00</div>
        <InputField inputType={"number"} />
        <div className="subtotal">$599.00</div>
        <FaTimesCircle className="close-btn" />
      </div>
      <div className="mobile">
        <img src="/assets/productImage.jpeg" alt="Product" />
        <div className="details">
          <div className="title">
            <b>Design and Relax</b>
          </div>
          <div className="flex">

          <div className="qty">
            Quantity: <b>1</b>
          </div>
          <div className="amount">
            Subtotal: <b>$599.00</b>
          </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartList;

const Container = styled.div`
  font-weight: 300;
  font-size: 1.1rem;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }

  .mobile {
    padding: 0.5rem;
    @media screen and (min-width: 426px) {
      display: none;
    }
    display: flex;
    gap: 1rem;

    img {
      width: 80px;
      height: 40px;
      object-fit: fill;
    }

    .qty,
    .amount {
      font-size: 0.7em;
    }
  }

  .web {
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 0.5fr;
    align-items: center;

    @media screen and (max-width: 425px) {
      display: none;
    }
  }

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
