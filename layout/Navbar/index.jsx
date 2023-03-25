/* eslint-disable @next/next/no-img-element */
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/reducers/cart";
import { Searchbar } from "../../reusables";
import { AppRoutes } from "../../utils/constants";
import Container from "./styles";

const Navbar = ({ toggleSideBar }) => {
  const shopMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link href={AppRoutes.products}>All Products</Link>,
        },
        {
          key: "5",
          label: <Link href={AppRoutes.productShoes}>Shoes</Link>,
        },
        {
          key: "3",
          label: <Link href={AppRoutes.productElectronics}>Electronics</Link>,
        },
        {
          key: "4",
          label: <Link href={AppRoutes.productFurniture}>Furniture</Link>,
        },
        {
          key: "2",
          label: <Link href={AppRoutes.productClothes}>Clothes</Link>,
        },
        {
          key: "6",
          label: <Link href={AppRoutes.productOthers}>Others</Link>,
        },
      ]}
    />
  );
  const accountMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link href={AppRoutes.cart}>Cart</Link>,
        },
        {
          key: "2",
          label: <Link href={AppRoutes.checkout}>Checkout</Link>,
        },
        {
          key: "3",
          label: <Link href={AppRoutes.account}>My Account</Link>,
        },
      ]}
    />
  );
  const { yourCart } = useSelector(cartSelector);
  return (
    <>
      <Container>
        <Link href={AppRoutes.home}>
          <img src="/logo.png" alt="logo" />
        </Link>
        <div className="nav_menu">
          <Link href={AppRoutes.home}>Home</Link>
          <Link href={AppRoutes.about}>About</Link>
          <Dropdown overlay={shopMenu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>Shop</Space>
            </a>
          </Dropdown>
          <Dropdown overlay={accountMenu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>My Account</Space>
            </a>
          </Dropdown>
          <div className="cart_group">
            <Link href={AppRoutes.cart}>Cart</Link>
            {yourCart?.length > 0 && (
              <div className="indicator">{yourCart?.length}</div>
            )}
          </div>
          <Link href={AppRoutes.blog}>Blog</Link>
          <Link href={AppRoutes.contact}>Contact</Link>
        </div>
        <Searchbar className="searchbar" />
        <FaBars className="hamburger" onClick={toggleSideBar} />
      </Container>
    </>
  );
};

export default Navbar;
