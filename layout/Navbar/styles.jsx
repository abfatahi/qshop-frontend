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

  img {
    width: 200px;
    height: 80%;
  }

  .nav_menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  a {
    font-weight: 300;
    font-size: 1.2rem;

    :hover {
      color: #bdbdbd;
    }
  }
`;
