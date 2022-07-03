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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
`;
