import { Table } from "antd";
import React from "react";
import { products } from "../../../reusables/products";
import { columns } from "../../../reusables/table";
import DashboardLayout from "../../../layout/DashboardLayout";
import styled from "styled-components";
import { Button } from "../../../reusables";
import Link from "next/link";

const Products = () => {
  return (
    <DashboardLayout>
      <HeaderWrapper>
        <h1>Products</h1>
        <Link href={"/admin/products/addNew"}>
          <Button primary text="Add New Products" />
        </Link>
      </HeaderWrapper>
      <br />
      <Table
        columns={columns}
        dataSource={products}
        scroll={{ x: "max-content" }}
      />
    </DashboardLayout>
  );
};

export default Products;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;
