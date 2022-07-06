import img from "../../images/hero.webp";
import Button from "../Button";

import {StyledOverlay, StyledHero, StyledText, ButtonsContainer} from "./styles";

const Hero = () => {
  return (
    <StyledHero img={img}>
      <StyledOverlay />
      <StyledText>Selección de vinos de las mejores bodegas de Mendoza</StyledText>
      <ButtonsContainer>
        <Button red href="#wines">
          Comprar
        </Button>
        <Button href="#warehouse">Saber mas</Button>
      </ButtonsContainer>
    </StyledHero>
  );
};

export default Hero;
