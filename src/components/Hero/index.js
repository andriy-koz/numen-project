import img from "../../images/hero.jpg";
import Button from "../Button";

import {StyledOverlay, StyledHero, StyledText, ButtonsContainer} from "./styles";

const Hero = () => {
  return (
    <StyledHero img={img}>
      <StyledOverlay />
      <StyledText>Selección de vinos de las mejores bodegas de Mendoza</StyledText>
      <ButtonsContainer>
        <Button red>Comprar</Button>
        <Button>Saber mas</Button>
      </ButtonsContainer>
    </StyledHero>
  );
};

export default Hero;
