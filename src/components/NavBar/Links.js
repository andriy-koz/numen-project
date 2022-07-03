import React from "react";
import styled from "styled-components";

import Button from "./Button";

export const myList = [
  // Un array de objetos es mejor que un array de arrays
  ["NUESTROS VINOS", "#vinos"],
  ["NUESTRAS BODEGAS", "#bodegas"],
  ["MEMBRESÍA", "#form"],
  ["CONTACTO", "#footer"],
];

const StyledLinks = styled.div`
  margin: 15px 0 15px;
  order: 3;
  display: none;
  list-style: none;
  color: ${(props) => props.theme.color.tertiary};
  a {
    color: #fff;
  }
  a:hover {
    cursor: pointer;
    color: white;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Links = (props) => {
  return (
    <StyledLinks>
      {myList.map((link, index) => (
        <a key={index} href={link[1]}>
          {link[0]}
        </a>
      ))}
      <Button counter={props.counter} type="cart" onClick={props.onClick} />
    </StyledLinks>
  );
};

export default Links;
