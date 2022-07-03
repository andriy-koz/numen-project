import React from "react";

import img from "../../images/hero.jpg";

import {StyledOverlay, StyledHero, StyledText, ButtonsContainer} from "./Hero.styled";
import Button from "./Button";

const Hero = () => {
  return (
    <StyledHero img={img}>
      <StyledOverlay />
      <StyledText>Selección de vinos de las mejores bodegas de mendoza.</StyledText>
      <ButtonsContainer>
        {/* No es bueno añadir props con el mismo nombre que default props */}
        <Button content="COMPRAR" style={1} />
        <Button content="SABER MAS" style={2} />
      </ButtonsContainer>
    </StyledHero>
  );
};

export default Hero;
