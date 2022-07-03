import logo from "../../images/numen.png";
import {StyledBackdrop} from "../../global-styles/modal";

import {StyledLogo, StyledMessage, StyledButton, StyledModalAge} from "./styles";

const ModalAge = ({onConfirm}) => {
  return (
    <>
      <StyledModalAge>
        <StyledLogo src={logo} />
        <StyledMessage>Debes ser mayor de 18 para continuar</StyledMessage>
        <StyledButton>NO TENGO 18 AUN</StyledButton>
        <StyledButton main onClick={onConfirm}>
          SOY MAYOR DE 18, VAMOS
        </StyledButton>
      </StyledModalAge>
      <StyledBackdrop />
    </>
  );
};

export default ModalAge;
