import {StyledBackdrop} from "../../global-styles/modal";
import Button from "../Button";

import {StyledModalCart, ButtonsContainer, StyledImg, StyledHeader, StyledInfo} from "./styles";

const ModalCart = ({selectedWine, addHandler, cancelHandler}) => {
  return (
    <>
      <StyledModalCart>
        <StyledHeader>
          <StyledInfo>
            <h3>{selectedWine.name}</h3>
            <p>
              $<span>{selectedWine.price}</span>
            </p>
          </StyledInfo>
          <StyledImg alt="" src={selectedWine.img} />
        </StyledHeader>
        <ButtonsContainer>
          <Button red onClick={addHandler}>
            Agregar
          </Button>
          <Button onClick={cancelHandler}>Cancelar</Button>
        </ButtonsContainer>
      </StyledModalCart>
      <StyledBackdrop />
    </>
  );
};

export default ModalCart;
