import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
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
    color: #b21e35;
    opacity: ${(props) => (props.hasError ? 1 : 0)};
    margin-top: 4px;
    margin-bottom: 20px;
  }
`;
