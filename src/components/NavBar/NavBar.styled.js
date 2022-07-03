import styled from "styled-components";

export const StyledNavBar = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.color.primary};
  height: auto;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  @media (min-width: 500px) {
    margin-right: 30px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width: 120px;
  height: 100px;
  padding-top: 13px;
  display: flex;
  align-self: center;
  padding-bottom: 15px;
`;
