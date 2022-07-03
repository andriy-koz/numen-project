import Button from "./Button";
import {StyledLinks} from "./styles";

export const myList = [
  {value: "NUESTROS VINOS", id: "#wines"},
  {value: "NUESTRAS BODEGAS", id: "#warehouse"},
  {value: "MEMBRESÍA", id: "#form"},
  {value: "CONTACTO", id: "#footer"},
];

const Links = (props) => {
  return (
    <StyledLinks>
      {myList.map((item, index) => (
        <a key={index} href={item.id}>
          {item.value}
        </a>
      ))}
      <Button counter={props.counter} type="cart" onClick={props.onClick} />
    </StyledLinks>
  );
};

export default Links;
