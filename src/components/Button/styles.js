import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => (props.red ? "#7e1b22" : "none")};
  color: #fff;
  z-index: 99;
  border: 1px solid ${(props) => (props.red ? "#7e1b22" : "#fff")};
  padding: 10px 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.red ? "#826a45" : "#fff")};
    color: ${(props) => (props.red ? "#fff" : "#111")};
    border: 1px solid ${(props) => (props.red ? "#826a45" : "#fff")};
  }
`;
