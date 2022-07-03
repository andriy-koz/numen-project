import styled from "styled-components";

export const StyledModalAge = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 400px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
  margin: 100px auto 0;
  padding: 20px 5px;
  z-index: 9999;
`;

export const StyledLogo = styled.img`
  height: 120px;
`;

export const StyledMessage = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
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

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0.6;
  z-index: 999;
`;
