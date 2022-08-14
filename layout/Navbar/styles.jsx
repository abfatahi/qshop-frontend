import styled from "styled-components";

export default styled.div`
  background: #fff;
  padding: 20px 180px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  border-bottom: 1px solid #bdbdbd4a;

  @media screen and (max-width: 1200px) {
    padding: 20px 32px;
  }

  @media screen and (max-width: 425px) {
    height: 100px;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 200px;
    height: 80%;
    object-fit: fill;
    cursor: pointer;
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
      width: 150px;
      margin-right: 0;
    }

    @media screen and (max-width: 425px) {
      height: 100%;
      object-fit: contain;
    }
  }

  .searchbar {
    margin-left: 3rem;

    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }

  .nav_menu {
    display: flex;
    align-items: center;
    gap: 2rem;
    row-gap: 0.25rem;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hamburger {
    position: absolute;
    top: 16px;
    right: 24px;
    font-size: 1.3rem;
    cursor: pointer;

    @media screen and (min-width: 769px) {
      display: none;
    }
  }

  a {
    font-weight: 300;
    font-size: 1.2rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.1rem;
    }

    :hover {
      color: #bdbdbd;
    }
  }
`;
