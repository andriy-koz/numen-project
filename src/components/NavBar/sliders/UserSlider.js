import React from "react";
import styled from "styled-components";

import userIcon from "../../../images/user.svg";

import {StyledSlider} from "./StyledSlider";

const StyledUser = styled(StyledSlider)`
  img {
    width: 48px;
    height: 48px;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme.color.tertiary};
    font-weight: 500;
  }
`;

const UserSlider = (props) => {
  return (
    <StyledUser opened={props.opened}>
      <img alt="" src={userIcon} />
      <p>Perfil</p>
    </StyledUser>
  );
};

export default UserSlider;
