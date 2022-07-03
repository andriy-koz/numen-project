import styled from "styled-components";

import closeIcon from "../../images/close.svg";
import searchIcon from "../../images/search.svg";
import userIcon from "../../images/user.svg";
import menuIcon from "../../images/menu.svg";
import cartIcon from "../../images/cart.svg";

import {Container} from "./Container.styled";

const StyledOpenMenu = styled.img`
  margin-right: -24px;
  transition: all 300ms;
  opacity: ${({opened}) => (opened ? 0 : 1)};
  transform: rotate(${({opened}) => (opened ? -90 : 0)}deg);
`;
const StyledCloseMenu = styled.img`
  transition: all 300ms;
  opacity: ${({opened}) => (opened ? 1 : 0)};
  transform: rotate(${({opened}) => (opened ? -90 : 0)}deg);
`;

// Contador en el botón del carrito
const StyledCounterDisplay = styled.div`
  position: absolute;
  top: -4px;
  right: -3px;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }
`;

const Button = (props) => {
  // Los ternarios tan anidados no son una buena idea, mejor abstraerlo en una función
  // getIcon y alli usar if statements
  const openIcon =
    props.type === "search"
      ? searchIcon
      : props.type === "user"
      ? userIcon
      : props.type === "menu"
      ? menuIcon
      : props.type === "cart"
      ? cartIcon
      : null;

  return (
    <Container menu={props.type === "menu"} onClick={props.onClick}>
      <StyledOpenMenu alt="" opened={props.opened} src={openIcon} />
      <StyledCloseMenu alt="" opened={props.opened} src={closeIcon} />
      {props.type === "cart" && (
        <StyledCounterDisplay>
          <p>{props.counter}</p>
        </StyledCounterDisplay>
      )}
    </Container>
  );
};

export default Button;
