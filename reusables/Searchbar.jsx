import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import styled from 'styled-components';
// import { AshSearchIcon } from '../assets/icons';

const Searchbar = ({ onTextChange }) => (
  <SearchBar>
    <form action=''>
      <BiSearchAlt className='icon' />
      <input type='text' placeholder='Search' onChange={onTextChange} />
    </form>
  </SearchBar>
);

const SearchBar = styled.div`
  position: relative;
  width: 100%;
  form {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.5rem;

    .icon {
      position: absolute;
      top: 0.4em;
      right: 0.3em;
      transfrom: translateX(-50%);
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      color: #999;

      :hover {
        transform: scale(1.1);
      }
    }

    input {
      background: #fff;
      border: 1px solid #e5e5e5;
      padding: 1em 3.5em 1em 1em;
      height: 100%;
      border-radius: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 0.9em;
      letter-spacing: 0.018em;
      color: #000000;
      // max-width: 365px;
      width: 100%;
      :focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }
    }
  }
`;

export default Searchbar;
