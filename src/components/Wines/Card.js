import wine1 from "../../images/bottles/wine1.webp";
import wine2 from "../../images/bottles/wine2.webp";
import wine3 from "../../images/bottles/wine3.webp";
import wine4 from "../../images/bottles/wine4.webp";
import Button from "../Button";

import {StyledCard} from "./styles";

export const wines = [wine1, wine2, wine3, wine4];

const Card = ({name, price, id, modalHandler}) => {
  return (
    <StyledCard>
      <img alt={name} className="lazyload" data-src={wines[id - 1]} />
      <h3>{name}</h3>
      <p>
        <span>$</span>
        {price}
      </p>
      <Button red onClick={() => modalHandler({name, price, img: wines[id - 1]})}>
        Agregar
      </Button>
    </StyledCard>
  );
};

export default Card;
