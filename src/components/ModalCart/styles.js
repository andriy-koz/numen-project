import styled from "styled-components";

import {StyledModal} from "../../global-styles/modal";

export const StyledModalCart = styled(StyledModal)`
  width: auto;
  height: auto;
  background-color: #2b2628;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
  padding-top: 32px;
  border-radius: 12px;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledInfo = styled.section`
  color: ${({theme}) => theme.color.complementary};
  display: flex;
  flex-direction: column;
  gap: 15px;
  h3 {
    font-size: 20px;
  }
  p {
    font-style: normal;
    font-size: 16px;
  }
  span {
    font-size: 18px;
    font-style: italic;
  }
`;

export const StyledImg = styled.img`
  width: 128px;
  height: 200px;
  object-fit: cover;
`;

export const ButtonsContainer = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 15px;
`;
