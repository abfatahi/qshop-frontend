import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 400px;
  cursor: pointer;
  background: url("/assets/main_hero.jpeg") no-repeat;
  background-size: 100%;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 425px){
    height: 150px;
    border-radius: 0;
  }
`;

