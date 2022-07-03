import React from "react";
import styled from "styled-components";

import {myList} from "../Links";

import {StyledSlider} from "./StyledSlider";

const StyledMenu = styled(StyledSlider)`
  div {
    color: ${(props) => props.theme.color.tertiary};
    display: grid;
    gap: 20px;
    a {
      color: #fff;
    }
  }
`;

const MenuSlider = (props) => {
  return (
    <StyledMenu opened={props.opened}>
      {/* ¿Por qué este div? */}
      <div>
        {myList.map((link, index) => (
          <a key={index} href={link[1]}>
            {link[0]}
          </a>
        ))}
      </div>
    </StyledMenu>
  );
};

export default MenuSlider;
