import styled from "styled-components";

export const StyledSlider = styled.div`
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 64px;
  background-color: rgba(43, 38, 40, 0.9);
  padding: 25px;
  width: 180px;
  border-radius: 8px;
  transition: all 300ms;
  transform: translateX(${({open}) => (open ? 0 : 100)}%);
  opacity: ${({open}) => (open ? 1 : 0)};
  pointer-events: ${({open}) => (open ? "auto" : "none")};
  visibility: ${({open}) => (open ? "visible" : "hidden")};
  @media (min-width: 768px) {
    width: 600px;
  }
`;

export const StyledCart = styled(StyledSlider)`
  p {
    font-size: 16px;
    color: ${(props) => props.theme.color.complementary};
    font-weight: 500;
  }
`;

export const StyledUser = styled(StyledSlider)`
  img {
    width: 48px;
    height: 48px;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme.color.complementary};
    font-weight: 500;
  }
`;

export const StyledMenu = styled(StyledSlider)`
  color: ${(props) => props.theme.color.complementary};
  display: grid;
  gap: 20px;
  a {
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
`;
