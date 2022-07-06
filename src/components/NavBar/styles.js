import styled from "styled-components";

import logo from "../../images/numen.webp";

export const StyledInput = styled.input`
  font-family: ${(props) => props.theme.font}, sans-serif;
  font-weight: 500;
  padding: 0 5px;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: all 200ms;
  opacity: ${({open}) => (open ? 1 : 0)};
  pointer-events: ${({open}) => (open ? "auto" : "none")};
  transform: scale(${({open}) => (open ? 1 : 0.5)});
  @media (min-width: 768px) {
    margin-right: ${({open}) => (open ? 0 : -168)}px;
  }
  @media (max-width: 475px) {
    height: 32px;
    width: 250px;
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 999999;
  }
`;

export const NavContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999999;
  background-color: rgba(22, 19, 20, 0.87);
  height: auto;
  margin: auto;
  padding: 0 20px;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledImg = styled.a`
  background-image: ${`url(${logo})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 80px;
  height: 64px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    &:hover img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(7%) saturate(0%) hue-rotate(358deg)
        brightness(111%) contrast(106%);
      cursor: pointer;
    }
    display: ${(props) => (props.menu ? "none" : "flex")};
  }
`;

export const StyledLinks = styled.div`
  order: 3;
  display: flex;
  gap: 20px;
  align-items: center;
  list-style: none;
  color: ${(props) => props.theme.color.complementary};
  a {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    color: #7e1b22;
  }
`;

export const StyledOpenMenu = styled.img`
  width: 32px;
  height: 32px;
  margin-right: -32px;
  transition: all 300ms;
  opacity: ${({open}) => (open ? 0 : 1)};
  transform: rotate(${({open}) => (open ? -90 : 0)}deg);
`;
export const StyledCloseMenu = styled.img`
  width: 32px;
  height: 32px;
  transition: all 300ms;
  opacity: ${({open}) => (open ? 1 : 0)};
  transform: rotate(${({open}) => (open ? -90 : 0)}deg);
`;

// Contador en el botón del carrito
export const StyledCounterDisplay = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 18px;
  height: 18px;
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
