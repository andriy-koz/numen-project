import styled from "styled-components";

export const StyledSlider = styled.div`
  z-index: 10000;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 52px;
  background-color: ${(props) => props.theme.color.secondary};
  padding: 25px;
  width: 180px;
  border-radius: 8px;
  transition: all 300ms;
  transform: translateX(${({opened}) => (opened ? 0 : 100)}%);
  opacity: ${({opened}) => (opened ? 1 : 0)};
  pointer-events: ${({opened}) => (opened ? "auto" : "none")};
  visibility: ${({opened}) => (opened ? "visible" : "hidden")}; ;
`;
