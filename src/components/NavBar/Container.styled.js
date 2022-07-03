import styled from "styled-components";

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
