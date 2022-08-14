import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { AppRoutes } from "../utils/constants";

const Sidebar = ({ showSidebar, handleSidebarClose }) => {
  return (
    <Container showSidebar={showSidebar}>
      <div className="nav_wrapper">
        <CancelButton onClick={handleSidebarClose} />
        {[
          { text: "Home", link: AppRoutes.home },
          { text: "About", link: AppRoutes.about },
          { text: "Shop", link: AppRoutes.home },
          { text: "My Account", link: AppRoutes.account },
          { text: "Cart", link: AppRoutes.cart },
          { text: "Checkout", link: AppRoutes.checkout },
          { text: "Blog", link: AppRoutes.about },
          { text: "Contact", link: AppRoutes.contact },
        ].map((item, index) => {
          return (
            <NavItem key={index} href={item.link}>
              {item.text}
            </NavItem>
          );
        })}
      </div>
      <div className="overlay" onClick={handleSidebarClose} />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh !important;
  width: 100%;
  background: transparent;
  display: flex;
  z-index: 100;

  .nav_wrapper {
    position: absolute;
    right: 0;
    top: 0;
    background: #262525;
    display: flex;
    width: 250px;
    flex-direction: column;
    row-gap: 1rem;
    padding: 5rem 2rem 0;
    height: 100vh;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: calc(100vw - 250px);
    background: linear-gradient(
      99.11deg,
      rgba(49, 66, 79, 0.71) 0.83%,
      rgba(10, 11, 12, 0.64) 100%
    );
  }

  @media screen and (min-width: 769px) {
    display: ${({ showSidebar }) => (showSidebar ? "flex" : "none")};
  }
`;

const NavItem = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;

  :hover {
    color: #0ae73f;
  }
`;

const CancelButton = styled(FaTimes)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;

  :hover {
    transform: scale(1.1);
  }
`;
