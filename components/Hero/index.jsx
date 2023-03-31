import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import {
  GiRunningShoe,
  GiClothes,
  GiWoodenChair,
  GiPocketRadio,
  GiGamepad,
  GiTablet,
  GiLaptop,
} from "react-icons/gi";
import Container, { ImageHero, CategoriesWrapper } from "./Hero.styles";

const Hero = () => {
  return (
    <Container>
      <CategoriesWrapper>
        <Link href="/products/shoes">
          <span>
            <FaApple />
            Supermarket
          </span>
        </Link>
        <Link href="/products/shoes">
          <span>
            <GiRunningShoe />
            Shoes
          </span>
        </Link>
        <Link href="/products/shoes">
          <span>
            <GiClothes />
            Clothes
          </span>
        </Link>
        <Link href="/products/shoes">
          <span>
            <GiWoodenChair />
            Furniture
          </span>
        </Link>
        <Link href="/products/shoes">
          <span>
            <GiLaptop />
            Computers
          </span>
        </Link>
        <Link href="/products/shoes">
          <span>
            <GiTablet />
            Phones&nbsp;&&nbsp;Tablets
          </span>
        </Link>
        <Link href="/products/shoes">
          <span>
            <GiPocketRadio />
            Electronics
          </span>
        </Link>
        <Link href="/products/shoes">
          <span>
            <GiGamepad />
            Other&nbsp;categories
          </span>
        </Link>
      </CategoriesWrapper>
      <ImageHero />
    </Container>
  );
};

export default Hero;
