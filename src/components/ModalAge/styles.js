import styled from "styled-components";

import {StyledModal} from "../../global-styles/modal";

export const StyledModalAge = styled(StyledModal)`
  width: auto;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
`;

export const StyledLogo = styled.img`
  width: 200px;
  height: 120px;
  object-fit: contain;
`;

export const StyledMessage = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
`;

export const StyledButton = styled.button`
  background: ${(props) => (props.main ? "#826A45" : "none")};
  color: ${(props) => (props.main ? "#fff" : "#111")};
  border: 1px solid ${(props) => (props.main ? "#826A45" : "#111")};
  padding: 10px 20px;
  letter-spacing: 1.6px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
