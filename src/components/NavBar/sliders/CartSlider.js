import React from "react";
import styled from "styled-components";

import {StyledSlider} from "./StyledSlider";

const StyledCart = styled(StyledSlider)`
  p {
    font-size: 16px;
    color: ${(props) => props.theme.color.tertiary};
    font-weight: 500;
  }
  @media (min-width: 768px) {
    margin-top: 132px;
  }
`;

const CartSlider = (props) => {
  return (
    <StyledCart opened={props.opened}>
      <p>{props.counter} vinos agregados</p>
    </StyledCart>
  );
};

export default CartSlider;
