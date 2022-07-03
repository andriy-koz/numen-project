import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  width: 400px;
  height: 200px;
  background-color: red;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 100px auto 0;
  padding: 20px 5px;
  z-index: 999999999;
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.6;
  z-index: 9999999;
`;
