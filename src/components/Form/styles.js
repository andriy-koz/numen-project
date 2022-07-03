import styled from "styled-components";

export const StyledForm = styled.div`
  margin: 20px auto 0;
  color: #fff;
  background-color: #161314;
  padding: 40px 15px;
  font-size: 12px;

  span {
    color: #7e1b22;
  }

  p {
    font-size: 20px;
    margin-top: 16px;
    margin-bottom: 14px;
  }

  form {
    max-width: 530px;
    @media (min-width: 1024px) {
      width: 530px;
    }
    @media (max-width: 572px) {
      width: 92%;
    }
  }

  button {
    background-color: #826a45;
    border-color: #826a45;
    @media (max-width: 572px) {
      width: 100%;
      border-radius: 8px;
      padding: 12px 0;
    }
  }

  button:hover {
    filter: brightness(1.1);
  }
`;

export const LayoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const InputLayoutDiv = styled.div`
  @media (min-width: 572px) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (min-width: 1024px) {
    max-width: 1024px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    font-size: 18px;
    color: #fff;
    padding: 12px 14px;
    background-color: #2b2628;
    border: 1px solid ${(props) => (props.hasError ? "#b21e35" : "#fff")};
    border-radius: 4px;
    transition: all 0.5s;
  }

  input:focus {
    outline: none;
    background-color: #161314;
  }

  input:hover {
    cursor: text;
  }

  p {
    font-size: 16px;
    color: #b21e35;
    opacity: ${(props) => (props.hasError ? 1 : 0)};
    margin-top: 4px;
    margin-bottom: 20px;
  }
`;
