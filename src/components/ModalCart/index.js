import {StyledBackdrop} from "../../global-styles/modal";
import Button from "../Button";

import {StyledModalCart, ButtonsContainer} from "./styles";

const ModalCart = ({name, price}) => {
  return (
    <>
      <StyledModalCart>
        <h3>{name}</h3>
        <p>{price}</p>
        <ButtonsContainer>
          <Button red>Agregar</Button>
          <Button>Cancelar</Button>
        </ButtonsContainer>
      </StyledModalCart>
      <StyledBackdrop />
    </>
  );
};

export default ModalCart;
