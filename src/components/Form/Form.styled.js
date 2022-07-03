import styled from "styled-components";

import {Container} from "../helpers/Container";

export const StyledForm = styled.div`
  margin: 0 auto;
  color: #fff;
  background-color: #161314;
  padding: 40px 15px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 300;

  h3 {
    font-family: "Cormorant", serif;
    font-size: 22px;
    font-weight: 600;
  }
  p {
    margin-top: 16px;
    margin-bottom: 14px;
  }
  form {
    max-width: 530px;
    @media (min-width: 1024px) {
      width: 530px;
    }
  }
  button {
    background-color: #826a45;
    color: #fff;
    font-size: 10px;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 1.2px;
    padding: 8px 18px;
  }

  button:disabled {
    background-color: #777;
    cursor: not-allowed;
  }
`;

export const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputLayoutDiv = styled.div`
  @media (min-width: 572px) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
`;

export const FormContainer = styled(Container)`
  @media (min-width: 1024px) {
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
  }
`;
