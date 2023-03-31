import { Select } from "antd";
import React from "react";
import styled from "styled-components";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Button, InputField, TextArea } from "../../../reusables";

const AddNewProduct = () => {
  return (
    <DashboardLayout>
      <h1>Add New Products</h1> <br />
      <p>Complete the fields below to create a new product</p>
      <Form>
        <div className="flex_group">
          <div className="input_group">
            <label htmlFor="">
              Name<span className="astericks">*</span>
            </label>
            <InputField full placeholder="Name e.g. Nike Airforce 1 Sneakers" />
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
        <div className="input_group">
          <label htmlFor="">
            Product Image<span className="astericks">*</span>
          </label>
          <InputField inputType="file" full />
        </div>
        <br />
        <Button text="Create Product" full primary />
      </Form>
    </DashboardLayout>
  );
};

export default AddNewProduct;

const Form = styled.form`
  margin: 2rem 0;
  width: 50%;

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
