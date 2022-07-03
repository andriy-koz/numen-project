import styled from "styled-components";

export const StyledHero = styled.div`
  height: 430px;
  background-image: url(${({img}) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
  z-index: 0;
`;

export const StyledText = styled.p`
  position: relative;
  padding-top: 120px;
  text-align: center;
  color: ${(props) => props.theme.color.tertiary};
  font-size: 38px;
  font-weight: 800;
  max-width: 500px;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
