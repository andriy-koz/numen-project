import wine1 from "../../images/bottles/wine1.png";
import wine2 from "../../images/bottles/wine2.png";
import wine3 from "../../images/bottles/wine3.png";
import wine4 from "../../images/bottles/wine4.png";
import Button from "../Button";

import {StyledCard} from "./styles";

const wines = [wine1, wine2, wine3, wine4];

const Card = ({name, price, id, modalHandler}) => {
  return (
    <StyledCard>
      <img alt={name} src={wines[id - 1]} />
      <h3>{name}</h3>
      <p>
        <span>$</span>
        {price}
      </p>
      <Button red onClick={() => modalHandler({name, price})}>
        Agregar
      </Button>
    </StyledCard>
  );
};

export default Card;
