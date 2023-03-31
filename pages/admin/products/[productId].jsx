/* eslint-disable @next/next/no-img-element */
import { Select } from "antd";
import React from "react";
import styled from "styled-components";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Button, InputField, TextArea } from "../../../reusables";

const ProductDetails = () => {
  return (
    <DashboardLayout>
      <Container>
        <h1>Product Details</h1> <br />
        <p>
          Below is the information of the selected product. You can edit the
          product by updating the corresponding input fields below.
        </p>
        <hr />
        <div className="details_group">
          <img
            src="https://picsum.photos/640/480?random=3"
            alt="Nike Airforce 1"
          />
          <div className="details">
            <div className="name">
              <p>NAME:</p>
              <h1>
                <b>Nike Airforce 1 Sneakers</b>
              </h1>
            </div>
            <div className="price">
              <p>PRICE:</p>
              <h1>$500.00</h1>
            </div>
            <div className="flex_group">
              <div className="category">
                <p>CATEGORY:</p>
                <h3>Shoes</h3>
              </div>
              <div className="category">
                <p>PRODUCT ID:</p>
                <h3>5</h3>
              </div>
            </div>
            <div className="flex_group">
              <div className="category">
                <p>QUANTITY:</p>
                <h3>100</h3>
              </div>
              <div className="category">
                <p>PRODUCT LINK:</p>
                <a href="http://localhost:3000/products/5">
                  Click here to view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <Form>
          <div className="flex_group">
            <div className="input_group">
              <label htmlFor="">
                Name<span className="astericks">*</span>
              </label>
              <InputField
                full
                placeholder="Name e.g. Nike Airforce 1 Sneakers"
              />
            </div>
            <div className="input_group">
              <label htmlFor="">
                Category<span className="astericks">*</span>
              </label>
              <Select
                defaultValue="shoes"
                options={[
                  { value: "shoes", label: "Shoes" },
                  { value: "furniture", label: "Furniture" },
                  { value: "electronics", label: "Electronics" },
                ]}
              />
            </div>
          </div>
          <div className="flex_group">
            <div className="input_group">
              <label htmlFor="">
                Price($)<span className="astericks">*</span>
              </label>
              <InputField
                inputType="number"
                full
                placeholder="Product Price e.g. 500"
              />
            </div>
            <div className="input_group">
              <label htmlFor="">
                Quantity<span className="astericks">*</span>
              </label>
              <InputField
                inputType="number"
                full
                placeholder="Quantity In Stock e.g. 100"
              />
            </div>
          </div>
          <div className="input_group">
            <label htmlFor="">
              Description<span className="astericks">*</span>
            </label>
            <TextArea full placeholder="Product Name" />
          </div>
          <br />
          <Button text="Update Product" full primary />
        </Form>
      </Container>
    </DashboardLayout>
  );
};

export default ProductDetails;

const Container = styled.div`
  hr {
    margin: 1rem 0;
  }

  .details_group {
    display: flex;
    gap: 1rem;

    h1,
    h2,
    h3 {
      font-weight: bold;
    }

    a {
      color: blue;
      text-decoration: underline;
    }

    img {
      width: 300px;
      height: max-content;

      @media screen and (max-width: 425px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 425px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .flex_group {
    width: 100%;
    display: flex;
    gap: 1rem;
  }
`;

const Form = styled.form`
  margin: 2rem 0;
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  .flex_group {
    width: 100%;
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 425px) {
      flex-direction: column;
      gap: 0;
    }
  }

  .input_group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1rem;
    font-weight: 500;
  }

  .astericks {
    color: red;
  }
`;
